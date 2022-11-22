import React, { useState } from 'react';


export const Login = ({viewAuth, setViewAuth}) => {

    const [desabilitar, setDesabilitar] = useState(false);
    const [dataForm, setDataForm] = useState({});



    const styleLogin = {
        background: "linear-gradient( to right, #ee7724, #d8363a, #dd3675, #b44593)"
    }



    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
    }



    const handeToRegister = () => {
        setViewAuth(!viewAuth);
    }


    return (
        <>
            <div className="text-center mb-8">
                <h2 className='mx-auto font-semibold text-2xl md:text-5xl'>ModaStore</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className='mb-3'>Correo:</label>
                    <input
                        type="email"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className='mb-3'>Contraseña:</label>
                    <input
                        type="password"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div>
                <div className="text-center pt-1 my-12 pb-1">
                    <input
                        className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 cursor-pointer"
                        type='submit'
                        value='Acceder'
                        style={styleLogin}
                        disabled={desabilitar}
                    />
                    <a className="text-gray-500" href="#!">Forgot password?</a>
                </div>
                <div className="flex items-center justify-center flex-wrap pb-6">
                    <p className="mb-0 mr-2">No tiene una cuenta?</p>
                    <button
                        onClick={handeToRegister}
                        className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                    Registrarse
                    </button>
                </div>
            </form>
        </>
    )
}