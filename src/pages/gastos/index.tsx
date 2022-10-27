import React, { NextPage } from 'next'
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';
import Link from 'next/link';

interface TProps {
  response: string;
}
const Gastos: NextPage<TProps> = ({response}) => {
  return (
  <ApplicationWrapper title='Gastos' description='bienvenido a los gastos'>
    <h1 className="text-3xl my-8 font-bold text-center">
        Detalle de gastos del mes de Octubre 2022 {response}
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
    <div className='flex justify-center my-5'>   
        <Link href='/gastos/ingresar'>
            <button className="bg-blue-500 mx-8  hover:bg-blue-700 text-white font-bold w-fit py-2 px-4 border border-blue-700 rounded">
                ingresar gasto
            </button>
        </Link>
    </div>
    </ApplicationWrapper>
  );
};
export default Gastos;

