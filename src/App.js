import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsAndCartLoader } from "./Apis/ProductsAndCartLoader";
import "./App.css";
import About from "./Components/About/About";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import Order from "./Components/Order/Order";
import Products from "./Components/Products/Products";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
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
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
