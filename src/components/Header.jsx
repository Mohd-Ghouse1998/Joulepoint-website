import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    // GSAP and ScrollTrigger to handle smooth header transition
    gsap.to('#header', {
      backgroundColor: '#000', // Change background color to black
      height: '110px', // Adjust height on scroll
      duration: 0.5, // Smooth transition
      ease: 'power1.out', // Smoother easing
      scrollTrigger: {
        trigger: '#header',
        start: 'top top', // Start effect when header reaches the top
        end: '+=1', // Quick transition
        scrub: true, // Smooth transition linked with scroll
      },
    });
  }, []);

  return (
    <header
      id="header"
      className="flex justify-between items-center p-5 w-full fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: 'transparent',
        height: '145px', // Initial height
        boxSizing: 'border-box',
        overflow: 'hidden', // Ensure no content overflows
      }}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-20">
        <div className="text-2xl font-bold">
          <span className="text-blue-600 font-semibold text-[27px] cursor-pointer">Joule</span>
          <span className="text-green-600 font-semibold text-[27px] cursor-pointer">Point</span>
        </div>
        <nav>
          <ul className="flex space-x-10">
            <li><a href="#charging-solution" className="text-white">Home</a></li>
            <li><a href="#partners" className="text-white">Partners</a></li>
            <li><a href="#about" className="text-white">About</a></li>
            <li><a href="#resource" className="text-white">Resource</a></li>
            <li><a href="#support" className="text-white">Support</a></li>
          </ul>
        </nav>
        <button className="px-6 py-2 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out shadow-sm">
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;
