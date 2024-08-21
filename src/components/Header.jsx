import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const headerElement = headerRef.current;

    // GSAP animation
    gsap.to(headerElement, {
      backgroundColor: 'black',
      height: '64px', // Equivalent to h-16 in Tailwind
      ease: 'power1.out',
      scrollTrigger: {
        trigger: headerElement,
        start: 'top top',
        end: '+=100', // Adjust this value as needed
        toggleActions: 'play none none reverse',
        scrub: true,
      },
    });

    // Ensure the width stays within the viewport
    headerElement.style.overflowX = 'hidden';

  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out bg-transparent h-20"
    >
      <div className="flex justify-between items-center h-full p-5 w-full">
        <div className="text-2xl font-bold pl-4 md:pl-20 ml-4 md:ml-10">
          <span className="text-blue-600 font-semibold text-[27px] cursor-pointer">Joule</span>
          <span className="text-green-600 font-semibold text-[27px] cursor-pointer">point</span>
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
