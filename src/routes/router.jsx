import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { RootLayout } from "../Layouts/RootLayout";
import { DetailPage } from "../components/DetailPage";
import { ProductListing } from "../pages/ProductListing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
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
    ],
  },
]);
