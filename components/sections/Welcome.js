/* eslint-disable @next/next/no-img-element */
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FcPrevious, FcNext } from "react-icons/fc";
import FormWithWarrancy from "../blocks/FormWithWarrancy";
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

          {/* area name: form */}
          <div className="welcome__form-wrapper">
            <FormWithWarrancy customClass="welcome__form" />
          </div>

          {/* area name: payments */}
          <div className="welcome__payments-wrapper">
            <div className="welcome__payments">
              <p className="welcome__payments-title">
                <span className="welcome__payments-item welcome__payments-item_1">
                  Payment Methods:
                </span>
                <span className="welcome__payments-item welcome__payments-item_2">
                  Starting at $55/mo with.
                </span>
                <span className="welcome__payments-item welcome__payments-item_3">
                  Prequalify now
                </span>
              </p>
              <div className="welcome__payments-methods">
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-amex.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-apple.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-btc.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-btc-alt.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-crypto-d.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-crypto-o.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-discover.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-crypto-d-alt.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-crypto-triangle.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-jcb.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-l.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-mastercard.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-paypel.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-dollar.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-v.svg"
                    alt="payment icon"
                  />
                </div>
                <div className="welcome__payments-method">
                  <img
                    className="welcome__payments-method-icon"
                    src="./icon-payment-visa.svg"
                    alt="payment icon"
                  />
                </div>
              </div>
            </div>
          </div>

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
                  <FcPrevious className="welcome__swiper-icon" />
                </button>
                <button className="welcome__swiper-nav welcome__swiper-nav_next">
                  <FcNext className="welcome__swiper-icon" />
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
