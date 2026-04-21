import React from 'react';
import bannerImg from '../../../assets/banner_main.png';

const Banner = () => {
    return (
        <div className='min-h-[60vh] flex items-center justify-center bg-linear-to-r from-blue-500  to-purple-600 text-white container mx-auto'>
            <div>
                <img src={bannerImg} alt=""/>
            </div>
            <div>
                <h1 className='font-bold text-shadow-white text-4xl'>Assemble Your Ultimate Dream 11 Cricket</h1>
            </div> 
 
        </div>
    );
};

export default Banner;