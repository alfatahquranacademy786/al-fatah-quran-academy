/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import HeaderImg from "../../../public/assets/header.png";
import HeaderImg1 from "../../../public/assets/header1.png";
import HeaderImg2 from "../../../public/assets/header2.png";
import HeaderImg3 from "../../../public/assets/header3.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Link from "next/link";
type Props = {};

const Header = (props: Props) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper h-screen"
    >
      <SwiperSlide>
        <div
          className="relative overflow-hidden h-[95vh] md:h-[90vh] bg-cover bg-no-repeat "
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url(${HeaderImg.src})`,
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed">
            <div
              className="flex h-full items-center justify-center"
              style={{ marginTop: "7rem" }}
            >
              <div className="px-6 text-center text-white md:px-12 pb-4">
                <h1 className="text-[#544214] pt-20 mb-4 text-4xl sm:text-5xl font-bold tracking-tight md:text-4xl xl:text-6xl">
                  Al-Fatah Quran Academy
                </h1>
                <Link href={"/services"}>
                  <button className="custom-shadow font-semibold text-center bg-[#FFE5A2] border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-full text-[#544214] mt-5">
                    Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="relative overflow-hidden h-[90vh] bg-cover bg-no-repeat "
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url(${HeaderImg1.src})`,
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed">
            <div
              className="flex h-full items-center justify-center"
              style={{ marginTop: "7rem" }}
            >
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="text-[#544214] pt-20 mb-4 text-4xl sm:text-5xl font-bold tracking-tight md:text-4xl xl:text-6xl">
                  Education opens doors.
                </h1>
                <Link
                  target="_blank"
                  href={
                    "https://www.linkedin.com/in/al-fatah-quran-academy-812a9a2a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  }
                >
                  <button className="custom-shadow font-semibold text-center bg-[#FFE5A2] border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-full text-[#544214] mt-5">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="relative overflow-hidden h-[90vh] bg-cover bg-no-repeat "
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url(${HeaderImg2.src})`,
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed">
            <div
              className="flex h-full items-center justify-center"
              style={{ marginTop: "7rem" }}
            >
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="text-[#544214] pt-20 mb-4 text-4xl sm:text-5xl font-bold tracking-tight md:text-4xl xl:text-6xl">
                  The Silent Connection of the Soul
                </h1>
                <Link
                  target="_blank"
                  href={
                    "https://web.facebook.com/profile.php?id=61554539400531&_rdc=1&_rdr"
                  }
                >
                  <button className="custom-shadow font-semibold text-center bg-[#FFE5A2] border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-full text-[#544214] mt-5">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="relative overflow-hidden h-[90vh] bg-cover bg-no-repeat "
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url(${HeaderImg3.src})`,
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed">
            <div
              className="flex h-full items-center justify-center"
              style={{ marginTop: "7rem" }}
            >
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="text-[#544214] pt-20 mb-4 text-4xl sm:text-5xl font-bold tracking-tight md:text-4xl xl:text-6xl">
                  Allah's Generous Reward
                </h1>
                <Link
                  target="_blank"
                  href={
                    "https://www.instagram.com/alfatah842?igshid=NGVhN2U2NjQ0Yg%3D%3D"
                  }
                >
                  <button className="custom-shadow font-semibold text-center bg-[#FFE5A2] border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-full text-[#544214] mt-5">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
