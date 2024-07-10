import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import classNames from 'classnames';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_button_LINKS } from './navigation';
import { fetchGuideInfo } from '../../features/Slices/infoguideSlice';
// import { logout } from '../../features/auth/authSlice'; 

const linkClass = 'flex items-center gap-2 px-3 m-2 py-2 hover:bg-white hover:rounded-l-3xl hover:duration-300 rounded-sm text-base';
const sidebarOpenClass = 'w-56';
const sidebarClosedClass = 'w-20';

export default function Sidebar() {
  const dispatch = useDispatch();
  const { guideInfo, loading, error } = useSelector((state) => state.guide);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchGuideInfo());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1030) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const handleLogout = () => {
  //   dispatch(logout());
  //   navigate('/');
  // };

  return (
    <div className={`${open ? sidebarOpenClass : sidebarClosedClass} duration-300 h-screen top-0 bg-[#6499E9] p-3 flex flex-col relative`}>
      <div className={`absolute cursor-pointer top-20 right-[-20px] bg-[#6499E9] rounded-full ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}>
        <IoIosArrowDropleftCircle size={40} />
      </div>
      <div className={`rounded-full ml-12 w-[92px] h-[92px] items-center ${!open && "scale-0"}`}>
        <div className={`bg-yellow-500 rounded-full ml-4 lg:ml-0 ${open ? 'w-[72px] h-[72px] lg:h-[92px] lg:w-[92px]' : ''}`}>
          {guideInfo && guideInfo.guide && (
            <img
              src={`http://localhost:4000/${guideInfo.guide.profile_picture}`}
              alt="Profile"
              className={`rounded-full ml-4 lg:ml-0 ${open ? 'w-[72px] h-[72px] lg:h-[92px] lg:w-[92px]' : ''}`}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col">
        {loading && <div>Loading...</div>}
        {error && <div>{"login before"}</div>}
        {guideInfo && (
          <>
            <div className={`text-center font-bold text-[24px] leading-[1] text-[#FFFFFF] ${!open && "hidden"}`}>
              {guideInfo.user.firstName} {guideInfo.user.lastName}
            </div>
            <h2 className={`text-xl text-center font-bold m-1 ${!open && "hidden"}`}>
              {guideInfo.user.role.charAt(0).toUpperCase() + guideInfo.user.role.slice(1)}
            </h2>
          </>
        )}
        <span className={`p-2 ml-2 ${!open && "hidden"}`}>Analytics</span>
        <div className=''>
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} open={open} />
          ))}
        </div>
        <div className='relative top-[230px]'>
          {DASHBOARD_SIDEBAR_button_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} open={open} />
          ))}
          <div  className={classNames('text-red-500 cursor-pointer', linkClass)}>
            <span><HiOutlineArrowRightOnRectangle /></span>
            <Link to={"/home"}>
            {open && <span>Home</span>}
            </Link>
            

          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item, open }) {
  return (
    <Link to={item.path} className={classNames('cursor-pointer', linkClass)}>
      <span>{item.icon}</span>
      {open && <span>{item.label}</span>}
    </Link>
  );
}
