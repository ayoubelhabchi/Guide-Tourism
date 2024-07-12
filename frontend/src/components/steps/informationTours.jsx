import { MdOutlineWhereToVote } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FiFlag } from "react-icons/fi";
import { TbCalendarEvent } from "react-icons/tb";
import { RiStarSFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardToursById } from '../../features/Slices/tourSlice';
import { useState, useEffect } from 'react';
import souk2 from '../../assets/souk2.jpg';
import spice6 from '../../assets/spice6.jpg';

const Step1 = ({ nextStep }) => {
    const dispatch = useDispatch();
    const tour = useSelector((state) => state.tours.cartTourBuId);

    // useEffect(() => {
    //     dispatch(fetchCardToursById());
    // }, [dispatch]);

    return (
        <>
            <div>
                <div className="h-20 -top-20 absolute w-full bg-white/40 backdrop-filter backdrop-blur-sm text-1xl font-Poppins flex text-center">
                    <button className="w-1/3 bg-white flex items-center justify-center capitalize">
                        <HiOutlineInformationCircle size={25} className="mr-2 text-lg" />
                        Information
                    </button>
                    <button className="w-1/3 p-5 flex items-center justify-center capitalize hover:bg-white/60" onClick={nextStep}>
                        <FiFlag size={20} className="mr-2" />
                        Guide
                    </button>
                    <button className="w-1/3 flex items-center justify-center capitalize hover:bg-white/60">
                        <TbCalendarEvent size={20} className="mr-2" />
                        Tour Plan
                    </button>
                </div>
                <div className="grid lg:grid-cols-2  bg-white gap-1">
                    <div className="p-6">
                        <div className="flex space-x-4">
                            <h3 className="lg:text-3xl text-2xl font-bold capitalize">{tour.title}</h3>
                            <div className="flex text-nowrap items-end space-x-2">
                                <h1 className="lg:text-2xl text-xl font-semibold capitalize">{tour.price} DH</h1>
                                <h1 className="lg:text-2xl text-xl text-gray-500 capitalize">/per couple</h1>
                            </div>
                        </div>
                        <div className="flex text-nowrap items-center">
                            <RiStarSFill size={20} className="text-yellow-300" />
                            <RiStarSFill size={20} className="text-yellow-300" />
                            <RiStarSFill size={20} className="text-yellow-300" />
                            <RiStarSFill size={20} className="text-yellow-300" />
                            <RiStarSFill size={20} className="text-yellow-300" />
                            <h1 className="text-gray lg:px-4 pl-2 text-sm">(2.3k review)</h1>
                        </div>
                        <h1 className="text-xl font-bold mt-6 lg:mt-12">About this Tour</h1>
                        <div>
                            <p className="text-lg lg:w-full w-full border-primary/10 rounded-xl max-h-[730px] overflow-y-auto">
                                {tour.description}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-left pt-4">
                            <label htmlFor="name" className="text-primary font-semibold text-lg">Destination:</label>
                            <div className="font-semibold pl-1" id="name">{tour.category}</div>
                            <label htmlFor="duration" className="text-primary font-semibold text-lg">Duration:</label>
                            <div className="font-semibold pl-1">{tour.duration} H</div>
                        </div>
                    </div>

                    <div className="lg:px-[90px] lg:mt-16 mt-24 lg:w-[500px] h[1500px] bottom-2 hidden lg:block">
                        <div className="relative flex lg:justify-end">
                            <div className="relative">
                                <img src={tour.image} alt="" className="lg:w-[300px] w-[150px] h-[250px] lg:h-[500px] rounded-full overflow-hidden drop-shadow-2xl" />
                                <img className="absolute lg:top-[400px] top-[200px] lg:w-[170px] w-[80px] lg:h-[250px] h-[125px] rounded-full overflow-hidden drop-shadow-2xl" src={tour.image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Step1;
