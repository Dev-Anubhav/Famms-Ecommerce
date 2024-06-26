import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    products:[],
    status:"idle"
}
const productslice=createSlice({
    name:"product",
    initialState,
   extraReducers:(builder)=>{
    builder
    .addCase(fetchProduct.fulfilled, (state,action)=>{
        state.products=action.payload
        state.status= "success"
    })
    .addCase(fetchProduct.pending, (state,action)=>{
        state.status = "pending";
    })
   }
})

export const fetchProduct=createAsyncThunk("product/fetchproduct",async()=>{
    const res = await axios.get('https://dummyjson.com/products?limit=100');
        return res.data.products;
})

export default productslice.reducer;