"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ConfirmationPage = () => {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-br from-green-50 to-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-12 text-center max-w-md w-full">
        
        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-green-600 mb-3">Booking Confirmed!</h1>
        
        {/* Message */}
        <p className="text-gray-600 text-lg mb-8">Thank you for your booking with <span className="text-amber-500 font-semibold text-xl">HolidayResort</span>.</p>
        
        {/* Button */}
        <button 
          onClick={() => router.push("/")}
          className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
        >
          Go to Home
        </button>
        
      </div>
    </div>
  );
};

export default ConfirmationPage;