import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import OurMissions from "../pages/OurMissions";
import Leadership from "../pages/Leadership";
import WhyChooseUs from "../pages/WhyChooseUs";
import FAQ from "../pages/FAQ";
import Events from "../pages/Events";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectsDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import EventDetails from "../pages/EventDetails";
import Causes from "../pages/Causes";

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<OurMissions />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/why" element={<WhyChooseUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/causes" element={<Causes />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;