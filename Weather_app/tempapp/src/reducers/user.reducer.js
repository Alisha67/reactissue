import { createSlice } from "@reduxjs/toolkit";

const userSlicer = createSlice({
    name:"user",
    initialState:{
        loggedInUser:null
    },
    reducers:{
        setLoggedInUser:(state,action)=>{

        }
    }
}
  
)
export const {setLoggedInUser} = userSlicer.actions;
export default userSlicer.reducer;