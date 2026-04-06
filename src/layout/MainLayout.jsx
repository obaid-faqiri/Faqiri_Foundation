import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="pt-36">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;