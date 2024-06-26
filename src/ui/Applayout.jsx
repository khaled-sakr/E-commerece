import { Outlet } from "react-router-dom";
import AboutUs from "./AboutUs";
import Header from "./Header";
import { useConFast } from "../Context/ContextProject";
import Scrollup from "./Scrollup";

function Applayout() {
  const { authed } = useConFast();
  return (
    <div
      className="w-full flex flex-col min-h-screen relative 
    "
    >
      <Header authed={authed} />
      <Scrollup />
      <Outlet />
      <AboutUs />
    </div>
  );
}

export default Applayout;
