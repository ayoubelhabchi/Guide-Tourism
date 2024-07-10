import React from 'react';
import { MdEmail } from "react-icons/md";


const EmailSentNotification = ({ setShowModal }) => {
  return (
    <div className="flex items-center justify-center w-[400px] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
        <MdEmail className='animate-bounce' size={60}/>
        <h2 className="text-2xl font-bold mb-2">Check Your Email!</h2>
        <p className="text-gray-700 mb-4">
        We have sent a linkto ret your password.
        </p>
      <div className=' w-full'>
      <button onClick={() => setShowModal(false)} className=' text-white font-semibold bg-primary border hover:bg-white hover:text-primary w-full rounded-full p-2'>
        Got it
      </button>
      </div>
      </div>
    </div>
  );
};

export default EmailSentNotification;
