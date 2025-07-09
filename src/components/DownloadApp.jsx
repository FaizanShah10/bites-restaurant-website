import googleIcon from '../assets/icons/google-play.png'
import appleIcon from '../assets/icons/apple-logo.png'
import application from '../assets/images/application.png'

import React from "react";

const GooglePlayButton = () => {
  return (
    <a
      href="#"
      className="flex items-center bg-white rounded-full shadow px-6 py-2 w-fit border border-gray-200"
    >
      <img
        src={googleIcon}
        alt="Google Play"
        className="w-6 h-6 mr-3"
      />

      <div className="flex flex-col leading-tight">
        <span className="text-[10px] font-medium text-gray-600">
          GET IT ON
        </span>
        <span className="text-[16px] font-bold text-black -mt-1">
          Google Play
        </span>
      </div>
    </a>
  );
}

const ApplePlayButton = () => {
  return (
    <a
      href="#"
      className="flex items-center bg-white rounded-full shadow px-6 py-2 w-fit border border-gray-200"
    >
      <img
        src={appleIcon}
        alt="Apple Store"
        className="w-6 h-6 mr-3"
      />

      <div className="flex flex-col leading-tight">
        <span className="text-[10px] font-medium text-gray-600">
          GET IT ON
        </span>
        <span className="text-[16px] font-bold text-black -mt-1">
          Apple Store
        </span>
      </div>
    </a>
  );
}


const DownloadApp = () => {
  return (
    <div className="w-full bg-[#FFFCF7] py-24 md:mt-20 mt-4 px-6 md:px-20">
        <div className='bg-[#f8e7c9] w-full h-[450px] rounded-lg lg:px-32 px-6 py-16 flex justify-center'>
            <div>
                <div>
                <h2 className='roboto-bold md:text-[3vw] text-[3vh] lg:leading-14 md:leading-7 leading-6'>Never Feel Hungry! <br /> Download Our Mobile App <br /> Enjoy Delicious Foods</h2>
            <div className='md:w-[50%]  mt-6'>
                <p className='text-sm text-gray-700 roboto-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam eveniet quidem iure, aperiam sunt asperiores cum molestiae ipsum eum.</p>
            </div>

            <div className='mt-6 flex md:flex-row flex-col gap-4'>
                   <GooglePlayButton/>
                   <ApplePlayButton/>
            </div>
            </div>
            </div>

            <div className='md:block hidden lg:-mt-14 mr-2'>
                <img className='lg:w-[60vw] w-[80vw]' src={application} alt="" />
            </div>  
        </div>

       

        

    </div>
  )
}

export default DownloadApp