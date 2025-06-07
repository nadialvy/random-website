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
    if (isDark) {
      document.body.style.backgroundColor = "black";
      document.querySelectorAll("p").forEach((p) => {
        p.style.color = "white";
      });
      window.localStorage.setItem("theme", "dark");
    } else {
      document.body.style.backgroundColor = "white";
      document.querySelectorAll("p").forEach((p) => {
        p.style.color = "black";
      });
      window.localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
