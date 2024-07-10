import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoSearch } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReviewModal from '../Modals/reviewDetails';
import Review from '../Modals/review';
import { fetchOrders } from '../../features/Slices/ordersSlice';
import { fetchGuidesByIds, fetchCardToursById, resetCartTourBuId, resetGuideProfile } from '../../features/Slices/tourSlice';
import { fetchCampingsById, resetCampingID } from '../../features/Slices/campingSlice';
import OrderDetails from '../OrderDetails/OrderDetails';

export default function Orders() {
    const [closeModal, setCloseModal] = useState(false);
    const [reviewModal, setReviewModal] = useState(false);
    const [detailsModal, setDetailsModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [modalPosition, setModalPosition] = useState({ top: 0, right: 0 });
    const [activeButton, setActiveButton] = useState(null);

    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.orders);
    // console.log(orders);
    const guideIdName = useSelector((state) => state.tours.guideIds);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [orders,dispatch]);

    useEffect(() => {
        if (orders.length > 0) {
            const guideIds = orders.map(order => order.tour?.guide_id);
            dispatch(fetchGuidesByIds(guideIds));
        }
    }, [orders, dispatch]);

    const handleReview = () => {
        setReviewModal(true);
    };

    const handleDetails = () => {
        setDetailsModal(true);
    };


    const handleReviewClose = () => {
        setReviewModal(false);
    };

    const handleDetailsClose = () => {
        setDetailsModal(false);
        dispatch(resetCartTourBuId());
        dispatch(resetCampingID());
        dispatch(resetGuideProfile());
    };

    const handleOrderId = (tourId, campingId) => {
        if (tourId) {
            dispatch(fetchCardToursById(tourId));
        } else if (campingId) {
            dispatch(fetchCampingsById(campingId));
        }
    };

    const handleModal = (event, index) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const newPosition = { top: rect.bottom + window.scrollY, right: window.innerWidth - rect.right };
        
        if (closeModal && activeButton === index) {
            setCloseModal(false);
        } else {
            setModalPosition(newPosition);
            setCloseModal(true);
            setActiveButton(index);
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(orders.length / itemsPerPage);

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
        <div className="bg-[#f0f8ff] min-h-screen flex flex-col p-2">
            <header className="bg-primary rounded-md h-20 flex items-center pl-8 mt-24">
                <h1 className="text-3xl font-bold text-white">My Orders</h1>
                <div className="flex items-center gap-4 absolute right-4">
                    <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" />
                    <input 
                        className="pl-10 pr-4 py-2 rounded-md border-none bg-[#c4e0f0] text-white"
                        placeholder="Search orders..."
                        type="text" 
                    />
                </div>
            </header>

            <main className="flex-1 p-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <table className="w-full table-auto">
                        <thead className="bg-primary text-white">
                            <tr className='text-center'>
                                <th className="font-medium py-3">Order</th>
                                <th className="font-medium py-3">Guide</th>
                                <th className="font-medium py-3">Destination</th>
                                <th className="font-medium py-3">Status</th>
                                <th className="font-medium py-3">Price</th>
                                <th className="font-medium py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {currentOrders.map((order, index) => (
                                <tr key={index} className="hover:bg-[#f0f8ff] transition-colors duration-300 text-center">
                                    <td className="font-medium py-3 max-w-24 truncate">{order._id}</td>
                                    <td className="font-medium py-3">{guideIdName[index]?.firstName || "The Admin"}</td>
                                    <td className="font-medium py-3">{order.camping?.location || order.tour?.title}</td>
                                    <td className="font-medium py-3">{order.amount} MAD</td>
                                    <td className="py-4">
                                        <span className={`px-3 py-1.5 rounded-full font-medium ${order.paymentStatus === 'completed' ? 'bg-green-100 text-green-800' : order.paymentStatus === 'pending' ? 'bg-gray/20 text-black' : 'bg-red-100 text-red-800'}`}>
                                            {order.paymentStatus}
                                        </span>
                                    </td>
                                    <td className="py-4">
                                        <div className="flex justify-center">
                                            <button onClick={(e) => { handleOrderId(order.tour?._id, order.camping?._id ); handleModal(e, index); }}>
                                                <BsThreeDots size={25} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-3 p-2">
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
                        </div>
                    )}
                </div>
            </main>

            {closeModal &&
                <div style={{ position: 'absolute', top: modalPosition.top - 56, right: modalPosition.right + 25 }}>
                    <ReviewModal handleDetails={handleDetails} handleReview={handleReview} />
                </div>
            }

            {reviewModal && 
                <Review handleReviewClose={handleReviewClose} />
            }
            {detailsModal && 
                <OrderDetails handleDetailsClose={handleDetailsClose} />
            }
        </div>
    );
}
