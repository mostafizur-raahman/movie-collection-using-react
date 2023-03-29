import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const SideCard = ({ watchTime }) => {
    console.log(watchTime);

    const [updateTime, setUpdateTime] = useState(watchTime);
    const [breakTime, setBreaktime] = useState(0);

    useEffect(() => {
        const getWatchTimeFromLocalStorage = localStorage.getItem("watchTime");
        setUpdateTime(getWatchTimeFromLocalStorage);
        // breaktime
        const getBreaktime = localStorage.getItem("breakTime");
        console.log(getBreaktime);
        if (getBreaktime) {
            setBreaktime(getBreaktime);
        }
        else setBreaktime(0);
    }, [watchTime, breakTime]);

    const addBreakTime = (time) => {
        const final = time + parseInt(breakTime)
        localStorage.setItem("breakTime", final);
        setBreaktime(final);

    }

    const notify = () => {
        toast("Movies watch time completed! yoo yoo baten")
    }
    return (
        <div>
            <h1 className='text-center text-4xl'>Total watchTime </h1>
            <h1 className='text-center text-4xl font-bold bg-sky-500 '>{updateTime}M</h1>
            <h1 className='text-3xl font-bold text-center mt-4'>Break time</h1>
            <div className='flex gap-10 mt-6'>
                <button onClick={() => addBreakTime(10)} className='btn btn-info bg-red-400 mx-6'> 10M</button>
                <button onClick={() => addBreakTime(20)} className='btn btn-success'>20M</button>
                <button onClick={() => addBreakTime(30)} className='btn btn-alart bg-sky-600'> 30M</button>
            </div>
            <h1 className='text-2xl text-center'>total break time : {breakTime}</h1>
            <div className='text-center'>
                <h1 onClick={notify} className='btn btn-info'>Complete</h1>
            </div>

        </div>
    );
};

export default SideCard;