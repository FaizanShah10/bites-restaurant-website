import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import menuIcon from "../assets/icons/menu.png";
import orderIcon from "../assets/icons/order.png";
import locationIcon from "../assets/icons/location.png";
import deliveryIcon from "../assets/icons/delivery-bike.png";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: menuIcon,
    title: "Choose your products",
  },
  {
    icon: orderIcon,
    title: "Order and make a payment",
  },
  {
    icon: locationIcon,
    title: "Share your location",
  },
  {
    icon: deliveryIcon,
    title: "Get delivered",
  },
];

const DeliveryProcess = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step-item", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  });

  return (
    <div
      ref={containerRef}
      className="w-full bg-white py-32 px-6 md:px-20"
    >
      {/* Top Section */}
      <div className="md:text-center text-left mb-16">
        <p className="text-sm roboto-medium text-[#FF3E58] tracking-wide mb-2">
          FAST DELIVERY
        </p>
        <h2 className="text-3xl md:text-4xl roboto-bold mb-4">
          30 Minutes Delivery Process
        </h2>
        <p className="max-w-3xl mx-auto text-gray-500 text-sm md:text-base roboto-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          malesuada pellentesque turpis eget facilisis. Fusce dapibus nulla vel
          ligula porttitor interdum.
        </p>
      </div>

      {/* Steps Section */}
      <div className="relative md:px-20 px-6">
        <div className="hidden md:block absolute top-[90px] left-0 right-0 h-3 mt-6 bg-[#FF3E58] rounded-full z-0" />

        <div className="grid grid-cols-2 md:flex md:flex-row justify-between md:items-center gap-y-10 md:gap-0 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-item flex flex-col items-center text-center relative w-full"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-12 h-12 mb-4"
              />

              <p className="text-sm roboto-medium text-gray-800">
                {step.title}
              </p>

              <div className="w-6 h-6 md:block hidden bg-white border-4 border-[#FF3E58] rounded-full absolute top-[106px] z-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryProcess;
