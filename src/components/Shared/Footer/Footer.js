import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto pt-10 pb-6'>
            <hr className='border-t-2'/>
            <div className='grid md:grid-cols-4 text-left gap-6 pt-4'>
                <div className='space-y-2'>
                    <h5 className='text-base font-medium'>Vegefoods</h5>
                    <p className='text-xs leading-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                </div>
                <div className='space-y-2'>
                    <h6 className='font-medium text-sm'>Menu</h6>
                    <ul className='list-none space-y-2'>
                        <li className='text-xs'>Shop</li>
                        <li className='text-xs'>About</li>
                        <li className='text-xs'>Journal</li>
                        <li className='text-xs'>Contact</li>
                    </ul>
                </div>
                <div className='space-y-2'>
                <h6 className='font-medium text-sm'>Help</h6>
                    <ul className='list-none space-y-2'>
                        <li className='text-xs'>Shipping Information</li>
                        <li className='text-xs'>Returns & Exchange</li>
                        <li className='text-xs'>Terms & Conditions</li>
                        <li className='text-xs'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='space-y-2'>
                <h6 className='font-medium text-sm'>Have a Questions?</h6>
                    <ul className='list-none space-y-2'>
                        <li className='text-xs space-x-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                            <span> 203 Fake St. Mountain View, San Francisco, California, USA </span>
                        </li>
                        <li className='text-xs space-x-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            <path d="M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z" />
                            </svg>
                            <span>+2 392 3929 210</span>
                        </li>
                        <li className='text-xs space-x-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                            <span>info@yourdomain.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer; 