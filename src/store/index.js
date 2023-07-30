import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/slice";

export default configureStore({
  reducer: {
    product: productReducer,
  },
});
