import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Breadcum from './breadcum'; 
import Aboutus from './about';
import Aboutsec from './aboutsec';
import FAQ from './faq';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function MicroServices() {
  AOS.init({
  }); 
  return (
    <>
      <Navbar/>
      <Breadcum/>
      <Aboutus/>
      <Aboutsec/>
      <FAQ/>
      <Footer/>
     
      
    </>
  );
}



export default MicroServices;