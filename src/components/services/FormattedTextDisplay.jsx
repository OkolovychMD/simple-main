import React from "react";
import ReactMarkdown from "react-markdown";

import { colors } from "@/constanst/colors";
import { Box, Typography } from "@mui/material";

const FormattedTextDisplay = ({ children, custom }) => {
  return (
    <Box
      sx={{
        transition: ".3s",
        "& p": { marginBottom: "8px" },
        "& h2": {
          marginTop: "12px",
          marginBottom: "8px",
          color: colors.silver,
        },
        "& hr": {
          margin: "12px 0",
          border: "none",
          borderTop: `1px solid ${colors.silver}`,
        },
      }}
    >
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <Typography
              variant="h2"
              {...props}
              sx={{
                margin: 0,
                color: colors.orange + "!important",
                fontSize: "2.2rem",
                fontWeight: "500",
              }}
            />
          ),
          h2: ({ node, ...props }) => (
            <Typography
              variant="h3"
              {...props}
              sx={{
                margin: 0,
                color: colors.orange,
                fontSize: "1.9rem",
                fontWeight: "400",
              }}
            />
          ),
          h3: ({ node, ...props }) => (
            <Typography
              variant="h4"
              {...props}
              sx={{
                margin: 0,
                color: colors.orange,
                fontSize: "1.7rem",
                fontWeight: "400",
              }}
            />
          ),
          h4: ({ node, ...props }) => (
            <Typography
              variant="h5"
              {...props}
              sx={{
                margin: 0,
                color: colors.orange,
                fontSize: "1.3rem",
                fontWeight: "400",
              }}
            />
          ),
          p: ({ node, ...props }) => (
            <Typography
              variant="body1"
              {...props}
              sx={{ color: custom ? custom : colors.blackPermanet, margin: 0 }}
            />
          ),
          li: ({ node, ...props }) => (
            <Typography
              variant="body1"
              {...props}
              sx={{ color: custom ? custom : colors.blackPermanet, margin: 0 }}
            />
          ),
          strong: ({ node, ...props }) => (
            <strong
              style={{ color: colors.orange, padding: 0, margin: 0 }}
              {...props}
            />
          ),
          em: ({ node, ...props }) => (
            <em style={{ color: colors.orange }} {...props} />
          ),
          pre: ({ node, ...props }) => (
            <pre style={{ color: colors.black }} {...props} />
          ),
          code: ({ node, ...props }) => (
            <code style={{ color: colors.black }} {...props} />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </Box>
  );
};

export default FormattedTextDisplay;
