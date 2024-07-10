import { useState, useEffect } from 'react';
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/navigation';
import { Link, useLocation } from 'react-router-dom';
import { RxDividerVertical } from "react-icons/rx";
import { IoIosArrowDropleftCircle } from "react-icons/io";



const dashbordLinkClass='bg-[#2E5D9F] text-white rounded-xl flex items-center px-2 py-2 w-36 rounded-sm text-base';
const defaultLinkClass = 'flex items-center px-3 m-2 py-2 hover:w-[204px] hover:bg-white py-2 hover:rounded-l-3xl hover:duration-300 rounded-sm text-base';
const sidebarMini = 'flex items-center px-3 m-2  hover:w-28 w-28 ';


export default function Sidebar() {

    const [open, setOpen] = useState(true)

    useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth <= 1030) {
              setOpen(false);
          } else {
              setOpen(true);
          }
      };
  
      // Call the handleResize function once to set the initial state
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);


  return (
    <div className={`${open ? "w-56" : "w-20"} duration-300 bg-[#6499E9] p-3 flex flex-col relative`}>
  <div className={` ${!open && "rotate-180 right-6"} absolute cursor-pointer top-9 right-[-12px] bg-[#6499E9] rounded-full`} onClick={() => setOpen(!open)}>
        <IoIosArrowDropleftCircle className=' size-7' />
  </div>
  <div className={`rounded-full ml-12 w-[92px] h-[92px] items-center ${!open && "scale-0"}`}>
  <img
    src={require('../../assets/profile.jpg')}
    alt="Profile"
    className={` rounded-full ml-4 lg:ml-0 ${open ? 'w-[72px]  h-[72px] lg:h-[92px] lg:w-[92px]' : ''}`}
    // lg:w-full lg:h-full
  />
</div>

  <div className={`flex flex-col ${!open && "scale-0"}`}>
      <div className="text-center inline-block font-bold text-[24px] leading-[1] text-[#FFFFFF]">
      Indica Watson
      </div>
     <h2 className={`text-xl text-center font-bold m-1 ${!open && "scale-0"}`}>
      Manager
     </h2>
        <span className=' p-2 ml-2'>Analytics</span>
     </div>
      <div className=''>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} open={open} />
        ))}
      </div>
    </div>
  );
}

function SidebarLink({ item, open }) {
    const { pathname } = useLocation();
    const linkClass = item.key === 'Dashboard' && open ? dashbordLinkClass : defaultLinkClass;

    if (open) {
        // Render label items with their paths when open is true
        return (
            <Link
                to={item.path}
                className={`${linkClass} ${item.key !== 'Dashboard' && pathname === item.path ? 'bg-white w-[204px] rounded-l-3xl' : ''}`}
            >
                {item.key === 'Dashboard' && (
                    <>
                        <span className={`text-2xl pr-2 ${!open ? 'hidden' : ''}`}>{item.icon}</span>
                        <span>{item.label}</span>
                        <RxDividerVertical className="size-8 text-gray-400" />
                    </>
                )}
                {item.key !== 'Dashboard' && item.label}
            </Link>
        );
    } else {
        // Render only the icons with their paths when open is false
        return (
            <div className={sidebarMini}>
                <Link to={item.path} 
                className={`text-2xl relative right-[7px] bottom-28 hover:bg-white px-1 py-[6px] hover:w-[55px] hover:rounded-l-3xl hover:duration-200 ${pathname === item.path ? 'bg-white w-[55px] rounded-l-3xl' : '' }`}>
                    {item.icon}
                </Link>
            </div>
        );
    }
}

