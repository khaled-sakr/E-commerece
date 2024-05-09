import { Link } from "react-router-dom";
import { useConFast } from "../Context/ContextProject";

function CatInShop() {
  const { categories } = useConFast();
  return (
    <div className="sm:w-9/12 w-full mx-auto my-8">
      <h1 className="md:text-2xl text-xl font-[400] mb-8">All Categories</h1>
      <div className="grid grid-cols-3 gap-4 md:text-lg sm:text-base text-sm">
        {" "}
        {categories.map((category) => (
          <Link
            // <CategoriesInShop type= id= />
            to={`/category/${category.categoryId}`}
            className="rounded-sm mx-auto px-3 py-2 font-semibold border border-stone-300 hover:text-white bg-transparent hover:bg-[#DB4444] w-full text-center"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CatInShop;
