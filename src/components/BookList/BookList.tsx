import React, { useEffect, useState } from 'react'

export interface IBook {
    ID: number,
    "title": string | null,
    "author": string | null,
    "content": string | null,
    "content_short": string | null,
    "publisher": string | null,
    "publisher_date": string | null,
    "pages": number | null,
    "language": string | null,
    "url_details": string | null,
    "url_download": string,
    "cover": string,
    "thumbnail": string | null,
    "num_comments": number | null,
}

const useBooks = () => {
    const [books, setBooks] = useState<IBook[]>([]);

        useEffect(()=> {
            fetch(process.env.NEXT_PUBLIC_API_URL + "/Books")
            .then((res) => res.json())
            .then((data: IBook[]) => setBooks(data))
            .catch((error) => console.error(error));
        }, []);
    return books;
}

export const BookList = () => {
        const books = useBooks();
        console.log(books);
    return (
    <div className='flex flex-col justify-center text-white items-center'>
        <ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {books.map((book) => (
       
                <li className='m-8'>
                    <div 
                    className="flex flex-col items-center  p-1
                    bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl
                    hover:bg-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900  h-full ">
                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book.cover} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.content_short}</p>
                        <a href={book.url_download}>Download this as a PDF</a>
                        
                        </div>
                    </div>
                </li>
            ))}
        </ul>    
    </div>
  )
}


