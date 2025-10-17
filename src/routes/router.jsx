import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { RootLayout } from "../Layouts/RootLayout";
import { DetailPage } from "../components/DetailPage";
import { ProductListing } from "../pages/ProductListing";
import { ProductDetails } from "../pages/ProductDetails";
import { Cart } from "../pages/Cart";
import { CategoryProducts } from "../pages/CategoryProducts";
import { Test } from "../pages/Test";
import { Login } from "../pages/Login.tsx";
import { AuthLayout } from "../Layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "products",
        element: <ProductListing />,
      },

      {
        path: "about",
        element: <About />,
        children: [
          {
            path: ":newname",
            element: <DetailPage />,
          },
        ],
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "products/category/:catId",
        element: <CategoryProducts />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
