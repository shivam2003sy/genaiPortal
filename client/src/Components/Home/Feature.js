// src/components/Feature.js
import React from 'react';

const Feature = ({ title, description }) => {
  return (
<div className="bg-neutral-100 p-8 ml-4 mr-4 rounded-4xl shadow-md transition ease-in-out delay-150 transition ease-in-out delay-150 hover:scale-105">
      <h2 className="bg-gradient-to-r text-transparent from-primary to-secondary bg-clip-text text-xl  font-bold mb-4">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
