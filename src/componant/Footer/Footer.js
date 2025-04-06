import React from 'react'
import './Footer.css'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Logo from '../../assets/images/logo-ckf_white.png'
const Footer = () => {
    return (
        <footer className="footer" id='newslatter'>
            {/* Newsletter Section */}
            <div className='container'>
                <div className='row'>
                    <div className="newsletter-section bg-white shadow p-5 rounded-4 mx-auto">
                        <h3 className="text-center fw-bold">Stay Connected with Our Newsletter</h3>
                        <p className="text-center text-muted">
                            Join our community to receive the latest insights, resources, and updates tailored to help your business thrive in the digital world.
                        </p>
                        <div className="d-flex justify-content-center mt-4 flex-wrap gap-2">
                            <Form.Control type="email" placeholder="Enter your email address" className="w-50 shadow-sm" />
                            <Button variant="warning" className="px-4">Subscribe Now</Button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Footer Main Section */}
            <div className="footer-main text-white">
                <Container>
                    <Row className="gy-4">
                        <Col md={6} lg={3}>
                            <img src={Logo} alt="CloudKodeForm" style={{ width: 160 }} />
                            <p className="mt-3">
                                Our goal is to create a future where all businesses, no matter their size or sector, can easily obtain the necessary tools and knowledge to succeed in the digital era.
                            </p>
                        </Col>

                        <Col md={6} lg={3}>
                            <h5>Services</h5>
                            <hr />
                            <ul className="list-unstyled">
                                <li><a href='/'>Mobile App</a></li>
                                <li><a href='/'>Micro Services</a></li>
                                <li><a href='/'>Cloud Services</a></li>
                                <li><a href='/'>Migration</a></li>
                                <li><a href='/'>Dev Ops</a></li>
                                <li><a href='/'>Artificial Intelligence</a></li>
                            </ul>
                        </Col>

                        <Col md={6} lg={3}>
                            <h5>Quick Links</h5>
                            <hr />
                            <ul className="list-unstyled">
                            <li><a href='/'>Home</a></li>
                                <li><a href='/'>About Us</a></li>
                                <li><a href='/'>Our Empowerment</a></li>
                                <li><a href='/'>Our Process</a></li>
                                <li><a href='/'>Our Services</a></li>
                                <li><a href='/'>Newsletters</a></li>
                                
                            </ul>
                        </Col>

                        <Col md={6} lg={3}>
                            <h5>Contact Us</h5>
                            <hr />
                            <p><FaMapMarkerAlt /> Mau, Uttar Pradesh, India, 226103</p>
                            <p><FaEnvelope /> info@cloudkodeform.com</p>
                            <p><FaPhone style={{ transform: 'rotate(105deg)' }} /> +91 9650792424</p>
                            <div className="d-flex gap-3 mt-3 social-icon-fb">
                                <a href='/'><FaFacebook size={24} /></a>
                                <a href='/'><FaInstagram size={24} /></a>
                                <a href='/'><FaLinkedin size={24} /></a>
                                <a href='/'><FaTwitter size={24} /></a>
                                </div>
                        </Col>
                    </Row>
                    <p className="text-center mt-5 mb-0">&copy; CloudKodeForm 2025. All rights reserved.</p>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;