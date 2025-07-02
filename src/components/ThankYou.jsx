import React from 'react';
import { Link } from 'react-router-dom'; // Only if using react-router

const ThankYou = () => {
  return (
    <section className="max-w-xl mx-auto text-center py-16 px-4">
      <h1 className="text-3xl font-bold text-green-500 mb-4">Thank you!</h1>
      <p className="text-lg text-gray-200">
        I am sincerely grateful for the opportunity and for your consideration. 
        Please be assured that I will review your message with the utmost attention and respond at my earliest convenience.
      </p>
      <Link
        to="/"
        className="inline-block mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default ThankYou;
