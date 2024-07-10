import React, { useEffect } from 'react';
import { TbCalendarEvent } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, Booking } from '../../features/Slices/bookingSlice';
import { fetchGuideProfile } from '../../features/Slices/tourSlice';
import img from '../../assets/hero2.jpg'

const Step3 = ({ nextStep, prevStep, prev2Step }) => {
  const dispatch = useDispatch();
  const tour = useSelector((state) => state.tours.cartTourBuId);
  const userId = useSelector((state) => state.bookings.profile._id);
  const checkoutUrl = useSelector((state) => state.bookings.checkoutUrl);
  const guideprofile = useSelector((state) => state.tours.guideProfile);
  console.log("guideprofile",guideprofile);

  
  useEffect(() => {
      dispatch(fetchGuideProfile());
    }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleBooking = () => {
    const amount = tour.price;
    dispatch(Booking({ tourId: tour._id, userId, amount }));
  };

  useEffect(() => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  }, [checkoutUrl]);

  return (
    <>
      <div className="h-20 -top-20 absolute w-full bg-white/40 backdrop-filter backdrop-blur-sm text-1xl font-Poppins flex text-center">
        <button
          className="w-1/3 bg-white/60 flex items-center justify-center capitalize text-green-500 font-bold"
          onClick={prev2Step}
        >
          <GrStatusGood size={25} className="mr-2 text-lg text-green-500" />
          information
        </button>
        <button
          className="w-1/3 p-5 flex items-center justify-center capitalize bg-white/60 text-green-500 font-bold"
          onClick={prevStep}
        >
          <GrStatusGood size={25} className="mr-2 text-green-500" />
          guide
        </button>
        <button className="w-1/3 flex items-center justify-center capitalize bg-white">
          <TbCalendarEvent size={25} className="mr-2" />
          tour plan
        </button>
      </div>
      <div className="relative p-4 gap-4 grid grid-cols-2">
      <div className="bg-white text-black p-4 w-full h-screen flex flex-col shadow-2xl rounded-xl">
          <div className="w-full h-1/2 rounded-t-xl flex items-center justify-center">
            <img src={tour.image} alt="Tour Image" className="w-full h-full object-cover" />
          </div>
          <div className=' flex flex-col p-3 rounded-lg'>
          <h1 className="text-xl font-bold">Tour Description</h1>

           <span className='w-full  border-primary/10 rounded-xl max-h-44 overflow-y-auto'>{tour.description}</span>
            </div>
          <div className="mt- p-4">
            <div className="flex justify-between">
              <div>
                <h2 className="text-lg font-semibold">Duration</h2>
                <p>{tour.duration} hours</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Category</h2>
                <p>{tour.category}</p>
              </div>
            </div>
            </div>
            </div>
        <div className="bg-white shadow-2xl rounded-2xl p-2 w-full h-screen flex items-center justify-center">
          <div className="lg:w-full">
            <div className="lg:grid lg:grid-cols-1 gap-2 text-center">
              <img src={img} alt="" className="w-full bg-black h-20 lg:h-[150px] rounded-t-2xl" />
              <div className="relative flex justify-center -top-12">
                <img src={guideprofile.profile_picture} alt="" className="rounded-full h-24 w-24" />
              </div>
              <div className="relative -top-12">
                <h1 className="lg:text-xl font-semibold">Tour: {tour.title}</h1>
                <h3 className="lg:text-2xl font-year text-[#021F86] capitalize">With {guideprofile.firstName} </h3>
                <div className="justify-between p-2 lg:px-8">
                  <div className="bg-gray/10 rounded-xl h- text-left p-2">
                    <h1 className="text-lg font-semibold">Payment details</h1>
                    <hr />
                    <div className="flex justify-between py-6 pt-">
                      <h1 className="font-semibold">Booking</h1>
                      <h2> {tour.price} MAD</h2>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                      <h1 className="font-semibold">Total</h1>
                      <h1 className="font-semibold">{tour.price} Dh</h1>
                    </div>
                  </div>
                </div>
                <div className="lg:pt-4">
                  <div className="lg:mt-">
                    <button onClick={handleBooking} className="bg-primary text-white text-lg font-semibold lg:px-12 p-2 hover:bg-white hover:text-primary border rounded-full">
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
