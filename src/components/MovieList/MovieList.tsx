import React, { useEffect, useState } from 'react'


export interface IMovie {
    Title: string,
    "US Gross": number | null,
    "Worldwide Gross": number | null,
    "US DVD Sales": number | null,
    "Production Budget": number | null,
    "Release Date": string,
    "MPAA Rating": string,
    "Running Time min": number | null,
    "Distributor": string,
    "Source": number | null,
    "Major Genre": number | null,
    "Creative Type": number | null,
    "Director": null,
    "Rotten Tomatoes Rating": number | null,
    "IMDB Rating": number | null,
    "IMDB Votes": number | null,
    "id": number | null,
    "Poster": string
}

const useMovies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

        useEffect(()=> {
            fetch(process.env.NEXT_PUBLIC_API_URL + "/movies")
            .then((res) => res.json())
            .then((data: IMovie[]) => setMovies(data.slice(0, 5)))
            .catch((error) => console.error(error));
        }, []);
    return movies;
}

export const MovieList = () => {
        const movies = useMovies();
        console.log(movies);
    return (
    <div className='flex flex-col justify-center text-white items-center'>
        <ul className='w-full grid grid-cols-2'>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <img src={movie.Poster} alt={`${movie.Title} poster`}/>
                    <strong>{movie.Title}</strong>
                </li>
            ))}
        </ul>    
    </div>
  )
}


