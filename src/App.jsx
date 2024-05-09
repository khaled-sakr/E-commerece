import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Applayout from "./ui/Applayout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Favourite from "./pages/Favourite";
import Category from "./pages/Category";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import Confirm from "./pages/Confirm";
import { useConFast } from "./Context/ContextProject";
import { useSelector } from "react-redux";
function App() {
  const { authed } = useConFast();
  const cart = useSelector((state) => state.cart.cart);
  const order = useSelector((state) => state.cart.order);
  const router = createBrowserRouter([
    {
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: authed ? <Home /> : <Login />,
        },
        {
          path: "/category/:categoryId",
          element: authed ? <Category /> : <Navigate to="/" />,
        },
        {
          path: "/shop",
          element: authed ? <Shop /> : <Navigate to="/" />,
        },
        { path: "/cart", element: authed ? <Cart /> : <Navigate to="/" /> },
        {
          path: "/favourite",
          element: authed ? <Favourite /> : <Navigate to="/" />,
        },
        {
          path: "/category/:categoryId/product/:productId",
          element: authed ? <Product /> : <Navigate to="/" />,
        },
        { path: "/about", element: authed ? <About /> : <Navigate to="/" /> },
        { path: "/signup", element: authed ? <Navigate to="/" /> : <SignUp /> },
        {
          path: "/contact",
          element: authed ? <Contact /> : <Navigate to="/" />,
        },
        {
          path: "/checkout",
          element: authed ? (
            cart.length ? (
              <Checkout />
            ) : (
              <Navigate to="/" />
            )
          ) : (
            <Navigate to="/" />
          ),
        },
        {
          path: "/account",
          element: authed ? <Account /> : <Navigate to="/" />,
        },
        {
          path: "/confirm",
          element: authed ? (
            order.length ? (
              <Confirm />
            ) : (
              <Navigate to="/" />
            )
          ) : (
            <Navigate to="/" />
          ),
        },
        { path: "*", element: <Error /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
