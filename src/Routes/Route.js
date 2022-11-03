import { createBrowserRouter } from "react-router-dom";
import { ProductsAndCartLoader } from "../Apis/ProductsAndCartLoader";
import About from "../Components/About";
import Home from "../Components/Home";
import Inventory from "../Components/Inventory";
import Login from "../Components/Login";
import ManageInventory from "../Components/ManageInventory";
import Order from "../Components/Order";
import Products from "../Components/Products";
import Shipping from "../Components/Shipping";
import SignUp from "../Components/SignUp";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <Products></Products>,
        loader: ProductsAndCartLoader,
      },
      {
        path: "/orders",
        element: <Order></Order>,
        loader: ProductsAndCartLoader,
      },
      { path: "/inventory", element: <Inventory></Inventory> },
      {
        path: "/manage-inventory",
        element: <ManageInventory></ManageInventory>,
      },
      { path: "/about", element: <About></About> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/shipping",
        element: (
          <PrivateRoute>
            {" "}
            <Shipping />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
