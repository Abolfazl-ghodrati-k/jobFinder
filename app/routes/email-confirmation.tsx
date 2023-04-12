import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import withLayout from "~/HOC/withLayout";

function getCookie(name: string) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

function emailConfirmation() {
  const [fullName, setfullName] = useState<string>("");

  React.useEffect(() => {
    const full_name = getCookie("fullName");
    if (full_name) {
      setfullName(full_name)
    }
  }, [])

  return (
    <Box
      sx={{
        marginTop: 3,
        maxWidth: "lg",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginX: "auto",
      }}
    >
      <Typography sx={{ marginBottom: 2, color: "pink", fontSize: "1.2rem" }}>
        You need to confirm your email
      </Typography>
      <Typography>hi {fullName} we have sent an email to you</Typography>
      <Typography>check your inbox for confirmation link</Typography>
      <Typography sx={{ marginTop: 2, fontSize: "1.5rem" }}>
        ┬┴┬┴┤(･_├┬┴┬┴
      </Typography>
    </Box>
  );
}

export default withLayout(emailConfirmation);
