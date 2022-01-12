import { createContext } from "react";

// can only take 'light' or 'dark' as value
// when updating themes using setMode use the exported constant theme variables
export const LIGHT_THEME_MODE = "light";
export const DARK_THEME_MODE = "dark";

// todo: set default theme from local storage
export const DEFAULT_THEME_MODE = LIGHT_THEME_MODE;

const ThemeContext = createContext({
  mode: DEFAULT_THEME_MODE,
  setMode: () => {},
});

export default ThemeContext;
