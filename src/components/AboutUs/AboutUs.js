import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Topbar from '../Shared/Topbar/Topbar';
import img from '../../images/aboutus.png';

const AboutUs = () => {
    const [expand, setExpand] = useState(false);
    const [expandsec, setExpandsec] = useState(false);
    const [expandthird, setExpandthird] = useState(false);

    return (
        <div className='container mx-auto'>
            <Topbar />
            <div className='flex space-x-8'>
                <div className='h-80 w-80 pt-10'> 
                    <img className='h-full' src={img} alt="" />
                </div>
                <div className=''>
                    <div className='shadow-lg rounded border border-gray-100 w-96 my-10'>
                        <div className="p-4 text-xl relative font-medium">
                            <div className=''>
                               Who are we?
                            </div>
                            <button aria-label='question-expander' onClick={()=>setExpand(!expand)} className='text-xl absolute top-0 right-0 p-4 focus:outline-none'>
                                {
                                    expand ?
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg> :
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                </svg>
                                    <div className="bg-white text-xs w-96 py-3 px-10 mt-5">
                                    We made a strong team to provide you just in time what you want.
                                    </div>
                                    </div>
                                }
                            </button>
                        </div>
                        
                    </div>
                    <div className='shadow-lg rounded border border-gray-100 w-96 my-10'>
                        <div className="p-4 text-xl relative font-medium">
                            <div className=''>
                                What do we provide?
                            </div>
                            <button aria-label='question-expander' onClick={()=>setExpandsec(!expandsec)} className='text-xl absolute top-0 right-0 p-4 focus:outline-none'>
                                {
                                    expandsec ?
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg> :
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                </svg>
                                    <div className="bg-white w-96 py-3 px-10 mt-5 text-xs">
                                        We provide 100% fresh and natural products,
                                    </div>
                                    </div>
                                }
                            </button>
                        </div>
                        
                    </div>
                    <div className='shadow-lg rounded border border-gray-100 w-96 my-10'>
                        <div className="p-4 text-xl relative font-medium">
                            <div className=''>
                                Is it expensive to work with us?
                            </div>
                            <button aria-label='question-expander' onClick={()=>setExpandthird(!expandthird)} className='text-xl absolute top-0 right-0 p-4 focus:outline-none'>
                                {
                                    expandthird ?
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg> :
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                </svg>
                                    <div className="bg-white w-96 py-3 px-10 mt-5 text-xs">
                                        we can assure you the right price with right choices.
                                    </div>
                                    </div>
                                }
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='py-10'>
                <h2 className='pt-2 pb-4 textgray-700 font-medium text-xl'>Our Mission and Vision</h2>
                <p className='text-justify text-sm text-gray-500'>Pure-Ecommerce offers a one of kind opportunity to help ease your way into becoming an ecommerce entrepreneur.
                We believe that ecommerce offers everyone an opportunity whether they work from home, work full-time, or want to leave their job - to build a business that works for them by building wealth and a future for your long-term life goals. <br /> <br />
                We want to create an opportunity where our clients can step into a ready-made ecommerce business and then have our team of experts personally mentor them through every aspect of setting up, running and growing an internet business. <br /> <br />
                Pure-Ecommerce was started in 2007 and has helped over 850 women, men, retirees, the unemployed, and stay-at-home moms, all realize their dreams of becoming entreprenuers. We offer budding entrepreneurs the opportunity to step into a ready-made internet business and then have our expert team personally mentor them step-by-step going over every aspect of setting up, running, and growing an ecommerce business. <br /> <br />
                Our company has been featured in several national magazines and websites such as Entrepreneur, Forbes and WomenEntrepreneur.com as well as in international newspapers and TV programs. Pure-Ecommerce has also been selected as one of the top 50 Women-Owned Businesses by Start-Up Nation. Meet our talented and highly professional team here. Let's work together - we can help you start your dream online business!</p>
            </div>
        <Footer />
        </div>
    );
};

export default AboutUs;
