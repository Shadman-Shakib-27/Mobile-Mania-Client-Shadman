/* eslint-disable react/no-unescaped-entities */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

const Hero = () => {
  return (
    <div className="max-w-[1230px] mx-auto px-2 mb-24 lg:mb-0 ">
      <Swiper
        cssMode={true}
        loop={true}
        pagination={true}
        mousewheel={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="lg:h-[100vh] h-[70vh]"
            style={{
              backgroundImage: "url('https://i.ibb.co/hdbs48J/Carousel1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "5px",
            }}
          >
            <div className="f lg:w-1/2 w-full px-10 pt-[9%] space-y-5">
              <h1 className="mb-5 lg:text-5xl text-[30px] ti tracking-wide leading-tight font-semibold">
                Empowering Your Mobile Experience With
                <span className="text-white"> Mobile Mania</span>
              </h1>
              <p className="mb-5 lg:max-w-[45ch] lg:text-justify text-justify">
                Welcome to <span className="font-semibold">Mobile Mania</span>,
                your premier destination for all things mobile. Dive into a
                world where cutting-edge technology meets exceptional service.
                Whether you're a tech enthusiast or a casual user, we've got
                something for everyone. Discover the joy of mobile innovation
                with us.
              </p>
              <div className="flex mx-auto">
                <button className="btn px-5 lg:px-10 btn-active border-main bg-main hover:text-white hover:bg-transparent hover:shadow-md transition-all mr-3 hover:scale-105">
                  Get Started
                </button>

                <button className="btn px-5 lg:px-10 btn-outline border-main hover:bg-main hover:text-white text-main hover:border-main transition-all hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="lg:h-[100vh] h-[70vh]"
            style={{
              backgroundImage: "url('https://i.ibb.co/KjGtbMW/Carousel4.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "5px",
            }}
          >
            <div className="f lg:w-1/2 w-full px-10 pt-[9%] space-y-5">
              <h1 className="mb-5 lg:text-5xl text-[30px] ti tracking-wide leading-tight font-semibold">
                Empowering Your Mobile Experience With
                <span className="text-white"> Mobile Mania</span>
              </h1>
              <p className="mb-5 lg:max-w-[45ch] lg:text-justify text-justify">
                Welcome to <span className="font-semibold">Mobile Mania</span>,
                your premier destination for all things mobile. Dive into a
                world where cutting-edge technology meets exceptional service.
                Whether you're a tech enthusiast or a casual user, we've got
                something for everyone. Discover the joy of mobile innovation
                with us.
              </p>
              <div className="flex mx-auto">
                <button className="btn px-5 lg:px-10 btn-active border-main bg-main hover:text-white hover:bg-transparent hover:shadow-md transition-all mr-3 hover:scale-105">
                  Get Started
                </button>

                <button className="btn px-5 lg:px-10 btn-outline border-main hover:bg-main hover:text-white text-main hover:border-main transition-all hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="lg:h-[100vh] h-[70vh]"
            style={{
              backgroundImage: "url('https://i.ibb.co/6B3WRWx/Carousel2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "end",
              borderRadius: "5px",
            }}
          >
            <div className="f lg:w-1/2 w-full px-10 pt-[9%] space-y-5">
              <h1 className="mb-5 lg:text-5xl text-[30px] ti tracking-wide leading-tight font-semibold">
                Empowering Your Mobile Experience With
                <span className="text-white"> Mobile Mania</span>
              </h1>
              <p className="mb-5 lg:max-w-[45ch] lg:text-justify text-justify">
                Welcome to <span className="font-semibold">Mobile Mania</span>,
                your premier destination for all things mobile. Dive into a
                world where cutting-edge technology meets exceptional service.
                Whether you're a tech enthusiast or a casual user, we've got
                something for everyone. Discover the joy of mobile innovation
                with us.
              </p>
              <div className="flex mx-auto">
                <button className="btn px-5 lg:px-10 btn-active border-main bg-main hover:text-white hover:bg-transparent hover:shadow-md transition-all mr-3 hover:scale-105">
                  Get Started
                </button>

                <button className="btn px-5 lg:px-10 btn-outline border-main hover:bg-main hover:text-white text-main hover:border-main transition-all hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
