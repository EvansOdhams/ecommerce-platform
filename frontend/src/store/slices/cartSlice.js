import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.total += action.payload.price;
        },
        removeItem: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                state.total -= state.items[itemIndex].price;
                state.items.splice(itemIndex, 1);
            }
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;