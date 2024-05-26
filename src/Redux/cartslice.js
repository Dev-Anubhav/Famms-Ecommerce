import { createSlice } from "@reduxjs/toolkit";


const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

// Helper function to load cart from local storage
const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
};


const initialState={
    cart:loadCartFromLocalStorage()
}

const cartslice=createSlice({
    name:"cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const obj = { ...action.payload, q: 1 };

            const itemAvail = state.cart.find((item) => item.id === obj.id);
            if (!itemAvail) {
                state.cart.push(obj)
            }
            else {
                itemAvail.q += 1;
            };
            saveCartToLocalStorage(state.cart);

        },
        removeCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            saveCartToLocalStorage(state.cart);
        },
        Increase: (state, action) => {
            const avail = state.cart.find((item) => item.id === action.payload.id)
            if (avail) {
                avail.q += 1;
            }
            saveCartToLocalStorage(state.cart);
        },
        Decrease: (state, action) => {
            const avail = state.cart.find((item) => item.id === action.payload.id)
            if (avail && avail.q > 1) {
                avail.q -= 1;
            }
            saveCartToLocalStorage(state.cart);
        }

    }
})

export const {addCart,removeCart,Increase,Decrease} = cartslice.actions;
export default cartslice.reducer;