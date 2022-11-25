import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import orderSlice from './features/order/orderSlice';


//const listenerMiddleware = createListenerMiddleware();



/*listenerMiddleware.startListening({
    actionCreator: authLogin,
    effect: async (action, listenerApi) => {

        listenerApi.dispatch(todoAdded('Buy pet food'))
      
    },
})*/



export const store = configureStore({
    reducer: {
        auth: authReducer,
        order: orderSlice
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})