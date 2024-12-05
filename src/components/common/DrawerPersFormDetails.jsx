import React from "react";

import { Box, Drawer, Typography } from "@mui/material";

import officeBoy from "../../assets/images/cartoon-office-boy.png";
import officeGirl from "../../assets/images/cartoon-office-girl.png";
import { colors } from "../../constanst/colors";
import FormattedTextDisplay from "../services/FormattedTextDisplayPersDetails";
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

const DrawerPersFormDetails = ({ person, setDetails, details }) => {
  return (
    <Drawer
      anchor={"right"}
      open={!!details}
      onClose={() => setDetails(null)}
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
    >
      <Box
        sx={{
          width: "30rem",
          borderTop: `1px solid ${colors.darkGrey42}`,
          borderLeft: `1px solid ${colors.darkGrey42}`,
          borderBottom: `1px solid ${colors.darkGrey42}`,
          height: "100%",
          borderRadius: "1rem 0 0 1rem",
          overflow: "auto",
          backgroundColor: colors.background,
          padding: "0 1rem 2rem",
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
          small
        />
        <Box>
          {ADD_DATA.map((d) => (
            <Box key={d} sx={{ marginTop: "1rem" }}>
              <Typography variant={"h5"} sx={{ color: colors.orange }}>
                {d}
              </Typography>
              <FormattedTextDisplay custom={colors.white}>
                {person[d]}
              </FormattedTextDisplay>
            </Box>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default DrawerPersFormDetails;
