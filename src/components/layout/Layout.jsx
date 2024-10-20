import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../../context/ThemeContext";

const Layout = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div
      className={`min-h-screen flex flex-col ${theme === "dark" ? "dark" : ""}`}
    >
      <Navbar />
      <main
        className={`flex-grow ${
          theme === "light" ? "bg-gray-50" : "bg-gray-900"
        } transition-colors duration-200`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
