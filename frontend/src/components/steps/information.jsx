import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { RiStarSFill } from 'react-icons/ri';
import { fetchProfile, Booking } from '../../features/Slices/bookingSlice';
import { fetchCampingsById } from '../../features/Slices/campingSlice';
import card from '../../assets/agadir.png'; // Unused
import background1 from '../../assets/campingPng.png'; // Unused

const Step1 = ({ nextStep, prevStep }) => {
    const dispatch = useDispatch();
    const SelectedCampingId = useSelector((state) => state.campings.campingID);
    const userId = useSelector((state) => state.bookings.profile._id);
    const checkoutUrl = useSelector((state) => state.bookings.checkoutUrl);

    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);

    const handleBooking = () => {
        const amount = SelectedCampingId.price;
        dispatch(Booking({ campingId: SelectedCampingId._id, userId, amount }));
    };

    useEffect(() => {
        if (checkoutUrl) {
            window.location.href = checkoutUrl;
        }
    }, [checkoutUrl]);

    return (
        <div className='relative p4'>
            <div className="h-20 -top-20 absolute w-full bg-white/10 backdrop-filter backdrop-blur-sm text-1xl font-Poppins flex text-center">
                <button className="w-full text-xl font-bold text-white flex items-center justify-center capitalize">
                    <IoInformationCircleOutline size={30} className="mr-2 text-lg" />
                    Information
                </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 p-4">
                <div className="flex flex-col bg-white ">
                    <div className='flex'>
                        <h1 className='pr-4 text-3xl font-bold capitalize'>{SelectedCampingId.name}</h1>
                        <div className="flex text-nowrap items-end space-x-2">
                            <h1 className="lg:text-2xl text-xl font-semibold capitalize">{SelectedCampingId.price} DH</h1>
                            <h1 className="lg:text-2xl text-xl text-gray capitalize">/per couple</h1>
                        </div>
                    </div>
                    <div className='flex items-center pt-2'>
                        <span className='flex items-center fnt-semibold'>
                            <RiStarSFill size={20} className='mr2 text-yellow-300' />
                            <RiStarSFill size={20} className='mr2 text-yellow-300' />
                            <RiStarSFill size={20} className='mr2 text-yellow-300' />
                            <RiStarSFill size={20} className='mr2 text-yellow-300' />
                            <RiStarSFill size={20} className='mr2 text-yellow-300' />
                            <div className='text-lg font-bold'>
                                (2.6K)
                            </div>
                        </span>
                    </div>
                    <div className='mt-4'>
                        <p className=' lg:text-xl font-normal'>{SelectedCampingId.description}</p>
                        <div className='grid grid-cols-2 gap-2 text-left pt-4'>
                            <label htmlFor="name" className="text-primary font-semibold text-lg">Name</label>
                            <div className='text-nowrap font-medium capitalize text-lg' id="name">{SelectedCampingId.name}</div>
                            
                            <label htmlFor="location" className="text-primary font-semibold text-lg">Location</label>
                            <div className='text-nowrap font-medium capitalize text-lg' id="location">{SelectedCampingId.location}</div>
                            
                            <label htmlFor="start-date" className="text-primary font-semibold text-lg">Start Date</label>
                            <div className='text-nowrap font-medium capitalize text-lg' id="start-date">{SelectedCampingId.start_date}</div>
                            
                            <label htmlFor="end-date" className="text-primary font-semibold text-lg">End Date</label>
                            <div className='text-nowrap font-medium capitalize text-lg' id="end-date">{SelectedCampingId.end_date}</div>
                            
                            <label htmlFor="group-members" className="text-primary font-semibold text-lg">Group Members</label>
                            <div className='text-nowrap font-medium capitalize text-lg' id="group-members">{SelectedCampingId.group_member}</div>
                            
                            <label htmlFor="price" className="text-primary font-semibold text-lg">Price</label>
                            <div className='text-nowrap font-medium capitalize text-lg' id="price">{SelectedCampingId.price} MAD</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <img src={SelectedCampingId.image} alt="Camping Image" className="lg:w-[350px] w[170px] lg:h-[400px] h-[300px] object-cover mt-4 rounded-br-[100px] rounded-bl-[0px] rounded-tl-[100px]" />
                    <div className="flex lg:justify-around justify-between w-full mt-4">
                        <button
                            onClick={prevStep}
                            className="bg-gray/30 px-6 h-10 text-white rounded-full hover:bg-white hover:text-gray border"
                        >
                            Back
                        </button>
                        <button
                            onClick={handleBooking}
                            className="bg-primary px-3 h-10 text-white rounded-full hover:bg-white hover:text-primary border"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step1;
