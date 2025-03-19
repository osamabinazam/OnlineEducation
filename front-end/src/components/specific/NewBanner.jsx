import React from "react";
import BannerImage from "../../assets/Images/Girl.png";
import CardImage1 from "../../assets/Images/puzzle.png";
import CardImage2 from "../../assets/Images/hearts.png";

function NewBanner() {
  return (
    <div className="w-full bg-[#FEF9F3] py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section (Main Banner Image) */}
        <div className="order-1 md:order-none w-full md:w-1/2 flex justify-center">
          <img
            src={BannerImage}
            alt="Girl"
            className="max-w-sm w-full h-auto object-contain"
          />
        </div>

        {/* Right Section (Heading + Feature Rows) */}
        <div className="w-full md:w-1/2">
          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-tight">
            Premium{" "}
            <span className="text-orange-500">Learning</span> Experience
          </h1>

          {/* Feature Items */}
          <div className="mt-8 space-y-6">
            {/* First Feature Row */}
            <div className="flex items-center">
              {/* Purple Icon Box */}
              <div className="bg-[#4D2C5E] p-3 rounded-lg flex justify-center items-center w-16 h-16">
                <img
                  src={CardImage1}
                  alt="Puzzle"
                  className="w-8 h-8 object-contain"
                />
              </div>
              {/* Text */}
              <div className="ml-4">
                <h3 className="text-md font-semibold text-gray-800">
                  Easily Accessible
                </h3>
                <p className="text-gray-600 text-sm">
                  Learning Will feel Very Comfortable With Courslab.
                </p>
              </div>
            </div>

            {/* Second Feature Row */}
            <div className="flex items-center">
              {/* Purple Icon Box */}
              <div className="bg-[#4D2C5E] p-3 rounded-lg flex justify-center items-center w-16 h-16">
                <img
                  src={CardImage2}
                  alt="Hearts"
                  className="w-8 h-8 object-contain"
                />
              </div>
              {/* Text */}
              <div className="ml-4">
                <h3 className="text-md font-semibold text-gray-800">
                  Fun learning expe
                </h3>
                <p className="text-gray-600 text-sm">
                  Learning Will feel Very Comfortable With Courslab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBanner;
