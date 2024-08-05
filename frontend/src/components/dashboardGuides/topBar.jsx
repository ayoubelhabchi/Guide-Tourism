import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGuideInfo } from '../../features/Slices/infoguideSlice';
import { Link } from 'react-router-dom';
function TopBar() {
  const dispatch = useDispatch();
  const { guideInfo, loading, error } = useSelector((state) => state.guideInfo);

  useEffect(() => {
    dispatch(fetchGuideInfo());
  }, [dispatch]);

  return (
    <div className="bg-primary flex items-center p-2">
        <div className="pl[70px] text-white h[70px]">
            <div className="flex items-center gap-2 capitalize">
            <h1 className="font-year lg:text-5xl text-2xl mt-2">Hello,</h1>
            {loading ? (
                <span>Loading...</span>
            ) : error ? (
                <span>Error loading guide info</span>
            ) : (
                guideInfo && guideInfo.user && (
                <h1 className="lg:text-4xl text-xl font-medium">
                    {guideInfo.user.firstName} {guideInfo.user.lastName}
                </h1>
                )
            )}
            </div>
        </div>
        <div className=' absolute lg:left-1/2 left-2/4'>
            <ul className=' flex items-center text-white lg:gap-8 gap-3 text-xl font-medium cursor-pointer '>
                <li className="">
                    <Link to={'/home'} className="relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to={'/tour'} className="relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300">
                    Tours
                    </Link>
                </li>
                <li>
                    <Link to={'/camping'} className="relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300">
                    Campings
                    </Link>
                </li>

                
            </ul>
        </div>
    </div>
  );
}

export default TopBar;
