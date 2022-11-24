import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../redux/features/auth/authSlice';


export const Login = () => {

    const dispatch = useDispatch();

    const [desabilitar, setDesabilitar] = useState(false);
    const [dataForm, setDataForm] = useState({});



    const styleLogin = {
        background: "linear-gradient(0deg, rgba(195,136,34,1) 0%, rgba(106,162,136,1) 70%, rgba(45,253,247,1) 100%)"
    }



    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(authLogin());
    }


    return (
        <div className='w-full mx-auto px-4 sm:p-0 sm:max-w-lg'>
            <div className="text-center mb-8">
                <h2 className='mx-auto font-bold text-2xl text-gray-600 font-sans'>Inicio de Sesión</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-8">
                <input
                        type='email'
                        className="form-control block w-full px-8 py-4 rounded-full text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-200 focus:outline-none"
                        id="email"
                        name="email"
                        placeholder="Correo electrónico"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-8">
                    <input
                        type="password"
                        className="form-control block w-full px-8 py-4 rounded-full text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-200 focus:outline-none"
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={handleChange}
                    />
                </div>
                <div className="text-center mb-4">
                    <input
                        className="inline-block py-5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 cursor-pointer"
                        type='submit'
                        value='Iniciar Sesión'
                        style={styleLogin}
                        disabled={desabilitar}
                    />
                    <a className="text-gray-500" href="#!">Forgot password?</a>
                </div>
                <div className="flex items-center justify-center flex-wrap pb-6">
                    <p className="mb-0 mr-2">No tiene una cuenta?</p>
                    <button
                        className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                    Registrate
                    </button>
                </div>
            </form>
        </div>
    )
}