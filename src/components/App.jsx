import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
const ProjectPage = lazy(() => import('../pages/ProjectPage/ProjectPage'));
const ProjectDetailPage = lazy(() => import('../pages/ProjectPage/ProjectDetailPage'));
const ContactPage = lazy(() => import('../pages/ContactPage/ContactPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Project list */}
        <Route path="project" element={<ProjectPage />} />
        {/* Project detail */}
        <Route path="project/:id" element={<ProjectDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
