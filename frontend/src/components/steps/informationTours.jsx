
import { MdOutlineWhereToVote } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FiFlag } from "react-icons/fi";
import { TbCalendarEvent } from "react-icons/tb";
import { RiStarSFill } from "react-icons/ri";
import souk2 from '../../assets/souk2.jpg'
import spice6 from '../../assets/spice6.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardToursById } from '../../features/Slices/tourSlice';
import { useState,useEffect } from 'react';





const Step1 = ({ nextStep }) => {


    const dispatch = useDispatch();
    const tour = useSelector((state) => state.tours.cartTourBuId);

    // useEffect(() => {
    //     dispatch(fetchCardToursById());
    // }, [dispatch]);




    return (
        <>
            <div>
                <div className=" h-20 -top-20 absolute w-full bg-white/40 backdrop-filter backdrop-blur-sm text-1xl  font-Poppins flex  text-center  ">
                    <button className=" w-1/3 bg-white   flex  items-center justify-center capitalize " >
                        <HiOutlineInformationCircle  size={25} className="mr-2 text-lg  " />
                        information
                    </button>
                    <button className=" w-1/3 p-5 flex  items-center justify-center capitalize hover:bg-white/60" onClick={nextStep}>
                        <FiFlag size={20} className="mr-2 " />
                        guide
                    </button>
                    <button className=" w-1/3 flex  items-center justify-center capitalize hover:bg-white/60">
                        <TbCalendarEvent size={20}  className=' mr-2 '/>
                        tour plan
                    </button>
                </div>
                <div className=" grid grid-cols-2 gap-1 ">
                    <div className='px-8 py-[25px] '>
                        <div className='flex gap-2 '>
                            <h3 className='text-3xl text-secondaire font-bold capitalize'>{tour.title}</h3>
                            <h1 className='py-1 text-2xl capitalize '> <strong className=" text-black font-medium">{tour.price} DH</strong></h1>
                            <h1 className=' py-2 text-xl text-gray capitalize'>/per couple</h1>
                        </div>
                        <div className='flex '>   
                            <RiStarSFill size={20} className='text-yellow-300'/> 
                            <RiStarSFill size={20} className='text-yellow-300'/> 
                            <RiStarSFill size={20} className='text-yellow-300'/> 
                            <RiStarSFill size={20} className='text-yellow-300'/> 
                            <RiStarSFill size={20} className='text-yellow-300'/> 
                            <h1 className='text-gray px-4'>(2.3k review)</h1>
                        </div>
                        <h1 className=" text-lg font-bold mt-10 py-3">About this Tour</h1>
                        <p className='py[50px] text-pretty text-lg '>{tour.description}</p>
                        <div className='grid grid-cols-2 gap-4 text-left pt-4'>
                            <label htmlFor="name" className="text-primary font-semibold text-lg">Destination:</label>
                            <div id="name">{tour.category}</div>
                            <label htmlFor="duration" className="text-primary font-semibold text-lg">Duration:</label>
                            <div id="duration">{tour.duration} H</div>

                        </div>
                    </div>
                    <div className="   px-[90px] py-[60px] w-[500px] h-[1500px] bottom-2 ">

                    <div className="  relative  ">

                        <img src={tour.image} alt="" className='  w-[300px] h-[500px]   rounded-full ouverllow-hidden drop-shadow-2xl ' />





                        <img className=' absolute top-[400px] w-[170px] h-[250px]   rounded-full ouverllow-hidden drop-shadow-2xl ' src={tour.image} alt="" />
                    </div>

                </div>
                </div>
            </div>
        </>
    );
}

export default Step1;