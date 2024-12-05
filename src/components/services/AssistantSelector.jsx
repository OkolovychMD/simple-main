import React from "react";

import { colors } from "@/constanst/colors";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";

import CustomSelect from "../common/CustomSelect";

const AssistantSelector = ({ value, onChange }) => {
  const options = [
    { value: "gpt", label: "Chat GPT" },
    { value: "claude", label: "Claude" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        width: "13rem",
      }}
    >
      <Typography
        variant={"span"}
        sx={{
          color: colors.white,
        }}
      >
        Model:
      </Typography>
      <CustomSelect
        options={options}
        label="Assistant"
        value={value}
        onChange={onChange}
        multiple={false}
      />
    </Box>
  );
};

export default AssistantSelector;
