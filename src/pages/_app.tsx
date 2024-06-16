import React from "react";
import { Auth0Provider } from '@auth0/auth0-react';
import { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import TestFooter from "@/components/TestFooter";
import Navbar from "@/components/Navbar/Navbar";
import Layout from "@/components/Layout";
import "../styles/globals.css";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const pathName = usePathname();
  const AUTH0_DOMAIN: string = process.env.NEXT_PUBLIC_AUTH0_DOMAIN
    ? process.env.NEXT_PUBLIC_AUTH0_DOMAIN
    : "";
  const AUTH0_CLIENTID: string = process.env.NEXT_PUBLIC_AUTH0_CLIENTID
    ? process.env.NEXT_PUBLIC_AUTH0_CLIENTID
    : "";

  const [isOpen, setIsOpen] = React.useState(false)
  const [isProfileOpen, setProfileIsOpen] = React.useState(false)

  const openSidebar = () => {
    setIsOpen(true)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  const openProfile = () => {
    setProfileIsOpen(true)
  }

  const closeProfile = () => {
    setProfileIsOpen(false)
  }

  const toggleProfile = () => {
    setProfileIsOpen(!isProfileOpen);
  };

  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENTID}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
      }}
    >
      <Navbar openSidebar={openSidebar} toggleProfile={toggleProfile}/>
      <Layout
        isOpen={isOpen}
        isProfileOpen={isProfileOpen}
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
        closeProfile={closeProfile}
      >
        <Component {...pageProps} />
      </Layout>
      <div className={`${isProfileOpen && 'lg:block hidden'}`}>
      {pathName?.split('/')[1] === 'test' ? <TestFooter /> : <Footer/>}
      </div>
    </Auth0Provider>
  );
};

export default MyApp;