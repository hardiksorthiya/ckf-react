import Slider from "react-slick";
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";


const slides = [
    { id: 1, image: "./assets/images/slide1.png", texttitle: "We Transform Transforms Craft Translate Ideas Into Digital Solutions", textsubtitle: "We design and develop unparalleled websites and software solutions that enable companies to unlock their potential.", btntext: "Contact Us" },
    { id: 2, image: "./assets/images/slide2.png", texttitle: "We Transform Transforms Craft Translate Ideas Into Digital Solutions", textsubtitle: "We design and develop unparalleled websites and software solutions that enable companies to unlock their potential.", btntext: "Contact Us" },
    { id: 3, image: "./assets/images/slide3.png", texttitle: "We Transform Transforms Craft Translate Ideas Into Digital Solutions", textsubtitle: "We design and develop unparalleled websites and software solutions that enable companies to unlock their potential.", btntext: "Contact Us" },
    { id: 4, image: "./assets/images/slide4.png", texttitle: "We Transform Transforms Craft Translate Ideas Into Digital Solutions", textsubtitle: "We design and develop unparalleled websites and software solutions that enable companies to unlock their potential.", btntext: "Contact Us" },
    { id: 5, image: "./assets/images/slide5.png", texttitle: "We Transform Transforms Craft Translate Ideas Into Digital Solutions", textsubtitle: "We design and develop unparalleled websites and software solutions that enable companies to unlock their potential.", btntext: "Contact Us" },
  ];
  const overlayText = [
    {id: 1, title:"Our Empowerment", text: "Empowering individuals and communities through knowledge, resources, and cutting-edge solutions to face modern challenges."},
    {id: 2, title:"Our Services", text: "Explore our range of services designed to provide secure, efficient, and reliable solutions across various sectors."},
    {id: 3, title:"Our Process", text: "Backed by years of experience and industry expertise, we deliver tailored solutions to meet your unique needs."},
    {id: 4, title:"About Us", text: "Discover our commitment to innovation and excellence, and how we drive impactful solutions for a safer, smarter world."},
    {id: 5, title:"Newsletters", text: "Stay updated with our latest insights, news, and updates. Subscribe to receive valuable information directly to your inbox."},
  ];
  
  const SliderComponent = () => {
    const sliderRef = useRef(null);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      
      
      <section className="hero-sec position-relative">
        <div className="hero-overlay text-white position-absolute d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
            {overlayText.map((item) => (
              <div className="col-2 text-center">
                <p className="title-scr">{item.title}</p>
                  <p className="subtitle-scr">{item.text}</p>
                </div>
                ))}
              </div>
            </div>
          </div>
        <button
          className="btn slider-prev"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ChevronLeft size={24} />
        </button>
        
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="slider-item">
              <div 
                className="d-flex align-items-center justify-content-center text-white text-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100vh",
                }}
              >
                <div className="text-slider-hp">
                    <div className="d-flex-column justify-content-center align-items-center">
                    <h3 className="titletextslider">{slide.texttitle}</h3>
                <p className="subtitleslider">{slide.textsubtitle}</p>
                <button className="btn btnslider">{slide.btntext}</button>
                    </div>
                </div>
                
              </div>
            </div>
          ))}
        </Slider>
        
        <button
          className="btn slider-next"
          onClick={() => sliderRef.current.slickNext()}
        >
          <ChevronRight size={24} />
        </button>
      </section>
    );
  };
  
export default SliderComponent;
