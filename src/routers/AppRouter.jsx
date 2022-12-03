import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { Payment } from '../components/Payment/Payment';
import { sesion } from '../helpers/sesion';
import { LoginScreen } from '../pages/Auth/LoginScreen';
import { RegisterScreen } from '../pages/Auth/RegisterScreen';
import { Home } from '../pages/Home/Home';
import { Order } from '../pages/Order/Order';
import { Product } from '../pages/Product/Product';
import { Store } from '../pages/Store/Store';
import { authLogin } from '../redux/features/auth/authSlice';



export const AppRouter = () => {

    const dispatch = useDispatch();

    const [load, setLoad] = useState(true);

    useEffect(() => {
        if(sesion()) {
            dispatch(authLogin());
        }
        setLoad(false);
    }, [])


    const { uid } = useSelector(state => state.auth);


    return (
        <>
        {
            load?
            <div>Cargando...</div>
            :
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/product/:gen/:id' element={<Product />}/>
                    <Route path='/store/:gen' element={<Store />}/>
                    <Route path='/order' element={uid? <Order /> : <Navigate to={'/'}/>}/>
                    <Route path='/auth/login' element={!uid? <LoginScreen /> : <Navigate to={'/'}/>}/>
                    <Route path='/auth/register' element={!uid? <RegisterScreen /> : <Navigate to={'/'}/>}/>
                    <Route path='/prueba' element={<Payment />}/>
                </Routes>
            </BrowserRouter>
        }
        </>
    )
}
