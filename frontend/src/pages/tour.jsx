import Header from "../assets/header-tour.jpeg";
import { useState, useEffect } from 'react';
import { TbCalendarEvent } from "react-icons/tb";
import { IoSearch, IoPricetagOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineWhereToVote, MdModeOfTravel } from "react-icons/md";
import { BsPersonVcard } from "react-icons/bs";
import { TfiFaceSad } from "react-icons/tfi";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardTours, fetchCardToursById, fetchGuidesByIds } from '../features/Slices/tourSlice';

const Tour = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    // const [searchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    const [searchPrice, setSearchPrice] = useState('');
    const [searchDuration, setSearchDuration] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get('destination') || '';

    const dispatch = useDispatch();
    const { loading, cartTour: tours, guideIds: guides } = useSelector((state) => state.tours);

    useEffect(() => {
        if (tours.length > 0) {
            const guideIds = tours.map(tour => tour.guide_id);
            dispatch(fetchGuidesByIds(guideIds));
        }
    }, [tours, dispatch]);

    useEffect(() => {
        dispatch(fetchCardTours());
    }, [dispatch]);

    const bgheadertour = {
        backgroundImage: `url(${Header})`,
        backgroundSize: 'cover',
    };

    const handleTourId = (tourId) => {
        dispatch(fetchCardToursById(tourId));
    };

    const handleItemsPerPageChange = (e) => {
        setCurrentPage(1);
        setItemsPerPage(parseInt(e.target.value, 10));
    };

    const totalItems = tours.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const indexOfFirstItem = (currentPage - 1) * itemsPerPage;

    const filteredTours = tours.filter(tour => 
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!searchCategory || tour.category.toLowerCase().includes(searchCategory.toLowerCase())) &&
        (!searchPrice || tour.price <= parseFloat(searchPrice)) &&
        (!searchDuration || tour.duration === parseInt(searchDuration, 10))
    );

    const currentTours = filteredTours.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="App">
            <div className="text-white lg:h-screen h-[350px] flex items-center justify-center" style={bgheadertour}>
                <h1 className="lg:text-9xl text-7xl text-nowrap font-year text-center capitalize">travel with us</h1>
            </div>
            <div className="flex justify-center">
                <div className="shadow-2xl lg:w-4/6 relative mt-6 top-[-50px] bg-white p-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-2 lg:gap-4">
                        <div className="grid grid-cols-3 lg:grid-cols-2 gap-2 lg:gap-4 z-30">
                            {loading ? (
                                <div className="flex absolute items-center justify-center w-1/2 h-full">
                                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray"></div>
                                </div>
                            ) : currentTours.length > 0 ? (
                                currentTours.map((tour, index) => (
                                    <Link to="/Landscapes" key={index} style={{ display: 'block' }}>
                                        <div onClick={() => handleTourId(tour._id)} className='relative bg-white p-1.5 h-max w-full hover:scale-105 rounded-xl hover:shadow-2xl shadow-md duration-100'>
                                            <div className='relative'>
                                                <img src={tour.image} alt="Card" className='lg:h-[260px] h-[180px] w-full rounded-2xl object-cover' />
                                                <div className="absolute bottom-0 w-full h-[100px] bg-gradient-to-t via-black/50 from-black/60 to-transparent rounded-b-[15px]"></div>
                                                <div className="flex absolute top-2 right-1 gap-1 text-white px-0.5 bg-black rounded-full">
                                                    <div className='flex items-center'>
                                                        <IoPricetagOutline size={15} />
                                                    </div>
                                                    <h2 className=" text-sm lg:text-lg">{tour.price} $</h2>
                                                </div>
                                                <div className='absolute bottom-0 z-10 p-1 right-0 w-full  rounded-b-2xl'>
                                                    <div className='flex flex-col'>
                                                        <div className="flex text-white">
                                                            <div className='flex lg:gap-2 gap-0.5 items-center'>
                                                                <MdModeOfTravel className=" lg:text-xl" />
                                                                <h2 className="capitalize lg:text-xl font-medium">{tour.title}</h2>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between text-white">
                                                            <div className="flex text-white">
                                                                <div className='flex lg:gap-2 gap-0.5 items-center'>
                                                                    <BsPersonVcard className=" ml-1 lg:text-xl" />
                                                                    <h2 className="capitalize text-nowrap text-sm lg:text-xl font-medium">{guides[index]?.firstName}</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </Link>
                                ))
                            ) : (
                                (searchDuration || searchCategory || searchPrice || searchTerm) && (
                                    <div className="flex flex-col items-center justify-center col-span-2 h-full opacity-20">
                                        <TfiFaceSad className="text-7xl lg:text-[100px] " />
                                        <div className="text-center">
                                            <h1 className="text-xl">Sorry!</h1>
                                            <h1 className="text-xl">No tours found.</h1>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>

                        <div className="w-full h-max bg-stone-100 rounded-lg p-2 lg:p-4 hidden lg:block">
                            <div className="lg:text-3xl text-xl font-semibold pb-2 text-primary justify-center flex">
                                <h1>Plan your tour</h1>
                            </div>
                            <p className="text-center">Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
                            <div className="flex flex-col gap-4">
                                <div className="gap-1"></div>
                                <div className="relative">
                                    <input onChange={(e) => {
                                            setSearchParams({ destination: e.target.value });
                                        }} 
                                        value={searchTerm} type="text" placeholder='Search Tour' className="w-full text-center border-none h-12 rounded-full bg-white" />
                                    <IoSearch size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
                                </div>
                                <div className="relative">
                                    <input onChange={(e) => setSearchCategory(e.target.value)} 
                                        value={searchCategory}  type="text" placeholder='Category' className="w-full h-12 rounded-full text-center border-none bg-white" />
                                    <MdOutlineWhereToVote size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
                                </div>
                                <div className="relative">
                                    <input onChange={(e) => setSearchDuration(e.target.value)} 
                                        value={searchDuration}  type="text" placeholder='Duration (in hours)' className="w-full h-12 rounded-full text-center border-none bg-white" />
                                    <TbCalendarEvent size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                                </div>
                                <h2 className="uppercase font-bold">Filter by price</h2>
                                <input onChange={(e) => setSearchPrice(e.target.value)} 
                                    value={searchPrice}  type="text" placeholder='Enter Price' className="w-full h-8 rounded-full text-center border-none bg-white" />
                                <h4 className="text-neutral-600 capitalize">ex: 200-1000 MAD </h4>
                            </div>
                        </div>
                    </div>

                    {currentTours.length > 0 && (
                        <div className="flex justify-center mt-3 p-2">
                            {totalPages > 1 && (
                                <div className="flex items-center gap-4">
                                    <button onClick={goToPreviousPage} disabled={currentPage === 1} className="disabled:opacity-50">
                                        <IoIosArrowBack className='text-primary' size={25} />
                                    </button>
                                    <span className="px-2 flex gap-2 items-center">
                                        <div className='bg-primary px-[9px] rounded-full text-white'>{currentPage}</div>
                                        of {totalPages}
                                    </span>
                                    <button onClick={goToNextPage} disabled={currentPage === totalPages} className="disabled:opacity-50">
                                        <IoIosArrowForward className='text-primary' size={25} />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    <div className="h-20 left-0 -top-20 absolute w-full bg-white/50 backdrop-filter backdrop-blur-sm">
                        <div className="text-2xl font-bold text-back text-center pt-5">
                            <h1>Tours Lists</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tour;
