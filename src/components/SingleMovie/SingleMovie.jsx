import React from 'react';

const SingleMovie = (props) => {
    const { category, description, imdbRating, movieName, poster, watchTime } = props.movie;
    return (
        <div className='border-black p-2 border-2'>
            <img className='w-[200px] mx-auto h-[300px]' src={poster} alt="" />
            <h1 className='text-xl text-center'>{movieName}</h1>
            <p className='text-center'>{description}</p>
            <p className='text-center'><span className='font-bold'>Catagories:</span> {category}</p>
            {/* rating and watchtime */}
            <div className="flex gap-3 justify-around">
                <p className=''><span className='font-bold'>Catagories:</span>  {imdbRating} ratings</p>
                <p className=''><span className='font-bold'>Watch Time:</span>  {watchTime}M</p>
            </div>
            <div className='text-center mt-4 mb-5'>
                <button onClick={() => props.handlewatchTime(watchTime)} className="btn btn-outline btn-primary w-2/4">Book Now!</button>
            </div>
        </div>
    );
};

export default SingleMovie;