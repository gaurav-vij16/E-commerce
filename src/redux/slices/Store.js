import { configureStore } from '@reduxjs/toolkit';
import CartsliceReducer from './Cartslice'; // Import the reducer, not the slice

export const store = configureStore({
    reducer: {
        Cart: CartsliceReducer, // Use the reducer here, not the slice
    },
});
