import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampings } from '../../features/Slices/campingSlice';
import { FaAngleRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

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
            <div className='p-2 flex justify-between  gap-2 '>
                <div>
                    <h1 className='capitalize text-primary lg:text-3xl text-lg text-nowrap font-bold lg:pb-2'>
                        Top 5 Camping Destinations with Family
                    </h1>
                    <h3 className='lg:text-xl text-sm font-normal lg:font-semibold'>
                        Discover our family campings tailored to your family's wishes.
                    </h3>
                </div>
                <div className='relative flex items-center text-nowrap'>
                    <div className='flex items-center bg-primary/50 lg:p-1 p-1 rounded-xl pr5 text-base font-medium hover:underline hover:bg-white hover:border hover:text-primary '>
                    <Link to={"/camping"}>
                        <button className='lg:text-lg text-xs flex items-center'>
                            Explore more
                            <FaAngleRight className='lg:ml-0.5 lg:text-xl text-sm textblack' />
                        </button>
                    </Link>
                    </div>
                </div>

            </div>
            <div className='grid lg:grid-cols-3 gap-4 h-full  w-full'>
                {displayedCampings.map((camping, index) => (
                    <div key={index} className={` w-full  shadow-xl shad bgprimary/20 rounded-3xl ${index === 0 ? 'col-span-2 grid grid-cols-2 rounded-3xl' : 'grid grid-rows-2 overflow-hidden lg:h-[350px] h-[250px] hfull'}`}>
                        <img src={camping.image} alt="" className={` w-full object-cover bgcover bg-center ${index === 0 ? "h-full rounded-l-3xl" : " h-full rounded-t-3xl"}`} />
                        <div className={`p-2 z-50 textwhite font-semibold flex flex-col ${index === 0 ? '' : ''}`}>
                            <h1 className='z-50 lg:text-3xl lg:pb-2 pb-  textprimary'>{camping.name}</h1>
                            <h1 className='z-50 lg:text-lg flex items-center lg:gap-2 gap-1 text-primary/100'>
                            <FaLocationDot className='lg:text-lg text-sm'/>
                            {camping.location}
                            </h1>
                            <Description text={camping.description} index={index} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Description({ text, index }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const halfLength = Math.floor(text.length / 2);
    const displayedText = isExpanded ? text : `${text.substring(0, halfLength)}...`;

    return (
        <div className={` overflow-hidden ${index === 0 ? 'lg:text-base text-sm font-normal ' : 'lg:text-sm text-xs font-normal'}`}>
            <p>{displayedText}</p>
            {/* {text.length > halfLength && (
                <button onClick={toggleReadMore} className="textprimary font-semibold hover:underline">
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            )} */}
        </div>
    );
}
