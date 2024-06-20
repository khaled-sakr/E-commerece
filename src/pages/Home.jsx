import CategoriesHome from "../ui/CategoriesHome";
import ExploreProducts from "../ui/ExploreProducts";
import FlashSales from "../ui/FlashSales";
import SideBar from "../ui/SideBar";
import SwiperHomeCategories from "../ui/SwiperHomeCategories";
import ExploreThisCat from "../ui/ExploreThisCat";
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
