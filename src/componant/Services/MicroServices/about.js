import React from 'react'
import { Link } from 'react-router-dom'
export default function aboutus() {
    return (
        <section className="about-mobile-app">
            <div className="container">
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='image-section position-relative'>
                            <div className='image-main-ab-ser position-relative d-flex justify-content-center align-items-center'>
                                <img src="./assets/images/microservices/about.png" alt="Mobile App Mockup" className='img-main-mbabout' />

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className="intro-text">
                            <h2>
                            Simplify Data Management & Insights
                            </h2>
                            <p>
                            Take control of your data with our comprehensive cloud-based analytics solutions. Whether you’re managing business processes or monitoring customer engagement, our tools ensure you stay ahead.
                            </p>
                            <ul className="features-list">
                                <li>✅ Streamlined data analysis for better decision-making</li>
                                <li>✅ Seamless integration with technological & 
                                marketing solutions</li>
                                <li>✅ Reliable, scalable, and secure infrastructure</li>
                            </ul>
                            <Link to="/" className="learn-more-btn">
                            <button className="connect-btn">Connect Now</button>
                            </Link>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}
