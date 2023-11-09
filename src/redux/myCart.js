import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action creator using createAsyncThunk
export const fetchUserData = createAsyncThunk('cart/fetchUserData', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error.message);
    }
});

const INITIAL_STATE = {
    cartList: [],
    cartCount: 0,
    userDetail: null, // Updated to be an object or null
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            const itemExist = state.cartList.find((item) => item.id === action.payload.id);
            if (itemExist) {
                state.cartList.forEach((item) => {
                    if (item?.id === action.payload.id) {
                        item.count = 1;
                    }
                });
                return;
            }
            state.cartList.push({
                ...action.payload,
                count: 1,
            });
        },
        increment: (state, action) => {
            const productId = action.payload;
            state.cartList.forEach((item) => {
                if (item?.id === productId) {
                    item.count++;
                }
            });
        },
        decrement: (state, action) => {
            const productId = action.payload;
            state.cartList.forEach((item) => {
                if (item?.id === productId) {
                    item.count--;
                }
            });
        },

    },
    extraReducers: (builder) => {
        // Handle the success case of the async action
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.userDetail = action.payload;
        });
    },
});

export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;