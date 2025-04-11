import React from 'react'

export default function aboutus() {
    return (
        <section className="about-mobile-app">
            <div className="container">
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='image-section position-relative'>
                            <div className='image-main-ab position-relative d-flex justify-content-center align-items-center' >
                                <img src="./assets/images/mobileapp/girl.png" alt="Mobile App Mockup" className='img-main-mbabout' data-aos="zoom-out-left" data-aos-easing="linear"
     data-aos-duration="1500"/>

                            </div>
                            <img src="./assets/images/mobileapp/de1.png" alt="Mobile App Mockup" className='de1' />
                            <img src="./assets/images/mobileapp/de2.png" alt="Mobile App Mockup" className='de2' />
                            <img src="./assets/images/mobileapp/de3.png" alt="Mobile App Mockup" className='de3' />
                            <img src="./assets/images/mobileapp/de4.png" alt="Mobile App Mockup" className='de4' />

                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className="intro-text">
                            <span className="badge" data-aos="fade-down" data-aos-easing="linear"
     data-aos-delay="100" data-aos-duration="500">About Our App 🔥</span>
                            <h2 data-aos="fade-down" data-aos-easing="linear"
     data-aos-delay="200" data-aos-duration="500">
                                Simple Reports & Analytics <br /> Backdown As it
                            </h2>
                            <p data-aos="fade-down" data-aos-easing="linear"
     data-aos-delay="300" data-aos-duration="500">
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by
                                injected humour, or randomised words which don't look even
                                slightly believable. If you are going to use
                            </p>
                            <ul className="features-list" data-aos="fade-down" data-aos-easing="linear"
     data-aos-delay="400" data-aos-duration="500">
                                <li>✅ With our Technological and Marketing Solutions.</li>
                                <li>✅ With our Technological and Marketing Solutions.</li>
                                <li>✅ With our Technological and Marketing Solutions.</li>
                            </ul>
                            <button className="connect-btn" data-aos="fade-down" data-aos-easing="linear"
     data-aos-delay="500" data-aos-duration="500">Connect Now</button>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}
