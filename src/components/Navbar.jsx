import { BsGift } from "react-icons/bs";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
      <div className="w-[100vw] md:h-20 h-16 flex items-center justify-between bg-[#FFFCF7] md:px-22 px-6 fixed z-50 shadow-sm">
      {/* Logo */}
      <div>
        <h2 className="text-2xl roboto-bold flex gap-2 items-center">
          <span className="p-2 bg-[#F3BD58] rounded-full text-white">
            <img className="h-7 w-7" src="/logo.png" alt="" />
          </span>
          Bites
        </h2>
      </div>

      {/* Desktop Nav */}
      <div className="md:block hidden">
        <ul className="flex items-center gap-12 text-sm">
          <li><a className="roboto-medium" href="#">About Us</a></li>
          <li><a className="roboto-medium" href="#menu">Menu</a></li>
          <li><a className="roboto-medium" href="#testimonials">Reviews</a></li>
          <li><a className="roboto-medium" href="#blog">Blog</a></li>
          <li><a className="roboto-medium" href="#footer">Contact Us</a></li>
          <li>
            <button className="p-3 rounded-full border border-[#F3BD58] hover:bg-[#F3BD58] transition-all duration-300 cursor-pointer -mr-12">
              <BsGift />
            </button>
          </li>
          <li>
            <button className="px-5 py-2 rounded-full bg-[#F3BD58] roboto-medium hover:bg-transparent transition-all duration-300 cursor-pointer border border-[#F3BD58]">
              Reserve Table
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden block">
        <button onClick={toggleMenu} className="text-2xl">
          {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#FFFCF7] flex flex-col items-end px-6  gap-6 py-6 z-50 shadow-md md:hidden transition-all duration-300">
          <a className="roboto-medium text-xl" href="#">About Us</a>
          <a className="roboto-medium text-xl" href="#">Menu</a>
          <a className="roboto-medium text-xl" href="#">Reviews</a>
          <a className="roboto-medium text-xl" href="#">Blog</a>
          <a className="roboto-medium text-xl" href="#">Contact Us</a>
          <button className="p-3 rounded-full border border-[#F3BD58] hover:bg-[#F3BD58] transition-all duration-300 cursor-pointer">
            <BsGift />
          </button>
          <button className="px-5 py-2 rounded-full bg-[#F3BD58] roboto-medium hover:bg-transparent transition-all duration-300 border border-[#F3BD58]">
            Reserve Table
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
