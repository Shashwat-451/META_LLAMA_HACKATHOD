import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/banner2.jpg"
const LandingPage = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-white"
    //   style={{
    //     backgroundImage: `url(${backgroundImage})`,
    //   }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 "></div>

      {/* Title and Punchline */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Welcome to Your Biosimilar
        </h1>
        <p className="text-lg md:text-2xl font-light mb-8 drop-shadow-lg">
        Revolutionizing Drug Approvals: AI-Powered Validation for Precision and Compliance
        </p>

        {/* Explore Button */}
        <Link
          to="/login"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-full transition duration-300 shadow-lg"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
