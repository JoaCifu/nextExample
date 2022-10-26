import React, { NextPage } from 'next'
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';

interface TProps {
  response: string;
}

const Resumen: NextPage<TProps> = ({response}) => {
  return (
  <ApplicationWrapper title='Resumen' description='bienvenido al Resumen'>
    <h1 className="text-3xl font-bold underline">
      Resumen
    </h1>

    
<div className="overflow-x-auto relative">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6 rounded-l-lg">
                    Product name
                </th>
                <th scope="col" className="py-3 px-6">
                    Qty
                </th>
                <th scope="col" className="py-3 px-6 rounded-r-lg">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="py-4 px-6">
                    1
                </td>
                <td className="py-4 px-6">
                    $2999
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="py-4 px-6">
                    1
                </td>
                <td className="py-4 px-6">
                    $1999
                </td>
            </tr>
            <tr className=" dark:bg-gray-800">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="py-4 px-6">
                   1
                </td>
                <td className="py-4 px-6">
                    $99
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="py-3 px-6 text-base">Total</th>
                <td className="py-3 px-6">3</td>
                <td className="py-3 px-6">21,000</td>
            </tr>
        </tfoot>
    </table>
</div>

  </ApplicationWrapper>
  );
};

export default Resumen;