import React, { useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import snack from "../assets/images/snack.jpg";
import fries from "../assets/images/Fries.png";
import Shawarma from "../assets/images/Shawarma.png";
import pasta from "../assets/images/Pasta.png";
import drinks from "../assets/images/drinks.png";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const dishesData = [
  {
    name: "Pasta",
    image: pasta,
    rating: 5,
    price: 35,
    description:
      "Pasta is a type of food typically made from an unleavened dough.",
  },
  {
    name: "French Fries",
    image: fries,
    rating: 4,
    price: 55,
    description:
      "Pasta is a type of food typically made from an unleavened dough.",
  },
  {
    name: "Chicken Shawarma",
    image: Shawarma,
    rating: 3,
    price: 35,
    description:
      "Pasta is a type of food typically made from an unleavened dough.",
  },
  {
    name: "Snack",
    image: snack,
    rating: 5,
    price: 35,
    description:
      "Pasta is a type of food typically made from an unleavened dough.",
  },
  {
    name: "Drinks",
    image: drinks,
    rating: 5,
    price: 35,
    description:
      "Pasta is a type of food typically made from an unleavened dough.",
  },
  {
    name: "Pasta",
    image: pasta,
    rating: 5,
    price: 35,
    description:
      "Pasta is a type of food typically made from an unleavened dough.",
  },
  {
    name: "French Fries",
    image: fries,
    rating: 4,
    price: 55,
    description:
      "Pasta is a type of food typically made from an unleavened dough.",
  },
];

const PopularDishes = () => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    gsap.fromTo(
      ".dishcard",
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#dish",
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <div id="dish" className="w-full bg-[#FFFCF7] px-6 md:px-22 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="roboto-medium md:text-[2vw] text-[3vh]">
          Popular Dishes
        </h2>
        <div className="flex items-center gap-3">
          <div
            onClick={scrollLeft}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#F3BD58] bg-transparent hover:bg-[#F3BD58] transition-all duration-300 cursor-pointer shadow-lg"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={scrollRight}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#F3BD58] bg-[#F3BD58] cursor-pointer shadow-lg"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 whitespace-nowrap no-scrollbar pb-4"
      >
        {dishesData.map((dish, index) => (
          <div
            key={index}
            className="dishcard w-[270px] h-[360px] bg-white rounded-lg p-4 shadow hover:shadow-lg transition-all flex-shrink-0 flex flex-col justify-between text-center"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-40 object-contain mb-4"
            />
            <div>
              <h3 className="roboto-bold text-lg mb-1">{dish.name}</h3>

              {/* Rating */}
              <div className="flex justify-center mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-[14px] ${
                        i < dish.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 mb-4 leading-snug whitespace-normal">
                {dish.description}
              </p>
            </div>

            {/* Price and button */}
            <div className="flex items-center justify-between mt-auto">
              <p className="text-md roboto-medium">${dish.price.toFixed(2)}</p>
              <button className="px-4 py-1.5 rounded-full border border-[#F3BD58] text-sm text-black hover:bg-[#F3BD58] transition-all duration-300">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
