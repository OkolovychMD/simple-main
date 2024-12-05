import {
  Box,
  Button,
  Checkbox,
  DialogActions,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { colors } from "@/constanst/colors";
import Grid from "@mui/material/Grid2";

import officeBoy from "../../assets/images/cartoon-office-boy.png";
import officeGirl from "../../assets/images/cartoon-office-girl.png";
import DrawerPersFormDetails from "./DrawerPersFormDetails";
import PersonCardHead from "./PersonCardHead";

const ADD_DATA = [
  "Limbic Types",
  "Important Values",
  "Pain Points",
  "Fears",
  "Goals and Dreams",
  "Materialistic Gains",
  "Emotional Win",
];

const UserFormSelect = ({
  person,
  selectedValues,
  setSelectedValues,
  setSteps,
  steps,
  full,
  onSubmit
}) => {
  const [details, setDetails] = useState(null);

  const detailsHandler = () => {
    setDetails(true);
  };

  const onSelectChange = (selected, name) => {
    if (name === "Select all") {
      if (selected) {
        setSelectedValues([...ADD_DATA]);
      } else {
        setSelectedValues([]);
      }
    } else {
      if (selected) {
        selectedValues.push(name);
        setSelectedValues([...selectedValues]);
      } else {
        const val = selectedValues.filter((v) => {
          return v !== name;
        });
        setSelectedValues([...val]);
      }
    }
  };

  const nextStepHandler = async () => {
    setSteps(null);
    setTimeout(() => setSteps((steps += 1)), 350);
    // await onSubmit()
  };

  useEffect(() => {
    if (full) {
      setSelectedValues([...ADD_DATA]);
    } else {
      setSelectedValues([]);
    }
  }, [person]);

  const t1 = ADD_DATA.map((i) => (
    <Grid size={6} key={i} sx={{ textAlign: "left", paddingLeft: "3rem",  }}>
      <FormControlLabel
        key={i}
        sx={{
          "& .MuiFormControlLabel-label": {
            color: colors.white,
            '&.Mui-disabled': {
              color: colors.grey3
            }
          },
        }}
        control={
          <Checkbox
            disabled={full}
            label={i}
            sx={{
              color: colors.orange,
              "&.Mui-checked": {
                color: colors.orange,
              },
            }}
            name={i}
            checked={selectedValues.includes(i)}
            onChange={(event) =>
              onSelectChange(event.target.checked, event.target.name)
            }
          />
        }
        label={i}
        color={"primary"}
      />
    </Grid>
  ));

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: ".8rem",
        textAlign: "center",
        padding: ".8rem .3rem",
      }}
    >
      <PersonCardHead
        place={person["Place of residence"]}
        image={
          person["User Image"]?.length > 0
            ? person["User Image"][0]?.url
            : person["Gender"] === "Female"
            ? officeGirl.src
            : officeBoy.src
        }
        name={person["Name"]}
        age={person["Age"]}
        work={person["Job title"]}
      />
      <FormGroup>
        <Grid container spacing={1} flexWrap>
          {t1}
          <Grid
            size={6}
            key={"all"}
            sx={{ textAlign: "left", paddingLeft: "3rem", color: colors.white }}
          >
            <FormControlLabel
              key={"Select all"}
              sx={{
                justifyContent: "center",
                "& .MuiFormControlLabel-label": {
                  color: colors.mainGreen,
                  '&.Mui-disabled': {
                    color: colors.grey3
                  }
                },
              }}
              control={
                <Checkbox
                  disabled={full}
                  sx={{
                    color: colors.orange,
                    "&.Mui-checked": {
                      color: colors.orange,
                    },
                  }}
                  name={"Select all"}
                  checked={selectedValues.length === ADD_DATA.length}
                  onChange={(event) =>
                    onSelectChange(event.target.checked, event.target.name)
                  }
                />
              }
              label={"Select all"}
              color={"primary"}
            />
          </Grid>
        </Grid>
      </FormGroup>
      <Box mt={7}>
        <Button onClick={detailsHandler} variant={"outlined"} color={"info"}>
          Details
        </Button>
      </Box>
      <DrawerPersFormDetails
        person={person}
        setDetails={setDetails}
        details={details}
      />
      <DialogActions sx={{ marginTop: "3rem" }}>
        <Button
          onClick={nextStepHandler}
          variant={"contained"}
          color={"primary"}
          sx={{ width: "100%" }}
        >
          Next step 
        </Button>
      </DialogActions>
    </Box>
  );
};

export default UserFormSelect;
