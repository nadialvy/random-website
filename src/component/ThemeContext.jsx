import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark") setIsDark(true);
  }, []);

  useEffect(() => {
    if(isDark){
      document.body.style.backgroundColor = "black";
    }else {
      document.body.style.backgroundColor = "white";
    }
    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("light", !isDark);
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
