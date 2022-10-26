import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ApplicationWrapper } from '../components/layout/ApplicationWrapper';

type HomeProps = {
  response: string
}

const Home: NextPage<HomeProps> = ({response}) => {
  return (
  <ApplicationWrapper title='Home' description='aqui en el home, se pasa me-home'>
    <div className=" bg-[url('/images/fondo.jpg')] bg-cover grow flex flex-col justify-center items-center">
      <div className='bg-violet-500 grow bg-opacity-30 w-full justify-center flex items-center' >
        <h1 className="text-7xl font-bold underline text-white">
          Bienvenido a la App
        </h1>
      </div>
    </div>
  </ApplicationWrapper>
  );
};

export default Home;
