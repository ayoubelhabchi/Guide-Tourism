import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { AuthContext } from '../Auth/AuthContext';

function UpdateUser({ closeModal, userId }) {
  const [formData, setFormData] = useState({
    bio: '',
    specialization: '',
    status: 'pending',
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

          const response = await axios.get(`http://localhost:4000/api/admin/guide/${userId}`, config);
          const userData = response.data;
          setFormData({
            bio: userData.bio,
            specialization: userData.specialization,
            status: userData.status,
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
      await axios.put(`http://localhost:4000/api/admin/approval/${userId}/status`,formData, config);
      closeModal();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }}

  return (
    <div className='bg-opacity-50 backdrop-filter backdrop-blur-sm fixed z-10 -left-5 top-0 w-screen h-screen flex items-center justify-center' onClick={closeModal}>
      <div className='shadow-xl rounded-lg p-2 bg-white w-[600px] h-[500px]' onClick={(e) => e.stopPropagation()}>
        <h1 className='text-white font-bold bg-blue-500 rounded-lg h-9 flex items-center justify-center'>UpdateUser</h1>
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
          {Object.entries(formData).map(([key, value]) => (
            <div className='flex flex-col pt-1 text-center' key={key}>
              <label className='text-xl font-medium mb-1' htmlFor={key}>{key}</label>
              {key === 'bio' || key === 'specialization' ? (
                <div className="border border-gray-400 rounded-lg p-2 text-left">{value}</div>
              ) : (
                key === 'status' ? (
                  <select
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className='border-blue-500 border-2 rounded-lg w-full h-[40px] mb-2.5 font-semibold text-center'
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                ) : (
                  <input
                    name={key}
                    value={value || ''}
                    onChange={handleChange}
                    className='border-blue-500 border-2 rounded-lg w-full h-[40px] mb-2.5 font-semibold text-center'
                  />
                )
              )}
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

UpdateUser.propTypes = {
  closeModal: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default UpdateUser;
