import { Paper, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Paper elevation={0} sx={{ p: 1, borderRadius: 0 }}>
      <Typography variant="h4">The next mui - Footer</Typography>
    </Paper>
  );
}
