import React from 'react';
import PageHeader from "@/components/common/PageHeader";
import { Box, FormControl, FormLabel, TextField } from "@mui/material";
import CustomSelect from "@/components/common/CustomSelect";
import { toast } from "react-toastify";
import { colors } from "@/constanst/colors";
import GeneratedContentButtons from "@/components/common/GeneratedContentButtons";

const OfferSelector = ({
  offer,
  setOffer,
  module = [],
  setModule,
  steps,
  setSteps,
  loading,
  setLoading,
  getResult,
  model,
  setModel,
  additionalInfo,
  setAdditionalInfo,
  callToAction,
  setCallToAction,
}) => {

  const previousStepHandler = () => {
    setSteps(null);
    setOffer('');
    setModule([]);
    setTimeout(() => setSteps(steps - 1), 400);
  };

  const localSubmit = async () => {
    if (!!offer.id && module.length < 1) {
      toast.warning('Please select Offer values');
    }
    setLoading(true);
    try {
      setSteps(null);
      setTimeout(() => setSteps(steps + 1), 350);
      await getResult();
      setLoading(false);
    } catch (e) {
      console.log("error: ", e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const aiOptions = [
    { value: "gpt", label: "Chat GPT" },
    { value: "claude", label: "Claude" },
  ];

  return (
    <Box
      sx={{
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <PageHeader
            header={"Create landing page"}
            fullWidth
          />
          <Box
            sx={{
              width: '13rem'
            }}
          >
            <CustomSelect
              value={model}
              disabled={loading}
              options={aiOptions}
              label='Choose Model'
              onChange={setModel}
            />
          </Box>
        </Box>
        <FormControl sx={{ width: 1 }}>
          <FormLabel sx={{ marginBottom: 1 }}>Additional information</FormLabel>
          <TextField
            variant="outlined"
            fullWidth
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            InputProps={{
              style: {
                backgroundColor: colors.whiteGrey,
                borderRadius: "4px",
                height: "100px",
              },
            }}
          />
          <FormLabel sx={{ marginBottom: 1, marginTop: 4 }}>Call to Action</FormLabel>
          <TextField
            variant="outlined"
            fullWidth
            value={callToAction}
            onChange={(e) => setCallToAction(e.target.value)}
            InputProps={{
              style: {
                backgroundColor: colors.whiteGrey,
                borderRadius: "4px",
              },
            }}
          />
        </FormControl>
      </Box>
      <GeneratedContentButtons
        loading={loading}
        primaryButtonDisabled={!!offer?.id && module.length < 1}
        primaryButtonHandler={localSubmit}
        primaryButtonText={'Next step'}
        secondaryButtonHandler={previousStepHandler}
        secondaryButtonText={'Previous step'}
      />
    </Box>
  );
};

export default OfferSelector;
