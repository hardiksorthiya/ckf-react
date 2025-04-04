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
                    <img src='../assets/images/mission.svg' alt='empowerment' className='image-empowerment' />
                    <div class="arrow"></div>
                        <div class="icon m-auto " id="icon1">
                            <div class="icon-circle  m-auto my-3" id="icon-circle1"></div>
                        </div>
                        
                        
                        <h5 className='empowerment-card-title'>Personalized Learning</h5>
                        <p className='empowerment-card-text'>Tailored learning paths to suit individual needs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Empowerment