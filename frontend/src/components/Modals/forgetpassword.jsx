import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from "../../features/Slices/authPasswordSlice";
import EmailSentNotification from "./emailNotification";

const ForgetPassword = ({ setShowModal, setShowForgetPassword }) => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter email");
      return;    
    }
    
    console.log("Resetting password for email:", email);
    dispatch(forgetPassword({email}));
    // setShowModal(false);
    setIsEmailSent(true)
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none flex justify-center items-center">
        
          {!isEmailSent ? (
        <div className="relative flex flex-col bg-white w-[400px] shadow-2xl rounded-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col justify-center p-4">
            <span className="text-2xl font-inter flex justify-center font-semibold">Forgot Password ?</span>
            <span className=" font-normal">No problem, Please enter your Email.</span>
            <div className="flex flex-col gap-1 w-full relative">
              <label className="text-base font-semibold" htmlFor="email">Email address</label>
              <div className="relative w-full">
                <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20}/>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className={`border bg-gray/5 ${error ? "border-red-500" : "border-gray-600"
                    } w-full pl-10 p-1 h-10 rounded-md placeholder-font-light`}
                />
              </div>
            </div>

            <div className="p-4">
              <button
                className="w-full bg-primary border text-white font-inter p-2 rounded-lg mb-2 hover:bg-white hover:text-primary "
              >
                Send
              </button>

                {error && <div className="text-red-500 flex justify-center">{error}</div>}
              <div className=" flex items-center justify-center">
                <button
                  className="text-blue-500 hover:underline hover:text-black"
                  onClick={() => setShowModal(false)}
                  >
                  Cancel
                </button>
              </div>
              <div className=" justify-center flex gap-2">
                <h1>
                  Already have account ?
                </h1>
                <button onClick={() => setShowForgetPassword(false)} className=" font-semibold hover:underline">Login here</button>
              </div>
            </div>
          </form>
          
        </div>
        ) : (
          <EmailSentNotification setShowModal={setShowModal}/>
        )}
      </div>
      {/* <div className="opacity-60 fixed inset-0 z-40 bg-black"></div> */}
    </>
  );
};

export default ForgetPassword;
