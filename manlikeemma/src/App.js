import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { PageLayout } from "./pages/PageLayout/PageLayout";
import { ProjectPage } from "./pages/ProjectsPage/ProjectPage";
import { ExperiencePage } from "./pages/ExperiencePage/ExperiencePage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { Preloader } from "./components/PreLoader/Preloader";
import "./App.css";

export const App = () => {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setFadeIn(true);
    }, 3000);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.style.setProperty("--background-color", "#fff");
      root.style.setProperty("--primary-color", "black");
      root.style.setProperty("--secondary-color", "#000");
      root.style.setProperty("--navbar_text-color", "#000");
      root.style.setProperty("--projectcard-color", "#f3f3f3");
      root.style.setProperty("--projectcard-color-border", "#000");
    } else if (theme === "dark") {
      root.style.setProperty("--background-color", "#0c0c0c");
      root.style.setProperty("--primary-color", "#fff");
      root.style.setProperty("--secondary-color", "#fff");
      root.style.setProperty("--navbar_text-color", "#fff");
      root.style.setProperty("--projectcard-color", "#202022");
      root.style.setProperty("--projectcard-color-border", "#fff");
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
              <Route element={<ExperiencePage />} path="/experience" />
              <Route element={<ContactPage />} path="/contact" />
            </Route>
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
};
