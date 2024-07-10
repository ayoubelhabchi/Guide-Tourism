import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createTours } from '../../features/Slices/guideSlice';
import { useDispatch } from 'react-redux';

function CreateTour() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    duration: '',
    price: '',
    image: null,
  });
  const [fileName, setFileName] = useState('');
  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, category, duration, price, image } = formData;

    // Validation logic
    if (!title || !category || !price ) {
      setIsErrorModalOpen(true);
      return;
    }

    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('category', category);
    data.append('duration', duration);
    data.append('price', price);

    if (image) data.append('image', image);

    try {
      dispatch(createTours(data));
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setFileName(file.name);
      setImagePreview(URL.createObjectURL(file)); // Generate and set the image preview URL
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
      closeErrorModal();
    }
  };

  return (
    <>
      <div className='bg-slate-200 rounded shadow-lg w-[900px] h-[680px] p-4'>
        <div className='text-3xl text-primary'>Create tour</div>
        <hr className='my-4 border-slate-400' />
        <div className='relaative flex flex-cols-2'>
          <div>
            <p className='pb-4'>Title</p>
            <input name='title' value={formData.title} onChange={handleChange} type="text" placeholder='Enter title' className="w-[300px] border-none bg-white" />
            <p className='py-4'> Description</p>
            <input name='description' value={formData.description} onChange={handleChange} type="text" placeholder='Enter description' className="w-[300px] border-none bg-white" />
            <p className='py-4'>Category</p>
            <input name='category' value={formData.category} onChange={handleChange} type="text" placeholder='Enter category' className="w-[300px] border-none bg-white" />
            <p className='py-4'>Duration</p>
            <input name='duration' value={formData.duration} onChange={handleChange} type="text" placeholder='Enter duration' className="w-[300px] border-none bg-white" />
            <p className='py-4'>Price</p>
            <input name='price' value={formData.price} onChange={handleChange} type="text" placeholder='Enter price' className="w-[300px] border-none bg-white" />
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

                <input id="dropzone-file" type="file" className="hidden rounded" name='image' onChange={handleFileChange} />
              </label>
            </div>
            {imagePreview && (
              <div className='mt-4'>
                <img src={imagePreview} alt="Preview" className='w-50 h-48 rounded object-cover' />
              </div>
            )}
          </div>
        </div>
        <div className='flex gap-20 relative top-8 left-[200px]'>
          <Link to="/dashboard/Tours">
            <button className='bg-primary rounded w-[150px] h-[40px] text-white'>Dashboard</button>
          </Link>
          <button onClick={handleSubmit} className='bg-primary rounded w-[150px] h-[40px] text-white'>Create</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 bg-black/70 flex items-center justify-center z-50" onClick={handleBackdropClick}>
          <div className="bg-white rounded-lg shadow-lg p-8 w-[400px]" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Success</h2>
            <p className="mb-4">Tour created successfully!</p>
            <button onClick={closeModal} className="bg-primary rounded w-[90px] h-[40px] text-white">OK</button>
          </div>
        </div>
      )}

      {isErrorModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 bg-black/70 flex items-center justify-center z-50" onClick={handleBackdropClick}>
          <div className="bg-white rounded-lg shadow-lg p-8 w-[400px]" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4 text-red-500">Error</h2>
            <p className="mb-4">Please fill in all required fields: Title, description, duration, Category, Price, and Image.</p>
            <button onClick={closeErrorModal} className="bg-primary rounded w-[80px] h-[40px] text-white">OK</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateTour;
