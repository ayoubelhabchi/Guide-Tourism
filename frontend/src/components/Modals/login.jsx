import { useState, useEffect, useRef } from "react";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import backgroundLoging from "/login.jpg";
import RegisterModal from "../Modals/register";
import ForgetPassword from '../Modals/forgetpassword';
import loginUser from '../../api/loginApi';

const LoginModal = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showEmailIcon, setShowEmailIcon] = useState(true);
  const [showPasswordIcon, setShowPasswordIcon] = useState(true);
  const [error, setError] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const modalRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setShowEmailIcon(value === "");
    } else if (name === "password") {
      setShowPasswordIcon(value === "");
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser(formData);
    if (result.success) {
      setShowModal(false);
    } else {
      setError("Invalid email or password");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowModal]);

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none flex justify-center items-center">
        <div ref={modalRef} className="relative flex flex-col bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          {!showRegisterModal && !showForgetPassword ? (
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3 p-4">
              <span className="text-2xl font-inter font-semibold text-primary">Welcome back</span>
              <span className="mb-2 font-light text-gray-400 text-sm">Welcome back! Please enter your details</span>
              <div className="flex flex-col gap-2 w-full relative">
                <label className="text-3x" htmlFor="email">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`border ${error ? "border-red-500" : "border-gray-600"
                      } w-full p-1 border border-gray-400 rounded-md placeholder-font-light`}
                  />
                  {showEmailIcon && (
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center text-xl text-gray-400">
                      <MdAlternateEmail />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full relative">
                <label className="text-3x" htmlFor="password">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`border ${error ? "border-red-500" : "border-gray-600"
                      } w-full p-1 border border-gray-400 rounded-md placeholder-font-light`}
                    type={showPassword ? "text" : "password"}
                  />
                  {showPasswordIcon && (
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center text-xl text-gray-500">
                      <CiLock />
                    </div>
                  )}
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center text-xl">
                    <button
                      type="button"
                      onClick={handleTogglePasswordVisibility}
                      className=""
                    >
                      {showPassword ? <BiSolidShow /> : <BiSolidHide />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center py- font-inter hover:text-primary">
                <button
                  type="button"
                  onClick={() => setShowForgetPassword(true)}
                  className="font-inter"
                >
                  Forgot password?
                </button>
              </div>
              <div className="py-">
                <button
                  className="w-[300px] bg-primary text-white font-inter p-2 rounded-lg mb-4 hover:bg-white hover:text-primary border hover:font-inter "
                >
                  Login
                </button>
                <div className=" flex items-center justify-center">
                  <span className="mr-2">{"Don't have an account?"}</span>
                  <button className="text-blue-500 hover:underline cursor-pointer hover:text-black" onClick={() => setShowRegisterModal(true)} >
                    Register
                  </button>
                </div>
              </div>
            </form>
          ) : showRegisterModal ? (
            <RegisterModal setShowModal={setShowModal} setShowRegisterModal={setShowRegisterModal} />
          ) : (
            <ForgetPassword setShowModal={setShowModal} setShowForgetPassword={setShowForgetPassword} />
          )}

          {!showForgetPassword && (
            <div className="relative">
              <img src={backgroundLoging} alt="img" className="w-[300px] h-[450px] hidden rounded-r-2xl md:block object-cover" />
            </div>
          )}
        </div>
      </div>
      <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default LoginModal;
