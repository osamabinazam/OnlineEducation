import React from "react";
import iconInstagram from "../../assets/Images/instaIcon.jpg";
import linkedIcon from "../../assets/Images/linkedIcon.jpg";
import userImage from "../../assets/Images/userImage.jpg";

const teacherImg1 = userImage;
const teacherImg2 = userImage;
const teacherImg3 = userImage;

function Instructors() {
  const instructors = [
    {
      id: 1,
      name: "Matthew E. McNatt",
      title: "Professor @George Brown College",
      bio: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
      subject: "Engineering physics",
      photo: teacherImg1,
    },
    {
      id: 2,
      name: "Tracy D. Wright",
      title: "Professor @George Brown College",
      bio: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
      subject: "Engineering physics",
      photo: teacherImg2,
    },
    {
      id: 3,
      name: "Cynthia A. Nelson",
      title: "Professor @George Brown College",
      bio: "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
      subject: "Engineering physics",
      photo: teacherImg3,
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col"
            >
              {/* Fixed-height container to ensure the image fills the area */}
              <div className="relative w-full h-48 overflow-hidden rounded-md mb-4">
                <img
                  src={instructor.photo}
                  alt={instructor.name}
                  className="absolute w-full h-full object-cover"
                />
              </div>

              {/* Name & Title */}
              <h3 className="text-lg font-semibold">{instructor.name}</h3>
              <p className="text-sm text-gray-500">{instructor.title}</p>

              {/* Bio Text */}
              <p className="text-gray-600 text-sm mt-2 flex-grow">
                {instructor.bio}
              </p>

              {/* Subject & Social Icons */}
              <div className="flex items-center justify-between mt-4">
                {/* Subject */}
                <span className="text-orange-500 font-semibold">
                  {instructor.subject}
                </span>

                {/* Social Icons */}
                <div className="flex gap-2">
                  <a href="#instagram" aria-label="Instagram">
                    <img
                      src={iconInstagram}
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="#linkedin" aria-label="LinkedIn">
                    <img src={linkedIcon} alt="LinkedIn" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instructors;
