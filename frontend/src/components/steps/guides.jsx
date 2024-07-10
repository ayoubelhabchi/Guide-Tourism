import { MdOutlineWhereToVote } from "react-icons/md";
import { FiFlag } from "react-icons/fi";
import { TbCalendarEvent } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { MdAlternateEmail,MdOutlinePhoneAndroid } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";

import { useDispatch, useSelector } from 'react-redux';
import { fetchGuideProfile } from '../../features/Slices/tourSlice';
import { useState, useEffect } from 'react';



const Step2 = ({ nextStep, prevStep }) => {

    const dispatch = useDispatch();
    const guideprofile = useSelector((state) => state.tours.guideProfile);
    // console.log("guideprofile",guideprofile);

    
    useEffect(() => {
        dispatch(fetchGuideProfile());
      }, [dispatch]);

    return (
        <>
            <div className=" h-20 -top-20 absolute w-full bg-white/40 backdrop-filter backdrop-blur-sm text-1xl  font-Poppins flex  text-center  ">
                <button className=" w-1/3 hover:bg-white/60  bg-white/60 flex  items-center justify-center capitalize text-green-500 font-bold " onClick={prevStep} >
                    <GrStatusGood size={25} className="mr-2 text-lg text-green-500 " />
                    information
                </button>
                <button className=" w-1/3 p-5 flex  items-center justify-center capitalize bg-white" >
                    <FiFlag size={20} className="mr-2 " />
                    guide
                </button>
                <button onClick={nextStep} className=" w-1/3 flex  items-center justify-center capitalize hover:bg-white/60">
                    <TbCalendarEvent size={20} className=' mr-2 ' />
                    tour plan
                </button>
                
            </div>
            
            <div className="grid grid-cols-3 w-full gap-8 p-4">
                {/* Main Profile Card */}
                <div className="col-span-1 bg-white p-6 rounded-lg shadow-primary/50 shadow-lg">
                    <div className="flex flex-col gap-1 items-center">
                        <img
                            className="w-24 h-24 rounded-full"
                            src={guideprofile.profile_picture}
                        />
                        <h2 className="text-xl font-bold">{guideprofile.firstName}</h2>
                        <div className=" flex flex-col text-center mt-1.5 gap-">
                        <h2 className=" text-2xl text-primary font-year">Let's get in touch</h2>
                            <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <MdAlternateEmail size={18} />
                                <h1 className="font-medium truncate max-w-full" style={{ maxWidth: '180px' }}>
                                {guideprofile.email}
                                </h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdOutlinePhoneAndroid size={18} />
                                <h1 className="font-medium truncate max-w-full" style={{ maxWidth: '150px' }}>
                                {guideprofile.phone}
                                </h1>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* Contact Information Card */}
                <div className="col-span-2 w-full relative bg-white p-2 rounded-lg shadow-primary/50 shadow-lg">
                    <h3 className="text-lg font-semibold pb-2">Let's get to know each other more!</h3>
                    <div className=' flex'>
                        <div className=' p-1 absolute items-center flex'>
                            <BsFileEarmarkPerson size={20} className=' text-primary opacity-70 absolute'/>
                            <h1 className=' p-2 pl-6 opacity-70 text-primary font-semibold pb-1'>Bio</h1>
                        </div>
                        <span className='w-full pl-16 border-[1.5px] border-primary bg-primary/10 rounded-xl max-h-44 overflow-y-auto'>{guideprofile.bio}</span>
                    </div>
                    <div className='absolute bottom-2 flex items-center gap-2'>
                        {/* <ImProfile className=" opacity-50" size={25}/> */}
                        {/* <h1 className='font-semibold'>Specialization</h1> */}
                        <div className=' flex items-center justify-center'>
                            <h1 className=" bg-primary/10 p-2 rounded-full border-[1.5px] border-primary flex"> I'm specialist at<h1 className="  pl-1 font-semibold">{guideprofile.specialization}</h1></h1>
                        </div>
                    </div>
                    </div>

                
            </div>

            {/* Social Media Links */}
            <div className="grid grid-cols-1 gap-3 p-4">
                <div className=" flex items-center gap-4">
                <h1 className=" text-xl font-semibold">Reviews</h1>
                <div className=" flex">
                    <RiStarSFill className=" text-yellow-300" size={22}/>
                    <RiStarSFill className=" text-yellow-300" size={22}/>
                    <RiStarSFill className=" text-yellow-300" size={22}/>
                    <RiStarSFill className=" text-yellow-300" size={22}/>
                    <RiStarSFill className=" text-yellow-300" size={22}/>
                </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                <div className=" bg-primary/20 p-6 rounded-lg shadow-lg">
                    <p className="text-gray-600">Howa</p>
                </div>
                <div className="col-span- bg-primary/20 p-6 rounded-lg shadow-lg">
                    <p className="text-gray-600">Ana</p>
                </div>
                <div className="col-span- bg-primary/20 p-6 rounded-lg shadow-lg">
                    <p className="text-gray-600">Ntoma</p>
                </div>
                <div className="col-span- bg-primary/20 p-6 rounded-lg shadow-lg">
                    <p className="text-gray-600">We</p>
                </div>
                </div>
                
            </div>






        </>
    );
};

export default Step2;