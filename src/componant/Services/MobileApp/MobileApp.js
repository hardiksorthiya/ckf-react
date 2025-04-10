import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Breadcum from './breadcum'; 
import Aboutus from './about';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function MobileApp() {
  AOS.init({
  }); 
  return (
    <>
      <Navbar/>
      <Breadcum/>
      <Aboutus/>
      <Footer/>
      
    </>
  );
}



export default MobileApp;