import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToursById, fetchUpdateTour } from '../../features/Slices/guideSlice';

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
        image: null // Assuming image is being uploaded and not coming from tour data
      });
      if (tour.image) {
        setImagePreview(`${tour.image}`); // Set the image preview URL
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
    <div className='bg-slate-200 rounded shadow-lg w-[900px] h-[680px] p-9'>
      <div className='text-3xl text-primary'>Update tour</div>
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
            <div className='bg-white'>
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-[400px] h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  {fileName && <p className="font-semibold mt-2">{fileName}</p>}
                </div>
                <input 
                  id="dropzone-file" 
                  type="file" 
                  className="hidden rounded" 
                  name='image' 
                  onChange={handleFileChange} 
                />
              </label>
            </div>
            {imagePreview && (
              <div className='mt-4'>
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className='w-96 h-52 rounded object-cover' 
                />
              </div>
            )}
          </div>
        </div>
        <div className='flex gap-20 relative top-8 left-[200px]'>
          <Link to="/dashboard/Tours">
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
