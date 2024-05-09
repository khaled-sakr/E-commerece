// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoriesHome from "../ui/CategoriesHome";
import CategoriesInHome from "../ui/CategoriesInHome";
// import ExploreProduct from "../ui/ExploreProduct";
import ExploreProducts from "../ui/ExploreProducts";
import FlashSales from "../ui/FlashSales";
import SideBar from "../ui/SideBar";
import SomeProducts from "../ui/SomeProducts";
import SwiperHomeCategories from "../ui/SwiperHomeCategories";
import ExploreThisCat from "../ui/ExploreThisCat";
import {
  LiaHeadphonesSolid,
  LiaShieldAltSolid,
  LiaShuttleVanSolid,
} from "react-icons/lia";
import AdditionFet from "../ui/AdditionFet";

function Home() {
  return (
    <div>
      <div className="flex mx-auto sm:w-9/12 w-full ">
        <SideBar />
        <SwiperHomeCategories />
      </div>
      <FlashSales />
      <CategoriesHome />
      <ExploreThisCat />
      <ExploreProducts />
      <AdditionFet />
    </div>
  );
}

export default Home;
