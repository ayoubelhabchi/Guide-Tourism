import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import classNames from 'classnames';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_button_LINKS } from './navigation';
import { fetchGuideInfo } from '../../features/Slices/infoguideSlice';

const linkClass = 'flex items-center gap-2 px-3 m2 py-2 hover:bgprimary w-full rounded-l-3xl duration-300 rounded-sm text-base';
const activeLinkClass = 'bg-primary text-white font-semibold hover:bg-primary';
const sidebarOpenClass = 'lg:w-[180px] w-36';
const sidebarClosedClass = 'w-20';

export default function Sidebar() {
  const dispatch = useDispatch();
  const { guideInfo, loading, error } = useSelector((state) => state.guideInfo);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); 

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

  return (
    <div className={`${open ? sidebarOpenClass : sidebarClosedClass} duration-300 h-screen top-0 bg-white flex flex-col relative`}>
      <div className={`absolute cursor-pointer right-[-16px] bgprimary rounded-full ${!open ?"rotate-180 top-3" : 'top-16'}`} onClick={() => setOpen(!open)}>
        <IoIosArrowDropleftCircle className=' text-4xl text text-primary border-none bg-white rounded-full p-1' />
      </div>
      <div className={`flex lg:mt-6 mt-4 w-full justify-center items-center ${open ? 'w-[92px] h-[92px]' : 'w-0 h-0'} transition-transform`}>
        {guideInfo && guideInfo.guide && (
          <img
            src={guideInfo.guide.profile_picture}
            alt="Profile"
            className={`rounded-full ${open ? 'w-[72px] h-[72px] lg:w-[92px] lg:h-[92px]' : 'w-0 h-0'} transition-all`}
          />
        )}
      </div>
      <div className="flex text-black flex-col pl-4">
        {error && <div>{"login before"}</div>}
        <div className='mt-8'>
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} open={open} isActive={location.pathname === item.path} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item, open, isActive }) {
  return (
    <Link to={item.path} className={classNames('cursor-pointer', linkClass, { [activeLinkClass]: isActive })}>
      <span className='  text-2xl '>{item.icon}</span>
      {open && <span className=' lg:text-xl fontmedium'>{item.label}</span>}
    </Link>
  );
}
