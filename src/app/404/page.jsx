"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { Box, Typography, Button } from "@mui/material";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#231E39",
        color: "#B3B8CD",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          width: "350px",
          border: "1px solid silver",
          borderRadius: "25px",
          overflow: "hidden",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#C400D7",
            fontWeight: "bold",
            marginBottom: "20px",
            fontSize: "6rem",
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Page Not Found
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: "30px",
            fontSize: "1rem",
          }}
        >
          Oops! The page you{"'"}re looking for doesn{"'"}t exist or has been
          moved.
        </Typography>
        <Button
          variant="contained"
          onClick={() => router.push("/")} // Use router.push to navigate
          sx={{
            backgroundColor: "#1F1A36",
            color: "#B3B8CD",
            "&:hover": {
              backgroundColor: "#C400D7",
            },
          }}
        >
          Go to Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
