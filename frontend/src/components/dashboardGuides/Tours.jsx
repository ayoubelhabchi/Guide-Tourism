import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTours, fetchToursById } from '../../features/Slices/guideSlice';
import { MdDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import ConfirmDeleteModal from '../Modals/confirm-Dlete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tours() {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.guides.guideTours);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(false);
  const [tourIdToDelete, setTourIdToDelete] = useState(null);
  const [current, setCurrent] = useState(1);
  const [expandedDescription, setExpandedDescription] = useState({});
  const items = 4;

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const NbPage = Math.ceil(tours.length / items);
  const startIndex = (current - 1) * items;
  const endIndex = startIndex + items;
  const DataPerPage = tours.slice(startIndex, endIndex);

  const handlePagination = (event, page) => {
    setCurrent(page);
  };

  const handleDeleteClick = (id) => {
    setTourIdToDelete(id);
    setIsConfirmDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    const token = localStorage.getItem('token') || null;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.delete(`http://localhost:4000/api/tours/deleteTour/${tourIdToDelete}`, config);
      toast.success('Tour deleted successfully');
      dispatch(fetchTours());
      setIsConfirmDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting tour:', error);
    }
  };

  const toggleDescription = (index) => {
    setExpandedDescription(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className='w[1000px] p-4 w-full h-full bg-white shadow-xl overflow-x-auto rounded-xl'>
      <div className='flex items-center justify-between  px10 pt2'>
        <p className='text-primary font-bold lg:text-3xl'>Tours</p>
        <Link to="/CreateTour">
          <button className='bg-primary rounded-full p-1 lg:px-7 px-3 lg:text-xl font-semibold border-primary text-white hover:bg-white hover:text-primary border hover:border-primary'>Add New</button>
        </Link>
      </div>

      <div className='pt-4 w-full'>
        <table className='w-full shadow-xl'>
          <thead className='bg-primary/100 text-white'>
            <tr>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'></th>
              <th className='p-3 text-base font-semibold tracking-wide text-left'>Title</th>
              <th className='p-3 text-base font-semibold tracking-wide text-left'>Description</th>
              <th className='p-3 text-base font-semibold tracking-wide text-left'>Category</th>
              <th className='p-3 text-base font-semibold tracking-wide text-left'>Duration</th>
              <th className='p-3 text-base font-semibold tracking-wide text-left'>Price</th>
              <th className='p-3 text-base font-semibold tracking-wide text-left'>Image</th>
              <th className='p-3 text-base font-semibold tracking-wide text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
            {DataPerPage.map((tour, index) => (
              <tr key={index} className='border-b-2 border-primary/50'>
                <td></td>
                <td className="p-2 text-base">{tour.title}</td>
                <td className="p-2 text-base ">
                <td className="p-2 text-base">
                  <div className="text-sm lg:w-[400px] w-[200px] overflow-auto whitespace-normal">
                    {expandedDescription[index] ? (
                      <div className="lg:max-h-[140px] max-h-[100px] overflow-auto">
                        {tour.description}
                      </div>
                    ) : (
                      `${tour.description.substring(0, 10)}...`
                    )}
                    <button onClick={() => toggleDescription(index)} className="text-primary text-xs ml-2">
                      {expandedDescription[index] ? 'View Less' : 'View More'}
                    </button>
                  </div>
                </td>

                </td>
                <td className="p-2 text-base text-gray-700">{tour.category}</td>
                <td className="p-2 text-base text-gray-700">{tour.duration}</td>
                <td className="p-2 text-base text-gray-700">{tour.price} DH</td>
                <td className="p-2">
                  <img className='rounded w-20 h-[65px]' src={`${tour.image}`} alt={tour.title} />
                </td>
                <td className='p-2 text-base text-gray'>
                  <div className='flex gap-2 items-center'>
                    <Link to={`/UpdateTour`}>
                      <TbEdit onClick={() => dispatch(fetchToursById(tour._id))} size={23} className='text-primary' />
                    </Link>
                    <button onClick={() => handleDeleteClick(tour._id)}>
                      <MdDeleteOutline size={23} className='text-red-600' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='flex items-center py-5 justify-center gap-4 text-gray'>
          <Pagination count={NbPage} page={current} color="primary" onChange={handlePagination} />
        </div>
      </div>

      <ConfirmDeleteModal
        isOpen={isConfirmDeleteModalOpen}
        onClose={() => setIsConfirmDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}

export default Tours;