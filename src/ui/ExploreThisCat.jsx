import { Link } from "react-router-dom";

function ExploreThisCat() {
  return (
    <div className="sm:w-9/12 w-full mx-auto mt-10 mb-5 relative font-serif">
      <span className="sm:w-3/12 w-6/12 lg:top-10 sm:top-0 xs:top-10 top-3 text-stone-100 left-10 p-2 absolute lg:space-y-9 sm:space-y-2 space-y-5 xs:space-y-5">
        <h2 className="lg:block hidden font-semibold xl:text-2xl sm:text-xl text-lg  ">
          <span className="mr-1 text-red-700"> Free</span>
          <span className="mx-1 text-green-700">Free</span>
          <span className="mx-1 text-white-400">Palestine</span>
        </h2>
        <p className="font-semibold  mb-4 xl:text-xl md:text-lg  sm:text-sm xs:text-base text-sm">
          50% of profits from this category go to palestine
        </p>
        <Link
          to="/category/1"
          className="block sm:w-full border-l-red-700 border-r-transparent border-t-transparent border-b-green-700 hover:border-l-red-900  hover:border-b-green-900 border-2 w-8/12 px-1 hover:text-stone-400 xs:py-2 py-0 text-center lg:text-sm md:text-xs sm:text-[10px] xs:text-xs text-[10px] font-[400] mt-2"
        >
          Palastine Category
        </Link>
      </span>
      <img
        className="w-full h-full sm:inline hidden"
        src="..\images\Annotation 2024-02-28 022401.jpg"
        alt="palastene.jpg"
      />
      <img
        className="w-full h-full inline sm:hidden"
        src="..\images\Annotation 2024-02-26 214705.jpg"
        alt="palastine.jpg"
      />
    </div>
  );
}

export default ExploreThisCat;
