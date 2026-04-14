import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* ONLY spacing here — NO max-width */}
      <main className="pt-36">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
