import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowDown } from 'react-icons/io';
import imageDakhla from '../../assets/dakhla.jpg';
import imageEssaouira from '../../assets/essaouira.jpeg';
import imageMarzouga from '../../assets/marzouga.jpg';
import imageOuarzazate from '../../assets/ouarzazate.jpg';
import imageTamezmout from '../../assets/tamezmout.jpg';
const data = [
  {
    id: 1,
    name: 'Dakhla ',
    category: 'burger',
    image:
    imageDakhla,
    price: "560 dh",
  },
  {
    id: 2,
    name: 'Essaouira',
    category: '',
    image:
    imageEssaouira,
    price: '$',
  },
  {
    id: 3,
    name: 'Marzouga',
    category: '',
    image:
    imageMarzouga,
    price: "500 dh"
  },
  {
    id: 4,
    name: 'Ouarzazate',
    category: '',
    image:
    imageOuarzazate,
    price: '$$$',
  },
  {
    id: 5,
    name: 'Tamezmout',
    category: 'pizza',
    image:
    imageTamezmout,
    price: '$$',
  },
];
const SliderArrow = ({ className, style, onClick, position }) => {
  const arrowStyle =
    position === 'next'
      ? { ...style, right: '10px' }
      : { ...style, left: '10px', zIndex: '1' };

  return <div className={className} style={arrowStyle} onClick={onClick} />;
};
const SwipperHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToShow: 2,
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
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" />,
  };
  return (
    <div>
      <div className="flex flex-col py-12 gap-5">
        <div className="flex flex-col items-center justify-center">
        <h1 className="w-full text-lg tracking-widest text-red-400 uppercase max-md:max-w-full text-center">
      Promotion
    </h1>
    <p className="mt-16 w-full text-5xl leading-[71px] text-indigo-950 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[63px] text-center">
      We Provide You Best Morocco Sightseeing Tours
    </p>
   
    <p className="mt-6 w-full text-base leading-7 text-black max-md:max-w-full text-center">
      Et labore harum non nobis ipsum eum molestias mollitia et corporis
      praesentium a laudantium internos. Non quis eius quo eligendi corrupti et
      fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut
      optio quibusdam!
    </p>
    
        </div>
        <div className="mx-12 ">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index}>
                <div className="border rounded-lg mx-2">
                  <img
                    width={400}
                    height={300}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[300px] object-cover rounded-t-lg "
                  />
                  <div className="flex flex-col gap-2 px-2 py-4">
                    <div className="text-lg ">{item.name}</div>

                    <div className="flex flex-row justify-between items-center font-semibold">
                      <p>500.00 MAD</p>
                      <button className="bg-primary duration-200 p-1 text-sm rounded-full text-white  hover:bg-white hover:border-primary hover:text-primary">
                       Book now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex flex-col justify-center items-center pt-9 ">
          <h2 className="text-xl font-semibold tracking-tight ">
           Discover more packages
          </h2>
          <div className="animate-bounce text-bold">
            <IoIosArrowDown size={40} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipperHome;
