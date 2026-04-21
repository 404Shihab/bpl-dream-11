import React from 'react';
import bannerImg from '../../../assets/banner_main.png';

const Banner = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="relative overflow-hidden rounded-3xl min-h-[70vh] flex flex-col items-center justify-center text-center 
                bg-slate-900 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black 
                text-white shadow-2xl">

                <div className="mb-8 transition-transform duration-500 hover:scale-105">
                    <img 
                        src={bannerImg} 
                        alt="Cricket Banner" 
                        className="w-48 md:w-64 lg:w-80 mt-10 h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    />
                </div>
                <div className="max-w-3xl px-6">
                    <h1 className="font-extrabold text-4xl md:text-6xl tracking-tight leading-tight">
                        Assemble Your Ultimate <br/> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                            Dream 11 Cricket
                        </span>
                    </h1>
                    <p className="mt-4 text-slate-400 text-lg md:text-xl font-medium tracking-wide">
                        Beyond Boundaries • Beyond Limits
                    </p>
                </div> 
                <div className="mt-10">
                    <button className="btn btn-accent btn-lg px-10 rounded-full mb-10 border-none hover:scale-105 transition-all shadow-lg shadow-accent/20">
                        Lets build your team
                    </button>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>
        </div>
    );
};

export default Banner;