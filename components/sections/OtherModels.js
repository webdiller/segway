import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import circlePlaceholder from "../../public/circle-placeholder.svg";
import UiLink from "../ui/UiLink";

import "swiper/css";
import "swiper/css/navigation";

export default function OtherModels({ otherModelsData }) {
  return (
    <div className="other-models">
      <div className="container other-models__container">
        <p className="title title_fz-20 other-models__title">OTHER MODELS</p>
        <div className="other-models__subtitle">
          Check out the entire line of Segway scooters
        </div>
        <div className="other-models__swiper">
          <Swiper
            slidesPerView={1.7}
            spaceBetween={20}
            loop={false}
            allowTouchMove={true}
            breakpoints={{
              480: {
                loop: false,
                slidesPerView: 2.2,
                spaceBetween: 10,
                allowTouchMove: true
              },
              576: {
                loop: false,
                slidesPerView: 3,
                spaceBetween: 10,
                allowTouchMove: true
              },
              768: {
                loop: false,
                spaceBetween: 0,
                allowTouchMove: false,
              },
            }}
          >
            {otherModelsData.map(({ id, name, price, imgPath }) => (
              <SwiperSlide key={id} className="swiper-slide other-models__item">
                <div className="other-models__item-wrapper">
                  <Link href="#">
                    <a className="other-models__link">
                      <div className="other-models__img-wrapper">
                        <Image
                          objectFit="contain"
                          className="other-models__img"
                          src={imgPath}
                          alt={name}
                          layout="fill"
                          placeholder="blur"
                          blurDataURL={circlePlaceholder}
                        />
                      </div>
                      <p className="text text_25 other-models__name">{name}</p>
                      <div className="other-models__price">
                        <p className="text text_uppercase other-models__price-value">
                          {price}
                        </p>
                      </div>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="ui-btn ui-btn_outline other-models__see-more">
                      SEE MORE
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide className="swiper-slide swiper-slide_form other-models__form">
              <p className="other-models__form-title">DIDN’T FIND A MODEL?</p>
              <p className="text other-models__form-text">
                Leave your contact details and we will help you with the choice
              </p>
              <input
                placeholder="+7 (___) ___-__-__"
                type="text"
                className="other-models__form-input"
              />
              <Link href="#">
                <a className="ui-btn ui-btn_outline other-models__see-more">
                  SEE MORE
                </a>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
