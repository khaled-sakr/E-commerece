import { Outlet } from "react-router-dom";
import AboutUs from "./AboutUs";
import Header from "./Header";
import { useConFast } from "../Context/ContextProject";

function Applayout() {
  const { authed } = useConFast();
  return (
    <div className="w-full max-h-max min-h-screen relative sm:pb-[340px] pb-[1500px]">
      <Header authed={authed} />
      <Outlet />
      <AboutUs />
    </div>
  );
}

export default Applayout;
