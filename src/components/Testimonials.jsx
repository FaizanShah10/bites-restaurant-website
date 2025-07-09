import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div id="testimonials" className="w-full bg-white py-8 mt-20 px-6 md:px-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="roboto-medium md:text-[2vw] text-[3vh]">
          What Our Customer Says?
        </h2>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#F3BD58] bg-transparent hover:bg-[#F3BD58] transition-all duration-300 cursor-pointer shadow-lg">
            <FaArrowLeft />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#F3BD58] bg-[#F3BD58] cursor-pointer shadow-lg">
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col overflow-x-auto gap-6 whitespace-nowrap no-scrollbar pb-4">
        <div className="w-full max-w-md bg-gradient-to-r from-[#f7f0e8] to-[#fcf9f4] p-6 rounded-2xl shadow-sm whitespace-normal">
          <div className="w-full">
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              “This place is great! Atmosphere is chill and cool but the staff
              is also really friendly. They know what they’re doing and what
              they’re talking about, and you can tell making the customers happy
              is their main priority.”
            </p>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-lg font-semibold text-[#3B3024]">
              Savannah Nguyen
            </span>
          </div>
        </div>
        <div className="w-full max-w-md bg-gradient-to-r from-[#f7f0e8] to-[#fcf9f4] p-6 rounded-2xl shadow-sm whitespace-normal">
          <div className="w-full">
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              “This place is great! Atmosphere is chill and cool but the staff
              is also really friendly. They know what they’re doing and what
              they’re talking about, and you can tell making the customers happy
              is their main priority.”
            </p>
          </div>

          {/* Autor  */}
          <div className="flex items-center gap-4">
            <img
              src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-lg font-semibold text-[#3B3024]">
              Savannah Nguyen
            </span>
          </div>
        </div>
        <div className="w-full max-w-md bg-gradient-to-r from-[#f7f0e8] to-[#fcf9f4] p-6 rounded-2xl shadow-sm whitespace-normal">
          <div className="w-full">
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              “This place is great! Atmosphere is chill and cool but the staff
              is also really friendly. They know what they’re doing and what
              they’re talking about, and you can tell making the customers happy
              is their main priority.”
            </p>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-lg font-semibold text-[#3B3024]">
              Savannah Nguyen
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonials;
