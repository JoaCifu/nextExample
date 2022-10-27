import React, { NextPage } from 'next'
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';

interface TProps {
    response: string;
}

const Usuarios: NextPage<TProps> = ({response}) => {
    return (
    <ApplicationWrapper title='Usuarios' description='bienvenido a Usuarios'>
        <h1 className="text-3xl font-bold underline text-center my-4">Datos Usuario</h1>
        <div className='flex justify-center '>
            <div className=' bg-white rounded w-fill px-8 py-4 '>
                <form>

                    <h3 className='my-3'>Datos Personales</h3>
                    <div className='grid grid-cols-3 gap-3'>   
                        <span className=" col-span-2 block text-sm font-medium text-slate-700">
                            Nombre</span>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Perfil</label>
                        <input type="text" value="Ingrese Nombre de usuario" disabled className=" col-span-2 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 form-multiselect"/>
                            <select disabled id="countries_disabled" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </select>
                        <span className="col-span-3 block mt-4 text-sm font-medium text-slate-700">
                            e-mail</span>
                        <input type="text" value="correo@mail.com" disabled className="col-span-3 form-input mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"/>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"/>
                        

                      
                        
                    <button className="bg-blue-500 mx-8 my-5 hover:bg-blue-700 text-white font-bold w-fit py-2 px-4 border border-blue-700 rounded">
                      Guardar</button>
                    <button className="bg-blue-500 mx-8 my-5 hover:bg-blue-700 text-white font-bold w-fit py-2 px-4 border border-blue-700 rounded">
                      Pagos</button>
                    </div>
                </form>
            </div>
        </div>
        <h1 className='pt-20 text-2xl px-8'>Detalle cuentas usuario</h1>
        <div className=' w-full flex items-center pt-4 px-8'>
            <div className="overflow-x-auto inline-block w-full relative shadow-md sm:rounded-lg">
                <table className="mb-20 w-full text-sm text-left border-collapse border  border-slate-400 text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700  bg-opacity-80 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6 border border-slate-300 ">
                                Fecha
                            </th>
                            <th scope="col" className="py-3 px-6 border border-slate-300 ">
                                Detalle
                            </th>
                            <th scope="col" className="py-3 px-6 border border-slate-300 ">
                                Monto
                            </th>
                            <th scope="col" className="py-3 px-6 border border-slate-300 ">
                                Estado
                            </th>
                            <th scope="col" className="py-3 px-6 border border-slate-300 ">
                                Adjunto
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white  bg-opacity-80 border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6 border border-slate-300 ">
                                20 Octubre
                            </td>
                            <th scope="row" className="py-4 px-6 border border-slate-300  ">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="py-4 px-6 border border-slate-300 ">
                                $2999
                            </td>
                            <td className="py-4 px-6 border border-slate-300 ">
                                Pagado
                            </td>
                            <td className="py-4 px-6 border border-slate-300 ">

                            </td>
                        </tr>
                        <tr className="bg-white bg-opacity-80 border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6 border border-slate-300 ">
                                25 - octubre
                            </td>
                            <th scope="row" className="py-4 px-6 border border-slate-300  ">
                                Microsoft Surface Pro
                            </th>
                            <td className="py-4 px-6 border border-slate-300 ">
                                $1999
                            </td>
                            <td className="py-4 px-6 border border-slate-300 ">
                                pagado
                            </td>
                            <td className="py-4 px-6 border border-slate-300 ">
                            </td>
                        </tr>
                        <tr className="bg-white bg-opacity-80 dark:bg-gray-800">
                            <td className="py-4 px-6 border border-slate-300 ">
                                12 - octubre
                            </td>
                            <th scope="row" className="py-4 px-6 border border-slate-300  ">
                                Magic Mouse 2
                            </th>
                            <td className="py-4 px-6 border border-slate-300 ">
                                $99
                            </td>
                            <td className="py-4 px-6 border border-slate-300 ">
                                pagado
                            </td>
                            <td className="py-4 px-6 border border-slate-300 ">
                            </td>
                        </tr>
                        <tr className="bg-white bg-opacity-80 dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" className="py-4 px-6  "/>
                            <th className="py-4 px-6 ">
                            </th>
                            <td className="py-4 px-6  ">
                            </td>
                            <td className="py-4 px-6  ">
                            </td>
                            <td className="py-4 px-6  ">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>  



    </ApplicationWrapper>
  );
};

export default Usuarios;