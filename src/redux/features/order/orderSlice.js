import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orders: []
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
        },
        orderPayment: (state) => {
            return initialState;
        }
    }
})

// Action creators are generated for each case reducer function
export const { addOrder, removeOrder, updateCantOrder, orderPayment } = orderSlice.actions

export default orderSlice.reducer

