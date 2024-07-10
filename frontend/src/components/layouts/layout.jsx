import React, { useState, useEffect, useRef } from "react";
import Header from "./../Header/header";
import Routers from "../../routes/router";
import Footer from "./../Footer/footer";
import UserProfile from "../UserProfile/UserProfile";
import BecomeGuide from "../BecomeGuide/BecomeGuide";
import { BsChatTextFill } from "react-icons/bs";
import Chat from "../Chat/Chat";

const Layout = ({ children }) => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);
  const [modalGuide, setModalGuide] = useState(false);
  const chatRef = useRef(null);

  const handleProfileClose = () => {
    setModalProfile(false);
  };

  const handleProfile = () => {
    setModalProfile(true);
  };
  
  const handleGuide = () => {
    setModalGuide(true);
  };

  const handleGuideClose = () => {
    setModalGuide(false);
  };

  const handleChatToggle = () => {
    setIsChatVisible(!isChatVisible);
  };

  const handleChatClose = () => {
    setIsChatVisible(false);
  };

  const handleClickOutside = (event) => {
    if (chatRef.current && !chatRef.current.contains(event.target)) {
      handleChatClose();
    }
  };

  useEffect(() => {
    if (isChatVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChatVisible]);

  return (
    <>
      <Header handleProfile={handleProfile} />
      {modalProfile && (
        <div className="bg-white/ backdrop-filter backdrop-blur-sm h-full fixed top-0 w-full z-50 flex justify-center items-center">
          <UserProfile handleProfileClose={handleProfileClose} handleGuide={handleGuide} />
        </div>
      )}
      {modalGuide && (
        <div className="backdrop-filter backdrop-blur-sm h-full fixed top-0 w-full z-50 flex justify-center items-center bottom-0">
          <BecomeGuide handleGuideClose={handleGuideClose} />
        </div>
      )}

      <div className="fixed z-50 bottom-8 right-6">
        {!isChatVisible && (
          <button onClick={handleChatToggle}>
            <BsChatTextFill className="text-primary hover:animate-bounce" size={50} />
          </button>
        )}
        {isChatVisible && (
          <div className="fixed z-50 bottom-3 right-6" ref={chatRef}>
            <Chat handleChatClose={handleChatClose} />
          </div>
        )}
      </div>
      <main>{children}</main>
      <Routers handleProfile={handleProfile} handleChatClose={handleChatClose} handleGuide={handleGuide} />
      <Footer />
    </>
  );
};

export default Layout;
