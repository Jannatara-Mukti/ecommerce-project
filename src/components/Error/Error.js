import React from 'react';
import error from '../../images/error.jpg';

const Error = () => {
    return (
        <div className='min-h-screen'>
            <img className='w-full h-full' src={error} alt="" />
        </div>
    );
};

export default Error;