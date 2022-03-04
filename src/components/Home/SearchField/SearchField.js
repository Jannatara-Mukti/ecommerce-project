import React from 'react';

const SearchField = () => {
    return (
        <div className='container mx-auto py-7 flex justify-between'>
            <div>
                <h3 className='font-bold text-xl'>Freshnesecom</h3>
            </div>
            <div>
                <select class="form-select border-gray-300 px-3 py-2 text-xs rounded-l-lg">
                    <option value="allCatagory">All Catagory</option>
                    <option value="allCatagory">Bakery</option>
                    <option value="allCatagory">Fruit and Vegetables</option>
                    <option value="allCatagory">Meat and Fish</option>
                    <option value="allCatagory">Drinks</option>
                    <option value="allCatagory">Kitchen</option>
                </select>
                <input type="email" className="form-input border-gray-300 text-xs px-1 py-2 rounded-r-lg " placeholder="Search Here"/>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="inline -ml-8 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg> */}
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            </div>
        </div>
    );
};

export default SearchField;