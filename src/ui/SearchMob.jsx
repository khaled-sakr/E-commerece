import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../features/OutSideClick";
function SearchMob() {
  const products = useSelector((state) => state.favourite.products);
  const [searchvalue, setSearchvalue] = useState("");
  const filteredData =
    searchvalue &&
    products.filter((item) =>
      item.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
  const ref = useOutsideClick(() => setSearchvalue(""));
  function clearInputField() {
    document.getElementById("myForm").reset();
  }
  return (
    <div
      ref={ref}
      className="relative w-11/12 mr-3 flex flex-col gap-[2px] z-10"
    >
      <form id="myForm" action="search" onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => setSearchvalue(e.target.value)}
          name="search"
          id="search"
          type="text"
          className={`bg-stone-100 rounded-t-md outline-none text-[12px] text-black md:p-4 p-2  mt-11 h-7 w-11/12 placeholder:text-[10px] placeholder:font-[400] ${
            !searchvalue && "rounded-md"
          } `}
          placeholder="What are you looking for"
        />
        <label for="search">
          <FiSearch
            className={`absolute bg-stone-100 md:h-[32px] h-[28px] md:top-9 top-11 right-0 w-9 p-2 cursor-pointer hover:text-stone-700  text-xl rounded-t-md ${
              !searchvalue && "rounded-md"
            } `}
          />
        </label>
        {searchvalue && (
          <div className="bg-stone-300/70 drop-shadow-md overflow-y-auto scrollInvisable z-10 flex flex-col gap-2 px-1.5 py-2 rounded-b-md">
            {filteredData.length !== 0 ? (
              filteredData.map((product) => (
                <Link
                  onClick={() => {
                    clearInputField();
                    setSearchvalue("");
                  }}
                  to={`/category/${product.categoryId}/product/${product.id}`}
                  className="flex lg:gap-6 md:gap-4 gap-1 md:h-6 lg:h-8 h-5 cursor-pointer font-semibold text-[10px] bg-slate-100  hover:bg-stone-300 text-stone-800 z-10"
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
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default SearchMob;
