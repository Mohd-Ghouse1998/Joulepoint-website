import React from 'react';
import chargingPort from '../assets/hero-bg.jpg'; // Update with correct image path
import Header from './Header';
import SectionTwo from './sectionTwo';

const Hero = () => {
  return (
    <div>
      <section
        className="relative h-screen bg-cover bg-center overflow-x-hidden"
        style={{ backgroundImage: `url(${chargingPort})` }}
      >
        <Header />
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between h-full p-4 sm:p-10 bg-black bg-opacity-50">
          <div className="flex flex-col justify-center h-full w-full lg:w-2/4 p-4 md:p-10 lg:p-14">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-xl">
            India’s Leading Charging Infrastructure
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white mt-5 max-w-lg">
            Joulepoint offers a nationwide network of highly dependable charging stations, delivering a hassle-free, fully integrated solution for all your electric vehicle charging needs.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row">
              <button
                className="text-white font-semibold px-4 sm:px-6 lg:px-8 py-3 rounded-full mb-4 sm:mb-0 sm:mr-4  opacity-0 animate-slideTop hover:shadow-hover-custom"
                style={{ background: 'linear-gradient(90deg, #3baf73 0%, #27cd7e 100%)', animationDelay: '2s' }} // Gradient background
              >
                Download App
              </button>
              <button className="border-2 border-white text-white font-semibold px-4 sm:px-6 lg:px-8 py-3 rounded-full shadow-lg">
                Find station
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center h-full w-full lg:w-1/3 p-4 mt-8 lg:mt-0">
            <img
              src={chargingPort}
              alt="Charging port"
              className="w-full h-auto max-h-full rounded-xl"
            />
          </div>
        </div>
      </section>
      <SectionTwo/>
    </div>
  );
};

export default Hero;
