import React from "react";

function SkillsCareerCards({ heading, paragraph, image }) {
  return (
    <div className="card card-side bg-transparent shadow-none p-4 flex items-center w-full sm:w-[95%] md:w-[650px] lg:w-[750px] xl:w-[850px] max-w-[95%]">
      {/* Image Container */}
      <div
        className="p-4 rounded-lg flex justify-center items-center shrink-0"
        style={{
          width: "80px",
          height: "90px",
          backgroundColor: "rgba(245, 245, 245, 0.2)",
        }}
      >
        <img src={image} alt={heading} className="w-20 h-20 object-contain" />
      </div>

      {/* Text Content */}
      <div className="card-body px-6 py-3 flex-1">
        <h2 className="card-title text-lg font-semibold text-gray-100 text-justify">
          {heading}
        </h2>
        <p className="text-sm text-white opacity-70 text-justify">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default SkillsCareerCards;
