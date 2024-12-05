'use client';
import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Modal, Button, Checkbox } from "@mui/material";
import CustomSlide from "@/components/common/CustomSlide";
import PersonSelector from "@/components/common/PersonSelector";
import StoryFinal from "@/components/story/StoryFinal";
import { smoothOutput } from "@/constanst/helpers";
import OfferSelector from '@/components/OfferSelector';
import PageHeader from '@/components/common/PageHeader';
import { ThemeSwitcher } from '@/components/services/ThemeSwitcher';
import { space } from 'postcss/lib/list';
import Sidebar from '../components/common/Sidebar';

const link = 'https://squid-app-ckcq2.ondigitalocean.app';

const CreateStory = () => {
  const [person, setPerson] = useState("");
  const [story, setStory] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const [steps, setSteps] = useState(0);
  const [loading, setLoading] = useState(null);
  const [model, setModel] = useState('gpt');
  const [module, setModule] = useState([]);
  const [offer, setOffer] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [callToAction, setCallToAction] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [savedChats, setSavedChats] = useState([]);
  const [selectedChats, setSelectedChats] = useState([]);



  const handleRowClick = (row) => {
    setSelectedRow(row);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRow(null);
  };

  const handleCheckboxChange = (chatIndex) => {
    setSelectedChats((prevSelectedChats) =>
      prevSelectedChats.includes(chatIndex)
        ? prevSelectedChats.filter((index) => index !== chatIndex)
        : [...prevSelectedChats, chatIndex]
    );
  };

  const handleDeleteSelected = () => {
    const updatedChats = savedChats.filter((_, index) => !selectedChats.includes(index));
    localStorage.setItem('chats', JSON.stringify(updatedChats));
    setSavedChats(updatedChats);
    setSelectedChats([]);
  };

  const previousStepHandler = () => {
    setSteps(null);
    setTimeout(() => setSteps(steps - 1), 400);
  };

  async function getStream(data, onData) {
    let headers = {
      'Content-Type': 'application/json',
    };

    let response = await fetch(`${link}/tests/stream`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ ...data })
    });

    if (!response.ok) {
      console.error('Network response was not ok');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;

      if (value) {
        const chunk = decoder.decode(value, { stream: true });
        if (onData && typeof onData === 'function') {
          await smoothOutput(chunk, onData);
        }
      }
    }
  }
  const getResult = async () => {
    const existingChats = JSON.parse(localStorage.getItem('chats')) || [];
    const starterString = person
      ? `Name: ${person?.Name};\nAge: ${person?.Age};\nGender: ${person?.Gender};\nPlace of residence: ${person?.["Place of residence"]};\nJob title: ${person?.["Job title"]};\n`
      : "";

    const personData = selectedValues.reduce((acc, curr) => acc + `${curr}: ${person?.[curr]};\n`, starterString);

    const additionalInfoFormatted = additionalInfo || "Free eBook: »Boost Your Focus and Productivity in Just 25 Minutes«\nTeaches how to implement the Pomodoro Technique to tackle coaching preparation, client follow-ups, and self-improvement tasks effectively.";
    const callToActionFormatted = callToAction || "Get the free eBook";

    const prompt = `
      Create a landing page based on the following details:
      Use the provided persona: ${personData}
      Include additional info: ${additionalInfoFormatted}
      Call to Action: ${callToActionFormatted}
    `;

    const data = { prompt, model };

    try {
      setLoading(true);
      await getStream(data, (chunk) => {
        setStory((prev) => {
          const updatedStory = prev + chunk;
          localStorage.setItem('story', updatedStory);
          return updatedStory;
        });
      });
      const storedMessage = localStorage.getItem('story') || story;
      const chatData = {
        title: person?.Name || "No Name",
        chatTime: new Date().toISOString(),
        chat: [{ message: storedMessage }],
      };

      const updatedChats = [...existingChats, chatData];
      localStorage.setItem('chats', JSON.stringify(updatedChats));
      setSavedChats(updatedChats);

      setLoading(false);
    } catch (e) {
      console.log("Error:", e);
      setLoading(false);
    }
  };



  const theme = localStorage.getItem("theme");

  useEffect(() => {
    const existingChats = JSON.parse(localStorage.getItem('chats')) || [];
    setSavedChats(existingChats);
  }, []);


  return (
    <Container>
      <Container sx={{ display: 'flex', flexDirection: 'row-reverse', marginTop: '30px' }}>
        <img src="@assets/images/kivi-logo.png" alt="" />
        <ThemeSwitcher />
      </Container>

      <Sidebar setSteps={setSteps} />
      <CustomSlide condition={steps === 0}>
        <PersonSelector
          {...{
            person,
            setPerson,
            selectedValues,
            setSelectedValues,
            steps,
            setSteps,
            getResult,
          }}
        />
      </CustomSlide>
      <CustomSlide condition={steps === 1}>
        <OfferSelector
          {...{
            offer,
            setOffer,
            model,
            setModel,
            module,
            setModule,
            steps,
            setSteps,
            loading,
            setLoading,
            getResult,
            additionalInfo,
            setAdditionalInfo,
            callToAction,
            setCallToAction,
          }}
        />
      </CustomSlide>
      <CustomSlide condition={steps === 2}>
        <StoryFinal {...{ steps, setSteps, loading, story, setStory, person, setLoading }} />
      </CustomSlide>
      <CustomSlide condition={steps === 3}>
        <Box sx={{ mt: 4 }}>
          <PageHeader
            header={"Results chats"}
            fullWidth
          />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2} align='center'>Title</TableCell>
                  <TableCell>Created at</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {savedChats.map((chat, index) => (
                  <TableRow
                    key={index}
                    hover
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleRowClick(chat)}
                  >
                    <TableCell>
                      <Checkbox
                        checked={selectedChats.includes(index)}
                        onChange={() => handleCheckboxChange(index)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TableCell>
                    <TableCell>{chat.title}</TableCell>
                    <TableCell>{new Date(chat.chatTime).toLocaleString('en-US', { hour12: true })}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

          </TableContainer>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleDeleteSelected}
            disabled={selectedChats.length === 0}
            fullWidth
            sx={{ marginTop: 5 }}
          >
            Delete Selected
          </Button>
        </Box>

        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: theme === "dark" ? "white" : "black",
              color: theme === "dark" ? "black" : "white",
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Box sx={{ maxHeight: 200, overflowY: "auto", mb: 2 }}>
              {selectedRow?.chat?.length > 0 ? (
                selectedRow.chat.map((messageObj, index) => (
                  messageObj.message ? (
                    <Typography key={index} variant="body2" sx={{ whiteSpace: 'pre-line', marginBottom: 1 }}>
                      {messageObj.message}
                    </Typography>
                  ) : null
                ))
              ) : (
                <Typography variant="body2">No messages</Typography>
              )}
            </Box>

            <Button variant="contained" color="primary" onClick={handleCloseModal}>
              Close
            </Button>
          </Box>
        </Modal>

      </CustomSlide>
    </Container>
  );
};

export default CreateStory;
