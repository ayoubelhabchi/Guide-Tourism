import { useState, useEffect, useRef } from "react";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import backgroundRegister from "/register.avif";
import { useNavigate } from 'react-router-dom'; 
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import registerUser from '../../api/registerApi';

const RegisterModal = ({ setShowModal, setShowRegisterModal }) => {

  const navigate = useNavigate();
  const initialFormData = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    age: "",
    phone: "",
    country: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [error] = useState(""); 
  const [formData, setFormData] = useState(initialFormData);
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const modalRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData(initialFormData);
    const result = await registerUser(formData);
    if (result.success) {
      setRegistrationStatus('success');
      navigate('/home');
    } else {
      setRegistrationStatus('error');
    }
  };
  

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none flex justify-center items-center">
        <div className="relative flex flex-col bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 " ref={modalRef}>
          <form
            onSubmit={handleSubmit} 
            className="flex flex-col justify-center items-center p-4"
          >
            <span className="text-2xl font-inter font-semibold text-primary">
              Create Your New Account
            </span>
            <br />
            <div className="flex gap-2 w-full">
              <div className="flex flex-col w-1/2">
                <label className="text-3x" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-1 border border-gray-400 rounded-md placeholder-font-light"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-3x" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-1 border border-gray-400 rounded-md placeholder-font-light"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full relative">
              <label className="text-3x" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`border ${
                  error ? "border-red-500" : "border-gray-600"
                } w-full p-1 border border-gray-400 rounded-md placeholder-font-light`}
              />
            </div>

            {/* Additional input fields */}
            <div className="flex gap-2 w-full">
              <div className="flex flex-col w-1/2">
                <label className="text-3x" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-1 border border-gray-400 rounded-md placeholder-font-light"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-3x" htmlFor="age">
                  Age
                </label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-1 border border-gray-400 rounded-md placeholder-font-light"
                />
              </div>
            </div>
            <div className="flex gap-2 w-full">
              <div className="flex flex-col w-1/2">
                <label className="text-3x" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-1 border border-gray-400 rounded-md placeholder-font-light"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-3x" htmlFor="country">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-1 border border-gray-400 rounded-md placeholder-font-light"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full relative">
              <label className="text-3x" htmlFor="password">
                Password
              </label>
              <div className="flex items-center">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`border ${
                    error ? "border-red-500" : "border-gray-600"
                  } w-full p-1 border border-gray-400 rounded-md placeholder-font-light`}
                  type={showPassword ? "text" : "password"}
                />
                <div className="absolute right-2 flex items-center text-xl">
                  <button
                    type="button"
                    onClick={handleTogglePasswordVisibility}
                    className=""
                  >
                    {showPassword ? <BiSolidShow /> : <BiSolidHide />}
                  </button>
                </div>
              </div>
              {error && <span className="text-red-500 text-sm">{error}</span>}
            </div>
            <div className="py-4  relative">
              <button className="w-[300px] bg-primary text-white font-inter p-2 rounded-lg mb-4 hover:bg-white hover:text-primary hover:font-inter border">
                Register
              </button>
              {registrationStatus === 'success' && (
                            <div className="absolute mt-5 w-full flex items-center justify-center">
                            <div className="flex items-center justify-center text-green-600">
                              <IoCheckmarkDoneCircle className="mr-2" />
                              <span>Please check your Mailbox!</span>
                            </div>
                          </div>
                        )}
                        {registrationStatus === 'error' && (
                            <div className="flex items-center text-red-600">
                                <span>Error while registering user. Please try again.</span>
                            </div>
                        )}
              <div className="flex -mt-2 items-center justify-center">
                <span className="mr-2">Already have an account?</span>
                <button
                  className="text-primary hover:underline hover:text-black"
                  onClick={() => setShowRegisterModal(false)}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <div className="relative">
            <img
              src={backgroundRegister}
              alt="img"
              className="w-[300px] h-[510px] hidden rounded-r-2xl md:block object-cover"
            />
          </div>
        </div>
      </div>
      <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default RegisterModal;
