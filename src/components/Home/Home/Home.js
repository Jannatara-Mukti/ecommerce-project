import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Topbar from '../../Shared/Topbar/Topbar';
import BigImage from '../BigImage/BigImage';
import CompanyPolicy from '../CompanyPolicy/CompanyPolicy';
import Products from '../Products/Products';
import SearchField from '../SearchField/SearchField';
import Testimony from '../Testimony/Testimony';

const Home = () => {
    return (
        <div>
            <Topbar />
            <BigImage />
            <SearchField />
            <Products />
            <CompanyPolicy />
            <Testimony />
            <Footer />
        </div>
    );
};

export default Home;