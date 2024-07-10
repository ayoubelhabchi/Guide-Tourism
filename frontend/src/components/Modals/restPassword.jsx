import { useState, useEffect } from "react";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { restPassword } from "../../features/Slices/authPasswordSlice";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
  const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Reset token:", token);
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCancel = () => {
    navigate('/home'); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
console.log("ggg");
console.log("Resetting password:", formData);

    if (!formData.password || !formData.confirmPassword) {
      setError("Please enter password in both fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log("Resetting password:", formData.password);
    console.log("Token:", token);
    dispatch(restPassword({formData, token }));
    console.log(formData);
    navigate('/home');
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none flex justify-center items-center">
        <div className="relative flex flex-col w-[350px] bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-1 p-4 w-full">
            <span className="text-2xl font-inter font-semibold">Reset Password</span>
            <div className="flex flex-col w-full relative">
              <label className="text-base font-medium" htmlFor="password">New Password</label>
              <div className="relative w-full flex items-center">
                <RiLockPasswordLine size={20} className=" ml-1 absolute" />
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`border ${error ? "border-red-500" : "border-gray-600"} w-full p-1 pl-6 border border-gray-400 rounded-md placeholder-font-light pr-10`}
                  type={showPassword ? "text" : "password"}
                />
                <button
                  type="button"
                  onClick={handleTogglePasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl"
                >
                  {showPassword ? <BiSolidShow /> : <BiSolidHide />}
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full relative mt-4">
              <label className="text-base font-medium" htmlFor="confirmPassword">Confirm Password</label>
              <div className="relative w-full flex items-center">
                <RiLockPasswordLine size={20} className=" absolute ml-1" />
                <input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`border ${error ? "border-red-500" : "border-gray-600"} w-full p-1 pl-6 border border-gray-400 rounded-md placeholder-font-light pr-10`}
                  type={showConfirmPassword ? "text" : "password"}
                />
                <button
                  type="button"
                  onClick={handleToggleConfirmPasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl"
                >
                  {showConfirmPassword ? <BiSolidShow /> : <BiSolidHide />}
                </button>
              </div>
            </div>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            <div className="gap-2 py-2 flex flex-col">
              <button
                className="w-[300px] bg-primary text-white border font-inter p-2 rounded-lg hover:bg-white hover:text-primary "
              >
                Reset Password
              </button>
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="text-blue-500 hover:underline hover:text-black"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ResetPassword;
