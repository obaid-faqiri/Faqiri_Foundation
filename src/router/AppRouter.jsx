import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About"; // 👈 ADD THIS
import OurMissions from "../pages/OurMissions";
import Leadership from "../pages/Leadership";
import WhyChooseUs from "../pages/WhyChooseUs";
import FAQ from "../pages/FAQ"; // 👈 ADD THIS
import Events from "../pages/Events"; // 👈 ADD THIS
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectsDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails"; 
import EventDetails from "../pages/EventDetails"; // 👈 ADD THIS
import Causes from "../pages/Causes"; // 👈 ADD THIS


const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<OurMissions />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/why" element={<WhyChooseUs />} />
        <Route path="/faq" element={<FAQ />} /> 
        <Route path="/events" element={<Events />} />
        <Route path="/projects/*" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/causes" element={<Causes />} />

     
      </Route>
    </Routes>
  );
};

export default AppRouter;
