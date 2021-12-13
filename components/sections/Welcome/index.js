/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PaymentsMethods from '@/blocks/PaymentsMethods'
import FormWithWarrancy from '@/blocks/FormWithWarrancy'
import SegwayProtectMobile from '@/blocks/SegwayProtectMobile'
import segwayPlaceholder from "@/base/segway-placeholder.png";
import arrowLeft from "@/base/icon-arrow-left.svg";
import arrowRight from "@/base/icon-arrow-right.svg";
import exampleItem from "@/base/example-item-1.png";

import ksMax_1 from "@/base/ks-max/ks-max-1.jpg";
import ksMax_2 from "@/base/ks-max/ks-max-2.jpg";
import ksMax_3 from "@/base/ks-max/ks-max-3.jpg";
import ksMax_4 from "@/base/ks-max/ks-max-4.jpg";
import ksMax_5 from "@/base/ks-max/ks-max-5.jpg";
import ksMax_6 from "@/base/ks-max/ks-max-6.jpg";
import ksMax_7 from "@/base/ks-max/ks-max-7.jpg";
import ksMax_8 from "@/base/ks-max/ks-max-8.jpg";

import "swiper/css/pagination";


export default function Welcome({item}) {
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
            <FormWithWarrancy item={item} customClass="welcome__form" />
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
                      src={ksMax_1}
                      alt="welcome swiper"
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
                      src={ksMax_2}
                      alt="welcome swiper"
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
                      src={ksMax_3}
                      alt="welcome swiper"
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
                      src={ksMax_4}
                      alt="welcome swiper"
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
                      src={ksMax_5}
                      alt="welcome swiper"
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
                      src={ksMax_6}
                      alt="welcome swiper"
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
                      src={ksMax_7}
                      alt="welcome swiper"
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
                      src={ksMax_8}
                      alt="welcome swiper"
                      quality={50}
                      layout="responsive"
                      placeholder="blur"
                      blurDataURL={segwayPlaceholder}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="welcome__swiper-navigation">
                <div className="welcome__swiper-nav welcome__swiper-nav_prev">
                  <div className="welcome__swiper-icon-wrapper welcome__swiper-icon-wrapper_left">
                    <Image src={arrowLeft} alt="icon" />
                  </div>
                </div>
                <div className="welcome__swiper-nav welcome__swiper-nav_next">
                  <div className="welcome__swiper-icon-wrapper welcome__swiper-icon-wrapper_right">
                    <Image src={arrowRight} alt="icon" />
                  </div>
                </div>
              </div>
              <div className="welcome__swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
