import React from "react";
import userImage from "../../assets/Images/userImage.jpg";

// You can replace these with real images or avatar URLs
const avatar1 = userImage
const avatar2 = userImage
const avatar3 = userImage

function TestimonialSection() {
  return (
    <section className="bg-white py-16">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Student’s Say</h2>
          <p className="text-gray-500 mt-2">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        {/* Cards Wrapper */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-600 text-lg mb-6">
              “Teachings of the great explore of truth, the master-builder of
              human happiness. no one rejects, dislikes, or avoids pleasure
              itself, pleasure itself”
            </p>
            <div className="flex items-center">
              <img
                src={avatar1}
                alt="User Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-gray-800 font-semibold">Finlay Kirk</h4>
                <span className="text-sm text-gray-500">Web Developer</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-600 text-lg mb-6">
              “Complete account of the system and expound the actual. Contrary
              to popular belief, Lorem Ipsum is not simply random text. It has
              roots.”
            </p>
            <div className="flex items-center">
              <img
                src={avatar2}
                alt="User Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-gray-800 font-semibold">
                  Dannette P. Cervantes
                </h4>
                <span className="text-sm text-gray-500">Web Design</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-600 text-lg mb-6">
              “There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.”
            </p>
            <div className="flex items-center">
              <img
                src={avatar3}
                alt="User Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-gray-800 font-semibold">Clara R. Altman</h4>
                <span className="text-sm text-gray-500">UI&UX Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
