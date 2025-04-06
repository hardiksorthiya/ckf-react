import React from 'react'
import './style.css'

const ServiceSection = () => {
  const servicesItems = [
    { id: 1, icon: "./assets/images/1.MobileApp.gif", title: "Mobile App", description: "Creating mobile applications designed to enhance business capabilities, providing essential tools and features that help companies adapt and succeed in the digital world. Our apps offer seamless user experiences, driving engagement, productivity, and growth for businesses of all sizes." },
    { id: 2, icon: "./assets/images/2.Serivces.gif", title: "Micro Services", description: "Designing flexible and scalable microservices architectures that enable businesses to build efficient, high-performance digital solutions. By breaking down complex systems into manageable, independent services, we ensure scalability, reliability, and ease of maintenance, driving innovation and agility in the digital transformation journey." },
    { id: 3, icon: "./assets/images/3.CloudServices.gif", title: "Cloud Services", description: "Providing businesses with secure and scalable cloud solutions that optimize performance and enable growth. Our cloud services ensure data security, high availability, and flexibility, allowing companies to scale seamlessly, reduce operational costs, and enhance efficiency in their digital operations." },
    { id: 4, icon: "./assets/images/4.Migration.gif", title: "Migration", description: "Offering seamless migration services that ensure businesses transition smoothly to modern platforms. Our expertise minimizes downtime and disruption, while optimizing processes for enhanced performance and scalability. We help companies embrace new technologies with confidence and ensure a smooth, efficient move to the cloud or other advanced infrastructures." },
    { id: 5, icon: "./assets/images/5.DevOps.gif", title: "Dev Ops", description: "Optimizing development and operations processes to accelerate delivery timelines while ensuring consistent, reliable results. By integrating automation, continuous integration/continuous deployment (CI/CD), and efficient workflows, we help businesses improve collaboration, reduce errors, and deliver high-quality solutions faster and more effectively." },
    { id: 6, icon: "./assets/images/6.Ai.gif", title: "Artificial intelligence", description: "Utilizing artificial intelligence to enhance business intelligence and automate processes, enabling smarter, data-driven decision-making. Our AI solutions analyze vast amounts of data, identify patterns, and provide actionable insights, helping businesses optimize operations, improve efficiency, and make informed decisions faster." },
  ];

  return (
    <section className="services-homepage" id='services'
      style={{
        backgroundImage: `url('../../assets/images/servicbg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px 0',
      }}>
      <div className="container my-5">
        <div className='row'>
          <div className='title-section text-center mb-4'>
            <h2 className='empowerment-text text-white'>Our  <span>services</span></h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12 col-lg-12 col-md-12'>
            {servicesItems.map((item) => (
              <div className='services-main-part' key={item.id}>
                <div className='row align-items-center'>
                  <div className='col-xl-4 col-lg-5 col-md-6' >
                    <div className='services-item text-center'>
                      <h3 className={`stitle${item.id}`}>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-6 col-md-6' >
                    <div className='services-icon text-end' id={`serviceicon${item.id}`}>
                      <div className='services-icon-bg' id={`servicesiconbg${item.id}`}>
                      <img src={item.icon} alt={item.title} />
                      <div className={`services-square${item.id}`} id="services-square"></div>
                      </div>
                      
                      <div className='border-dahed' id={`border-dahed${item.id}`}></div>
                      <div className={`services-circle${item.id}`} id="services-circle">
                      <div class="circle"></div>
                      <div class="ringring"></div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section >

  );
};

export default ServiceSection;