import background2 from '../../assets/camping1.jpg'
import { IoPerson, IoCloseSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAddressCard, FaInfo } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiCheckCircle, BiSave } from "react-icons/bi";
import { fetchProfile, updateProfile } from '../../features/Slices/userProfileSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { updateProfile } from '../../features/Slices/guideSlice';




function UserProfile({handleProfileClose, handleGuide}) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();
  
  const profile = useSelector((state) => state.users.profile);
  
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  
  useEffect(() => {
    setFormData({
      firstName: profile.firstName || profile.data?.user?.firstName ,
      lastName: profile.lastName || profile.data?.user?.lastName,
      email: profile.email || profile.data?.user?.email,
      password: '',
      address: profile.address || profile.data?.user?.address,
      phone: profile.phone || profile.data?.user?.phone
    });
  }, [profile]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    // const id = profile._id
    e.preventDefault();
    setIsSubmitted(true);
    const updatedFormData = { ...formData };
    if (updatedFormData.password.trim() === '') {
      delete updatedFormData.password;
    }
    dispatch(updateProfile(updatedFormData))
      .then(() => {
      dispatch(fetchProfile());
    });  
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsSubmitted(false);
  };

  return (

    <div className=' p-1 lg:p-2 h-[510px]  w-[450px] lg:h-[550px] flex justify-start items-center lg:w-[700px] bg-white shadow-xl rounded-2xl relative' >
        <div className=' absolute top-0 right-0 m-1 lg:m-3'>

        <button onClick={handleProfileClose}>
            <IoCloseSharp className=' text-gray/50 text-xl lg:text-3xl'/>
        </button>
        </div>
    <div className=' justify-center gap-2 lg:gap-0  items-center grid grid-cols-2'>
        <div className="lg:w-[300px] h-[480px] lg:h-[530px] bg-[#e5edfa] rounded-2xl p-2">
          <div className="lg:grid lg:grid-cols-1 gap-2 text-center">

            <img src={background2} alt="" className="w-full h-26 lg:h-[150px] rounded-t-2xl" />

          <div className="relative flex justify-center -top-10 lg:-top-12">
            {profile.data?.guide ? (
                <img src={profile.data.guide.profile_picture} alt="" className="rounded-full h-16 w-16 lg:h-24 lg:w-24" />
              ) : (
                <img src={background2} alt="" className="rounded-full h-20 w-20 lg:h-24 lg:w-24" />
              )} 
          </div>
            <div className='relative bottom-6 lg:-top-12'>
              <h1 className="lg:text-xl font-semibold">Hello, {profile.firstName || profile.data?.user?.firstName}</h1>
              <div className=" relative -bottom-10 lg:-bottom-6">
                <div className=' flex flex-col  gap-4 lg:gap-1'>
                  <div className=' items-start flex flex-col'>
                    <h1 className=' font-bold'>Country</h1>
                    <input type="text" value={profile.country || profile.data?.user?.country} disabled className=' w-full rounded-2xl  font-semibold bg-transparent border-2 border-black' />
                  </div>
                  <div className=' items-start flex flex-col'>
                    <h1 className=' font-bold'>Role</h1>
                    <input type="text" value={profile.role || profile.data?.user?.role} disabled className=' w-full rounded-2xl font-semibold bg-transparent border-2 border-black' />
                  </div>
                </div>
              </div>
     
            </div>
          </div>
          <div className='flex items-center justify-center mt-10 lg:mt-4'>
        <div className='relative' onClick={handleProfileClose}>

        {profile.role === 'user' ? (
          <button onClick={handleGuide} className='bg-gray/50 text-white font-semibold p-1.5 lg:px-6 lg:py-2 rounded-full flex items-center' >
            <IoPerson size={20} className='mr-2' />
            Become a guide
          </button>
        ) : (profile.data?.guide?.status === 'pending') ? (
          <h1 className='bg-gray text-white font-semibold p-1.5 lg:px-6 lg:py-2 rounded-full flex items-center'>
            Waitting for approvement
          </h1>
          ) : (profile.data?.guide?.status === 'rejected') ? (
            <button onClick={handleGuide} className='bg-gray/50 text-white font-semibold px-6 py-2 rounded-full flex items-center' >
            <IoPerson size={20} className='mr-2' />
            Become a guide
          </button>
          ) : (
           <Link to={"/dashboard"}>
               <button  className='bg-primary text-white font-semibold p-1.5 lg:px-6 lg:py-2 rounded-full flex items-center'>
            <AiOutlineDashboard size={20} className='mr-2' />
            Dashboard
          </button>
           </Link>
         
        )}
        </div>
      </div>
        </div>
        <div className=''>
          <form onSubmit={handleSubmit}>
            <div className='flex items-center pb-4 lg:pb-3 '>
              <FaInfo className='text-primary lg:text-3xl text-1xl' />
              <h1 className='font-semibold flex lg:text-3xl text- text-primary'>Personal Informations</h1>
            </div>
            <div className=' relative gap-4 flex flex-col items-center'>
              <div className='w-full flex'>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='Firstname' className='w-full border-[1.5px] pl-8  border-gray-400 rounded-lg' />
                <IoPerson size={20} className='absolute  translate-y-3  ml-2 text-gray-400' />
              </div>
              <div className='w-full flex'>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Lastname' className='w-full border-[1.5px] pl-8  border-gray-400 rounded-lg' />
                <IoPerson size={20} className='absolute  translate-y-3  ml-2 text-gray-400' />
              </div>
              <div className='w-full flex'>
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Email' className='w-full border-[1.5px] pl-8  border-gray-400 rounded-lg' />
                <MdAlternateEmail size={20} className='absolute  translate-y-3  ml-2 text-gray-400' />
              </div>
              <div className='w-full flex'>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' className='w-full border-[1.5px] pl-8  border-gray-400 rounded-lg' />
                <RiLockPasswordFill size={20} className='absolute translate-y-3  ml-2 text-gray-400' />
              </div>
              <div className='w-full flex'>
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder='Address' className='w-full border-[1.5px] pl-8  border-gray-400 rounded-lg' />
                <FaAddressCard size={20} className='absolute translate-y-3 ml-2 text-gray-400' />
              </div>
              <div className='w-full flex '>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder='Phone' className='w-full border-[1.5px] pl-8  border-gray-400 rounded-lg' />
                <BsFillTelephoneFill size={20} className='absolute translate-y-3 ml-2 text-gray-400' />
              </div>
              {isSubmitted ? (
              <button 
              disabled
              type='submit' 
              className='w-36 lg:-mb-0 -mb-10 gap-2 p-2 flex justify-center items-center  text-white font-semibold rounded-full bg-green-500'
              >
              <BiCheckCircle size={20}/>
              Saved
            </button>
              ) : (
                <button 
                // disabled
                type='submit' 
                className='w-36 lg:-mb-0 -mb-10 gap-2 p-2 flex justify-center items-center text-white font-semibold rounded-full hover:bg-white hover:text-primary border bg-primary'
                >
                <BiSave size={20}/>
                Save
              </button>
              )}
            </div>
          </form>
        </div>
        </div>
    </div>
  )
}

export default UserProfile