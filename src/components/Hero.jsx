import { IoSearch } from "react-icons/io5";
import HeroImage from "../assets/images/HeroImage.png";

import dishes from "../assets/images/dishes.jpg";
import desert from "../assets/images/desert.jpg";
import drinks from "../assets/images/drinks.png";
import platter from "../assets/images/platter.jpg";
import snack from "../assets/images/snack.jpg";

import gsap from "gsap";
import { useEffect } from "react";

const categories = [
  { label: "Dishes", image: dishes },
  { label: "Dessert", image: desert },
  { label: "Drinks", image: drinks },
  { label: "Platter", image: platter },
  { label: "Snacks", image: snack },
];

const Hero = () => {


  useEffect(() => {
    gsap.fromTo(
      ".categories",
      {
        opacity: 0,
        x: 80,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        stagger: 0.20,
        ease: "back.out(1.7)", 
      }
    );
    gsap.fromTo(
      ".headings", 
      {
        opacity: 0,
        x:-80
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
      }
    );
   gsap.to(".hero-image", {
    rotate: "+=360",
    duration: 20,
    repeat: -1,
    ease: "linear",
    });
    
  });

  return (
    <div className="w-full lg:h-[100dvh] md:h-[80dvh]  h-[80dvh] bg-[#FFFCF7] relative overflow-hidden px-6 md:px-20 pt-4 md:pt-20 flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="headings w-full md:w-1/2 z-10 md:mt-0">
        <h2 className="text-[2rem] md:text-[4vw] font-extrabold leading-tight text-black mb-4 roboto-bold uppercase">
          We Serve The Taste <br /> You Love
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-10 max-w-[500px] leading-relaxed">
          This is a type of restaurant which typically serves food and drinks,
          in addition to light refreshments such as baked goods or snacks. The
          term comes from the French word meaning food.
        </p>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 rounded-full bg-[#F3BD58] text-black shadow-md hover:shadow-lg transition-all">
            Explore Food
          </button>
          <button className="px-6 py-2 rounded-full border border-[#F3BD58] flex items-center gap-2 hover:bg-[#F3BD58] transition-all duration-300 cursor-pointer">
            <IoSearch /> Search
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative flex items-center justify-center z-0">
        <div className="hidden md:flex w-[32vw] h-[32vw] rounded-full bg-[#FFF6E6] items-center justify-center relative shadow-inner">
          <img
            src={HeroImage}
            alt="salmon salad"
            className="hero-image w-[26vw] h-[26vw] object-contain rounded-full z-10"
          />
          <div className=" absolute right-[-70px] top-[50%] -translate-y-1/2 flex flex-col gap-3">
            {categories.map((item, idx) => (
              <div
                key={idx}
                className="categories flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-sm hover:bg-[#F3BD58] transition-all cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-7 h-7 rounded-full object-cover"
                />
                <span className="text-sm roboto-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

          {/* Image For Mobile version */}
        <div className=" absolute md:hidden top-[-30px] right-[-100px] w-[300px] h-[300px] bg-[#FFF6E6] rounded-full overflow-hidden shadow-inner flex items-center justify-center z-0">
          <img
            src={HeroImage}
            alt="hero"
            className=" w-[250px] h-[250px] object-contain rounded-full z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
