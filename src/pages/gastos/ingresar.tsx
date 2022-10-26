import React, { NextPage } from 'next'
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';
import Link from 'next/link';

interface TProps {
  response: string;
}
const Gastos: NextPage<TProps> = ({response}) => {
  return (
  <ApplicationWrapper title='Gastos' description='bienvenido a los gastos'>
    <h1 className="text-3xl my-8 font-bold underline">
    Gastos {response}
    </h1>
<div className='flex justify-center my-5'>   
  <button className="mx-8 bg-blue-500 hover:bg-blue-700 text-white font-bold w-fit py-2 px-4 border border-blue-700 rounded">
  Button
</button>
<Link href='/gastos'>
<button className="bg-blue-500 mx-8  hover:bg-blue-700 text-white font-bold w-fit py-2 px-4 border border-blue-700 rounded">
  ingresar gasto
</button>
</Link>
</div>
  </ApplicationWrapper>
  );
};
export default Gastos;

