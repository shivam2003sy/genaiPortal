// src/components/HeroSection.js
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-8 lg:py-16 md:py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 ml-4 mr-4">
          Welcome to Campus Placement Information & Training Portal!
        </h1>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r text-transparent from-primary to-secondary bg-clip-text">
          Unlock Your Placement Success
        </h1>
        <p className="text-lg mb-8">
          A one-stop solution for placement experiences, skill enhancement, and mentorship.
        </p>
        <div>
        <Link
          to="/institutelogin"
          className="btn pt-2 m-4 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg hover:border-transparent transition delay-150 hover:scale-105 flex justify-center text-center items-center"
        >
          <span  className="font-semibold font-sans">
            Student Login
          </span>
          
        </Link>
        <Link
          to="/companylogin"
          className="btn pt-2 m-4 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg hover:border-transparent transition delay-150 hover:scale-105 flex justify-center text-center items-center"
        >
          <span  className="font-semibold font-sans">
          Company Login
          </span>
          
        </Link>
        </div>
        {/* Nav <Link > for Try Out Our Interviewing platform */}
      </div>
      <div className="flex justify-center items-center mt-8">
        <Link
          to="https://www.interviewblitz.live/"
          className="btn bg-primary glass hover:border-transparent transition delay-150 hover:scale-105 h-12"
        >
          <span className="font-semibold font-sans text-center ">Try Out Our Interviewing Platform</span>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;