import React from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { LoginScreen } from '../pages/Auth/LoginScreen';
import { RegisterScreen } from '../pages/Auth/RegisterScreen';
import { Home } from '../pages/Home/Home';
import { Order } from '../pages/Order/Order';
import { Product } from '../pages/Product/Product';
import { Store } from '../pages/Store/Store';



export const AppRouter = () => {


    const { uid } = useSelector(state => state.auth);


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/product' element={<Product />}/>
                    <Route path='/store' element={<Store />}/>
                    <Route path='/order' element={uid? <Order /> : <Navigate to={'/'}/>}/>
                    <Route path='/auth/login' element={!uid? <LoginScreen /> : <Navigate to={'/'}/>}/>
                    <Route path='/auth/register' element={!uid? <RegisterScreen /> : <Navigate to={'/'}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
