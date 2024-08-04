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
            <h1 className="font-year text-5xl mt-2">Hello,</h1>
            {loading ? (
                <span>Loading...</span>
            ) : error ? (
                <span>Error loading guide info</span>
            ) : (
                guideInfo && guideInfo.user && (
                <h1 className="text-4xl ">
                    {guideInfo.user.firstName} {guideInfo.user.lastName}
                </h1>
                )
            )}
            </div>
        </div>
        <div className=' absolute left-1/2'>
            <ul className=' flex items-center text-white gap-8 text-xl font-medium cursor-pointer'>
                <li>
                    <Link to={'/home'}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to={'/tour'}>
                    Tours
                    </Link>
                </li>
                <li>
                    <Link to={'/camping'}>
                    Campings
                    </Link>
                </li>

                
            </ul>
        </div>
    </div>
  );
}

export default TopBar;
