import React from 'react'

const ProcessSection = () => {
      const processItem = [
        { id: 1, step:"01", icon: "./assets/images/Requirment.gif", title: "Requirements", description: "Clear requirements to align goals and create tailored, effective solutions." },
        { id: 2, step:"02", icon: "./assets/images/Anaylsis2.gif", title: "Analysis", description: "In-depth analysis to understand needs, identify opportunities, and drive solutions." },
        { id: 3, step:"03", icon: "./assets/images/output-onlinegiftools.gif", title: "UI Design", description: "Creating intuitive, user-friendly designs to enhance experience and engagement." },
        { id: 4, step:"04", icon: "./assets/images/development.gif", title: "Development", description: "Building robust, scalable solutions with cutting-edge technology and agility." },
        { id: 5, step:"05", icon: "./assets/images/QATEST.gif", title: "QA Test", description: "Rigorous testing to ensure quality, reliability, and performance of the solution." },
        { id: 6, step:"06", icon: "./assets/images/Complete2.gif", title: "Complete", description: "Finalizing and delivering the product, ensuring client satisfaction and success." },
        ];

    return (
        <section className="process-homepage" id='process'>
            <div className="container my-5">
                <div className='row'>
                    <div className='title-section text-center mb-4'>
                        <h2 className='empowerment-text'>Our Process <span>flow</span></h2>
                        <p className='empowerment-subtext'>Streamlined approach from requirements to completion, ensuring success at every stage.</p>
                    </div>
                </div>
                <div className='row'>
                {processItem.map((item) => (
                    <div className='col-xl-2 col-lg-6 col-md-6 col-sm-12 col-6 process-hp' key={item.id}  data-aos={item % 2 === 0 ? 'fade-right' : 'fade-left'} >
                        <div className="step-process">
                            <div className="step-section" >
                                <div className="step-box">
                                    <div className="step-bar" id={`step-bar${item.id}`}></div>
                                    <div className="step-bar2" id={`step-bar2${item.id}`}></div>
                                    <div className='d-flex align-items-start step-box-content-hp text-center'>
                                        <div className="step-number" id={`step-number${item.id}`}>Step <br/><span>{item.step}</span></div>
                                    </div>
                                    <div className="step-content text-center">
                                    <div className="step-icon">
                                                <img src={item.icon} alt="icon" />
                                            </div>
                                        <h6>{item.title}</h6>
                                            <p>
                                                {item.description}
                                            </p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="step-direction">
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.04 135.04">
                                    <defs>
                                        <linearGradient id="linear-gradient" x1="96.49" y1="98.12" x2="96.49" y2="-7.32" gradientTransform="matrix(1, 0, 0, -1, 0, 138)" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#3aceca" />
                                            <stop offset="1" stopColor="#097189" />
                                        </linearGradient>
                                        <linearGradient id="linear-gradient" x1="61.51" y1="98.12" x2="61.51" y2="-7.32" />
                                        <linearGradient id="linear-gradient" x1="9.99" y1="132.49" x2="9.99" y2="115.27" gradientTransform="matrix(1, 0, 0, -1, 0.01, 137.24)" />

                                        <linearGradient id="linear-gradient-3" x1="96.49" y1="98.12" x2="96.49" y2="-7.32" gradientTransform="matrix(1, 0, 0, -1, 0, 138)" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#3FC9C10" />
                                            <stop offset="1" stopColor="#FF5D15" />
                                        </linearGradient>
                                        <linearGradient id="linear-gradient-3" x1="61.51" y1="98.12" x2="61.51" y2="-7.32" />
                                        <linearGradient id="linear-gradient-3" x1="9.99" y1="132.49" x2="9.99" y2="115.27" gradientTransform="matrix(1, 0, 0, -1, 0.01, 137.24)" />

                                        <linearGradient id="linear-gradient-4" x1="96.49" y1="98.12" x2="96.49" y2="-7.32" gradientTransform="matrix(1, 0, 0, -1, 0, 138)" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#ED1B5C" />
                                            <stop offset="1" stopColor="#B20644" />
                                        </linearGradient>
                                        <linearGradient id="linear-gradient-4" x1="61.51" y1="98.12" x2="61.51" y2="-7.32" />
                                        <linearGradient id="linear-gradient-4" x1="9.99" y1="132.49" x2="9.99" y2="115.27" gradientTransform="matrix(1, 0, 0, -1, 0.01, 137.24)" />

                                        <linearGradient id="linear-gradient-5" x1="96.49" y1="98.12" x2="96.49" y2="-7.32" gradientTransform="matrix(1, 0, 0, -1, 0, 138)" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#177FC6" />
                                            <stop offset="1" stopColor="#09488E" />
                                        </linearGradient>
                                        <linearGradient id="linear-gradient-5" x1="61.51" y1="98.12" x2="61.51" y2="-7.32" />
                                        <linearGradient id="linear-gradient-5" x1="9.99" y1="132.49" x2="9.99" y2="115.27" gradientTransform="matrix(1, 0, 0, -1, 0.01, 137.24)" />

                                        <linearGradient id="linear-gradient-6" x1="96.49" y1="98.12" x2="96.49" y2="-7.32" gradientTransform="matrix(1, 0, 0, -1, 0, 138)" gradientUnits="userSpaceOnUse">
                                            <stop offset="0" stopColor="#836AA4" />
                                            <stop offset="1" stopColor="#9747FF" />
                                        </linearGradient>
                                        <linearGradient id="linear-gradient-6" x1="61.51" y1="98.12" x2="61.51" y2="-7.32" />
                                        <linearGradient id="linear-gradient-6" x1="9.99" y1="132.49" x2="9.99" y2="115.27" gradientTransform="matrix(1, 0, 0, -1, 0.01, 137.24)" />



                                    </defs>
                                    <title>Group 170</title>
                                    <path id={`pcls-1${item.id}`} class="pcls-1" d="M95.49,133.26l-19.5-28h41Z" transform="translate(0.01 -0.76)" />
                                    <path id={`pcls-2${item.id}`} class="pcls-2" d="M3,10.76h92.5v103.5m-19.5-9,19.5,28,21.5-28Z" transform="translate(0.01 -0.76)" />
                                    <circle id={`pcls-3${item.id}`} class="pcls-3" cx="10" cy="10" r="10" />
                                </svg>
                            </div>
                        </div>


                    </div>
                ))}

                </div>
            </div>
        </section >

    );
};

export default ProcessSection;