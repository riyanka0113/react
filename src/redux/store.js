import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./noteSlice";

export default configureStore({
  reducer: {
    notes: notesReducer,
  },
});


