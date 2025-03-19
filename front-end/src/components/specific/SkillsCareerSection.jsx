import React from "react";
import SkillsCareerCards from "../common/SkillsCareerCards";
import CertificationImg from "../../assets/Images/certification.png";
import ExamImg from "../../assets/Images/exam.png";
import OnlineImg from "../../assets/Images/online.png";

function SkillsCareerSection() {
  return (
    <div className="bg-[#4D2C5E]  rounded-xl flex justify-center min-h-[250px] w-full max-w-[1300px] mx-auto ">
      {/* Responsive layout: flex-col for mobile, flex-row for md+ */}
      <div className="flex flex-col md:flex-row gap-2 sm:gap-2 md:gap-6 justify-center items-center w-full px-4 py-2">
        <SkillsCareerCards
          heading="Learn The Latest Skills"
          paragraph="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
          image={OnlineImg}
        />
        <SkillsCareerCards
          heading="Get Ready For a Career"
          paragraph="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
          image={ExamImg}
        />
        <SkillsCareerCards
          heading="Earn a Certificate"
          paragraph="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
          image={CertificationImg}
        />
      </div>
    </div>
  );
}

export default SkillsCareerSection;
