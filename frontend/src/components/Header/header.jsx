import { useState, useEffect } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Modal from "../Modals/login";
import { IoPerson } from "react-icons/io5";
import DropDown from "../DropDown/DropDown";

const Header = ({ handleProfile }) => {
  const [dropdown, setDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [profileDrop, setProfileDrop] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const location = useLocation();

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleProfileDrop = () => {
    setProfileDrop((prevProfileDrop) => !prevProfileDrop);
  };

  const handleProfileDropClose = () => {
    setProfileDrop(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Check scroll position on mount to set initial state correctly
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]); // Add location.pathname as a dependency

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <>
      <nav
        className={`${
          location.pathname === '/orders'
            ? "bg-primary text-white"
            : isScrolled
            ? "backdrop-blur-md text-black"
            : "bg-transparent text-white"
        } fixed top-0 left-0 w-full h-20 flex justify-between items-center z-40`}
      >
        <div className="container mx-auto lg:px-3">
          <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
            <img
              src={location.pathname === '/orders' ? "/img_ellipse_621.png" : (isScrolled ? "/blacklogo.png" : "/img_ellipse_621.png")}
              className="h-28 rounded-[103] object-cover -ml-8"
              alt="Logo"
            />
            {isLoggedIn && ( 
              <div className=" right-20 lg:right-20 absolute flex" >
                <button onClick={handleProfileDrop}>
                  <IoPerson size={25} />
                </button>
                {profileDrop && (
                  <DropDown
                    handleProfile={handleProfile}
                    closeModal={handleProfileDropClose}
                    handleProfileDropClose={handleProfileDropClose}
                  />
                )}
              </div>
            )}
            <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
              <li>
                <Link
                  to="/home"
                  className="leading-normal no-underline text-xl  font-medium hover:text-black"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="leading-normal no-underline text-xl font-medium hover:text-black"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/tour"
                  className="leading-normal no-underline text-xl font-medium hover:text-black"
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/camping"
                  className="leading-normal no-underline text-xl font-medium hover:text-black"
                >
                  Campings
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 max-lg:hidden">
              {!isLoggedIn && (
                <button
                  onClick={() => setShowModal(true)}
                  className={`${location.pathname === '/orders' ? 'bg-white text-primary' : 'bg-primary'} rounded-2xl h-12 px-6 text- hover:bg-white hover:text-primary transition-bg hover:border-primary`}
                >
                  Login
                </button>
              )}
            </div>
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              {dropdown ? <MdClose size={30} /> : <HiMenuAlt1 size={30} />}
            </div>
          </div>

          {dropdown && (
            <div className="lg:hidden w-full p-4 fixed top-20 backdrop-filter backdrop-blur-md transition-all">
              <div className="w-full flex flex-col items-baseline gap-4">
                <ul className="flex flex-col justify-center w-full">
                  <li>
                    <Link
                      to="/home"
                      className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-black text-[15px]"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-black text-[15px] "
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tour"
                      className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-black text-[15px] "
                    >
                      Tours
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/camping"
                      className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-black text-[15px] "
                    >
                      Campings
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};

export default Header;
