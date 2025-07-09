import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-[#FFFCF7] px-6 md:px-20 py-12 text-[#3B3024]">
      <div className="p-4">
        <h2 className="text-2xl roboto-bold flex gap-2 items-center">
          <span className="p-2 bg-[#F3BD58] rounded-full text-white">
            <ImSpoonKnife size={18} />
          </span>
          Bites
        </h2>
      </div>

      <hr className="mb-12" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="space-y-6">
          <div>
            <h2 className="font-bold text-lg mb-2">Subscribe Our Newsletter</h2>
            <div className="flex items-center border-b border-gray-400">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="bg-transparent text-sm py-1 outline-none w-full placeholder:text-gray-600"
              />
              <button className="w-10 h-8 flex items-center justify-center bg-[#F3BD58] rounded-full text-white shadow-md ml-2 mb-2">
                <FaArrowRight className="text-black text-xs" />
              </button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-2">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#F3BD58] transition-all">
              <FaFacebookF size={20} className="text-[#3B3024] cursor-pointer" />
            </div>
            <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#F3BD58] transition-all">
              <FaTwitter size={20} className="text-[#3B3024] cursor-pointer" />
            </div>
            <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#F3BD58] transition-all">
              <FaInstagram size={20} className="text-[#3B3024] cursor-pointer" />
            </div>
            <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#F3BD58] transition-all">
              <FaYoutube size={20} className="text-[#3B3024] cursor-pointer" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-3">Service</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>Online Order</li>
            <li>Pre-Reservation</li>
            <li>24/7 Services</li>
            <li>Foodie Place</li>
            <li>Super Chefs</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>Menu</li>
            <li>Reviews</li>
            <li>Blogs</li>
            <li>Reserve Table</li>
            <li>Order Foods</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>Our Story</li>
            <li>Benefits</li>
            <li>Career</li>
            <li>Our Chefs</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Help</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>Contact</li>
            <li>Support</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
