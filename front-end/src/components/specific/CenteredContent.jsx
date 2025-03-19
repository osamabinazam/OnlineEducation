import React from "react";
import ArrowImg from "../../assets/Images/arrow.png";
import LampImg from "../../assets/Images/lamp.png";

function CenteredContent({ first }) {
  return (
    <div className="w-full flex items-center justify-between px-10 py-10">
      {/* Left Image (Hidden on Mobile) */}
      <div className="w-1/4 flex justify-start hidden sm:flex">
        <img src={first ? LampImg : ArrowImg}
          alt={first ? "Lamp" : "Arrow"}
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Centered Text (Always Visible) */}
      <div className="text-center w-full sm:w-1/2">
        <h3 className="text-4xl font-bold text-black mb-2">Our Tracks</h3>
        <p className="text-gray-500 mt-2">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>

      {/* Right Image (Hidden on Mobile) */}
      <div className="w-1/4 flex justify-end hidden sm:flex">
      <img src={first ? ArrowImg : LampImg}
          alt={first ? "Arrow" : "Lamp"}
          className="w-32 h-32 object-contain"
        />
      </div>
    </div>
  );
}

export default CenteredContent;
