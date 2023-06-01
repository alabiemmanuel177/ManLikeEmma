import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { PageLayout } from "./pages/PageLayout/PageLayout";
import { ProjectPage } from "./pages/ProjectsPage/ProjectPage";
import { InfoPage } from "./pages/InfoPage/InfoPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ProjectPage />} path="/projects" />
          <Route element={<InfoPage />} path="/info" />
          <Route element={<ContactPage />} path="/contact" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
