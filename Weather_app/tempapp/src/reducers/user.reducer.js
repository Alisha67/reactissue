import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authSvc from "../Components/Auth/auth.service";

export const getLoggedIn = createAsyncThunk(  // 2ta parameter 1st is name of reducer and 2nd is async call back
    "user/getLoggedIn", 
    async()=>{     // 2ta parameter 1st is payload and 2nd is thunkapi ..state is non persisting that is when hard reload garda state janxa
        let token = localStorage.getItem('token') ?? null;
        if(token){
            //api call
            let userDetail = await authSvc.getLoggedInUser();
            return userDetail.data.data;
        }
        else{
            throw 'token not set'
        }
    }


)                         
                        
const userSlicer = createSlice({
    name:"user",
    initialState:{
        loggedInUser:null
    },
    reducers:{
        setLoggedInUser:(state,action)=>{
           state.loggedInUser = action.payload

        }
        // ,
        // resetLoggedInfo:(state,action)=>{
        //     state.loggedInUser=null;
        // }
    },
    extraReducer:(builder)=>{  //mathi ko api call lai bind gareko extra reducer ma
        builder.addCase(getLoggedIn.fulfilled,(state,action)=>{
            //mathi ko sucess yesma auxa
            state.loggedInUser = action.payload
        })
        builder.addCase(getLoggedIn.rejected,(state,action)=>{
            //mathi ko else reject error yesma auxa
            state.loggedInUser=null;
        })

    }

    }

  
)
export const {setLoggedInUser} = userSlicer.actions;
export default userSlicer.reducer;