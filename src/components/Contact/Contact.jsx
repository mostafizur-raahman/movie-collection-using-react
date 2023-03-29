import React from 'react';

const Contact = () => {
    return (
        <>
            <form action="">
                <h1 className='ml-10 mt-20 text-3xl font-bold mb-3'>Contact us</h1>
                <div className='ml-10'>
                    <input type="text" placeholder="Type name here" className="input input-bordered input-primary w-full max-w-xs mb-3" /> <br />
                    <input type="email" placeholder="Type email here" className="input input-bordered input-primary w-full max-w-xs mb-3" /> <br />
                    <textarea className="textarea textarea-secondary mb-3" placeholder="Bio"></textarea> <br />
                    <button className="btn btn-primary">send</button>
                </div>
            </form>
        </>
    );
};

export default Contact;