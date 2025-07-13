import { useEffect, useRef } from 'react'
import karahiImage from '../assets/images/karahi.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);



const Reservation = () => {

  const headingRef = useRef()
  const imageRef = useRef()

  useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#reservation",
      start: "top 60%",
      toggleActions: "play none none reverse",
      markers: true
    }
  });

  tl.fromTo(headingRef.current,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
  ).fromTo(imageRef.current,
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
    "-=1.2" 
  );
});


  return (
    <div id='reservation' className="w-full bg-[#FFFCF7] py-16  px-6 md:px-20">
        <div className='flex md:flex-row flex-col items-center justify-center lg:gap-1 md:gap-20 gap-20'>
            <div ref={headingRef} className='lg:w-[40%] md:w-[60%]'>
                <h2  className='roboto-bold md:text-[3.5vw] text-[4vh] lg:leading-15 md:leading-10 leading-8 mb-6'>Do You Have Any Dinner Plan Today? Reserve Your Table</h2>
                <p className='roboto-regular text-gray-700 text-sm mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi alias perferendis neque dolorem dolores consequatur fuga a odio quod inventore.</p>
                <button className='px-8 py-2 rounded-full bg-[#F3BD58] border-1 border-[#F3BD58] hover:bg-transparent transition-all duration-300 cursor-pointer'>Make Reservation</button>
            </div>
            <div>
              <img ref={imageRef} className='lg:w-[600px] lg:h-[600px] md:w-[400px] md:h-[350px] w-[600px]' src={karahiImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reservation