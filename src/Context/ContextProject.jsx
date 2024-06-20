import { faBlackTie, faNfcSymbol } from "@fortawesome/free-brands-svg-icons";
import {
  faBaby,
  faChalkboardTeacher,
  faCode,
  faFootballBall,
  faHeart,
  faKitMedical,
} from "@fortawesome/free-solid-svg-icons";
import { createContext, useContext, useState } from "react";
const users = [
  {
    name: { firstName: "khaled", lastName: "sakr" },
    imageSrc: "/images/me.jpg",
    email: "khaled.ibrahem.sakr@gmail.com",
    address: {
      companyName: "the company",
      streetAddress: "the-central-street",
      governorate: "el Gharbia",
      cityOrTown: "baqlola.elsanta",
    },
    AddressPref: "baqlola,elsanta,el Gharbia",
    phone: 201028577310,
    password: "12345678",
  },
  {
    name: { firstName: "khaled", lastName: "sakr" },
    imageSrc: "/images/me.jpg",
    email: "khaled.ibrahem.sakr@gmail.com",
    address: {
      companyName: "the company",
      streetAddress: "the-central-street",
      governorate: "el Gharbia",
      cityOrTown: "baqlola.elsanta",
    },
    AddressPref: "baqlola,elsanta,el Gharbia",
    phone: 201028577310,
    password: "12345678",
  },
];
const products = [
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
    fav: true,
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
];
const categories = [
  {
    categoryId: "1",
    name: "Palestine",
    icon: faHeart,
  },
  {
    categoryId: "2",
    name: "Sports",
    icon: faFootballBall,
  },
  {
    categoryId: "3",
    name: "Lifestyle",
    icon: faBlackTie,
  },
  {
    categoryId: "4",
    name: "Baby Toys",
    icon: faBaby,
  },
  {
    categoryId: "5",
    name: "Programming",
    icon: faCode,
  },
  {
    categoryId: "6",
    name: "Medicine",
    icon: faKitMedical,
  },
  {
    categoryId: "7",
    name: "Electronics",
    icon: faChalkboardTeacher,
  },
  {
    categoryId: "8",
    name: "symetrical shaps",
    icon: faNfcSymbol,
  },
];
const ContextProjectPro = createContext();
function ContextProject({ children }) {
  // const { categoryId, productId } = useParams();
  const [numPro, setNumPro] = useState(2);
  const [authed, setAuthed] = useState();
  const [couponCart, setCouponCart] = useState();
  const [detailsShow, setdetailsShow] = useState(true);
  const discountCoupon = 1234;
  return (
    <ContextProjectPro.Provider
      value={{
        authed,
        setAuthed,
        categories,
        products,
        numPro,
        setNumPro,
        users,
        couponCart,
        setCouponCart,
        discountCoupon,
        detailsShow,
        setdetailsShow,
      }}
    >
      {children}
    </ContextProjectPro.Provider>
  );
}
function useConFast() {
  const context = useContext(ContextProjectPro);
  return context;
}
export { ContextProject, useConFast };
