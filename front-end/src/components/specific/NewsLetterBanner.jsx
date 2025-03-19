import React from "react";
import arrowImg from "../../assets/Images/arrow.png";
import lampImg from "../../assets/Images/lamp.png";

function NewsletterBanner() {
  return (
    <section className="flex justify-center items-center py-16 bg-white">
      <div className="max-w-screen-xl w-full px-4">
        <div className="relative bg-[#4D2C5E] text-white rounded-2xl px-10 py-16 overflow-hidden">
          {/* Bottom-left arrow image */}
          <img
            src={arrowImg}
            alt="Arrow"
            className="absolute bottom-4 left-4 w-30  h-auto pointer-events-none"
          />

          {/* Bottom-right lamp image */}
          {/* Make sure `lampImg` is the correct path or filename in your project */}
          <img
            src={lampImg}
            alt="Lamp"
            className="absolute bottom-8 right-26 right-4 w-30 h-auto pointer-events-none"
          />

          {/* Centered content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold">Subscribe to our newsletter</h2>
            <p className="text-base text-gray-200 mt-2 max-w-md">
              Lorem Ipsum is simply dummy text of the printing.
            </p>

            {/* Search/Subscribe Bar (styled like the image) */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 w-full max-w-lg mx-auto"
            >
              <div className="flex items-center bg-white rounded-full p-2 shadow">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-grow px-4 py-2 text-gray-700 rounded-l-full outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterBanner;
