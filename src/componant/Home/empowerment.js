import React from 'react'

const empower = [
    { id: 1, image: "./assets/images/mission.gif", texttitle: "Mission", textsubtitle: "Innovate, Build, Excel", textcontent: "Delivering tailored software solutions that enhance business productivity and competitiveness, positioning us as trusted partners in clients' digital transformation journeys." },
    { id: 2, image: "./assets/images/vision.gif", texttitle: "Vision", textsubtitle: "Shaping Tomorrow's Tech", textcontent: "To empower organizations through innovative software, driving impactful change, efficiency, and growth in a digitally connected world." },
    { id: 3, image: "./assets/images/value.gif", texttitle: "Value", textsubtitle: "Integrity, Innovation, Excellence", textcontent: "We prioritize innovation, integrity, and client-focused solutions to deliver high-quality software." },
    { id: 4, image: "./assets/images/target.gif", texttitle: "Goal", textsubtitle: "Driving Impact Through Technology", textcontent: "To be a leading technology partner, delivering high-impact software solutions that drive digital transformation and empower businesses." },

];

const Empowerment = () => {
    return (
        <div className='container my-5' id='empowerment'>
            <div className='row'>
                <div className='title-section text-center mb-4'>
                    <h2 className='empowerment-text'>Empowering with <span>CKF</span></h2>
                </div>
            </div>
            <div className='row'>
                {empower.map((item) => (
                    <div className='col-xl-3 col-lg-6 col-md-6' key={item.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={item.id * 300}>
                        <div className='empowerment-card position-relative'>
                            <div className='empowerment-card-image position-relative'>
                                <img src={item.image} alt='empowerment' className='image-empowerment' />
                                <div className="arrow" id={`arrow${item.id}`}>
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.57 140.14">
                                        <defs>
                                            <linearGradient id="linear-gradient-arrow" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#3ACECA" />
                                                <stop offset="100%" stopColor="#097189" />
                                            </linearGradient>
                                            <linearGradient id="linear-gradient-arrow2" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#FC9C10" />
                                                <stop offset="100%" stopColor="#FF5D15" />
                                            </linearGradient>
                                            <linearGradient id="linear-gradient-arrow3" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#B30745" />
                                                <stop offset="100%" stopColor="#FD348C" />
                                            </linearGradient>
                                            <linearGradient id="linear-gradient-arrow4" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#23A6DC" />
                                                <stop offset="100%" stopColor="#0A498F" />
                                            </linearGradient>
                                        </defs>
                                        <title>Vector</title>
                                        <path d="M209.47,79.41,171.35,41.29a10.68,10.68,0,0,0-14.27-.87,10,10,0,0,0-3.48,7.83,10.9,10.9,0,0,0,3,7.31l23.33,23.16H84.66A44.31,44.31,0,0,1,28.09,11.87L16.77.56A60.92,60.92,0,0,0,.93,42.16c.18,33.77,28.2,60.93,62,60.93H176.57l-20.19,20.19a10.47,10.47,0,0,0,.17,14.8c4,3.82,10.8,3.3,14.63-.53L209.3,99.43A14.24,14.24,0,0,0,209.47,79.41Z" transform="translate(-0.93 -0.56)" /></svg>
                                </div>
                                <div className="icon m-auto " id={`icon${item.id}`}>
                                    <div className={`icon-circle${item.id} m-auto my-3 d-none`} id="icon-circle"></div>
                                </div>
                            </div>
                            <div className='empowerment-card-with-text'>
                            <div className='empowerment-card-content text-center'>
                                <h3 className='empowerment-card-title'>{item.texttitle}</h3>
                                <h6 className='empowerment-card-title'>{item.textsubtitle}</h6>
                                <p className='empowerment-card-text'>{item.textcontent}</p>
                            </div>
                            <div className='empowerment-bg'>
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 368"><title>Vector</title><path class="cls-1" d="M240.49,340.57,154,379.73a33.68,33.68,0,0,1-27.49.18L35,340.4A33.82,33.82,0,0,1,14.5,309.24V51.31c.17-27,28.18-44.55,52.37-32.89L239.8,102A36.61,36.61,0,0,1,260.5,135V309.42A33.9,33.9,0,0,1,240.49,340.57Z" transform="translate(-14.5 -14.76)" /></svg>
                            </div>
                            </div>
                            
                            <div className='empowerment-bg2'>
                                <svg id="Layer_bg2" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206 121">
                                    <defs>
                                        <linearGradient id="bggrediant" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3ACECA" />
                                            <stop offset="100%" stopColor="#097189" />
                                        </linearGradient>
                                        <linearGradient id="bggrediant2" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#FC9C10" />
                                            <stop offset="100%" stopColor="#FF5D15" />
                                        </linearGradient>
                                        <linearGradient id="bggrediant3" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#B30745" />
                                            <stop offset="100%" stopColor="#FD348C" />
                                        </linearGradient>
                                        <linearGradient id="bggrediant4" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#23A6DC" />
                                            <stop offset="100%" stopColor="#0A498F" />
                                        </linearGradient>
                                    </defs>
                                    <title>Vector</title><path id={`csl-2-bg${item.id}`} class="cls-2-bg" d="M.5,21.87V60.26A28.72,28.72,0,0,0,17.61,86.44l76.64,33a28.65,28.65,0,0,0,23-.17l72.45-32.64a28.61,28.61,0,0,0,16.76-26V21.87A21.08,21.08,0,0,0,185.38.76H21.45A21.26,21.26,0,0,0,.5,21.87Z" transform="translate(-0.5 -0.76)" /></svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Empowerment