import React, { useEffect } from 'react'
import { FaCalendar, FaUser } from 'react-icons/fa6';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const blogs = [
  {
    title: "12 Healthy Fruits and Vegetables Must-Haves to Stock Your Fridge",
    image:
      "https://img.freepik.com/free-photo/noodles-with-mushrooms_2829-19065.jpg", // Replace with yours
    author: "Admin",
    date: "16th Nov 2024",
  },
  {
    title: "Orange Fresh Juice Nutrition Facts, Calories and Health Benefits",
    image:
      "https://img.freepik.com/free-photo/orange-fruits_2829-17952.jpg", // Replace with yours
    author: "Admin",
    date: "16th Nov 2024",
  },
  {
    title: "Great bulk recipes to help use all your organic vegetables",
    image:
      "https://img.freepik.com/free-photo/fresh-tomato-pepper-parsley-wooden-table_2829-10846.jpg", // Replace with yours
    author: "Admin",
    date: "16th Nov 2024",
  },
  
];

const Blogs = () => {

  useEffect(() => {
  gsap.fromTo(
    ".blogcard > div", 
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
        trigger: "#blog",
        start: "top 65%", 
        toggleActions: "play reverse none reverse",
      },
    }
  )
})



  return (
    <div id='blog' className="w-full bg-white py-8 md:mt-20 mt-4 px-6 md:px-20">
        <div className='md:text-center text-left'>
            <p className='roboto-regular'>Latest News</p>
            <h2 className='roboto-bold md:text-[3vw] text-[4vh]'>From Our Blog</h2>
        </div>

        <div className="blogcard grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:mt-16 mt-10">
        {blogs.map((blog, index) => (
          <div key={index} className="w-full">
            <div className="w-full h-[230px] overflow-hidden rounded-xl mb-4">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 mb-2">
              <div className="flex items-center gap-2">
                <FaUser className="text-xs" />
                <span>By {blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar className="text-xs" />
                <span>{blog.date}</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-[#111827] leading-snug mb-3">
              {blog.title}
            </h3>

            <a
              href="#"
              className="text-sm font-medium text-[#111827] hover:underline inline-flex items-center gap-2"
            >
              Read more <span>&rarr;</span>
            </a>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Blogs