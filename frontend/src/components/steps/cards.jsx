import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LiaCampgroundSolid } from "react-icons/lia";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoPricetagOutline } from "react-icons/io5";
import { TfiFaceSad } from "react-icons/tfi";
import card from '../../assets/agadir.png';
import campingVideo from '../../assets/campingVideo.mp4';
import { fetchCampings, fetchCampingsById } from '../../features/Slices/campingSlice';
import Loading from '../../tools/loadingPage';

export default function Cards({ nextStep }) {
    const dispatch = useDispatch();
    const { campings, loading } = useSelector((state) => state.campings);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortByPrice, setSortByPrice] = useState(false);
    const [searchPrice, setSearchPrice] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [selectedCampingId, setSelectedCampingId] = useState(null);

    useEffect(() => {
        dispatch(fetchCampings());
    }, [dispatch]);

    const filteredCampings = campings.filter(camping =>
        camping.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!searchPrice || (camping.price && camping.price.toString() === searchPrice)) &&
        (!searchDate || (camping.start_date && new Date(camping.start_date).toISOString().split('T')[0] === searchDate))
    );

    const sortedCampings = sortByPrice ? [...filteredCampings].sort((a, b) => parseFloat(a.price) - parseFloat(b.price)) : filteredCampings;

    const handleSortByPrice = () => {
        setSortByPrice(!sortByPrice);
    };

    const handleItemsPerPageChange = (e) => {
        setCurrentPage(1);
        setItemsPerPage(parseInt(e.target.value, 10));
    };

    const toggleCampingSelection = (campingId) => {
        setSelectedCampingId(selectedCampingId === campingId ? null : campingId);
        // console.log("campingId", campingId);
        dispatch(fetchCampingsById(campingId));
    };

    const totalItems = sortedCampings.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const remainingPages = totalPages - currentPage;

    const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
    const indexOfLastItem = campings ? Math.min(indexOfFirstItem + itemsPerPage, campings.length) : 0;
    const campingsCards = sortedCampings.slice(indexOfFirstItem, indexOfLastItem);

    const goToNextPage = () => {
        if (campingsCards.length === itemsPerPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="grid grid-cols-2 gap-2 pb-5 p-2 relative">
            <div className="grid grid-cols-2 gap-3 relative">
                {/* Cards */}
                {loading ? (
                    // <div className="flex w-full absolute items-center justify-center ">
                    //     {/* <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray"></div> */}
                    // </div>
                    <div className=' w-full absolute'>

                        <Loading/>
                    </div>

                ) : campingsCards.length > 0 ? (
                    campingsCards.map((camping, index) => (
                        <div onClick={nextStep} key={index} className='relative bg-white lg:p-1 p-0.5 h-max w56 hover:scale-105 rounded-2xl hover:shadow-2xl shadow-md duration-100 cursor-pointer'>
                            <div className='relative'>
                                <img onClick={() => toggleCampingSelection(camping._id)} src={camping.image} alt="Card" className='lg:h-[260px] h-[160px] w-full rounded-2xl object-cover' />
                                <div className="absolute bottom-0 w-full h-[100px] bg-gradient-to-t via-black/50 from-black/60 to-transparent rounded-b-[15px]"></div>
                                <div className="flex absolute top-2 right-1 gap-1 text-white px-0.5 bg-black rounded-full">
                                    <div className='flex items-center'>
                                        <IoPricetagOutline className=' lg:text-lg text-xs' />
                                    </div>
                                    <h2 className=" lg:text-base text-xs">{camping.price} DH</h2>
                                </div>
                                <div className='absolute bottom-0 z-10 p-1 right-0 w-full  rounded-b-2xl'>
                                    <div className='flex flex-col'>
                                        <div className="flex justify-between font-bold text-white pb-">
                                            <div className=' flex items-center' >
                                                <LiaCampgroundSolid size={20} className='' />
                                                <h1 className=' lg:block hidden pl-1'>Location</h1>
                                            </div>
                                            <h2 className="capitalize font-semibold">{camping.location}</h2>
                                        </div>
                                        <div className="flex justify-between font-bold text-white pb-">
                                            <div className=' flex items-center'>
                                                <FaPeopleGroup size={20} className='' />
                                                <h1 className='lg:block hidden pl-1'>Memebers</h1>
                                            </div>
                                            <h2 className="capitalize font-semibold">{camping.group_member}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-0.5 relative'>
                                <div className="text-center relative"></div>
                            </div>
                        </div>
                    ))
                ) : (
                    (searchPrice || searchDate || searchTerm) &&
                    <div className="flex flex-col items-center justify-center col-span-2">
                        <TfiFaceSad className="text-7xl lg:text-[100px] opacity-20" />
                        <div className="text-center">
                            <h1 className="text-xl">Sorry!</h1>
                            <h1 className="text-xl">No tours found.</h1>
                        </div>
                    </div>
                )}
                <div className="absolute -bottom-9 flex left-[100px] lg:left-20 gap-10">
                    {filteredCampings.length > itemsPerPage && (
                        <>
                            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                                <IoIosArrowBack className=' text-primary' size={25} />
                            </button>
                            <div className='px-2 flex gap-4'>
                                <div className='bg-primary px-[9px] rounded-full'>{currentPage}</div>
                                {totalPages}
                            </div>
                            <button onClick={goToNextPage} disabled={indexOfLastItem === filteredCampings.length}>
                                <IoIosArrowForward className=' text-primary' size={25} />
                            </button>
                         
                        </>
                    )}
                </div>
            </div>
            {/* Plan Your Tour Section */}
            <div className="flex flex-col items-center lg:place-items-stretch">
                <div className="lg:w-full w[350px] bg-stone-100 rounded-lg p-2 lg:p-4">
                    <div className="lg:text-3xl text-xl font-bold text-center text-primary pb2 lg:pb-4">
                        <h1>Book your camping</h1>
                    </div>
                    <p className="text-center  pb-2 lg:pb-6">
                    Camping in Morocco is an exhilarating journey where passion meets discovery. 
                    </p>
                    <div className="grid grid-cols-1 gap-3 lg:gap-5 pb-4">
                        <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} type="text" placeholder='Search Camping' className="w-full rounded-2xl h-10 text-center border-none bg-white" />
                        <input onChange={(e) => setSearchDate(e.target.value)} value={searchDate} type="text" placeholder='Date' className="w-full h-10 text-center rounded-2xl border-none bg-white" />
                        <h2 className="uppercase lg:text-xl text-sm font-bold -mb-3">Filter by price</h2>
                        <div className="relative items-center flex">
                            <input onChange={(e) => setSearchPrice(e.target.value)} value={searchPrice} type="text" placeholder='Enter price range (250-1000 MAD)' className="w-full h-6 lg:h-10 rounded-2xl text-center border-none bg-white pr12" />
                            <button onClick={handleSortByPrice} className="absolute h-full w-12 left-0 bg-primary text-white rounded-l-md">
                                Sort {sortByPrice ? '↓' : ''}
                            </button>
                        </div>
                        <h4 className="text-neutral-600 capitalize">ex: price 12dh-3600 MAD</h4>
                    </div>
                </div>
                <div className='pt-6 justify-center items-center pb-1 lg:block hidden'>
                    <video className="h-full lg:w-full w-[350px] object-cover rounded-lg shadow-2xl" src={campingVideo} autoPlay loop muted></video>
                </div>
            </div>
        </div>
    );
}
