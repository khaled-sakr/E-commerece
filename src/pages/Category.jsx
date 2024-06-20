import { CiHeart } from "react-icons/ci";
import { IoMdHeart, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import AdressPage from "../ui/AdressPage";
import HintHome from "../ui/HintHome";
import { useDispatch, useSelector } from "react-redux";
import { addItemFav, deleteItemFav } from "../features/favSlice";

function Category({ withHint = true, anotherHint = false }) {
  const { categoryId } = useParams();
  const products = useSelector((state) => state.favourite.products);
  const dispatch = useDispatch();
  const porductThisCat = products.filter(
    (prod) => prod.categoryId === categoryId
  );
  return (
    <>
      {withHint ? (
        <AdressPage firstAddress="Home/" secAddress=" Category" />
      ) : (
        <HintHome>{anotherHint}</HintHome>
      )}
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-3 grid-cols-2 sm:w-9/12 w-full m-auto mt-10 gap-y-16 md:gap-x-5 gap-x-0">
        {porductThisCat.map((product) => (
          <div className="inline-block sm:w-44 w-36 overflow-hidden go">
            <div id="myBtn" className="sm:h-40 h-36 mb-4 overflow-hidden">
              <span className="relative">
                <Link
                  to={`/category/${product.categoryId}/product/${product.id}`}
                  className="overflow-hidden w-full"
                >
                  <img
                    src={product.srcOne}
                    alt="palestine"
                    className="sm:h-40 sm:w-40 h-36 w-36 mx-auto rounded-md duration-500 overflow-hidden -mb-0 hover:-mb-[28px]"
                  />
                  <button className="hover:bg-stone-800  hover:absolute  bottom-0 block text-xs -translate-y-0 sm:w-40 w-36 m-auto h-7 ml-0 sm:ml-[8px] rounded-b-md text-white font-[300] bg-black overflow-hidden ">
                    Go To Product
                  </button>
                </Link>
                {product.fav ? (
                  <button
                    onClick={() =>
                      dispatch(
                        deleteItemFav({
                          ...product,
                          id: product.id,
                          categoryId: product.categoryId,
                        })
                      )
                    }
                    className="absolute p-0 text-2xl rounded-md top-2 sm:right-4 right-2 text-center text-black font-[400] ml-8 bg-transparent"
                  >
                    <IoMdHeart className="text-[#ED4444] " />
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(addItemFav({ ...product }))}
                    className="absolute p-0 text-2xl rounded-md top-2 sm:right-4 right-2 text-center text-black font-[400] ml-8 bg-transparent"
                  >
                    <CiHeart className="text-[#ED4444] " />
                  </button>
                )}
              </span>
            </div>
            <div className="sm:w-44 w-32 z-10 h-20 overflow-hidden">
              <span className="m-auto">
                <span className="block text-base text-start font-[500] ml-3 mb-1">
                  {product.name}
                </span>
                <span className="text-red-400 text-sm font-[500] sm:ml-3 ml-2 start">
                  ${product.price - product.price * (product.discount / 100)}
                </span>

                <span className="flex text-yellow-500 text-xl ml-2 mt-1 ">
                  {Array.apply(null, { length: product.stars }).map((i) => (
                    <span className="busterCards" key={i}>
                      <IoMdStar />
                    </span>
                  ))}
                  {Number(
                    (product.stars - Math.trunc(product.stars)).toFixed(2)
                  ) ? (
                    <IoMdStarHalf />
                  ) : (
                    ""
                  )}

                  <span className="text-slate-400 text-sm ml-2">
                    ( {product.reviews} )
                  </span>
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
