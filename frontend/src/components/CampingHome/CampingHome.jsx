import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampings } from '../../features/Slices/campingSlice';
import { FaAngleRight } from "react-icons/fa";

export default function CampingHome() {
    const dispatch = useDispatch();
    const { campings, loading } = useSelector((state) => state.campings);
    const [displayedCampings, setDisplayedCampings] = useState([]);

    useEffect(() => {
        dispatch(fetchCampings());
    }, [dispatch]);

    useEffect(() => {
        if (campings.length > 0) {
            const updateDisplayedCampings = () => {
                const shuffled = [...campings].sort(() => 0.5 - Math.random());
                setDisplayedCampings(shuffled.slice(0, 5));
            };

            const interval = setInterval(updateDisplayedCampings, 5000);

            updateDisplayedCampings();

            return () => clearInterval(interval);
        }
    }, [campings]);

    return (
        <div className='h-full w-full bgprimary/10 mt-20 p-4'>
            <div className='p-2 flex justify-between'>
                <div>
                    <h1 className='capitalize text-3xl font-bold pb-2'>
                        Top 5 Camping Destinations with Family
                    </h1>
                    <h3 className='text-xl font-semibold'>
                        Discover our family campings tailored to your family's wishes.
                    </h3>
                </div>
                <div className='relative flex items-center hover:text-primary'>
                    <button className='bg-primary p-1.5 rounded-xl pr-5 text-base font-medium hover:underline hover:bg-white hover:border'>
                        See All Campings
                    </button>
                    <FaAngleRight className='absolute right-0 text-xl text-black hover:text-primary' />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 h-full  w-full'>
                {displayedCampings.map((camping, index) => (
                    <div key={index} className={` h[350px] wfull  bg-primary/20 rounded-3xl ${index === 0 ? 'col-span-2  grid grid-cols-2 rounded--3xl' : '  grid grid-rows-2 h-[400px]'}`}>
                        <div>
                            <img src={camping.image} alt="" className={`hfull w-full w[8700px]  object-cover bgcenter ${index === 0 ? " h-full rounded-l-3xl" : " h-[250px] rounded-t-3xl "}`} />
                            <h1 className=' z-50'>{camping.name}</h1>
                        </div>
                        <div className={`p-2 z-50 text-white ${index === 0 ? '' : ''} `}>
                        <h1 className=' z-50'>{camping.name}</h1>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
