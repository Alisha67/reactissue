import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer";

const store = configureStore({
  reducer: {  //combinartion of state and action
 user:userReducer
    }
}
  
);
export default store;