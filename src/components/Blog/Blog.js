import React from 'react';
import blog1 from '../../images/blog1.jpg';
import blog2 from '../../images/blog2.jpg';
import blog3 from '../../images/blog3.jpeg';
import Footer from '../Shared/Footer/Footer';
import Topbar from '../Shared/Topbar/Topbar';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <Topbar />
            <div className='flex gap-x-6 py-10 text-left'>
                <div className='h-80 w-80 rounded'>
                    <img className="h-full w-full object-cover rounded" src={blog1} alt="" />
                </div>
                <div className='w-96 space-y-4'>
                    <h2 className='text-2xl font=-bold text-gray-900'>Our Strongest Team</h2>
                    <p className='text-base text-gray-600 text-justify'>A powerfull team is the main secret behind a successful ecommerce business. Our team members try to keep a positive environment of work for everyone. A strong team can lead a business to success. Every person in our team is very helfull and positive minded.</p>
                    <button className='bg-gray-900 text-white py-4 px-6 rounded'>know More</button>
                    <br /><br />
                    <a href="" className='text-sm text-gray-400'>Interested? Read Another Article...</a>
                </div>
            </div>
            <div className='flex gap-x-6 py-10 text-left'>
                <div className='h-80 w-80 rounded'>
                    <img className="h-full w-full object-cover rounded" src={blog2} alt="" />
                </div>
                <div className='w-96 space-y-4'>
                    <h2 className='text-2xl font=-bold text-gray-900'>Wanna Work with us?</h2>
                    <p className='text-base text-gray-600 text-justify'>A powerfull team is the main secret behind a successful ecommerce business. Our team members try to keep a positive environment of work for everyone. A strong team can lead a business to success. Every person in our team is very helfull and positive minded.</p>
                    <button className='bg-gray-900 text-white py-4 px-6 rounded'>know More</button>
                    <br /><br />
                    <a href="" className='text-sm text-gray-400'>Interested? Read Another Article...</a>
                </div>
            </div>

            <div className='flex gap-x-6 py-10 text-left'>
                <div className='h-80 w-80 rounded'>
                    <img className="h-full w-full object-cover rounded" src={blog3} alt="" />
                </div>
                <div className='w-96 space-y-4'>
                    <h2 className='text-2xl font=-bold text-gray-900'>Our Technique and Strategy</h2>
                    <p className='text-base text-gray-600 text-justify'>A powerfull team is the main secret behind a successful ecommerce business. Our team members try to keep a positive environment of work for everyone. A strong team can lead a business to success. Every person in our team is very helfull and positive minded.</p>
                    <button className='bg-gray-900 text-white py-4 px-6 rounded'>know More</button>
                    <br /><br />
                    <a href="" className='text-sm text-gray-400'>Interested? Read Another Article...</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;