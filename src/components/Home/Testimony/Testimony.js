import React from 'react';
import person from "../../../images/person.png";

const Testimony = () => {
    return (
        <div className='container mx-auto pt-4 pb-8'>
            <h2 className='text-3xl font-bold pb-5'>Our satisfied customer says</h2>
            <p className='text-gray-300 text-xs w-96 mx-auto'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            <div className='grid md:grid-cols-3 gap-3 pt-8'>
                <div className='space-y-4 bg-gray-400 py-5 rounded'>
                    <div className='rounded-full w-24 h-20 mx-auto'>
                        <img className='rounded-full bg-gray-500' src={person} alt="" />
                    </div>
                    <p className='text-xs w-48 mx-auto'>I am very much satisfied with Freshnesecom's service. Hope, they will do great in future.</p>
                    <h6 className='text-sm font-medium'>Garreth Smith</h6>
                    <span className='text-xs tracking-[.25em]'>System Analyst</span>
                </div>
                <div className='space-y-4 bg-gray-400 py-5 rounded'>
                    <div className='rounded-full w-24 h-20 mx-auto'>
                        <img className='rounded-full bg-gray-500' src={person} alt="" />
                    </div>
                    <p className='text-xs w-48 mx-auto'>I am very much satisfied with Freshnesecom's service. Hope, they will do great in future.</p>
                    <h6 className='text-sm font-medium'>Garreth Smith</h6>
                    <span className='text-xs tracking-[.25em]'>System Analyst</span>
                </div>
                <div className='space-y-4 bg-gray-400 py-5 rounded'>
                    <div className='rounded-full w-24 h-20 mx-auto'>
                        <img className='rounded-full bg-gray-500' src={person} alt="" />
                    </div>
                    <p className='text-xs w-48 mx-auto'>I am very much satisfied with Freshnesecom's service. Hope, they will do great in future.</p>
                    <h6 className='text-sm font-medium'>Garreth Smith</h6>
                    <span className='text-xs tracking-[.25em]'>System Analyst</span>
                </div>
            </div>
        </div>
    );
};

export default Testimony;