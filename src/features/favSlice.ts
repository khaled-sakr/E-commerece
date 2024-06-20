import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Flip, toast } from "react-toastify";

interface favState {
  favourite: any[];
  products: any[];
}
const initialState: favState = {
  favourite: [],
  products: [
    {
      categoryId: "1",
      id: "1",
      srcOne: "/images/Picsart_24-04-27_14-38-02-781.jpg",
      srcTwo: "/images/Picsart_24-04-27_14-38-02-781.jpg",
      srcThree: "/images/download (3).jpeg.jpg",
      srcFour: "/images/download (3).jpeg.jpg",
      title: "title-three",
      discount: 70,
      name: "palestine guy",
      price: 1000,
      flash: true,
      fav: false,
      size: "M",
      stars: 4,
      colors: ["black", "white", "[#DB4444]"],
    },
    {
      categoryId: "2",
      id: "1",
      srcOne: "/images/images (12).jpeg.jpg",
      srcTwo: "/images/images (12).jpeg.jpg",
      srcThree: "/images/download (3).jpeg.jpg",
      srcFour: "/images/download (3).jpeg.jpg",
      title: "Plein Sports",
      discount: 10,
      name: "Plein Sports",
      price: 200,
      flash: false,
      fav: false,
      size: "M",
      stars: 3.5,
      colors: ["black", "white", "[#DB4444]"],
    },
    {
      categoryId: "3",
      id: "1",
      srcOne: "/images/spod-1052663037-2-1_480x480@2x.png",
      srcTwo: "/images/spod-1052663037-2-1_480x480@2x.png",
      srcThree: "/images/download (3).jpeg.jpg",
      srcFour: "/images/download (3).jpeg.jpg",
      title: "title-three",
      discount: 10,
      name: "Lifestyle",
      price: 300,
      flash: false,
      fav: false,
      size: "M",
      stars: 5.5,
      colors: ["black", "white", "[#DB4444]"],
    },
    {
      categoryId: "4",
      id: "1",
      srcOne: "/images/Picsart_24-04-27_13-03-34-964.jpg",
      srcTwo: "/images/Picsart_24-04-27_13-03-34-964.jpg",
      srcThree: "/images/download (3).jpeg.jpg",
      srcFour: "/images/download (3).jpeg.jpg",
      title: "title-three",
      discount: 10,
      name: "Baby Toys",
      price: 400,
      flash: true,
      fav: false,
      size: "M",
      stars: 3.5,
      colors: ["black", "white", "[#DB4444]"],
    },
    {
      categoryId: "5",
      id: "1",
      srcOne: "/images/Picsart_24-04-27_13-02-08-018.jpg",
      srcTwo: "/images/Picsart_24-04-27_13-02-08-018.jpg",
      srcThree: "/images/download (3).jpeg.jpg",
      srcFour: "/images/download (3).jpeg.jpg",
      title: "title-three",
      discount: 10,
      name: "programming",
      price: 500,
      flash: false,
      fav: false,
      size: "M",
      stars: 4.5,
      colors: ["black", "white", "[#DB4444]"],
    },
    {
      categoryId: "6",
      id: "1",
      srcOne: "/images/images (16).jpeg.jpg",
      srcTwo: "/images/images (16).jpeg.jpg",
      srcThree: "/images/download (3).jpeg.jpg",
      srcFour: "/images/download (3).jpeg.jpg",
      title: "title-three",
      discount: 10,
      name: "Medicine",
      price: 600,
      flash: false,
      fav: false,
      size: "M",
      stars: 5.5,
      colors: ["black", "white", "[#DB4444]"],
    },
    {
      categoryId: "7",
      id: "1",
      srcOne: "/images/Picsart_24-04-27_12-59-19-123.jpg",
      srcTwo: "/images/Picsart_24-04-27_12-59-19-123.jpg",
      srcThree: "/images/download (3).jpeg.jpg",
      srcFour: "/images/download (3).jpeg.jpg",
      title: "title-three",
      discount: 10,
      name: "Electronics",
      price: 700,
      flash: false,
      fav: false,
      size: "M",
      stars: 3.5,
      colors: ["black", "white", "[#DB4444]"],
    },
    {
      categoryId: "8",
      id: "1",
      srcOne: "/images/Picsart_24-04-27_14-17-56-013.jpg",
      srcTwo: "/images/Picsart_24-04-27_14-17-56-013.jpg",
      srcThree: "/images/download (3).jpeg.jpg",
      srcFour: "/images/download (3).jpeg.jpg",
      title: "title-three",
      discount: 10,
      name: "symetrical shaps",
      price: 800,
      flash: false,
      fav: false,
      size: "M",
      stars: 4.5,
      colors: ["black", "white", "[#DB4444]"],
    },
  ],
};
const favSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addItemFav: (
      state,
      action: PayloadAction<{
        product: any;
        id: StaticRange;
        categoryId: string;
      }>
    ) => {
      const target = state.products.find(
        (prod) =>
          prod.id === action.payload.id &&
          prod.categoryId === action.payload.categoryId
      );
      target.fav = true;
      state.favourite.push({
        ...action.payload,
      });
      toast.success(`This product has been added to the favourite`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    },
    deleteItemFav: (
      state,
      action: PayloadAction<{
        product: any;
        id: StaticRange;
        categoryId: string;
      }>
    ) => {
      const targetProduct = state.products.find(
        (prod) =>
          prod.id === action.payload.id &&
          prod.categoryId === action.payload.categoryId
      );
      const targetFav = state.favourite.find(
        (prod) =>
          prod.id === action.payload.id &&
          prod.categoryId === action.payload.categoryId
      );
      targetProduct.fav = false;
      state.favourite = state.favourite.filter((prod) => prod !== targetFav);
      toast.info(`This product has been deleted from the favourite`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    },
  },
});
export const { addItemFav, deleteItemFav } = favSlice.actions;
export default favSlice.reducer;
