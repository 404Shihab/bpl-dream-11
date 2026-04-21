import React from 'react';
import footerLogo from '../../assets/logo-footer.png';

const Footer = () => {
    return (
        <footer className="bg-[#06091A] text-white pt-24 pb-10">
            {/* Centered Logo */}
            <div className="flex justify-center mb-16">
                <img src={footerLogo} alt="Footer Logo" className="w-32" />
            </div>

            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
                    
                    {/* About Us */}
                    <div>
                        <h6 className="footer-title text-white opacity-100 text-lg mb-4 underline decoration-yellow-400 underline-offset-8">About Us</h6>
                        <p className="text-slate-400 max-w-xs leading-relaxed">
                            We are a passionate team dedicated to providing the best services to our customers. 
                            Build your ultimate dream team today!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h6 className="footer-title text-white opacity-100 text-lg mb-4 underline decoration-yellow-400 underline-offset-8">Quick Links</h6>
                        <ul className="text-slate-400 space-y-3">
                            <li><a className="hover:text-yellow-400 transition-colors cursor-pointer">• Home</a></li>
                            <li><a className="hover:text-yellow-400 transition-colors cursor-pointer">• Services</a></li>
                            <li><a className="hover:text-yellow-400 transition-colors cursor-pointer">• About</a></li>
                            <li><a className="hover:text-yellow-400 transition-colors cursor-pointer">• Contact</a></li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h6 className="footer-title text-white opacity-100 text-lg mb-4 underline decoration-yellow-400 underline-offset-8">Subscribe</h6>
                        <p className="text-slate-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex flex-col sm:flex-row gap-0 overflow-hidden rounded-xl">
                            <input 
                                type="text" 
                                placeholder="Enter your email" 
                                className="input input-bordered w-full bg-white text-black focus:outline-none rounded-r-none" 
                            />
                            <button className="btn bg-gradient-to-r from-yellow-400 to-orange-500 border-none text-black font-bold rounded-l-none">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
                    <p>© 2026 BPL-Dream 11 All Rights Reserved.</p>
                    <p className="font-medium text-slate-300 italic">
                        Developed by <a href="https://github.com/404Shihab"><span className="text-yellow-400 not-italic font-bold">Shihab Uddin Bhuiyan</span></a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;