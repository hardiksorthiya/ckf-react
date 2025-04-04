import React from 'react'
import './style.css'

const Empowerment = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='title-section text-center mb-4'>
                    <h2 className='empowerment-text'>Empowering with <span>CKF</span></h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='empowerment-card position-relative'>
                        <div className='empowerment-card-image position-relative'>
                            <img src='../assets/images/mission.svg' alt='empowerment' className='image-empowerment' />
                            <div class="arrow"></div>
                            <div class="icon m-auto " id="icon1">
                                <div class="icon-circle  m-auto my-3" id="icon-circle1"></div>
                            </div>
                        </div>
                        <div className='empowerment-card-content text-center position-relative'>
                            <h3 className='empowerment-card-title'>Mission</h3>
                            <h6 className='empowerment-card-title'>Innovate, Build, Excel</h6>
                            <p className='empowerment-card-text'>Delivering tailored software solutions that enhance business productivity and competitiveness, positioning us as trusted partners in clients' digital transformation journeys.</p>
                            {/* <div className='empowerment-card-bacg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="246" height="368" viewBox="0 0 246 368">

                                    <path class="a" d="M240.49,340.57,154,379.73a33.64,33.64,0,0,1-27.49.18L35,340.4A33.82,33.82,0,0,1,14.5,309.24V51.31c.17-27,28.18-44.55,52.37-32.89L239.8,102A36.61,36.61,0,0,1,260.5,135V309.42A33.9,33.9,0,0,1,240.49,340.57Z" transform="translate(-14.5 -14.76)" />
                                </svg>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Empowerment