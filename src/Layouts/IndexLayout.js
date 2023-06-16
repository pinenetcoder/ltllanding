import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import CookieConsent from "@/components/CookieConsent"
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

function IndexLayout({children}) {
  const [showPopup, setShowPopup] = useState(false);

  const GetCookies = (cookiename) => {
    return Cookies.get(cookiename);
  };

  useEffect(() => {
    if (!GetCookies('LLP-Cookie')) {
      setShowPopup(true);
    }
  }, []);

  return (
    <div className="main-layout">
      <Header/>
        {children}
      <Footer/>
      {showPopup && <CookieConsent setShowPopup={setShowPopup} />} 
    </div>
  )
}

export default IndexLayout