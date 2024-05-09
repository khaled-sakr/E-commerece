import { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../features/OutSideClick";
function SearchBar() {
  const products = useSelector((state) => state.favourite.products);
  const [searchvalue, setSearchvalue] = useState("");
  const filteredData =
    searchvalue &&
    products.filter((item) =>
      item.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
  // const [showSearch, setShowSearch] = useState(false);
  const ref = useOutsideClick(() => setSearchvalue(""));
  // let searchProd = products.filter(
  //   (product) => product.name.split(" ") === searchvalue
  // );
  // const ref=useOutsideClick()

  // let searchProd2 = products.foreach();
  // let searchProd2 = products.map((product) => product.name.split(""));
  // console.log(searchProd.splite(""));
  // console.log(searchProd);
  // console.log(filteredData);
  // console.log(searchProd2);
  // // console.log(searchProd);
  // searchProd = searchProd.join(" ");
  // console.log(searchProd);
  // const find = searchProd.indexOf(searchvalue);
  // console.log(searchProd.indexOf(1));
  // const search_params = Object.keys(Object.assign({}, ...searchProd));
  // function search(data) {
  //   return data.filter((data) =>
  //     search_params.some((param) =>
  //       data[param].toString().toLowerCase().includes(searchvalue)
  //     )
  //   );
  // }
  // console.log(search(searchProd));
  return (
    <div
      ref={ref}
      className="relative md:w-[23%] h-64 mr-3 w-[21%] flex flex-col gap-[2px] z-10"
    >
      <input
        onChange={(e) => setSearchvalue(e.target.value)}
        name="search"
        id="search"
        type="text"
        className="bg-stone-100 rounded-md outline-none md:text-xs text-[10px] md:p-4 p-2  md:mt-9 mt-11 md:h-8 h-7 w-11/12 lg:placeholder:text-[10px] md:placeholder:text-[8px] placeholder:text-[7px] placeholder:font-[400]"
        placeholder="What are you looking for"
      />
      <label for="search">
        <FiSearch className="absolute bg-stone-100 md:h-[32px] h-[28px] md:top-9 top-11 right-0 w-9 p-2 cursor-pointer hover:text-stone-700  text-xl rounded-md " />
      </label>
      {searchvalue && (
        <div className="bg-stone-300/70 drop-shadow-md overflow-y-auto scrollInvisable z-10 flex flex-col gap-2 px-2 py-3 rounded-b-md">
          {filteredData.length !== 0 ? (
            filteredData.map((product) => (
              <Link
                onClick={() => setSearchvalue("")}
                to={`/category/${product.categoryId}/product/${product.id}`}
                className="flex lg:gap-6 md:gap-4 gap-1 md:h-6 lg:h-8 h-5 cursor-pointer font-semibold lg:text-xs md:text-[10px] text-[8px] bg-slate-100  hover:bg-stone-300 text-stone-800 z-10"
              >
                <img
                  src={product.srcOne}
                  alt={product.name}
                  className=" h-4/6 my-auto ml-2"
                />
                <p className="my-auto z-10">{product.name}</p>
              </Link>
            ))
          ) : (
            <>
              <small className="text-[10px]  font-semibold text-center">
                No Search Items
              </small>
              {/* <hr /> */}
            </>
          )}
          {/* <Link
            to="/shop"
            className="lg:text-xs text-[10px] flex md:gap-2 lg:gap-3 gap-1 text-center hover:bg-stone-600 hover:text-white text-stone-900 w-fit mx-auto px-5 py-1 rounded-md font-bold"
          >
            <FaLongArrowAltLeft className="mt-1" />
            Go shop
            <FaLongArrowAltRight className="mt-1" />
          </Link> */}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
