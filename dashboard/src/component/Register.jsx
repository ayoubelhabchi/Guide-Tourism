import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import background from "../assets/background2.jpg";
import backgroundLoging from "../assets/back1.jpg";
import axios from 'axios';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';
import { AuthContext } from '../Auth/AuthContext';


function Register() {

    


    const navigate = useNavigate();
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [registrationStatus, setRegistrationStatus] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        if (token) {
          navigate('/');
        }
      }, [token, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData(initialFormData);
        try {
            await axios.post("http://localhost:4000/api/admin/register", formData);
            setRegistrationStatus('success');
            navigate('/login'); // Use navigate to go to the login page
        } catch (error) {
            console.error('Error creating user:', error);
            setRegistrationStatus('error');
        }
    };

    return (
        <section className="bg-cover bg-center h-screen flex items-center justify-center relative" style={{ backgroundImage: `url(${background})` }}>
            <div className="absolute inset-0 backdrop-filter backdrop-blur-sm bg-opacity-50"></div>
            <div className="relative flex flex-col bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center p-4'>
                    <span className=" text-4xl font-bold">Welcome</span>
                    <span className=" mb-2 font-light text-gray-400 ">
                        Welcome! Please enter your details
                    </span>
                    <div className='grid grid-cols-2 gap-2'>
                        {Object.entries(formData).map(([key, value]) => (
                            <div className=' text-center items-center' key={key}>
                                <label className='text-xl ' htmlFor={key}>
                                    {key === 'email' ? 'Email' : key === 'phone' ? 'Phone-Number' : key === 'firstName' ? ' Your FirstName' : key === 'lastName' ? 'Your LastName' : key === 'password' ? 'Password' : key }
                                </label>
                                <div className="relative">
                                    <input
                                        name={key}
                                        value={value}
                                        onChange={handleChange}
                                        className='w-full p-2 border border-gray-400 rounded-md'
                                        type={key === 'password' ? (showPassword ? 'text' : 'password') : 'text'}
                                    />
                                    {key === 'password' && (
                                        <div className="absolute right-2 top-3 flex justify-center items-center text-xl">
                                            <button type="button" onClick={handleTogglePasswordVisibility} className="focus:outline-none"> 
                                                {showPassword ? <BiSolidShow /> : <BiSolidHide />} 
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center w-full mt-5">
                        <button className="font-bold text-md">Forgot password</button>
                    </div>
                    <div className="py-4">
                        <button
                            className="w-[300px] bg-black text-white font-bold p-2 rounded-lg mb-4 hover:bg-blue-500 hover:text-white hover:font-bold hover:border">
                            Register
                        </button>
                        <div className=" flex items-center justify-center">
                        <span className="mr-2">You have an account ?</span>
                        <Link to="/login" className="text-blue-500 hover:underline">Sign In</Link>
                        </div>
                        {registrationStatus === 'success' && (
                            <div className="flex items-center justify-center text-green-600">
                                <IoCheckmarkDoneCircle className="mr-2" />
                                <span>Registration successful!</span>
                            </div>
                        )}
                        {registrationStatus === 'error' && (
                            <div className="flex items-center text-red-600">
                                <span>Error registering user. Please try again.</span>
                            </div>
                        )}
                    </div>
                </form>
                <div className="relative">
                    <img
                        src={backgroundLoging}
                        alt="img"
                        className="w-[400px] h-[500px] hidden rounded-r-2xl md:block object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default Register;
