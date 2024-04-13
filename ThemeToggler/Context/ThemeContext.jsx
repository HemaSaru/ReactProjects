import React, { useContext } from "react";


export const ThemeContext = React.createContext({
    theme: "light",
});

export const ThemeProvider = ThemeContext.Provider;


export default function  useTheme() {
    return useContext(ThemeContext);
}