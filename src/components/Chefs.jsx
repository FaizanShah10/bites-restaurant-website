import React, { useRef } from "react";
import chef1 from "../assets/images/Chef1.png";
import chef2 from "../assets/images/chef2.png";
import chef3 from "../assets/images/chef3.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const chefs = [
  { name: "Savannah Nguyen", image: chef1 },
  { name: "Esther Howard", image: chef2 },
  { name: "Marvin McKinney", image: chef3 },
  { name: "Albert Flores", image: chef1 },
  { name: "Esther Howard", image: chef2 },
  { name: "Marvin McKinney", image: chef3 },
];

const Chefs = () => {

    const scrollRef = useRef()

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({left: -300, behavior: "smooth"})
    }

    const scrollRight = () => {
        scrollRef.current?.scrollBy({left: 300, bahavior: "smooth"})
    }

  return (
    <section className="bg-[#FFFCF7] px-6 md:px-20 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="roboto-medium md:text-[2vw] text-[3vh]">Meet Our Chefs</h2>
        <div className="flex items-center gap-3">
          <div onClick={scrollLeft}  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#F3BD58] bg-transparent hover:bg-[#F3BD58] transition-all duration-300 cursor-pointer shadow-lg">
            <FaArrowLeft />
          </div>
          <div onClick={scrollRight} className="w-10 h-10 flex items-center justify-center rounded-full border border-[#F3BD58] bg-[#F3BD58] cursor-pointer shadow-lg">
            <FaArrowRight  />
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
        {chefs.map((chef, idx) => (
          <div
            key={idx}
            className="w-[290px] flex-shrink-0 rounded-xl bg-white shadow-md text-center px-4 py-6 hide-scrollbar"
          >
            <img
              src={chef.image}
              alt={chef.name}
              className="w-full h-84 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-[#3B3024]">{chef.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chefs;
