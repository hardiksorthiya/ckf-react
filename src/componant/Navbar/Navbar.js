import './Navbar.css';
import logo from '../../assets/images/logo - ckf.png';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('empowerment');

  const isHomePage = location.pathname === '/';
  const currentPath = location.pathname;

  // Check if current path is under a specific route
  const isServicesPage = currentPath.startsWith('/services');
  const isAboutPage = currentPath === '/about';
  const isContactPage = currentPath === '/contact';

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

  const handleNavClick = (id) => {
    if (isHomePage) {
      scrollTo(id);
    } else {
      navigate(`/#${id}`);
    }
  };

  useEffect(() => {
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  const getLinkClass = (id) => {
    if (isHomePage && activeLink === id) return 'active';
    if (id === 'services' && isServicesPage) return 'active';
    if (id === 'about' && isAboutPage) return 'active';
    if (id === 'contact' && isContactPage) return 'active';
    return '';
  };

  return (
    <>
      {/* Mobile Left Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu">
          <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>×</button>
          <ul className="mobile-nav-links">
            <li><a href="#empowerment" className={getLinkClass('empowerment')} onClick={() => handleNavClick('empowerment')}>Our Empowerment</a></li>
            <li><a href="#services" className={getLinkClass('services')} onClick={() => handleNavClick('services')}>Our Services</a></li>
            <li><a href="#process" className={getLinkClass('process')} onClick={() => handleNavClick('process')}>Our Process</a></li>
            <li><Link to="/about" className={getLinkClass('about')}>About Us</Link></li>
            <li><a href="#newslatter" className={getLinkClass('newslatter')} onClick={() => handleNavClick('newslatter')}>Newsletters</a></li>
            <li><Link to="/contact" className={getLinkClass('contact')}>Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Navbar */}
      <header className={`navbar-section ${isSticky ? 'navbar-sticky animate__animated animate__fadeInDown' : ''}`}>
        <div className="container d-flex justify-content-between align-items-center py-2">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Cloud Kode Form" className="logo-name" />
          </Link>

          <ul className="nav gap-4 d-none d-lg-flex">
            <li><a href="#empowerment" className={getLinkClass('empowerment')} onClick={() => handleNavClick('empowerment')}>Our Empowerment</a></li>
            <li><a href="#services" className={getLinkClass('services')} onClick={() => handleNavClick('services')}>Our Services</a></li>
            <li><a href="#process" className={getLinkClass('process')} onClick={() => handleNavClick('process')}>Our Process</a></li>
            <li><a href="#about" className={getLinkClass('about')} onClick={() => handleNavClick('about')}>About</a></li>
            <li><a href="#newslatter" className={getLinkClass('newslatter')} onClick={() => handleNavClick('newslatter')}>Newsletters</a></li>
          </ul>

          <div className="d-block d-lg-none">
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(true)}>☰</button>
          </div>

          <Link to="/contact" className={`btn btn-contact d-none d-lg-block ${getLinkClass('contact')}`}>Contact Us</Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
