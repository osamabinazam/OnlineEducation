import React from "react";
import GroupLogo from "../../assets/Images/Group.png";

function Footer() {
  return (
    <footer
      className="footer text-base-content p-10 flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left gap-6"
      style={{ backgroundColor: "rgb(248,248,240)" }}
    >
      {/* Left Column: Logo and Paragraph */}
      <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start">
        <img src={GroupLogo} alt="Logo" width="50" height="50" />
        <p className="mt-3 text-sm leading-relaxed text-gray-600 max-w-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
      </div>

      {/* Right Column: Navigation Sections */}
      <div className="w-full lg:w-3/4 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center lg:items-start gap-6">
        <nav className="flex flex-col w-1/2 lg:w-1/4 space-y-2 items-center lg:items-start">
          <h6 className="footer-title text-lg font-semibold text-gray-800">
            Company
          </h6>
          <a className="link link-hover text-gray-600 hover:text-gray-800">
            About us
          </a>
          <a className="link link-hover text-gray-600 hover:text-gray-800">
            How to work?
          </a>
          <a className="link link-hover text-gray-600 hover:text-gray-800">
            Popular Course
          </a>
          <a className="link link-hover text-gray-600 hover:text-gray-800">
            Service
          </a>
        </nav>

        <nav className="flex flex-col w-1/2 lg:w-1/4 space-y-2 items-center lg:items-start">
          <h6 className="footer-title text-lg font-semibold text-gray-800">
            Courses
          </h6>
          <a className="link link-hover text-gray-600 hover:text-gray-800">
            Categories
          </a>
          <a className="link link-hover text-gray-600 hover:text-gray-800">
            Offline Course
          </a>
          <a className="link link-hover text-gray-600 hover:text-gray-800">
            Video Course
          </a>
        </nav>

        <nav className="flex flex-col w-1/2 lg:w-1/4 space-y-2 items-center lg:items-start">
          <h6 className="footer-title text-lg font-semibold text-gray-800">
            Support
          </h6>
          <a className="link link-hover text-gray-600 hover:text-gray-800">
            FAQ
          </a>
          <a className="link link-hover text-gray-600 hover:text-gray-800">
            Help Center
          </a>
          <a className="link link-hover text-gray-600 hover:text-gray-800">
            Career
          </a>
          <a className="link link-hover text-gray-600 hover:text-gray-800">
            Policy
          </a>
        </nav>

        <nav className="flex flex-col w-1/2 lg:w-1/4 space-y-2 items-center lg:items-start">
          <h6 className="footer-title text-lg font-semibold text-gray-800">
            Contact Info
          </h6>
          <a className="link link-hover text-gray-600 hover:text-gray-800">
            +0913-705-3875
          </a>
          <a className="link link-hover text-gray-600 hover:text-gray-800">
            ElizabethJ@jourrapide.com
          </a>
          <a className="link link-hover text-gray-600 hover:text-gray-800">
            4808 Skinner Hollow Road Days Creek, OR 97429
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
