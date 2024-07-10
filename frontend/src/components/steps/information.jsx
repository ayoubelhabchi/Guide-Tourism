import card from '../../assets/agadir.png';
import background1 from '../../assets/campingPng.png';
import { IoInformationCircleOutline } from "react-icons/io5";
import { RiStarSFill } from "react-icons/ri";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampingsById } from '../../features/Slices/campingSlice';
import { useState, useEffect } from 'react';
import { fetchProfile, Booking } from '../../features/Slices/bookingSlice';

const Step1 = ({ nextStep, prevStep }) => {
    const dispatch = useDispatch();
    const SelectedCampingId = useSelector((state) => state.campings.campingID);
    const userId = useSelector((state) => state.bookings.profile._id);
    const checkoutUrl = useSelector((state) => state.bookings.checkoutUrl);

    useEffect(() => {
      dispatch(fetchProfile());
    }, [dispatch]);

    const handleBooking = () => {
      const amount = SelectedCampingId.price;
      dispatch(Booking({ campingId: SelectedCampingId._id, userId, amount }));
    };
  
    useEffect(() => {
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    }, [checkoutUrl]);
    
    return (
        <div className='relative'>
            <div className=" h-20 -top-20 absolute w-full bg-white/10 backdrop-filter backdrop-blur-sm text-1xl  font-Poppins flex  text-center  ">
                <button className=" w-full bg- text-xl font-bold text-white  flex  items-center justify-center capitalize " >
                    <IoInformationCircleOutline size={30} className="mr-2 text-lg  " />
                    Information
                </button>
            </div>
            <div className="grid grid-col-2 lg:grid-cols-2 gap-8 p-4 lg:h-[800px] ">
                <div className="grid lg:grid-cols-2 gap-4 h-[650px]">
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <h1 className='pr-6 text-xl font-bold'>{SelectedCampingId.name}</h1>
                            <h3 className='whitespace-nowrap'>{SelectedCampingId.price} DH /per couple</h3>
                        </div>
                        <div className='flex items-center pt-2'>
                            <span className='flex items-center font-semibold'>
                                <RiStarSFill size={20} className='mr-2 text-yellow-300' /> (2.3k)
                            </span>
                        </div>
                        <div className='h-28 w-[350px] justify-center text-left pt-2'>
                            <p>
                                {SelectedCampingId.description}
                            </p>
                            <div className='grid grid-cols-2 gap-4 text-left pt-4'>
                                <label htmlFor="name" className="text-blue-500 font-semibold text-lg">Name</label>
                                <div id="name">{SelectedCampingId.name}</div>
                                <label htmlFor="location" className="text-blue-500 font-semibold text-lg">Location</label>
                                <div id="location">{SelectedCampingId.location}</div>
                                <label htmlFor="description" className="text-blue-500 font-semibold text-lg">Start Date</label>
                                <div id="description">{SelectedCampingId.start_date}</div>
                                <label htmlFor="description" className="text-blue-500 font-semibold text-lg">End Date</label>
                                <div id="description">{SelectedCampingId.end_date}</div>
                                <label htmlFor="group-members" className="text-blue-500 font-semibold text-lg">Group Members</label>
                                <div id="group-members">{SelectedCampingId.group_member}</div>
                                <label htmlFor="price" className="text-blue-500 font-semibold text-lg">Price</label>
                                <div id="price">{SelectedCampingId.price}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
    <img src={SelectedCampingId.image} alt="Camping Image" className="w-[350px] h-[450px] object-cover mt-4 rounded-t-full" />
    <div className="flex justify- gap-10 w-[350px] mt-4">
        <button
            onClick={prevStep}
            className="bg-gray/30 px-6 h-10 text-white rounded-full hover:bg-white hover:text-gray border"
        >
            Back
        </button>
        <button
            onClick={handleBooking}
            className="bg-primary px-3 h-10 text-white rounded-full hover:bg-white hover:text-primary border"
        >
            Book Now
        </button>
    </div>
</div>

            </div>
        </div>
    );
};

export default Step1;
