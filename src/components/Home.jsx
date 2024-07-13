import React from 'react';
import profileImage from '../assets/uno.jpg'; // Correct path to your image

const Home = () => {
  return (
    <div className="max-h-screen flex items-center justify-center">
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center">
        <div className="bg-gray-300 w-96 h-96 rounded-lg mb-8 md:mb-0 md:mr-8 relative flex-shrink-0">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="ml-4 md:ml-0 text-center md:text-left">
          <p>Hi, my name is</p>
          <h1 className="text-6xl font-bold">Eyoab Amare</h1>
          <p className="text-xl text-gray-700 mt-4">I'm a <span className="font-semibold text-4xl">Software Engineer</span>.</p>
          <p className="text-gray-700 mt-4 max-w-md mb-6">My goal is to work at a company where I can deliver business value while leveling up my skills as a developer.</p>
          <a href='#contact' className="mt-8 bg-black border border-gray-400 text-white py-2 px-4 rounded-lg" >Contact Me</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
