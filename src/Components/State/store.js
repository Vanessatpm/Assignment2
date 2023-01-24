import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userReducer";
export default configureStore({
  reducer: { user: userSliceReducer },
});
