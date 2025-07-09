import { FaMobileAlt } from "react-icons/fa";
import reservationIcon from "../assets/icons/reservation.png";
import kitchenIcon from "../assets/icons/kitchen.png";
import chefIcon from "../assets/icons/chef.png";
import table from "../assets/icons/table.png";
import service from "../assets/icons/24-hours-support.png";
import karahi from "../assets/images/karahi.png";
import background from "../assets/images/background.png";

const services = [
    { icon: <FaMobileAlt />, label: "Online Order" },
    { icon: <img src={reservationIcon} alt="" className="w-6 h-6 object-cover" />, label: "Pre Reservation" },
    { icon: <img src={service} alt="" className="md:w-6 md:h-6 w-4 h-4 object-cover" />, label: "24/7 Service" },
    { icon: <img src={table} alt="" className="md:w-6 md:h-6 w-4 h-4 object-cover" />, label: "Organized Food Place" },
    { icon: <img src={kitchenIcon} alt="" className="md:w-6 md:h-6 w-4 h-4 object-cover" />, label: "Clean Kitchen" },
    { icon: <img src={chefIcon} alt="" className="md:w-6 md:h-6 w-4 h-4 object-cover" />, label: "Super Chefs" },
    ]

const Services = () => {
  return (
    <div className="w-full min-h-[100dvh] bg-white relative overflow-hidden px-6 md:px-10 lg:px-20 py-10 flex flex-col-reverse lg:flex-row items-center justify-between md:gap-16">
      <div className="relative w-full max-w-[550px] mx-auto">
        <img
          src={background}
          alt="Background"
          className="w-full h-auto relative z-0"
        />
        <img
          src={karahi}
          alt="Karahi"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] z-10"
        />
      </div>

      <div className="md:w-[40vw]">
        <h2 className="roboto-bold font-extrabold text-[6vw] sm:text-[4vw] lg:text-[2.5vw] leading-snug mb-6 text-left">
          More Than Just Food —<br /> We Offer a Complete Dining Experience.
        </h2>
        <p className="text-gray-700 text-sm mb-10 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          delectus ea optio exercitationem quibusdam ullam natus labore!
          Placeat, sit cum?
        </p>

        {/* Services */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-10">
          {services.map(({ icon, label }, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 p-2 bg-white rounded-md"
            >
              <div className="md:w-10 md:h-10 w-6 h-6 flex items-center justify-center rounded-full bg-white border border-gray-600 border-dashed shadow-sm">
                {icon}
              </div>
              <span className=" roboto-medium md:text-md text-sm text-[#3B3024]">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-left">
          <button className="px-6 py-2 rounded-full border border-[#F3BD58] bg-[#F3BD58] hover:bg-transparent transition-all duration-300 cursor-pointer">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services

