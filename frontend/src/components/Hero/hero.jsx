import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";
import heroImg from '../../assets/hero1.jpg';

const Hero = () => {
  const [showInput, setShowInput] = useState(false);
  const [destination, setDestination] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    setShowInput(true);
  };

  const closeClick = () => {
    setShowInput(false);
  };

  const handleInputChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const toggleDurationInput = () => {
    setShowInput(!showInput);
  };

  const handleSubmit = () => {
    let path = "";
    if (selectedOption === "") {
      path = "/tour";
    } else if (selectedOption === "option2") {
      path = "/camping";
    }
    if (path) {
      navigate(`${path}?destination=${destination}&duration=${duration}`);
    }
  };

  return (
    <div className="w-full hscreen relative">
 <div className="relative rounded-2xl lg:bp-32 lg:h-screen hf hscreen">
  <img src={heroImg} alt="" className="w-full lg:h-[700px] h-full object-cover" />
 <div className="" class="custom-shape-divider-bottom-1723127288">
    <svg className=" rotate-180  absolute lg:-bottom-[150px] -bottom-0.5 w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill fill-white"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill fill-white"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill fill-white"></path>
    </svg>
</div>
        <div className="lg:w-4/5 lg:pl-20 p-2 lg:h-screen h-full lg:mt[-200px] absolute lg:-bottom-3/4 md:-bottom-1/2 -bottom-2/4 mt-[-120px]">
          <div className="bg-white/40 backdrop-filter  backdrop-blur-md rounded-md lg:h-20 h-14 lg:w-[700px] w-[340px] flex items-center justify-between lg:p-4 p-1.5">
            <div>
              {showInput ? (
                <input
                  type="text"
                  placeholder="Where ?"
                  className="bg-transparent lg:text-xl text-sm text-black rounded-2xl px-2 lg:w-[150px] w-[70px] placeholder:text-gray border-none"
                  value={destination}
                  onChange={handleInputChange}
                />
              ) : (
                <button
                  onClick={handleClick}
                  className="bg-transparent lg:text-xl text-sm text-nowrap text-white rounded-2xl lg:px-2 lg:w-[150px] w[100px] "
                >
                  Where ?
                </button>
              )}
            </div>
            <RxDividerVertical size={45} className="hidden md:block text-white/40" />
            <div className="flex ">
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="bg-transparent lg:text-xl text-sm text-nowrap text-white rounded-2xl lg:px-2 lg:w-[150px] w-[90px] border-none"
              >
                <option className="text-black" value="option1">Tours</option>
                <option className="text-black" value="option2">Campings</option>
              </select>
              <RxDividerVertical size={45} className="hidden md:block text-white/40" />
            </div>
            <div className="flex">
              {showInput ? (
                <input
                  type="text"
                  value={duration}
                  onChange={handleDurationChange}
                  placeholder="Duration"
                  className="bg-transparent lg:text-xl text-sm text-black rounded-2xl px-2 lg:w-[150px] w-[70px] placeholder:text-gray border-none"
                />
              ) : (
                <button
                  onClick={toggleDurationInput}
                  className="bg-transparent lg:text-xl text-sm text-nowrap text-white rounded-2xl lg:px-2 pr-2 lg:w-[150px] w[100px] placeholder:text-gray-100"
                >
                  Duration ?
                </button>
              )}
            </div>
            <button
              onClick={handleSubmit}
              className="lg:text-lg lg:py-2 py-1.5 px-3 lg:px-8 lg:h-12 rounded-2xl text-white bg-primary hover:bg-white hover:text-primary transition-bg hover:border-primary"
            >
              Submit
            </button>
          </div>
          <div className="lg:-top-[210px] -top-[130px] w-[350px] relative lg:w-[700px]">
            <h1 className="text-white font-bold text-2xl lg:text-5xl">
              No matter where you're going, we'll take you there
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
