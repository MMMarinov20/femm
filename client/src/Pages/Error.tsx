import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <React.Fragment>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Error
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              We encountered an error while processing your request. Please try
              again later or contact support.
            </p>
          </div>
          <div className="flex justify-center mt-6 space-x-5">
            <Link to="/" className="w-full">
              <button className="bg-[#FF6241] border-[#FF6241] border-[1px] hover:bg-white transition-colors duration-300 text-white hover:text-[#FF6241] py-2 w-full rounded-full">
                Home Page
              </button>
            </Link>
            <Link to="/contact" className="w-full">
              <button className="bg-[#FF6241] border-[#FF6241] border-[1px] hover:bg-white transition-colors duration-300 text-white hover:text-[#FF6241] py-2 w-full rounded-full">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ErrorPage;
