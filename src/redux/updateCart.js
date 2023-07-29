import { createSlice } from '@reduxjs/toolkit'

export const updateCart = createSlice({
    name: 'updateCart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            const index = state.items.findIndex((item) => item.product.id === action.payload.id)
            if(index !== -1){
                state.items[index].count += 1;
            }
            else {
                const data = {
                    product: action.payload,
                    count: 1
                };
                state.items = [...state.items, data]
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.product.id !== action.payload.id)
        },
        clearCart: (state) => {
            state.items = []
        },
    },
})

export const { addToCart, removeFromCart, clearCart } = updateCart.actions

export default updateCart


