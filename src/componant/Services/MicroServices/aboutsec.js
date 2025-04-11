import React from 'react'
import { Link } from 'react-router-dom'

export default function aboutsec() {
    return (
        <section className="about-mobile-app about-sec">
            <div className="container">
                <div className='row align-items-center'>
                    
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className="intro-text">
                            <h2>
                            Powerful Server and Platform
                            </h2>
                            <p>
                            Leverage the latest innovations in cloud technology to improve operations and enhance user experience.
                            </p>
                            <ul className="features-list">
                                <li>✅ Better Security and faster Server</li>
                                <li>✅ No-Downtime website transfers</li>
                                <li>✅ Deployment within few minutes</li>
                            </ul>
                            <Link to="/" className="learn-more-btn">
                            <button className="connect-btn">Connect Now</button>
                            </Link>
                            
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='image-section position-relative'>
                            <div className='image-main-sec position-relative d-flex justify-content-center align-items-center'>
                                <img src="./assets/images/microservices/about2.png" alt="Mobile App Mockup" className='img-main-mbaboutsec' />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </section>
    )
}
