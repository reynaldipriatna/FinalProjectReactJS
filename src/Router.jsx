import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductCatalog from "./pages/ProductCatalog";
import DetailProduct from "./pages/DetailProduct";
import CheckoutProduct from "./pages/CheckoutProduct";
import Payment from "./pages/Payment";

const routerList = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <ProductCatalog />,
      },
      {
        path: "detail/:program/:title",
        element: <DetailProduct />,
      },
      {
        path: "checkout",
        element: <CheckoutProduct />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={routerList} />;
};

export default Router;
