/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import PaymentsMethods from "../blocks/PaymentsMethods";
import FormWithWarrancy from "../blocks/FormWithWarrancy";
import SegwayProtectMobile from "../blocks/SegwayProtectMobile";
import segwayPlaceholder from "../../public/segway-placeholder.png";
import "swiper/css/pagination";

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="container welcome__container">
        <div className="welcome__top">
          {/* area name: stock */}
          <div className="welcome__stock-wrapper">
            <p className="welcome__stock">In stock</p>
          </div>

          {/* area name: title */}
          <div className="welcome__title-wrapper">
            <p className="title title_fz-80 welcome__title">
              SEGWAY Ninebot Kickscooter MAX
            </p>
          </div>

          {/* area name: protect */}
          <SegwayProtectMobile customClass="welcome__protect-wrapper" />

          {/* area name: form */}
          <div className="welcome__form-wrapper">
            <FormWithWarrancy customClass="welcome__form" />
          </div>

          {/* area name: payments */}
          <PaymentsMethods customClass="welcome__payments-wrapper" />

          {/* area name: swiper */}
          <div className="welcome__swiper-wrapper">
            <div className="welcome__swiper">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  el: ".welcome__swiper-pagination",
                }}
                loop={false}
                navigation={{
                  prevEl: ".welcome__swiper-nav_prev",
                  nextEl: ".welcome__swiper-nav_next",
                }}
                breakpoints={{
                  768: {
                    spaceBetween: 0,
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide className="welcome__swiper-item">
                  <div className="welcome__swiper-img-wrapper">
                    <Image
                      objectFit="contain"
                      className="welcome__swiper-img"
                      src="/example-item.png"
                      alt="welcome swiper"
                      width={395}
                      height={685}
                      quality={50}
                      layout="responsive"
                      placeholder="blur"
                      blurDataURL={segwayPlaceholder}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="welcome__swiper-item">
                  <div className="welcome__swiper-img-wrapper">
                    <Image
                      objectFit="contain"
                      className="welcome__swiper-img"
                      src="/example-item.png"
                      alt="welcome swiper"
                      width={395}
                      height={685}
                      quality={50}
                      layout="responsive"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="welcome__swiper-item">
                  <div className="welcome__swiper-img-wrapper">
                    <Image
                      objectFit="contain"
                      className="welcome__swiper-img"
                      src="/example-item.png"
                      alt="welcome swiper"
                      width={395}
                      height={685}
                      quality={50}
                      layout="responsive"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="welcome__swiper-item">
                  <div className="welcome__swiper-img-wrapper">
                    <Image
                      objectFit="contain"
                      className="welcome__swiper-img"
                      src="/example-item.png"
                      alt="welcome swiper"
                      width={395}
                      height={685}
                      quality={50}
                      layout="responsive"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="welcome__swiper-navigation">
                <button className="welcome__swiper-nav welcome__swiper-nav_prev">
                  <BsChevronCompactLeft className="welcome__swiper-icon" />
                </button>
                <button className="welcome__swiper-nav welcome__swiper-nav_next">
                  <BsChevronCompactRight className="welcome__swiper-icon" />
                </button>
              </div>
              <div className="welcome__swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
