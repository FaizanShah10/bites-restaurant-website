import React, { useEffect, useState } from "react";
import snack from "../assets/images/snack.jpg";
import fries from "../assets/images/Fries.png";
import Shawarma from "../assets/images/Shawarma.png";
import pasta from "../assets/images/Pasta.png";
import drinks from "../assets/images/drinks.png";
import { FaStar } from "react-icons/fa6";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menuButtons = [
  "Special Foods",
  "Maxican",
  "Italian",
  "Japanese",
  "Drinks",
  "Lunch",
  "More Item +",
];

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
];

const Menu = () => {
  const [activeItem, setActiveItem] = useState("Italian");

  useEffect(() => {
    gsap.fromTo(
      ".menucard",
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
          trigger: "#menu",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <div id="menu" className="w-full min-h-[100dvh] bg-[#FFFCF7] px-6 md:px-22 py-12">
      <h2 className="text-center roboto-bold font-extrabold text-[3vw] mb-10">
        Our Regular Menu
      </h2>

      <div className="flex flex-wrap justify-center gap-4 overflow-x-auto no-scrollbar">
        {menuButtons.map((item) => (
          <button
            key={item}
            onClick={() => setActiveItem(item)}
            className={`px-8 py-2 rounded-full border transition-all duration-200 text-sm roboto-medium whitespace-nowrap cursor-pointer ${
              activeItem === item
                ? "bg-[#F3BD58] text-[#3B3024] border-[#F3BD58]"
                : "bg-transparent text-[#3B3024] border-[#F3BD58]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Menu Dishes */}
      <div className="menucard grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-12">
        {dishesData.map((dish, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-all flex flex-col justify-between text-center"
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
              <p className="text-sm text-gray-700 mb-8 leading-snug whitespace-normal">
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

export default Menu;
