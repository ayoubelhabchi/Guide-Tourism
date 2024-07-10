import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

export default function EmailConfirmation() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-green-500 rounded-full p-4 mb-6 animate-bounce">
        <FaCheck className="text-white text-3xl" />
      </div>
      <h2 className="text-2xl font-bold mb-2">Email Verified</h2>
      <p className="text-gray-500 mb-6">
        Thank you for verifying your email. You can now access all the features of our platform.
      </p>
      <Link 
        className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-primary hover:text-white"
        to="/home"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
