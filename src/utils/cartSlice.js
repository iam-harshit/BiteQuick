import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: []
    },
    // Here reducers name means it having lots of reducers of different actions.
    reducers:{
        addItem: (state, action) => {
            // mutating the state here
            // but behind the scene redux immutating the state like this
            // const newState = [...state];
            // newState.items.push(action.paylod);
            // return newState;

            //How immer works? Immer takes current state and existing state and then find diff between these two states and then return new state.

            state.items.push(action.payload); // This mutable convert to immutable with the help of immer library and this library used by Redux Toolkit
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;