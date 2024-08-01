import React from "react";
import { FaSearch } from "react-icons/fa";
import  { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import guide1 from '../../assets/guide7.jpg'
import guide2 from '../../assets/guide2.jpg'
import guide3 from '../../assets/guide3.jpg'
import guide4 from '../../assets/guide4.jpg'
import guide5 from '../../assets/guide5.jpg'
import guide6 from '../../assets/guide1.jpg'



export default function HomeSearch() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);


 const [destination, setDestination] = useState("");
 const navigate = useNavigate();

 const handleInputChange = (e) => {
    setDestination(e.target.value);
  };


  const handleSubmit = () => {
    let path = "/tour";
    if (path) {
      navigate(`${path}?destination=${destination}`);
    }
  };


  return (
    <div className=" bg-primary/20 h-full w-full px-2  mt-10">
      <div className=" grid grid-cols-2 gap-2">
        <div className="grid grid-cols-3 lg:gap-4 gap-2 hfull ">
          <div className="grid grid-rows- h-full lg:gap-4 gap-2 ">
            <div className="lg:h-[240px] h-[130px] hfull w-full bggray rounded-b-3xl bg-cover bg-center"  style={{ backgroundImage: `url(${guide1})` }} data-aos="zoom-out-down">
              {/* Content for Card 1 */}
            </div>
            <div className="lg:h-[160px] h-[90px] w-full bg-black rounded-t-3xl bg-cover bg-center"  style={{ backgroundImage: `url(${guide2})` }} data-aos="zoom-in-up">
              {/* Content for Card 2 */}
            </div>
          </div>
          <div className="grid grid-rows- h-full lg:gap-4 gap-2">
            <div className="lg:h[160px] hfull w-full bg-red-400 rounded-b-3xl bg-cover bg-center"  style={{ backgroundImage: `url(${guide3})` }} data-aos="zoom-in">
              {/* Content for Card 3 */}
            </div>
            <div className="lg:h[200px] h-f w-full bg-green-300 rounded-t-3xl bg-cover bg-center"  style={{ backgroundImage: `url(${guide4})` }} data-aos="zoom-out-down">
              {/* Content for Card 4 */}
            </div>
          </div>
          <div className="grid grid-rows- hfull lg:gap-4 gap-2">
            <div className="lg:h-[160px] h-[90px] hfull w-full bg-gray rounded-b-3xl bg-cover bg-center"  style={{ backgroundImage: `url(${guide5})` }} data-aos="zoom-in-left">
              {/* Content for Card 1 */}
            </div>
            <div className="lg:h-[240px] h-[130px] w-full bg-black rounded-t-3xl bg-cover bg-center"  style={{ backgroundImage: `url(${guide6})` }} data-aos="zoom-out-left">
              {/* Content for Card 2 */}
            </div>
          </div>
        </div>

          <div className=" flex flex-col justify-center items-center lg:gap-3 gap-2 lg:px-10 px4">
            <h1 className=" lg:font-bold lg:text-3xl text-xl font-semibold text-primary">
                Find Your Own Tours
            </h1>
            <p className=" lg:font-semibold font-normal lg:text-lg text-sm flex text-center lg:pb-3 pb-2">
              Our local hosts can offer you a truly unique tour. Get in contact
              with your favourite local host for an offer 100% personalized to
              your wishes.
            </p>
            <div className="relative lg:wfull  mt4 ">
            <input
              type="text"
              placeholder="Find Your Tour"
              className="lg:w-[450px] w-36 lg:h-14 border-primary border-[1.5px] rounded-full lg:pl-8 lg:text-xl text-xs"
              value={destination}
              onChange={handleInputChange}
            />
            <button 
            onClick={handleSubmit}
            className="absolute inset-y-0 right-0 flex items-center pr4 bg-primary lg:px-6 px-3 rounded-full m-1.5">
                
              <FaSearch className=" lg:text-3xl text-sm" />
            </button>
          </div>
          </div>
      </div>
    </div>
  );
}
