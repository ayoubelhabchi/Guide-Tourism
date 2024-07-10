import PropTypes from 'prop-types';
import axios from 'axios';
import { AuthContext } from '../Auth/AuthContext';
import { useContext } from 'react';

function DeleteCamping({ closeModal, userId }) {

  const { token } = useContext(AuthContext)

  const handleDelete = async () => {

    if(token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }

    try {
      await axios.delete(`http://localhost:4000/api/camping/delete/${userId}`, config);
      console.log(userId);
      console.log(config);
      closeModal();
    } catch (error) {
      console.error('Error deleting user:', error);
    }}
  };

  return (
    <div className='bg-opacity-50 backdrop-filter backdrop-blur-sm fixed z-10 left-0 top-0 w-screen h-screen flex items-center justify-center transform transition duration-1000'>
      <div className='shadow-lg rounded-lg p-4 bg-white ' onClick={(e) => e.stopPropagation()}>
        <h1 className='text-center font-bold text-xl mb-4'>Delete User</h1>
        <p className='text-center mb-4'>Are you sure you want to delete this camping ?</p>
        <div className='flex justify-center'>
          <button onClick={handleDelete} className='px-4 py-2 bg-red-600 text-white rounded-md'>Delete</button>
          <button onClick={closeModal} className='ml-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-md'>Cancel</button>
        </div>
      </div>
    </div>
  );
}

DeleteCamping.propTypes = {
  closeModal: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default DeleteCamping;
