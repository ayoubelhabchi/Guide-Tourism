import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { AuthContext } from '../Auth/AuthContext';

function UpdateCamping({ closeModal, userId }) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    date: '',
    duration: '',
    group_member: '',
    isPrivate: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { token } = useContext(AuthContext)



  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId && token) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          const response = await axios.get(`http://localhost:4000/api/camping/get/${userId}`, config);
          const userData = response.data;
          console.log("campid",userId);
          console.log("data",userData);
          setFormData({
            name: userData.name,
            location: userData.location,
            date: userData.date,
            duration: userData.duration,
            group_member: userData.group_member,
            isPrivate: userData.isPrivate,
            price: userData.price,
            description: userData.description,
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userId, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if(token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
    try {
      await axios.put(`http://localhost:4000/api/camping/update/${userId}`,formData, config);
      closeModal();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }}

  console.log("form data", formData);

  return (
    <div className='bg-opacity-50 backdrop-filter backdrop-blur-sm fixed z-10 -left-5 top-0 w-screen h-screen flex items-center justify-center' onClick={closeModal}>
      <div className='shadow-xl rounded-lg p-2 bg-white w-[600px] h-[500px]' onClick={(e) => e.stopPropagation()}>
        <h1 className='text-white font-bold bg-blue-500 rounded-lg h-9 flex items-center justify-center'>Update Camping</h1>
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
          {Object.entries(formData).map(([key, value]) => (
            <div className='flex flex-col pt-1 text-center' key={key}>
              <label className='text-xl font-medium mb-1' htmlFor={key}>{key}</label>
              <input
                name={key}
                value={value}
                onChange={handleChange}
                className='border-blue-500 border-2 rounded-lg w-full h-[40px] mb-2.5 font-semibold text-center'
              />
            </div>
          ))}
          <div className='relative flex items-center justify-center col-span-2'>
            <button className='p-1 w-28 bg-blue-500 rounded-md text-lg text-white'>Update</button>
            <button onClick={closeModal} className='ml-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-md'>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

UpdateCamping.propTypes = {
  closeModal: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default UpdateCamping;
