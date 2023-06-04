import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { PageLayout } from "./pages/PageLayout/PageLayout";
import { ProjectPage } from "./pages/ProjectsPage/ProjectPage";
import { InfoPage } from "./pages/InfoPage/InfoPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { Preloader } from "./components/PreLoader/Preloader";
import "./App.css"; // Import your CSS file for App component

export const App = () => {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false); // New state for fade-in effect

  useEffect(() => {
    // Simulate an asynchronous action
    setTimeout(() => {
      setLoading(false); // Set loading state to false after the action is completed
      setFadeIn(true); // Trigger fade-in effect after loading
    }, 3000);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.style.setProperty("--background-color", "#fff");
      root.style.setProperty("--primary-color", "black");
      root.style.setProperty("--secondary-color", "black");
      root.style.setProperty("--navbar_text-color", "#000");
    } else {
      root.style.setProperty("--background-color", "#0c0c0c");
      root.style.setProperty("--primary-color", "#fff");
      root.style.setProperty("--secondary-color", "hsl(0, 0%, 95%)");
      root.style.setProperty("--navbar_text-color", "#fff");
    }
  }, [theme]);

  return (
    <BrowserRouter>
      {loading ? (
        <Preloader />
      ) : (
        <div className={`fade-in-container ${fadeIn ? "fade-in" : ""}`}>
          <Routes>
            <Route
              element={
                <PageLayout
                  handleThemeChange={handleThemeChange}
                  theme={theme}
                />
              }
            >
              <Route index element={<HomePage />} path="/" />
              <Route element={<AboutPage />} path="/about" />
              <Route element={<ProjectPage />} path="/projects" />
              <Route element={<InfoPage />} path="/info" />
              <Route element={<ContactPage />} path="/contact" />
            </Route>
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
};
