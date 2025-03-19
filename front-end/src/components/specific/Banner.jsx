import React from "react";
import BannerImage from "../../assets/Images/OBJECTS.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="container mx-auto px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Section (Text Content) */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold leading-tight">
          The <span className="text-orange-500">Smart</span> <br />
          Choice For <span className="text-orange-500">Future</span>
        </h1>
        <p className="text-xl mt-2 text-gray-500">
          Elearn is a global training provider based across the UK that
          specialises in accredited and bespoke training courses. We crush
          the...
        </p>

        {/* Search & Subscribe */}
        <div className="flex items-center gap-4 mt-6">
          <label className="flex items-center border rounded-md px-3 py-2 w-full max-w-sm">
            <svg
              className="h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 3 10.5a7.5 7.5 0 0 0 13.65 6.15z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for a location..."
              className="ml-2 outline-none w-full"
            />
          </label>
          <Link
            to="/subscribe"
            className="bg-[#4D2C5E] text-white px-6 py-2 rounded-full hover:bg-orange-500 hover:text-black transition duration-300"
          >
            Subscribe
          </Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={BannerImage}
          className="max-w-full h-auto"
          alt="Book illustration"
        />
      </div>
    </div>
  );
}

export default Banner;
