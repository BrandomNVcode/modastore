import React, { useState } from 'react';


export const Register = () => {

    const [desabilitar, setDesabilitar] = useState(false);
    const [dataForm, setDataForm] = useState({});



    const styleRegister = {
        background: "linear-gradient(0deg, rgba(195,136,34,1) 0%, rgba(106,162,136,1) 70%, rgba(45,253,247,1) 100%)"
        //rgba(117,179,150,1) 50%
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


    return (
        <div className='w-full mx-auto px-4 sm:p-0 sm:max-w-lg'>
            <div className="text-center mb-8">
                <h2 className='mx-auto font-bold text-2xl text-gray-600 font-sans'>Registrate con ModaStore</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-8">
                    <input
                        type='text'
                        className="form-control block w-full px-8 py-4 rounded-full text-base font-normal text-gray-800 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-200 focus:outline-none"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre de usuario"
                        onChange={handleChange}
                    />
                </div>
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
                        value='Registrarme'
                        style={styleRegister}
                        disabled={desabilitar}
                    />
                </div>
                <div className="flex items-center justify-center flex-wrap pb-6">
                    <p className="mb-0 mr-2">Ya eres miembro?</p>
                    <button
                        className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                    Iniciar Sesión
                    </button>
                </div>
            </form>
        </div>
    )
}