import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orders: [
        {
            id: 0,
            talla: 'S',
            cant: 1
        },
        {
            id: 10,
            talla: 'M',
            cant: 2
        },
        {
            id: 16,
            talla: 'L',
            cant: 1
        },
    ]
}

export const orderSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload)
        },
        removeOrder: (state, action) => {
            state.orders = state.orders.filter(order => order.id !== action.payload)
        },
        updateCantOrder: (state, action) => {
            state.orders = state.orders.map(order => {
                if(order.id === action.payload.id) {
                    order.cant = action.payload.cantidad
                }
                return order;
            })
        }
    }
})

// Action creators are generated for each case reducer function
export const { addOrder, removeOrder, updateCantOrder } = orderSlice.actions

export default orderSlice.reducer

