"use client";

import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import theme from "../../constanst/theme"

const DateLocalizationProvider = ({children}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LocalizationProvider>
  );
};

export default DateLocalizationProvider;
