import React from "react";
import { FaSearch } from "react-icons/fa";
import  { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';




export default function HomeSearch() {


    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);


  return (
    <div className=" bg-primary/20 h-full w-full px-2 ">
      <div className=" grid grid-cols-2 gap-2">
        <div className="grid grid-cols-3 gap-4 hfull ">
          <div className="grid grid-rows- h-full gap-2 ">
            <div className="h-[240px] hfull w-full bg-gray rounded-b-3xl" data-aos="zoom-out-down">
              {/* Content for Card 1 */}
            </div>
            <div className="h-[160px] w-full bg-black rounded-t-3xl" data-aos="zoom-in-up">
              {/* Content for Card 2 */}
            </div>
          </div>
          <div className="grid grid-rows- h-full gap-2">
            <div className="h[160px] h-full w-full bg-red-400 rounded-b-3xl" data-aos="zoom-in">
              {/* Content for Card 3 */}
            </div>
            <div className="h[200px] h-f w-full bg-green-300 rounded-t-3xl"data-aos="zoom-out-down">
              {/* Content for Card 4 */}
            </div>
          </div>
          <div className="grid grid-rows- h-full gap-2">
            <div className="h-[160px] hfull w-full bg-gray rounded-b-3xl" data-aos="zoom-in-left">
              {/* Content for Card 1 */}
            </div>
            <div className="h-[240px] w-full bg-black rounded-t-3xl" data-aos="zoom-out-left">
              {/* Content for Card 2 */}
            </div>
          </div>
        </div>

          <div className=" flex flex-col justify-center items-center gap-3 px-10">
            <h1 className=" font-bold text-3xl text-primary">
                Find Your Own Tours
            </h1>
            <h3 className=" font-semibold text-lg flex text-center pb-3">
              Our local hosts can offer you a truly unique tour. Get in contact
              with your favourite local host for an offer 100% personalized to
              your wishes.
            </h3>
            <div className="relative w-full  mt4 ">
            <input
              type="text"
              placeholder="Find Your Tour"
              className="w-full h-12 border-primary border-[1.5px] rounded-full pl-8 text-xl"
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr4 bg-primary px-6 rounded-full m-1.5">
              <FaSearch size={24} />
            </button>
          </div>
          </div>
      </div>
    </div>
  );
}
