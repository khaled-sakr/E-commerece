import { useConFast } from "../Context/ContextProject";
import CategoryInHome from "./CategoryInHome";
function CategoriesInHome() {
  const { categories } = useConFast();

  return (
    <div className="grid justify-start grid-flow-col  w-9/12 md:h-40 sm:h-28 h-20 rounded-lg text-slate-200 bg-stone-800  md:mt-9 my-6 mx-auto">
      <span className="text-center md:text-xl sm:text-base text-xs m-3 my-auto  font-[500] md:font-[700]">
        All Categories :
      </span>
      <CategoryInHome categoriesItem={categories} />
    </div>
  );
}

export default CategoriesInHome;
