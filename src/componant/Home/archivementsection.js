import React from 'react'
import UserIcon from '../../assets/images/usericon.svg'
import ArchivementIcon from '../../assets/images/archievementicon.svg'
import Productcon from '../../assets/images/producticon.svg'
import VisitorIcon from '../../assets/images/visitoricon.svg'


const InfoSection = () => {
    const infoItems = [
      { id: 1, icon: UserIcon, title: "About Us", description: "Year-over-year increase in cyberattacks that used stolen or compromised credentials" },
      { id: 2, icon: ArchivementIcon, title: "Achievement", description: "Year-over-year increase in cyberattacks that used stolen or compromised credentials" },
      { id: 3, icon: Productcon, title: "Number of Products", description: "Year-over-year increase in cyberattacks that used stolen or compromised credentials" },
      { id: 4, icon: VisitorIcon, title: "Total Visitors", description: "Year-over-year increase in cyberattacks that used stolen or compromised credentials" },
    ];
  
    return (
      <div className="container my-5">
        <div className="bg-archivment">
        <div className="row g-4">
          {infoItems.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-3">
              <div className="p-4 text-center">
                <div className="mb-3">
                  <img src={item.icon} alt={item.title} width={40} height={40} />
                </div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
        
      </div>
    );
  };
  
  export default InfoSection;