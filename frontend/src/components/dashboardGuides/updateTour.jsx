import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToursById, fetchUpdateTour } from '../../features/Slices/guideSlice';
import { TbCloudUpload } from "react-icons/tb";

function UpdateTour() {
  const { id } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchToursById(id));
  }, [dispatch, id]);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setFileName(file.name);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const tour = useSelector((state) => state.guides.getTour);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    duration: '',
    price: '',
    image: null
  });

  useEffect(() => {
    if (tour) {
      setFormData({
        title: tour.title || '',
        description: tour.description || '',
        category: tour.category || '',
        duration: tour.duration || '',
        price: tour.price || '',
        image: null 
      });
      if (tour.image) {
        setImagePreview(`${tour.image}`); 
      }
    }
  }, [tour]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = tour._id;
  
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('category', formData.category);
    data.append('duration', formData.duration);
    data.append('price', formData.price);
  
    if (formData.image) data.append('image', formData.image);
  
    try {
      await dispatch(fetchUpdateTour({ id, data }));
      setIsModalOpen(true);
      // Fetch the updated tour data
      dispatch(fetchToursById(id));
    } catch (error) {
      console.error('Error updating tour:', error);
    }
  };

  if (!tour) {
    return <div>Loading...</div>;
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-white w-full rounded-3xl shadow-lg p-3 lg:p-6'>
      <div className='text-3xl font-semibold text-primary mb-2'>Update Tour</div>
      <hr className='my-4 border-slate-400' />

      <form onSubmit={handleSubmit} className='grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-x-16'>
        <div className='space-y-2'>
          <div> 
            <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-1'>Title</label>
            <input
              id='title'
              name='title'
              value={formData.title}
              type='text'
              onChange={handleChange}
              className='w-full border-[1.5px] border-primary rounded-2xl p-2'
            />
          </div>

          <div>
            <label htmlFor='description' className='block text-sm font-medium text-gray-700 mb-1'>Description</label>
            <textarea
              id='description'
              name='description'
              value={formData.description}
              type='text'
              onChange={handleChange}
              className='w-full border-[1.5px] border-primary rounded-2xl p-2 min-h-[45px] max-h-[100px]'
            />
          </div>

          <div>
            <label htmlFor='category' className='block text-sm font-medium text-gray-700 mb-1'>Category</label>
            <input
              id='category'
              name='category'
              value={formData.category}
              type='text'
              onChange={handleChange}
              className='w-full border-[1.5px] border-primary rounded-2xl p-2'
            />
          </div>

          <div>
            <label htmlFor='duration' className='block text-sm font-medium text-gray-700 mb-1'>Duration</label>
            <input
              id='duration'
              name='duration'
              value={formData.duration}
              type='text'
              onChange={handleChange}
              className='w-full border-[1.5px] border-primary rounded-2xl p-2'
            />
          </div>

          <div>
            <label htmlFor='price' className='block text-sm font-medium text-gray-700 mb-1'>Price</label>
            <input
              id='price'
              name='price'
              value={formData.price}
              type='text'
              onChange={handleChange}
              className='w-full border-[1.5px] border-primary rounded-2xl p-2'
            />
          </div>
        </div>

        <div className='flex flex-col items-center wf'>
          <div className='text-lg font-bold mb-4'>
          </div>
          <div className=''>
            {imagePreview && (
              <div className='relative'>
                <img
                  src={imagePreview}
                  alt='Preview'
                  className=' w-full max-h-[270px] rounded-3xl object-cover'
                />
                <label
                  htmlFor='dropzone-file'
                  className='absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer'
                >
                  <TbCloudUpload size={40} className='text-white' />
                  <h1 className=' text-white text-xl font-semibold capitalize'>Drop to update your image</h1>
                </label>
              </div>
            )}
            <input
              id='dropzone-file'
              type='file'
              className='hidden'
              name='image'
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className='col-span2 flex justify-between mt-4'>
          <Link to='/dashboard'>
            <button type='button' className='bg-primary rounded w-36 h-10 text-white'>Dashboard</button>
          </Link>
          <button type='submit' className='bg-primary rounded w-36 h-10 text-white'>Update</button>
        </div>
      </form>

      {isModalOpen && (
        <div
          className='fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50'
          onClick={handleBackdropClick}
        >
          <div
            className='bg-white rounded-lg shadow-lg p-8 w-96'
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='text-2xl font-bold mb-4'>Success</h2>
            <p className='mb-4'>Tour updated successfully!</p>
            <button onClick={closeModal} className='bg-primary rounded w-24 h-10 text-white'>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateTour;
