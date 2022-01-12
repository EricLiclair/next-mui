import "../styles/globals.css";
import UserContext, { DEFAULT_USER_VALUE } from "../src/context/userContext";
import ThemeContext, {
  DEFAULT_THEME_MODE,
  LIGHT_THEME_MODE,
} from "../src/context/themeContext";
import EventContext, { DEFAULT_EVENTS } from "../src/context/eventContext";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { lightTheme, darkTheme } from "../src/theme";
import { Navbar, Footer } from "../src/components";
export const ContextWrapper = ({ children }) => {
  const [user, setUser] = useState(DEFAULT_USER_VALUE);
  const [events, setEvents] = useState(DEFAULT_EVENTS);
  const [mode, setMode] = useState(DEFAULT_THEME_MODE); // when updating theme using setMode use the exported constant theme variables

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ mode, setMode }}>
        <EventContext.Provider value={{ events, setEvents }}>
          <ThemeProvider
            theme={mode === LIGHT_THEME_MODE ? lightTheme : darkTheme}
          >
            {children}
          </ThemeProvider>
        </EventContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ContextWrapper>
  );
}

export default MyApp;
