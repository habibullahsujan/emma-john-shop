import React from 'react';
import "./Home.css";
import banner from '../images/austin-wade-AoYT0ArTTmg-unsplash 1.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='banner-div'>
            <div>
                <p className='text-amber-400 mb-20'>Sale Up to 70% off</p>
                <h1 className='font-bold text-6xl mb-6'>New Collection For Fall</h1>
                <p className='mb-6'>Discover all the new arrivals of ready-to-wear collection.</p>
                <Link to={'/products'} className='px-5 py-3 text-black bg-amber-500 font-bold'>Shop Now</Link>
            </div>
            <div className='mt-6'>
                <img className='banner-img' src={banner} alt="" />
            </div>
            
        </div>
    );
};

export default Home;