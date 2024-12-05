import React from "react";

import { colors } from "@/constanst/colors";
import { inputStyleActive, loginInputStyles, selectOrange } from "@/constanst/theme/inputs";
import { Box, Typography, TextField, Select, MenuItem } from "@mui/material";

import FormattedTextDisplay from "../services/FormattedTextDisplay";

const fieldTypes = {
  Age: "number",
  "Number of Kids": "number",
  Gender: "select",
  // Предположим, что 'Description' - это многострочное поле
  Description: "multiline",
  Fears: "multiline",
  "Buying Barriers": "multiline",
  "Buying Motives": "multiline",
  "Buying Behavior": "multiline",
  "Brand-Magnet": "multiline",
  "Brand-Examples": "multiline",
  "Online behavior": "multiline",
  "Device usage": "multiline",
  "Preferred communication channels": "multiline",
  "Emotional Win": "multiline",
  "Materialistic Gains": "multiline",
  "Elevator Pitch": "multiline",
  "Goals and Dreams": "multiline",
  "Magical Solution": "multiline",
  "Important Values": "multiline",
  "Pain Points": "multiline",
  "Empathy Card": "multiline",
  // Добавьте другие поля и их типы
};

const PersonDetailTextSection = ({
  title,
  subtitles,
  content,
  isEditing,
  onChange,
}) => {
  return (
    <Box
      sx={{
        marginTop: ".5rem",
        paddingBottom: "1.2rem",
      }}
    >
      <Typography variant={"h5"} sx={{ color: colors.orange, textAlign: 'center' }}>
        {title}
      </Typography>
      {subtitles.map((s) => {
        // Определяем тип поля
        const fieldType = fieldTypes[s] || "text"; // По умолчанию - однострочный текст

        return (
          <Box
            key={s}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              borderBottom: `1px solid ${colors.darkGrey42}`,
              padding: ".8rem .5rem",
              marginTop: ".3rem",
              color: colors.silverCA,
            }}
          >
            <Typography
              variant={"span"}
              sx={{
                color: colors.white,
                fontFamily: "Inter",
                fontSize: "1rem",
                fontWeight: "bold",
                display: "inline",
              }}
            >
              {s}:&nbsp;&nbsp;&nbsp;
            </Typography>
            {isEditing ? (
              fieldType === "multiline" ? (
                <TextField
                  variant="standard"
                  multiline
                  minRows={3}
                  value={content[s] || ""}
                  onChange={(e) => onChange(s, e.target.value)}
                  sx={{
                    // textarea: { color: colors.white },
                    width: "100%",
                    marginTop: "0.5rem",
                    ...loginInputStyles,
										...inputStyleActive
                  }}
                />
              ) : fieldType === "number" ? (
                <TextField
                  variant="standard"
                  type="number"
                  value={content[s] || ""}
                  onChange={(e) => onChange(s, e.target.value)}
                  sx={{
                    // input: { color: colors.white },
                    width: "100%",
                    marginTop: "0.5rem",
                    ...loginInputStyles,
										...inputStyleActive
                  }}
                />
              ) : fieldType === "select" ? (
                <Select
                  sx={{
                    marginTop: "0.5rem",
                    width: "50%",
                    // color: '#ffffff',
                    border: `1px solid ${colors.gray40}`,
                    borderRadius: "8px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    "& .MuiSelect-icon": {
                      color: colors.orange,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: colors.gray40,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      // borderColor: '#ffffff', // Изменение цвета обводки при ховере
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: colors.orange, // Цвет обводки при фокусе
                    },
                    ...selectOrange,
                  }}
                  labelId="demo-simple-select-label"
                  value={content[s] || ""}
                  onChange={(e) => onChange(s, e.target.value)}
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Non-Binary"}>Non-Binary</MenuItem>
                </Select>
              ) : (
                <TextField
                  variant="standard"
                  value={content[s] || ""}
                  onChange={(e) => onChange(s, e.target.value)}
                  sx={{
                    // input: { color: colors.white },
                    width: "100%",
                    marginTop: "0.5rem",
                    ...loginInputStyles,
										...inputStyleActive
                  }}
                />
              )
            ) : !!content[s] ? (
              <FormattedTextDisplay custom={colors.silverCA}>
                {`${content[s]}`}
              </FormattedTextDisplay>
            ) : (
              <Typography
                variant="body2"
                sx={{
                  color: colors.silverCA,
                  display: "inline",
                  marginLeft: "0.5rem",
                }}
              >
                No data
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default PersonDetailTextSection;
