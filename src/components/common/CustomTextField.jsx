import React from "react";

import { TextField } from "@mui/material";
import { inputStyleActive } from "@/constanst/theme/inputs";

const CustomTextField = ({ disabled, field, multiline, rows, inputProps }) => {
  return (
    <TextField
      sx={{
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused": {
            backgroundColor: "white",
          },
        },
        ...inputStyleActive
      }}
      disabled={disabled}
      {...field}
      fullWidth
      variant="outlined"
      {...{ multiline, rows, inputProps }}
    />
  );
};

export default CustomTextField;
