import React from "react";
import TracksCard from "../common/TracksCard";
import ExamImg from "../../assets/Images/education.avif";

function TracksCardSection() {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1200px]">
        {/* Card 1 */}
        <TracksCard
          image={ExamImg}
          heading="Beginner Course"
          rating={5}
          mainHeading="Learn React from Scratch"
          price="99.99"
          time="22hr 20min"
          courses={34}
          sales={250}
        />

        {/* Card 2 */}
        <TracksCard
          image={ExamImg}
          heading="Advanced JavaScript"
          rating={4}
          mainHeading="Master JavaScript"
          price="79.99"
          time="18hr 10min"
          courses={28}
          sales={180}
        />

        {/* Card 3 */}
        <TracksCard
          image={ExamImg}
          heading="Full-Stack Development"
          rating={5}
          mainHeading="Become a Full-Stack Developer"
          price="129.99"
          time="30hr 45min"
          courses={40}
          sales={300}
        />
      </div>
    </div>
  );
}

export default TracksCardSection;
