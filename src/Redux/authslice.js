import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user: null
}
 
const authSlice=createSlice({
    name:'Auth',
    initialState,
    reducers:{
        setuser:(state,action)=>{
            state.user=action.payload;
        },
        cleanuser:(state)=>{
            state.user= null;
        }
    }
})

export const {setuser,cleanuser}=authSlice.actions;
export default authSlice.reducer;