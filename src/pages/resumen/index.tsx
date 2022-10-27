import React, { NextPage } from 'next'
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';

interface TProps {
  response: string;
}

const Resumen: NextPage<TProps> = ({response}) => {
  return (
  <ApplicationWrapper title='Resumen' description='bienvenido al Resumen'>
    <h1 className="text-3xl my-8 font-bold text-center">
        Detalle gastos comunes 2022 {response}
    </h1>
    <div className='flex justify-end'>
        <h3 className=' bg-gray-50 mr-20 mx-8 bg-opacity-80 text-gray-700 font-bold w-fit py-2 px-4 border border-slate-400 rounded my-5 '>Total gastos Octubre : $200.000</h3>
    </div>

    
    <div className='w-full flex items-center px-8'>
        <div className="overflow-x-auto inline-block w-full relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left border-collapse border  border-slate-400 text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700  bg-opacity-80 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6 border border-slate-300 ">
                            Depa
                        </th>
                        <th scope="col" className="py-3 px-6 border border-slate-300 ">
                            Nombre Propietario
                        </th>
                        <th scope="col" className="py-3 px-6 border border-slate-300 ">
                            Ene
                        </th>
                        <th scope="col" className="py-3 px-6 border border-slate-300 ">
                            Feb
                        </th>
                        <th scope="col" className="py-3 px-6 border border-slate-300 ">
                            Mar
                        </th>
                        <th scope="col" className="py-3 px-6 border border-slate-300 ">
                            Abr
                        </th>
                        <th scope="col" className="py-3 px-6 border border-slate-300 ">
                            May
                        </th>
                        <th scope="col" className="py-3 px-6 border border-slate-300 ">
                            Jun
                        </th><th scope="col" className="py-3 px-6 border border-slate-300 ">
                            Jul
                        </th>
                        <th scope="col" className="py-3 px-6 border border-slate-300 ">
                            Ago
                        </th>
                        <th scope="col" className="py-3 px-6 border border-slate-300 ">
                            Sep
                        </th><th scope="col" className="py-3 px-6 border border-slate-300 ">
                            Oct
                        </th>
                        <th scope="col" className="py-3 px-6 border border-slate-300 ">
                            Nov
                        </th>
                        <th scope="col" className="py-3 px-6 border border-slate-300 ">
                            Dic
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white  bg-opacity-80 border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 border border-slate-300  ">
                           1
                        </th>
                        <th scope="row" className="py-4 px-6 border border-slate-300  ">
                            Juan Quilpue
                        </th>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                        </td>
                    </tr>
                    <tr className="bg-white  bg-opacity-80 border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 border border-slate-300  ">
                           2
                        </th>
                        <th scope="row" className="py-4 px-6 border border-slate-300  ">
                            Clara Sandoval
                        </th>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                        </td>
                    </tr>
                    <tr className="bg-white  bg-opacity-80 border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 border border-slate-300  ">
                           11
                        </th>
                        <th scope="row" className="py-4 px-6 border border-slate-300  ">
                            Maria Martinez
                        </th>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                    </td>
                    </tr>
                    <tr className="bg-white  bg-opacity-80 border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="py-4 px-6 border border-slate-300  ">
                           15
                        </th>
                        <th scope="row" className="py-4 px-6 border border-slate-300  ">
                            Pedro Pedrero
                        </th>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                            X    
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                             
                        </td>
                        <td className="py-4 px-6 border border-slate-300 ">
                             
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> 

  </ApplicationWrapper>
  );
};

export default Resumen;