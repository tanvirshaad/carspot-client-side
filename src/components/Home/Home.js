import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Navigation from '../Navigation/Navigation';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Features></Features>
        </div>
    );
};

export default Home;
