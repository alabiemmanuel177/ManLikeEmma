import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { PageLayout } from "./pages/PageLayout/PageLayout";
import { ProjectPage } from "./pages/ProjectsPage/ProjectPage";
import { InfoPage } from "./pages/InfoPage/InfoPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} path="/" />
          <Route index element={<ProjectPage />} path="/projects" />
          <Route index element={<InfoPage />} path="/info" />
          <Route index element={<ContactPage />} path="/contact" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
