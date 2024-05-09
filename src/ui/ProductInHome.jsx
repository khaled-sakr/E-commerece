import { Link } from "react-router-dom";

function ProductInHome() {
  return (
    <>
      <Link
        to={`/product/:id`}
        className="md:ml-6 sm:ml-4 ml-2  md:mr-6 sm:mr-4 mr-2"
      >
        <div
          className={`overflow-hidden cursor-pointer relative md:w-56 sm:w-52 w-40 my-auto md:h-64 sm:h-56 h-44 bg-gray-200 hover:bg-gray-400 rounded-2xl after:bg-gray-900 after:absolute after:z-20  after:bottom-1 after:w-full after:h-16  after:px-3 after:py-1 after:left-0 after:content-['Go_To_Product'] after:text-gray-400 after:text-center md:after:text-2xl sm:after:text-lg after:text-sm md:after:pt-3 sm:after:pt-4 after:pt-6   after:p-10 after:translate-y-48 after:hover:-translate-y-20 after:duration-700  duration-700 `}
        >
          <img
            src="../../images/editing-2.png"
            alt="t-shirt-one"
            className="h-full m-auto "
          />
        </div>
      </Link>
    </>
  );
}

export default ProductInHome;
