import React from 'react';

const CompanyPolicy = () => {
    return (
        <div className='container mx-auto py-16'>
            <h2 className='text-3xl font-bold pb-12'>See Our Company Policies</h2>
            <div className='grid grid-cols-4'>
                <div className='space-y-3 border-r border-gray-300 px-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-neutral-500 font-light h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                    <h3 className='text-sm font-medium'>Free Shipping</h3>
                    <p className='text-xs italic'>Free shipping on all US order or order above $200</p>
                </div>
                <div className='space-y-3 border-r border-gray-300 px-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-neutral-500 font-light h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                    </svg>
                    <h3 className='text-sm font-medium'>Support 24/7</h3>
                    <p className='text-xs italic'>Contact us 24 hours a day, 7 days a week</p>
                </div>
                <div className='space-y-3 border-r border-gray-300 px-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-neutral-500 font-light h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className='text-sm font-medium'>7 Days Return</h3>
                    <p className='text-xs italic'>Simply return it within 7 days for an exchange.</p>
                </div>
                <div className='space-y-3 border-r border-gray-300 px-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-neutral-500 font-light h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className='text-sm font-medium'>Payment Secure</h3>
                    <p className='text-xs italic'>We ensure secure payment with PEV</p>
                </div>
            </div>
            
        </div>
    );
};

export default CompanyPolicy;