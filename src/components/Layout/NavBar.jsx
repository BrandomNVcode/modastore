import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Avatar, Badge } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { sesion_destroy } from '../../helpers/sesion';
import { authDestroy } from '../../redux/features/auth/authSlice';



export const NavBar = ({fixed=true}) => {

    const dispatch = useDispatch();
    const navegacion = useNavigate();

    const { uid, name } = useSelector(state => state.auth);
    const { orders } = useSelector(state => state.order);

    const [collapse, setCollapse] = useState(true);
    const [avatarClick, setAvatarClick] = useState(false)


    const handleCollapse = () => {
        setCollapse(!collapse);
    }

    const handleLogout = () => {
        sesion_destroy();
        dispatch(authDestroy());
    }


    return (
        <header className={`navbar w-full px-8 sm:px-20 sm:py-1 bg-white border-b-2 border-yellow-100 ${fixed? 'fixed' : ' '} top-0 z-20`}>
            <nav className="px-2 sm:px-4 py-2.5">
                <div className="container flex flex-wrap justify-between items-center mx-auto">

                    <Link to='/'>
                        <span className="font-bold text-xl sm:text-3xl text-sky-900">ModaStore</span>
                    </Link>

                    <button 
                        onClick={handleCollapse}
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <svg className="w-6 h-6" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>

                    <div className={`${collapse? 'hidden': ''} w-full md:block md:w-auto`}>
                        <div className='flex flex-col sm:flex-row-reverse sm:justify-between'>
                            <ul className="md:hidden flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                
                                {
                                    uid?
                                    <>
                                        <li>
                                            <Link to='/order'>
                                                <p className="block py-2 text-end font-semibold">
                                                    <span className='pr-4'>
                                                        <ShoppingCartOutlinedIcon />
                                                    </span>
                                                    Mi lista
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <div onClick={handleLogout} className='cursor-pointer'>
                                                <span className="block py-2 text-end font-bold text-red-800">Cerrar Sesi??n</span>
                                            </div>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li>
                                            <Link to='/auth/login'>
                                                <span className="block py-2 text-end font-semibold">Login</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/auth/register'>
                                                <span className="block py-2 text-end font-semibold">Register</span>
                                            </Link>
                                        </li>
                                    </>
                                }

                            </ul>
                            <div className='w-full border-b border-gray-400 sm:hidden'></div>
                            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link to='/store/all'>
                                        <span className="block py-2 text-end">Productos</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/store/hombre'>
                                        <span className="block py-2 text-end">Hombre</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/store/mujer'>
                                        <span className="block py-2 text-end">Mujer</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                    {
                        uid &&

                        <div className='hidden md:flex justify-center items-center gap-4'>
                            <div className='mr-4 cursor-pointer' onClick={() => navegacion('/order')}>
                                <Badge color="secondary" badgeContent={orders.length} showZero>
                                    <ShoppingCartOutlinedIcon />
                                </Badge>
                            </div>
                            <span className='font-semibold text-slate-700'>Bienvenido, {name}</span>
                            <div className='relative'>
                                <div onClick={() => setAvatarClick(!avatarClick)} className='cursor-pointer'>
                                    <Avatar sx={{ bgcolor: deepOrange[400] }}>{name.at(0)}</Avatar>
                                </div>
                                <ul className={`${avatarClick? '' : 'hidden'} w-48 flex justify-start items-center flex-col bg-slate-100 border border-spacing-1 rounded-lg border-slate-300 absolute top-12 right-4`}>
                                    <li>
                                        <Link to='/order'>
                                            <p className="block py-2 text-end font-semibold">
                                                <span className='pr-4'>
                                                    <ShoppingCartOutlinedIcon />
                                                </span>
                                                Mi lista
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <div onClick={handleLogout} className='cursor-pointer'>
                                            <span className="block py-2 text-end font-bold text-red-800">Cerrar Sesi??n</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    }

                    {
                        !uid &&
                        <ul className="hidden md:flex md:flex-row sm:p-4">
                            <li>
                                <Link to='/auth/login'>
                                    <span className="block py-2 pr-4 text-end font-semibold">Login</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/auth/register'>
                                    <span className="block py-2 text-end font-semibold">Register</span>
                                </Link>
                            </li>
                        </ul>
                    }


                </div>
            </nav>
        </header>
    )
}
