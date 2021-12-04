import { Scrollbar, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import UiLink from "../ui/UiLink";
import circlePlaceholder from "../../public/circle-placeholder.svg";

import accessory_1 from "../../public/accessory-1.png";
import accessory_2 from "../../public/accessory-2.png";
import accessory_3 from "../../public/accessory-3.png";
import accessory_4 from "../../public/accessory-4.png";
import accessory_5 from "../../public/accessory-5.png";
import accessory_6 from "../../public/accessory-6.png";
import accessory_7 from "../../public/accessory-7.png";
import accessory_8 from "../../public/accessory-8.png";
import accessory_9 from "../../public/accessory-9.png";

import "swiper/css";
import "swiper/css/scrollbar";

export default function Accessories() {
  return (
    <div className="accessories">
      <div className="container accessories__container">
        <p className="title accessories__title">Accessories</p>
        <div className="accessories__swiper">
          {/* Выводим слайды вручную, т.к. для верстки требуются переносы
          текста, хоть это и грабли. Лучше я думаю сделать доп. поле в файле с
          версткой имени. */}
          <Swiper
            modules={[Scrollbar, FreeMode]}
            slidesPerView={2.2}
            spaceBetween={20}
            loop={false}
            freeMode={{
              enabled: true,
              sticky: true,
            }}
            scrollbar={{
              el: ".accessories__swiper-scrollbar",
              draggable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
                allowTouchMove: false,
              },
            }}
          >
            {/* 1 */}
            <SwiperSlide key="001" className="swiper-slide accessories__item">
              <div className="accessories__item-wrapper">
                <div className="accessories__img-wrapper">
                  <Image
                    objectFit="contain"
                    className="accessories__img"
                    src={accessory_1}
                    alt="NineboT Engine Speaker"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={circlePlaceholder}
                  />
                </div>
                <p className="text text_25 accessories__name">
                  NineboT
                  <br />
                  Engine Speaker
                </p>
                <p className="text text_13 text_grey2 accessories__description">
                  The built-in engine sound simulation system can simulate the
                  realistic engine roar based on the vehicle’s accelerator,
                  brake, speed, and other signals
                </p>
                <div className="accessories__price">
                  <p className="text text_16 accessories__price-key">Price:</p>
                  <p className="text text_uppercase accessories__price-value">
                    $149.99
                  </p>
                </div>
                <button className="ui-btn accessories__add-cart">
                  <span>ADD TO CART</span>
                </button>
              </div>
            </SwiperSlide>

            {/* 2 */}
            <SwiperSlide key="002" className="swiper-slide accessories__item">
              <div className="accessories__item-wrapper">
                <div className="accessories__img-wrapper">
                  <Image
                    objectFit="contain"
                    className="accessories__img"
                    src={accessory_2}
                    alt="Extension Rod"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={circlePlaceholder}
                  />
                </div>
                <p className="text text_25 accessories__name">
                  Extension <br /> Rod
                </p>
                <p className="text text_13 text_grey2 accessories__description">
                  The Extension Rod helps you to easily maneuver your scooter,
                  so you no longer need to bend over and push it, making it
                  easier to take with you anywhere.
                </p>
                <div className="accessories__price">
                  <p className="text text_16 accessories__price-key">Price:</p>
                  <p className="text text_uppercase accessories__price-value">
                    $29.99
                  </p>
                </div>
                <button className="ui-btn accessories__add-cart">
                  <span>ADD TO CART</span>
                </button>
              </div>
            </SwiperSlide>

            {/* 3 */}
            <SwiperSlide key="003" className="swiper-slide accessories__item">
              <div className="accessories__item-wrapper">
                <div className="accessories__img-wrapper">
                  <Image
                    objectFit="contain"
                    className="accessories__img"
                    src={accessory_3}
                    alt="Segway Protective Gear Set"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={circlePlaceholder}
                  />
                </div>
                <p className="text text_25 accessories__name">
                  Segway Protective <br /> Gear Set
                </p>
                <p className="text text_13 text_grey2 accessories__description">
                  The curved, streamlined design of the helmet shell, coupled
                  with the thick, high-quality fabrics create a helmet that is
                  stylish, protective and comfortable to wear.
                </p>
                <div className="accessories__price">
                  <p className="text text_16 accessories__price-key">Price:</p>
                  <p className="text text_uppercase accessories__price-value">
                    $29.99
                  </p>
                </div>
                <button className="ui-btn accessories__add-cart">
                  <span>ADD TO CART</span>
                </button>
              </div>
            </SwiperSlide>

            {/* 4 */}
            <SwiperSlide key="004" className="swiper-slide accessories__item">
              <div className="accessories__item-wrapper">
                <div className="accessories__img-wrapper">
                  <Image
                    objectFit="contain"
                    className="accessories__img"
                    src={accessory_4}
                    alt="Segway Leisure Backpack"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={circlePlaceholder}
                  />
                </div>
                <p className="text text_25 accessories__name">
                  Ninebot Leisure <br /> Backpack
                </p>
                <p className="text text_13 text_grey2 accessories__description">
                  The Ninebot leisure backpack adopts a stylish gray-yellow
                  color contrast, adding a trendy accessory to your wardrobe.
                </p>
                <div className="accessories__price">
                  <p className="text text_16 accessories__price-key">Price:</p>
                  <p className="text text_uppercase accessories__price-value">
                    $69.99
                  </p>
                </div>
                <button className="ui-btn accessories__add-cart">
                  <span>ADD TO CART</span>
                </button>
              </div>
            </SwiperSlide>

            {/* 5 */}
            <SwiperSlide key="005" className="swiper-slide accessories__item">
              <div className="accessories__item-wrapper">
                <div className="accessories__img-wrapper">
                  <Image
                    objectFit="contain"
                    className="accessories__img"
                    src={accessory_5}
                    alt="Segway External Battery"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={circlePlaceholder}
                  />
                </div>
                <p className="text text_25 accessories__name">
                  Segway External <br /> Battery
                </p>
                <p className="text text_13 text_grey2 accessories__description">
                  It is easy to install and increases the range of the ES1, ES2
                  &lt; E22 to 27.9, 28 and 27 miles respectively and It also
                  increases the speed
                </p>
                <div className="accessories__price">
                  <p className="text text_16 accessories__price-key">Price:</p>
                  <p className="text text_uppercase accessories__price-value">
                    $249.99
                  </p>
                </div>
                <button className="ui-btn accessories__add-cart">
                  <span>ADD TO CART</span>
                </button>
              </div>
            </SwiperSlide>

            {/* 6 */}
            <SwiperSlide key="006" className="swiper-slide accessories__item">
              <div className="accessories__item-wrapper">
                <div className="accessories__img-wrapper">
                  <Image
                    objectFit="contain"
                    className="accessories__img"
                    src={accessory_6}
                    alt="Segway Charger"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={circlePlaceholder}
                  />
                </div>
                <p className="text text_25 accessories__name">
                  Segway <br /> Charger
                </p>
                <p className="text text_13 text_grey2 accessories__description">
                  Whether at home, the office, or on your KickScooter journey,
                  this Ninebot KickScooter by Segway Charger is designed to
                  provide a safe and stable charge anytime, anywhere.
                </p>
                <div className="accessories__price">
                  <p className="text text_16 accessories__price-key">Price:</p>
                  <p className="text text_uppercase accessories__price-value">
                    $79.99
                  </p>
                </div>
                <button className="ui-btn accessories__add-cart">
                  <span>ADD TO CART</span>
                </button>
              </div>
            </SwiperSlide>

            {/* 7 */}
            <SwiperSlide key="007" className="swiper-slide accessories__item">
              <div className="accessories__item-wrapper">
                <div className="accessories__img-wrapper">
                  <Image
                    objectFit="contain"
                    className="accessories__img"
                    src={accessory_7}
                    alt="Segway Scooter Bag"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={circlePlaceholder}
                  />
                </div>
                <p className="text text_25 accessories__name">
                  Segway <br /> Scooter Bag
                </p>
                <p className="text text_13 text_grey2 accessories__description">
                  Tough EVA material, suitable for the entire Ninebot
                  KickScooter by Segway line. 3L capacity gives you plenty of
                  room to carry your phone, charger, bottled water, and other
                  personal items.
                </p>
                <div className="accessories__price">
                  <p className="text text_16 accessories__price-key">Price:</p>
                  <p className="text text_uppercase accessories__price-value">
                    $49.99
                  </p>
                </div>
                <button className="ui-btn accessories__add-cart">
                  <span>ADD TO CART</span>
                </button>
              </div>
            </SwiperSlide>

            {/* 8 */}
            <SwiperSlide key="008" className="swiper-slide accessories__item">
              <div className="accessories__item-wrapper">
                <div className="accessories__img-wrapper">
                  <Image
                    objectFit="contain"
                    className="accessories__img"
                    src={accessory_8}
                    alt="Segway Phone Holder"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={circlePlaceholder}
                  />
                </div>
                <p className="text text_25 accessories__name">
                  Segway <br /> Phone Holder
                </p>
                <p className="text text_13 text_grey2 accessories__description">
                  The dual screw, non-slip design offers ultimate security and
                  versatility. The phone holder is applicable to multiple
                  vehicle series.
                </p>
                <div className="accessories__price">
                  <p className="text text_16 accessories__price-key">Price:</p>
                  <p className="text text_uppercase accessories__price-value">
                    $29.99
                  </p>
                </div>
                <button className="ui-btn accessories__add-cart">
                  <span>ADD TO CART</span>
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide key="009" className="swiper-slide accessories__item">
              <div className="accessories__item-wrapper">
                <div className="accessories__img-wrapper">
                  <Image
                    objectFit="contain"
                    className="accessories__img"
                    src={accessory_9}
                    alt="Segway Scooter Seat"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={circlePlaceholder}
                  />
                </div>
                <p className="text text_25 accessories__name">
                  Segway <br /> Scooter Seat
                </p>
                <p className="text text_13 text_grey2 accessories__description">
                  This scooter seat is designed to work with the MAX. It offers
                  high quality, comfort and safety that is in line with the MAX
                  KickScooter.
                </p>
                <div className="accessories__price">
                  <p className="text text_16 accessories__price-key">Price:</p>
                  <p className="text text_uppercase accessories__price-value">
                    $119.99
                  </p>
                </div>
                <button className="ui-btn accessories__add-cart">
                  <span>ADD TO CART</span>
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="accessories__swiper-scrollbar"></div>
        <div className="accessories__bottom">
          <UiLink
            href="#"
            classNameLink="ui-link ui-link_type-1 accessories__bottom-link"
            innerText="SEE MORE"
          />
        </div>
      </div>
    </div>
  );
}
