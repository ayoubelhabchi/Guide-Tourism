import React, { useState } from 'react';
import background2 from '../../assets/camping1.jpg';
import guide from '../../assets/directictor.jpg';
import { IoCloseSharp } from "react-icons/io5";
import { PiUserSwitchLight } from "react-icons/pi";
import { BiCheckCircle } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { switchProfile } from '../../features/Slices/userProfileSlice';

function BecomeGuide({ handleGuideClose }) {
  // const [isSwitched, setIsSwitched] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    bio: '',
    specialization: '',
    identity: null,
    certificate: null,
    profile_picture: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true)
    const { bio, specialization, identity, certificate, profile_picture } = formData;

    const data = new FormData();
    data.append('bio', bio);
    data.append('specialization', specialization);

    if (identity) data.append('identity', identity);
    if (certificate) data.append('certificate', certificate);
    if (profile_picture) data.append('profile_picture', profile_picture);
    
    dispatch(switchProfile(data));
      // setIsSwitched(true);

  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });

  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  return (
    <div className='relative'>
      <div className='p-2 lg:h-[550px] flex justify-start items-center lg:w-[700px] w-[400px] bg-white shadow-xl rounded-2xl'>
        <div className='absolute z-50 top-0 right-0 m-3'>
          <button onClick={handleGuideClose}>
            <IoCloseSharp className=' text-white/80' size={25}/>
          </button>
        </div>
        <div className='justify-center items-center grid lg:grid-cols-2'>
          <div className="lg:w-[300px] lg:h-[530px] flex flex-col px-6 bg-[#e5edfa] rounded-2xl p-2">
            <div className="lg:grid lg:grid-cols-1 gap-2 text-center">
              <div className="relative flex justify-center">
                <img src={background2} alt="" className="rounded-full h-24 w-24" />
              </div>
              <h1 className="lg:text-xl font-semibold">AYOUB</h1>
              <div className='flex flex-col items-start gap-1'>
                <div className='w-full flex'>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder='Bio'
                    className='w-full h-20 border-[1.5px] pl-8 border-gray-400 rounded-lg max-h-[75px] min-h-10 overflow-hidden'
                  ></textarea>
                  <FaAddressCard size={20} className='absolute translate-y-3 ml-2 text-gray-400'/>
                </div>
                <div className='w-full flex'>
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    placeholder='Specialization'
                    className='w-full border-[1.5px] pl-8 border-gray-400 rounded-lg'
                  />
                  <MdWork size={20} className='absolute translate-y-3 ml-2 text-gray-400'/>
                </div>
                <div className='w-full '>
                  <span>Upload your Identity file here</span>
                  <input
                    type="file"
                    name="identity"
                    onChange={handleFileChange}
                    className='w-full border-[1.5px]   border-gray-400 rounded-lg'
                  />
                </div>
                <div className='w-full '>
                  <span>Upload your Certificate file here</span>
                  <input
                    type="file"
                    name="certificate"
                    onChange={handleFileChange}
                    className='w-full border-[1.5px]  border-gray-400 rounded-lg'
                  />
                </div>
                <div className='w-full'>
                  <span>Upload your Specialization file here</span>
                  <input
                    type="file"
                    name="profile_picture"
                    onChange={handleFileChange}
                    className='w-full border-[1.5px]  border-gray-400 rounded-lg'
                  />
                </div>
              </div>
              <div className=' flex justify-center lg:p-0 pt-1.5'>
                {isSubmitted ? (
                  <button 
                  // disabled
                className='w-32 gap-2 p-1.5 flex justify-center items-center text-white font-semibold rounded-full bg-green-500'
                >
                <BiCheckCircle size={20}/>
                Submited
                  </button>

                ) : (

                  <button 
                  onClick={handleSubmit}
                    className='w-32 gap-2 p-1.5 flex justify-center items-center text-white font-semibold rounded-full hover:bg-white hover:text-primary hover:border bg-primary'
                    >
                    <PiUserSwitchLight size={20}/>
                    Switch
                  </button>

                )}
              </div>
            </div>
          </div>
        </div>
          <div className=' relative h-full w-full hidden lg:block'>
            <img src={guide} className=' absolute inset-0 h-full w-full object-cover rounded-2xl ' alt="" />
            <div className=' text-white absolute h-full flex flex-col gap-y- bg-black/40 backdrop-blur-sm rounded-2xl p-1.5'>
              <h1 className=' font-semibold text-2xl text-nowrap'>Welcome to Our Website!</h1>
              <span className=' px-2'>
              At Your Website Name, we connect passionate guides with curious travelers. Whether you're looking for an unforgettable tour experience or are an expert ready to share your knowledge, we're here to help!
              </span>
              <h1 className='font-semibold text-2xl text-nowrap'>
              Qualities of a Great Guide:
              </h1>
              <ul className=" pl-6 list-disc list-outside">
                <li> <strong>Knowledge:</strong> In-depth understanding of the area, its history, culture, and attractions.</li>
                <li> <strong>Communication Skills:</strong> Excellent ability to convey information in a clear, engaging, and enthusiastic manner.</li>
                <li> <strong>People Skills:</strong> Friendly, approachable, and able to connect with diverse groups of people.</li>
                <li> <strong>Organization:</strong> Skilled at time management, keeping the tour on schedule, and handling logistics.</li>
                <li> <strong>Problem-Solving:</strong> Able to adapt to unexpected situations and ensure a smooth tour experience.</li>
              </ul>
              <div className=' flex justify-center'>
              <h1 className=' text-lg text-nowrap font-semibold'>Join us and share your passion for travel!</h1>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default BecomeGuide;
