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
    <div className="w-full h-screen relative">
      <div className="relative justify-center rounded-2xl lg:bp-32 lg:h-screen">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="lg:w-4/5 lg:pl-20 p-2 lg:h-screen h-full lg:mt-[-150px] mt-[-120px]">
          <div className="bg-white/40 backdrop-filter backdrop-blur-md rounded-md lg:h-20 lg:w-[730px] flex items-center justify-between p-4">
            <div>
              {showInput ? (
                <input
                  type="text"
                  placeholder="Destination"
                  className="bg-transparent text-xl text-black rounded-2xl px-2 lg:w-[150px] w-[100px] placeholder:text-gray-100"
                  value={destination}
                  onChange={handleInputChange}
                />
              ) : (
                <button
                  onClick={handleClick}
                  className="bg-transparent text-xl text-white rounded-2xl px-2 lg:w-[150px] w-[100px] "
                >
                  Where ?
                </button>
              )}
            </div>
            <RxDividerVertical size={45} className="hidden md:block text-gray-200" />
            <div className="flex">
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="bg-transparent text-xl text-white rounded-2xl px-2 lg:w-[150px] w-[100px] border-none"
              >
                <option className="text-black" value="option1">Tours</option>
                <option className="text-black" value="option2">Campings</option>
              </select>
              <RxDividerVertical size={45} className="hidden md:block text-gray-200" />
            </div>
            <div className="flex">
              {showInput ? (
                <input
                  type="text"
                  value={duration}
                  onChange={handleDurationChange}
                  placeholder="Duration"
                  className="bg-transparent text-xl text-black rounded-2xl lg:w-[150px] w-[100px] placeholder:text-gray-100"
                />
              ) : (
                <button
                  onClick={toggleDurationInput}
                  className="bg-transparent text-xl text-white rounded-2xl px-2 lg:w-[150px] w-[100px] placeholder:text-gray-100"
                >
                  Duration ?
                </button>
              )}
            </div>
            <button
              onClick={handleSubmit}
              className="text-lg bg-blue-400 py-2 px-3 lg:px-8 lg:h-12 rounded-2xl text-white bg-primary hover:bg-white hover:text-primary transition-bg hover:border-primary"
            >
              Submit
            </button>
          </div>
          <div className="lg:-top-[270px] -top-[170px] w-[450px] relative lg:w-[500px]">
            <h1 className="text-white font-bold text-3xl lg:text-5xl">
              No matter where you're going, we'll take you there
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
