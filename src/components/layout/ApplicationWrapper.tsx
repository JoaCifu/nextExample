import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, {FC, PropsWithChildren} from 'react'
import { Footer } from '../common/Footer';

interface TProps {
    title: string;
    description?: string;
} 
export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({ title, description, children }) => {
  return <>
    <div className='bg-black min-h-screen flex flex-col'>
<Head>
    <title>{title} - ADcon</title>
    {description && <meta name='description' content={description} charSet="utf8" />}
    
    <link rel="icon" href="/favicon.ico" />
</Head>
<header className='bg-violet-200 h-20 '>
    <nav className='w-full flex gap-5 p-6 items-center text-2xl'>
    <Link href='/'>Home </Link>
        <Link href='/resumen'>Resumen </Link>
        <Link href='/pagos'>Pagos </Link>
        <Link href='/gastos'>Gastos </Link>
        <Link href='/cobros'>Cobros </Link>
    </nav>
</header>
<main className='bg-gradient-to-r from-violet-500 to-fuchsia-500  grow flex flex-col'>{children}</main>
<Footer/>
    </div>
    </>
}
