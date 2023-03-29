import React, { useEffect, useState } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie';

const Card = ({ handlewatchTime }) => {
    const [movies, setmovies] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('data.json');
            const data = await res.json();
            setmovies(data);
            console.log(data);
        }
        loadData();

    }, [])

    return (
        <div>
            <h1 className='text-center text-2xl mb-5 bg-yellow-300 w-3/4 mx-auto rounded-2xl mt-5'>latest Movies</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3'>
                {
                    movies.map((movie) => {
                        return <SingleMovie handlewatchTime={handlewatchTime} movie={movie}></SingleMovie>
                    })
                }
            </div>
        </div>
    );
};

export default Card;