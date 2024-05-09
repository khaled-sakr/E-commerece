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
        position: "top-center",
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
        position: "top-center",
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
    //   deleteProduct: (
    //     state,
    //     action: PayloadAction<{
    //       categoryId: string;
    //       id: string;
    //       size: string;
    //       color: string;
    //       amount: number;
    //     }>
    //   ) => {
    //     const target = state.favourite.find(
    //       (product) =>
    //         product.categoryId === action.payload.categoryId &&
    //         product.id === action.payload.id &&
    //         product.size === action.payload.size &&
    //         product.color === action.payload.color &&
    //         product.amount === action.payload.amount
    //     );
    //     state.favourite = state.favourite.filter((prod) => prod !== target);
    //   },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(
  //       addItemAsync.fulfilled,
  //       (
  //         state,
  //         action: PayloadAction<{
  //           product: object;
  //           color: string;
  //           size: string;
  //           amount: number;
  //         }>
  //       ) => {
  //         toast.success(`This product has been added to the Cart`, {
  //           position: "top-center",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "colored",
  //           transition: Flip,
  //         });
  //         state.cart.push({
  //           ...action.payload,
  //         });
  //         cartSlice.caseReducers.calcPrice(state);
  //       }
  //     )
  //     // .addCase(clearCartAsync.fulfilled, (state) => {
  //     //   toast.success(`Your Order had been sumbitted 👌`, {
  //     //     position: "top-center",
  //     //     autoClose: 3000,
  //     //     hideProgressBar: false,
  //     //     closeOnClick: true,
  //     //     pauseOnHover: true,
  //     //     draggable: true,
  //     //     progress: undefined,
  //     //     theme: "colored",
  //     //     transition: Flip,
  //     //   });
  //     //   state.order = state.cart;
  //     //   state.cart = [];
  //     // })
});
// export const addItemAsync = createAsyncThunk(
//   "cartSlice/addItemAsync",
//   async (cart: any) => {
//     await new Promise((resolve) => setTimeout(resolve, 100));
//     return cart;
//   }
// );
// export const clearCartAsync = createAsyncThunk(
//   "cartSlice/clearCartAsync",
//   async (order: any) => {
//     await new Promise((resolve) => setTimeout(resolve, 300));
//     return order;
//   }
// );
// export const {
//   // addItem,
//   // deleteProduct,
//   // calcPrice,
//   // changeAmount,
//   // applicationCoupon,
//   // clearCart,
//   // clearOrder,
// } = favState.actions;
export const { addItemFav, deleteItemFav } = favSlice.actions;
export default favSlice.reducer;
