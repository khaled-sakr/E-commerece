import { Link } from "react-router-dom";
import { useConFast } from "../Context/ContextProject";

const hover =
  "relative after:absolute after:w-0 after:duration-300 after:h-[1px] after:left-0 after:bg-black after:-bottom-[2px] lg:hover:after:w-[85%] md:hover:after:w-[70%] hover:after:w-[60%] hover:after:content  cursor-pointer";
const suggestion = `cursor-pointer w-32 ${hover} 
xl:text-base lg:text-base md:text-sm text-xs
 font-semibold `;
function SideBar() {
  const { categories } = useConFast();
  return (
    <div className="relative sm:flex min-h-full hidden flex-col  bg-white justify-around pb-4 lg:w-[15%] w-[18%] after:bg-stone-300 after:h-[97%] after:w-[1px] after:absolute after:right-0 after:top-0 ">
      {categories.map((category) => (
        <Link to={`category/${category.categoryId}`} className={suggestion}>
          {category.name}
        </Link>
      ))}
    </div>
  );
}

export default SideBar;
