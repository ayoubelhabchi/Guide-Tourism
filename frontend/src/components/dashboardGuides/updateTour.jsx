
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
    dispatch(fetchToursById(id)); // Fetch tour data by ID
  }, [dispatch, id]);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setFileName(file.name);
      setImagePreview(URL.createObjectURL(file)); // Generate and set the image preview URL
    }
  };

  const tour = useSelector((state) => state.guides.getTour);
  console.log("Fetched tour data:", tour); // Check if tour data is fetched correctly

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
    console.log("Form data updated:", {
      title: tour.title || '',
      description: tour.description || '',
      category: tour.category || '',
      duration: tour.duration || '',
      price: tour.price || '',
      image: null
    });
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
       dispatch(fetchUpdateTour({ id, data }));
       setIsModalOpen(true);
      console.log("d",data);
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
      closeErrorModal();
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-slate-200 rounded shadow-lg w-[900px] h-[670px] p-9'>
      <div className='text-3xl text-primary'>Update tour</div>
      <hr className='my-4 border-slate-400' />
      <form onSubmit={handleSubmit}>
        <div className='relative flex flex-cols-2'>
          <div>
            <p className='py-4'>Title</p>
            <input
              name='title'
              value={formData.title}
              type="text"
              onChange={handleChange}
              className="w-[300px] border-none bg-white"
            />
            <p className='py-4'>Description</p>
            <input
              name='description'
              value={formData.description}
              type="text"
              onChange={handleChange}
              placeholder='Enter description'
              className="w-[300px] border-none bg-white"
            />
            <p className='py-4'>Category</p>
            <input
              name='category'
              value={formData.category}
              type="text"
              onChange={handleChange}
              className="w-[300px] border-none bg-white"
            />
            <p className='py-4'>Duration</p>
            <input
              name='duration'
              value={formData.duration}
              type="text"
              onChange={handleChange}
              className="w-[300px] border-none bg-white"
            />
            <p className='py-4'>Price</p>
            <input
              name='price'
              value={formData.price}
              type="text"
              onChange={handleChange}
              className="w-[300px] border-none bg-white"
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className='text-lg font-bold'>
              <p>Image</p>
            </div>
            <div className='bg-'>
  {imagePreview && (
    <div className='relative mt-4'>
      <img 
        src={imagePreview} 
        alt="Preview" 
        className='w-96 h-52 rounded object-cover' 
      />
      <label 
        htmlFor="dropzone-file" 
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
      >
       <TbCloudUpload size={40} className="text-white "/>
      </label>
    </div>
  )}
  <input 
    id="dropzone-file" 
    type="file" 
    className="hidden" 
    name='image' 
    onChange={handleFileChange}
  />
</div>

          </div>
        </div>
        <div className='flex gap-20 relative top-8 left-[200px]'>
          <Link to="/dashboard">
            <button type='button' className='bg-primary rounded w-[150px] h-[40px] text-white'>Dashboard</button>
          </Link>
          <button type='submit' className='bg-primary rounded w-[150px] h-[40px] text-white'>Update</button>
          
        </div>
      </form>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 bg-black/70 flex items-center justify-center z-50" onClick={handleBackdropClick}>
          <div className="bg-white rounded-lg shadow-lg p-8 w-[400px]" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Success</h2>
            <p className="mb-4">Tour updeted successfully!</p>
            <button onClick={closeModal} className="bg-primary rounded w-[90px] h-[40px] text-white">OK</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default UpdateTour;
