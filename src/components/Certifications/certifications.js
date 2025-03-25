import React, { useRef } from "react";
import "./certifications.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactImg from "../../assets/React.jpeg";
import Database from "../../assets/Database_Admistration.jpeg";
import JavascriptImg from "../../assets/Javascript.jpeg";
import Vision from "../../assets/computer_vision.jpeg";
import objectDetection from "../../assets/object_detection.jpeg";
import AzureImg from "../../assets/Azure.jpeg";
import AiMl from "../../assets/AI_ML.jpeg";
import photoshop from "../../assets/Photoshop.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Certifications = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <section id="Certificate">
        <span className="CertificateTitle">My Certificates</span>
      </section>
      <Swiper
        spaceBetween={70}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={JavascriptImg} alt="MTA Database" className="worksImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ReactImg} alt="React" className="worksImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Database} alt="MTA Database" className="worksImg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={objectDetection} alt="MTA Database" className="worksImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AzureImg} alt="MTA Database" className="worksImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Vision} alt="Computer Vision" className="worksImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AiMl} alt="MTA Database" className="worksImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photoshop} alt="MTA Database" className="worksImg" />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Certifications;
