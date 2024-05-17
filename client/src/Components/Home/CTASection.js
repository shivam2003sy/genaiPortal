// src/components/CTASection.js
import React from 'react';

import { Link } from 'react-router-dom';
const CTASection = () => {
  return (
    <section className="bg-neutral-100  py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r text-transparent from-primary to-secondary bg-clip-text">Ready to Excel in Placements?</h2>
      <p className="text-lg mb-8">Join our platform today and take the first step towards a successful career.</p>
      {/* Link Button to /login */}
      <Link
          to="/institutelogin"
          className="btn pt-2 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg hover:border-transparent transition delay-150 hover:scale-105 flex justify-center text-center items-center"
        >
          <span  className="font-semibold font-sans">
          Get Started
          </span>
          
        </Link>
    </div>
  </section>
  );
};

export default CTASection;
