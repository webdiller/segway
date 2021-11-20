import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

/** Свайпер в шапке с самокатами */
export default function TopSwiper() {
  const [items, setItems] = useState([
    {
      id: "001",
      name: "E22",
      imgPath: "/segway-1.png",
    },
    {
      id: "002",
      name: "E22",
      imgPath: "/segway-2.png",
    },
    {
      id: "003",
      name: "E22",
      imgPath: "/segway-3.png",
    },
    {
      id: "004",
      name: "E22",
      imgPath: "/segway-4.png",
    },
    {
      id: "005",
      name: "E22",
      imgPath: "/segway-5.png",
    },
    {
      id: "006",
      name: "E22",
      imgPath: "/segway-6.png",
    },
    {
      id: "007",
      name: "E22",
      imgPath: "/segway-7.png",
    },
    {
      id: "008",
      name: "E22",
      imgPath: "/segway-8.png",
    },

    {
      id: "009",
      name: "E22",
      imgPath: "/segway-9.png",
    },
    {
      id: "010",
      name: "E22",
      imgPath: "/segway-10.png",
    },
    {
      id: "011",
      name: "E22",
      imgPath: "/segway-11.png",
    },
    {
      id: "012",
      name: "E22",
      imgPath: "/segway-12.png",
    },
    {
      id: "013",
      name: "E22",
      imgPath: "/segway-13.png",
    },
    {
      id: "014",
      name: "E22",
      imgPath: "/segway-14.png",
    },
  ]);

  return (
    <div className="top-swiper">
      <div className="container top-swiper__container">
        <div className="top-swiper__swiper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={4}
            loop={false}
            navigation={{
              prevEl: ".top-swiper__nav_prev",
              nextEl: ".top-swiper__nav_next",
            }}
            breakpoints={{
              768: {
                allowTouchMove: false,
              },
            }}
          >
            {items.map(({ id, name, imgPath }) => (
              <SwiperSlide key={id} className="top-swiper__item">
                <div className="top-swiper__img-wrapper">
                  <Image
                    objectFit="contain"
                    className="top-swiper__img"
                    src={imgPath}
                    alt={name}
                    width={80}
                    height={80}
                    quality={100}
                    layout="fixed"
                    placeholder="blur"
                    blurDataURL="/segway-placeholder.png"
                  />
                </div>
                <p className="top-swiper__name">{name}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="top-swiper__navigation">
            <button className="top-swiper__nav top-swiper__nav_prev">
              <BsChevronCompactLeft className="top-swiper__icon" />
            </button>
            <button className="top-swiper__nav top-swiper__nav_next">
              <BsChevronCompactRight className="top-swiper__icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
