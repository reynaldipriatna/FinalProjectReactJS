import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductList from "./pages/ProductList";
import DetailProduct from "./pages/DetailProduct";
import CheckoutProduct from "./pages/CheckoutProduct";
import Payment from "./pages/Payment";

const routerList = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: "detail/:id",
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
