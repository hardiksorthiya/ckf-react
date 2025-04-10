import './Navbar.css';
import logo from '../../assets/images/logo - ckf.png';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('empowerment');

  const handleScroll = () => {
    const heroHeight = document.querySelector('.hero-section')?.offsetHeight || 300;
    setIsSticky(window.scrollY > heroHeight - 100);

    const sections = ['empowerment', 'services', 'process', 'about', 'newslatter'];
    for (let id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop - 120;
        const bottom = top + el.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveLink(id);
          break;
        }
      }
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
      setActiveLink(id);
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Left Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu">
          <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>×</button>
          <ul className="mobile-nav-links">
            <li><a href="#empowerment" onClick={() => scrollTo('empowerment')}>Our Empowerment</a></li>
            <li><a href="#services" onClick={() => scrollTo('services')}>Our Services</a></li>
            <li><a href="#process" onClick={() => scrollTo('process')}>Our Process</a></li>
            <li><a href="#about" onClick={() => scrollTo('about')}>About Us</a></li>
            <li><a href="#newslatter" onClick={() => scrollTo('newslatter')}>Newsletters</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Single Header/Navbar Section */}
      <header className={`navbar-section ${isSticky ? 'navbar-sticky animate__animated animate__fadeInDown' : ''}`}>
        <div className="container d-flex justify-content-between align-items-center py-2">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Cloud Kode Form" className="logo-name" />
          </a>

          <ul className="nav gap-4 d-none d-lg-flex">
            <li><a className={activeLink === 'empowerment' ? 'active' : ''} onClick={() => scrollTo('empowerment')} href="#empowerment">Our Empowerment</a></li>
            <li><a className={activeLink === 'services' ? 'active' : ''} onClick={() => scrollTo('services')} href="#services">Our Services</a></li>
            <li><a className={activeLink === 'process' ? 'active' : ''} onClick={() => scrollTo('process')} href="#process">Our Process</a></li>
            <li><a className={activeLink === 'about' ? 'active' : ''} onClick={() => scrollTo('about')} href="#about">About Us</a></li>
            <li><a className={activeLink === 'newslatter' ? 'active' : ''} onClick={() => scrollTo('newslatter')} href="#newslatter">Newsletters</a></li>
          </ul>

          <div className="d-block d-lg-none">
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(true)}>☰</button>
          </div>

          <button className="btn btn-contact d-none d-lg-block">Contact Us</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
