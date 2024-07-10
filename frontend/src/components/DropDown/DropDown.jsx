import React, { useEffect, useState } from 'react';
import { IoMdSettings, IoMdLogOut } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile} from '../../features/Slices/userProfileSlice';
import { Link } from "react-router-dom";


function DropDown({handleProfile,handleOrder, handleGuide,handleProfileDropClose}) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  
  const profile = useSelector((state) => state.users.profile);

  const logout = () => {

    localStorage.removeItem('token'); 
  };
  return (
    <div className=' flex flex-col  absolute rounded-lg bg-white opacity-70 w top-10 -left-[11px] h- justify-center p-3'>
     <div className=' absolute -z-10 bg-white h-4 w-4 -top-[6px] left-4 rotate-45'></div>
        <div className=' flex flex-col gap-1 ' >
            <div className=' flex items-center ' onClick={handleProfileDropClose}>
            <IoMdSettings size={20} className=' text-black mr-2' />
            <button className=' text-black text-md font-semibold'onClick={handleProfile}>
                Settings
            </button>
            </div>
            <div className=' flex items-center'onClick={handleProfileDropClose}>
            <IoMdLogOut size={20} className='text-black mr-2' />

            <button onClick={logout} className=' text-black text-md font-semibold'>Logout</button>
            </div>

            { profile.role === 'user' ? (
            <div onClick={handleOrder} className=' flex items-center'>
            <IoCartOutline size={20} className='text-black mr-2' />
            <Link to="/orders">
            <button onClick={handleProfileDropClose} className=' text-black text-md font-semibold'>Orders</button>
            </Link>
            </div>
            ) : (
              ''
            )}

        </div>
    </div>
  )
  
}

export default DropDown