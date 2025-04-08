import './App.css';
import Navbar from './componant/Navbar/Navbar';
import Slider from './componant/Home/slider';
import Archivementsection from './componant/Home/archivementsection';
import Empowerment from './componant/Home/empowerment';
import Services from './componant/Home/services';
import ProcessSection from './componant/Home/process';
import Aboutus from './componant/Home/aboutus';
import Footer from './componant/Footer/Footer';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init({
  }); 
  return (
    <>
      <Navbar/>
      <Slider/>
      <Archivementsection/>
      <Empowerment/>
      <Services/>
      <ProcessSection/>
      <Aboutus/>
      <Footer/>
    </>
  );
}



export default App;
