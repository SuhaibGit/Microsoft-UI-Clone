import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css"
import image from "../assets/hero1.jpg"
import image2 from "../assets/hero2.jpg"

const Carousel = () => {
  const slides = [
    {
      title: "Copilot is your AI companion",
      image: image,
      description: "Always by your side, ready to support you whenever and wherever you need it",
      btn:"Download the Copilot app"
    },
    {
      title: "Achieve the extraordinary",
      image: image2,
      description: "Microsoft 365 delivers cloud storage, security and Microsoft Copilot in your favourite apps – all in one plan.",
      btn:"Shop MIcrosoft 365"
    }
  ];

  return (
   
        <div>
      <div>
          <Swiper
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1200}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="hero">
                  <img
                    src={slide.image}
                    alt={slide.title}
                  /><div class="hero-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}.</p>
                  <a href="/internship">
                    <button>{slide.btn}</button>
                  </a>
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
        
      </div>

  );
};

export default Carousel;
