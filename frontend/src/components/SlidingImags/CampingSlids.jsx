import React, { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import cards1 from './imgs/img2.jpg';
import cards2 from './imgs/img3.jpg';
import cards3 from './imgs/img4.jpg';
import cards4 from './imgs/img5.jpg';
import cards5 from './imgs/img1.jpg';
import cards6 from './imgs/img7.jpg';

function CampingSlids() {
  const slides = [
    { url: cards1 },
    { url: cards2 },
    { url: cards3 },
    { url: cards4 },
    { url: cards5 },
    { url: cards6 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (autoplay) {
        const nextIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(nextIndex);
      }
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, slides.length, autoplay]); 

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-screen w-full m-auto relative'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div>

      <div className='flex top-4 justify-center -mt-[140px]'>
        {/* {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-3xl text-white cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))} */}
        {/* <button onClick={() => setAutoplay(!autoplay)}>
          {autoplay ? 'Pause Autoplay' : 'Start Autoplay'}
        </button> */}
      </div>
    </div>
  );
}

export default CampingSlids;
