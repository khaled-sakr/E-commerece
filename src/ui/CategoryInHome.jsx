import { Link } from "react-router-dom";

function CategoryInHome({ categoriesItem }) {
  return (
    <>
      <div className="grid justify-start grid-flow-col cat gap-3 overflow-x-scroll overflow-y-hidden py-2 mx-4 cursor-default">
        {categoriesItem.map((item) => (
          <Link to={`/shop`}>
            <div className="hover:text-stone-100 text-transparent  relative h-[55%] my-auto text-center md:w-60 bg-gray-900 sm:w-40 w-28  rounded-xl bg-cover hover:bg-opacity-20 z-10">
              <button className="text-xs md:text-xl lg:text-2xl font-semibold m-auto absolute sm:top-[50%] top-[48%] left-[48%] -translate-y-[50%] -translate-x-[50%] bg-transparent rounded-xl sm:px-2 px-1 sm:py-1 py-0 overflow-hidden">
                {item.name}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CategoryInHome;
