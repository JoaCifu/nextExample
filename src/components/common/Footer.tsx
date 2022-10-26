import Image from 'next/image'
import React, { FC } from 'react'


export const Footer:FC = () => {
  return (
    <div className='bg-violet-800 flex p-6 text-white items-center justify-center text-2xl'>
    <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
    >
        Powered by{' '}
        <span className='p-4'>
        <Image src="/fotoperfilChica.jpg" alt="Vercel Logo" width={60} height={60}  className="rounded-full"/>
        </span>
    </a>
    <p>  JOAKíNG</p>
    </div>

    )
}
