import React from 'react'
import './style.css'
import  Robot from '../../assets/images/roboto1.png'

export default function aboutus() {
  return (
    <section className="about-section">
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='about-content'>
                        <h2>About Us</h2>
                        <p>Welcome to CloudeKodeForm Technologies, where originality meets effectiveness. Founded by seasoned professionals with a passion for technology, we are a dynamic software services company dedicated to delivering cutting-edge solutions tailored to our clients' unique needs. Our team of skilled and motivated experts is committed to achieving excellence in every project. With a focus on quality, innovation, and customer satisfaction, we set ourselves apart in the industry. </p>
                        <p>At CloudeKodeForm, we’re more than just developers – we’re partners in your journey toward world-class digital transformation. Let’s innovate together.</p>
                    </div>
                    </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='about-image'>
                        <img src={Robot} alt="About Us" />
                    </div>
                    </div>
                </div>
</div>    
  </section>
  
  )
}

