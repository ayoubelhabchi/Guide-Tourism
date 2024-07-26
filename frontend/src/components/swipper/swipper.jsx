import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDown } from "react-icons/io";
import { fetchCardTours } from "../../features/Slices/tourSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


const SliderArrow = ({ className, style, onClick, position }) => {
  const arrowStyle =
    position === "next"
      ? { ...style, right: "10px" }
      : { ...style, left: "10px", zIndex: "1" };

  return <div className={className} style={arrowStyle} onClick={onClick} />;
};
const SwipperHome = () => {
  const dispatch = useDispatch();

  const tours = useSelector((state) => state.tours.cartTour);

  useEffect(() => {
    dispatch(fetchCardTours());
  }, [dispatch]);

  // console.log("gg", tours);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" />,
  };
  return (
    <div>
      <div className="flex flex-col py12 gap-5">
        <div className="flex flex-col lg:gap-4 gap-2 items-center justify-center">
          <p className="lg:mt12 mt-4 lg:w-full w2/2 lg:text-5xl text-2xl text-center font-medium lg:font-bold  text-primary">
            We Provide You Best Morocco Sightseeing Tours
          </p>

          <p className="mt6 wfull lg:px-8 px-3 w lg:text-xl text-black text-center font-normal">
            City tours in Morocco are an exhilarating journey where passion
            meets discovery. Explore the vibrant streets and immerse yourself in
            the rich culture of this captivating country. From the bustling
            souks of Marrakech to the historic medinas of Fes, every city tour
            promises adventure and unforgettable memories.
          </p>
        </div>
        <div className="lg:mx-4  w-f">
  <Slider {...settings} >
    {tours.map((item, index) => (
      <div key={index} className="w-full mx- px-1 ">
        <div className="relative border-primary border-2 rounded-3xl mx- px overflow-hidden lg:w-full lg:h-[300px] w-[155px] h-[200px]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full h-[90px] bg-gradient-to-t via-black/50 from-black/80 to-transparent rounded-b-[15px]"></div>

          <div className="flex tw flex-col absolute bottom-1 p-2 text-white w-full">
            <div className="text-2xl capitalize font-semibold">
              {item.title}
            </div>

            <div className="font-medium">
              <h1>
                {item.price} <strong>MAD</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

        <div className="flex flex-col justify-center items-center pt-2 c ">
        <Link to="/tour" className="cursor-pointer">
          <h2 className="text-xl font-semibold trackingtight ">
            Discover More
          </h2>
          <div className="animate-bounce text-bold flex justify-center">
            <IoIosArrowDown size={40} className="text-primary" />
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default SwipperHome;
