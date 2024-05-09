import { Link } from "react-router-dom";
const categories = [
  {
    name: "Palestine",
    id: 1,
  },
  {
    name: "Sports",
    id: 2,
  },
  {
    name: "Lifestyle",
    id: 3,
  },
  {
    name: "BAby Toys",
    id: 4,
  },
  {
    name: "Programming",
    id: 5,
  },
  {
    name: "Medicine",
    id: 6,
  },
  {
    name: "Electronics",
    id: 7,
  },
  {
    name: "Symetrics",
    id: 8,
  },
];
function MoreHome({ children, categoryId }) {
  return (
    <Link
      to={`/category/${categoryId}`}
      className="w-fit mx-auto sm:my-7 my-7 text-sm sm:text-md font-[400] lg:py-3 sm:py-2 py-1 lg:px-20 sm:px-12 px-6 bg-red-500 rounded-md text-white hover:bg-red-600"
    >
      {children}
    </Link>
  );
}

export default MoreHome;
