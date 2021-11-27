import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import segwayPlaceholder from "../../public/segway-placeholder.png";
import data from "../../public/top-swiper.json";

/** Свайпер в шапке с самокатами */
export default function TopSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
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
            onSlideChange={(el) => {
              setActiveIndex(el.activeIndex);
            }}
          >
            {data.map(({ id, name, imgPath, ...props }) => (
              <SwiperSlide
                key={id}
                className={
                  props?.accent === true
                    ? "top-swiper__item accent"
                    : "top-swiper__item"
                }
              >
                <Link href="#">
                  <a className="top-swiper__link">
                    <div className="top-swiper__img-wrapper">
                      <Image
                        objectFit="contain"
                        className="top-swiper__img"
                        src={imgPath}
                        alt={name}
                        width={80}
                        height={80}
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL={segwayPlaceholder}
                      />
                    </div>
                    <p className="top-swiper__name">{name}</p>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className={
              activeIndex !== 0
                ? "top-swiper__navigation"
                : "top-swiper__navigation disabled"
            }
          >
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
