import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { LoginScreen } from '../pages/Auth/LoginScreen';
import { Home } from '../pages/Home/Home';
import { Order } from '../pages/Order/Order';
import { Product } from '../pages/Product/Product';
import { Store } from '../pages/Store/Store';



export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/product' element={<Product />}/>
                    <Route path='/store' element={<Store />}/>
                    <Route path='/order' element={<Order />}/>
                    <Route path='/auth/login' element={<LoginScreen />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
