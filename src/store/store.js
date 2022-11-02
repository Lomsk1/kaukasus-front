import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tagStore from "../Components/Tags/tag-store";
import membersStore from "../members/member-store";
import { adminStore } from "../Pages/Admin/adminStore";
import photoStore from "../Pages/Photo_Blog/photo-store";
import tourStore from "../Pages/Tour/tour-Store";

const rootReducer = combineReducers({
  ...tourStore,
  ...membersStore,
  ...adminStore,
  ...photoStore,
  ...tagStore,
});

export const store = configureStore({
  reducer: rootReducer,
});
