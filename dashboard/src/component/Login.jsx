import { useState, useContext, useEffect } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';
import axios from 'axios';
import background from '../assets/background.jpg';
import backgroundLoging from '../assets/signin.jpg';
import { AuthContext } from '../Auth/AuthContext';

function Login() {
  const initialFormData = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    
    try {
      const response = await axios.post('http://localhost:4000/api/admin/login', formData);
      const token = response.data.token;
      console.log('Token:', token);

      localStorage.setItem('token', token);

      login(token);

      setFormData(initialFormData);
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      setRegistrationStatus('error');
      setError('Invalid email or password');
    }
  };

  return (
    <section className="bg-cover bg-center h-screen flex items-center justify-center relative" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute inset-0 backdrop-filter backdrop-blur-sm bg-opacity-50"></div>
      <div className="relative flex flex-col bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-4">
          <span className="text-4xl font-bold">Welcome back</span>
          <span className="mb-2 font-light text-gray-400">Welcome back! Please enter your details</span>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-xl" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`border ${error ? 'border-red-500' : 'border-gray-600'} w-full p-2 border border-gray-400 rounded-md placeholder-font-light`}
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2 w-full relative">
            <label className="text-xl" htmlFor="password">
              Password
            </label>
            <div className="flex items-center">
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`border ${error ? 'border-red-500' : 'border-gray-600'} w-full p-2 border border-gray-400 rounded-md placeholder-font-light`}
                type={showPassword ? 'text' : 'password'}
              />
              <div className="absolute right-2 flex items-center text-2xl">
                <button type="button" onClick={handleTogglePasswordVisibility} className=""> 
                  {showPassword ? <BiSolidShow /> : <BiSolidHide />} 
                </button>
              </div>
            </div>
            {error && <span className="text-red-500 text-sm">{error}</span>}
          </div>
          <div className="flex justify-center items-center w-full py-4">
            <button className="font-bold text-md">Forgot password</button>
          </div>
          <div className="py-4">
            <button className="w-[300px] bg-black text-white font-bold p-2 rounded-lg mb-4 hover:bg-blue-500 hover:text-white hover:font-bold hover:border">login</button>
            <div className=" flex items-center justify-center">
            <span className="mr-2">Don&apos;t have an account?</span>
            <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
            </div>
            
            {/* {registrationStatus === 'success' && (
              <div className="flex items-center justify-center text-green-600">
                <IoCheckmarkDoneCircle className="mr-2" />
                <span>Login successful!</span>
              </div>
            )} */}
            {registrationStatus === 'error' && (
              <div className="flex items-center text-red-600">
                <span>Error logging in. Please try again.</span>
              </div>
            )}
          </div>
          
        </form>

        <div className="relative">
          <img src={backgroundLoging} alt="img" className="w-[400px] h-[500px] hidden rounded-r-2xl md:block object-cover" />
        </div>
      </div>
    </section>
  );
}

export default Login;
