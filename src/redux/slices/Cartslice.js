 
 import { createSlice } from '@reduxjs/toolkit'

export const Cartslice = createSlice({
    name: 'Cart', 
    initialState:[],
    reducers: {
        add :(state , actions)=> {state.push(actions.payload)},

        remove:(state , actions)=> {
            return state.filter(item => item.id !== actions.payload);
        },
    },
});

export const{add , remove} = Cartslice.actions;

export default Cartslice.reducer