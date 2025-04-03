import Slider from "react-slick";
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";


const slides = [
    { id: 1, image: "../assets/images/slide1.png", texttitle: "We Transform Transforms Craft Translate Ideas Into Digital Solutions", textsubtitle: "We design and develop unparalleled websites and software solutions that enable companies to unlock their potential.", btntext: "Contact Us" },
    { id: 2, image: "../assets/images/slide2.png", texttitle: "We Transform Transforms Craft Translate Ideas Into Digital Solutions", textsubtitle: "We design and develop unparalleled websites and software solutions that enable companies to unlock their potential.", btntext: "Contact Us" },
    { id: 3, image: "../assets/images/slide3.png", texttitle: "We Transform Transforms Craft Translate Ideas Into Digital Solutions", textsubtitle: "We design and develop unparalleled websites and software solutions that enable companies to unlock their potential.", btntext: "Contact Us" },
    { id: 4, image: "../assets/images/slide4.png", texttitle: "We Transform Transforms Craft Translate Ideas Into Digital Solutions", textsubtitle: "We design and develop unparalleled websites and software solutions that enable companies to unlock their potential.", btntext: "Contact Us" },
    { id: 5, image: "../assets/images/slide5.png", texttitle: "We Transform Transforms Craft Translate Ideas Into Digital Solutions", textsubtitle: "We design and develop unparalleled websites and software solutions that enable companies to unlock their potential.", btntext: "Contact Us" },
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
