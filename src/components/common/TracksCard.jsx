import React from "react";
import { FaClock, FaVideo, FaDownload, FaStar } from "react-icons/fa";

function TracksCard({
  image,
  heading,
  rating,
  mainHeading,
  price,
  time,
  courses,
  sales,
}) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md w-full max-w-sm overflow-visible pb-14">
      {/* Top Image */}
      <img
        src={image}
        alt={heading}
        className="w-full h-40 object-cover rounded-t-2xl"
      />

      {/* Card Content */}
      <div className="p-4">
        {/* Category & Rating (top row) */}
        <div className="flex items-start justify-between">
          <span className="text-sm font-semibold text-gray-500">{heading}</span>
          <div className="flex items-center text-yellow-500">
            {Array.from({ length: rating }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>

        {/* Course Title & Price */}
        <h2 className="text-xl font-semibold mt-2">{mainHeading}</h2>
        <p className="text-orange-500 text-lg font-bold mt-1">${price}</p>

        {/* Dashed Divider */}
        <div className="my-4 border-t border-dashed border-gray-300"></div>

        {/* Course Info (time, courses, sales) */}
        <div className="flex justify-between text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <FaClock />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaVideo />
            <span>{courses} Courses</span>
          </div>
          <div className="flex items-center gap-1">
            <FaDownload />
            <span>{sales} Sales</span>
          </div>
        </div>
      </div>

      {/* Absolutely positioned Join Course Button */}
      <button
        className="
          absolute 
          left-1/2 
          bottom-0 
          transform 
          -translate-x-1/2 
          translate-y-1/2 
          bg-orange-500 
          text-white 
          px-6 
          py-2 
          rounded-full 
          hover:bg-orange-600 
          transition
        "
      >
        Join Course
      </button>
    </div>
  );
}

export default TracksCard;
