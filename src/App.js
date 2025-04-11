import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componant/Home/Home';
import MobileApp from './componant/Services/MobileApp/MobileApp';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/css/style.css';
import MicroServices from './componant/Services/MicroServices/MicroServices';


function App() {
  AOS.init({
  }); 
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/micro-services" element={<MicroServices />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}



export default App;
