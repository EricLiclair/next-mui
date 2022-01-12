import { DarkMode, LightMode } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import ThemeContext, {
  DARK_THEME_MODE,
  LIGHT_THEME_MODE,
} from "../../../../context/themeContext";

export default function UnderDevelopment() {
  const { mode, setMode } = useContext(ThemeContext);
  const toggleTheme = () => {
    mode === LIGHT_THEME_MODE
      ? setMode(DARK_THEME_MODE)
      : setMode(LIGHT_THEME_MODE);
  };
  return (
    <Box>
      <Paper elevation={5} sx={{ p: 5, m: 2 }}>
        <Typography variant="h6" gutterBottom>
          This is a base project setup with next and mui with custom theming and
          theme toggling.
        </Typography>
        <IconButton onClick={toggleTheme}>
          {mode === LIGHT_THEME_MODE ? <DarkMode /> : <LightMode />}
        </IconButton>
        <br />
        <br />
        <Typography variant="caption" component={"p"}>
          Click to toggle theme
        </Typography>
      </Paper>
    </Box>
  );
}
