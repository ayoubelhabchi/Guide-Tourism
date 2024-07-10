import { TbLogout } from "react-icons/tb";
import { AuthContext } from '../../Auth/AuthContext';
import { useContext } from "react";





export default function Header() {

    const { logout } = useContext(AuthContext);
  
    const handleLogout = () => {
      logout();
    };

  return (
    <div className='bg-white px-4 py-2 lg:py-4 lg:flex lg:justify-between lg:items-center sm:flex sm:justify-between sm:items-center'>
    <div>
        <h1 className='font-bold text-lg lg:text-xl xl:text-2xl sm:text-md text-blue-400'>Admin Dashboard</h1>
    </div>
    <div className='flex items-center justify-center'>
        <TbLogout onClick={handleLogout} size={24} className='cursor-pointer hover:text-red-700 mr-2 sm:block md:block' />
        <h1 className=' text-center font-bold text-red-700 hidden lg:block'>Log Out</h1>
    </div>
</div>
  )
}
