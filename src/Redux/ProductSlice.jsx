

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice(
    {
        name:"products",
        initialState:{
            products:[],
            filteredProducts:[] //for search
        },
        reducers:{
            addProduct : (state,action)=>{
                console.log(action.payload)
                state.products.push(action.payload)
                state.filteredProducts = state.products; //for search update
            },
           
            deleteProduct:(state,action)=>{
                state.products=state.products.filter(
                    (product)=>product.id!==action.payload)
                    state.filteredProducts = state.products; //for search update
            },
            searchProduct:(state,action)=>{
                const mydata=action.payload.toLowerCase();
                state.filteredProducts =state.products.filter((product)=>
                product.name.toLowerCase().includes(mydata))
            }
        }
    }
)

export const {addProduct ,deleteProduct,searchProduct} = productSlice.actions

export default productSlice.reducer