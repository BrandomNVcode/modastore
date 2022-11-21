import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Home } from '../pages/Home/Home';
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
                </Routes>
            </BrowserRouter>
        </>
    )
}
