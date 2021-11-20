import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import UiLink from "../ui/UiLink";

import "swiper/css";
import "swiper/css/navigation";

export default function OtherModels() {
  const [items, setItems] = useState([
    {
      id: "001",
      name: "NineboT Engine Speaker",
      description:
        "The built-in engine sound simulation system can simulate the realistic engine roar based on the vehicle's accelerator, brake, speed, and other signals",
      price: "29$",
      imgPath: "/accessory-1.png",
    },
    {
      id: "002",
      name: "NineboT Engine Speaker",
      description:
        "The built-in engine sound simulation system can simulate the realistic engine roar based on the vehicle's accelerator, brake, speed, and other signals",
      price: "29$",
      imgPath: "/accessory-2.png",
    },
    {
      id: "003",
      name: "NineboT Engine Speaker",
      description:
        "The built-in engine sound simulation system can simulate the realistic engine roar based on the vehicle's accelerator, brake, speed, and other signals",
      price: "29$",
      imgPath: "/accessory-3.png",
    },
    {
      id: "004",
      name: "NineboT Engine Speaker",
      description:
        "The built-in engine sound simulation system can simulate the realistic engine roar based on the vehicle's accelerator, brake, speed, and other signals",
      price: "29$",
      imgPath: "/accessory-4.png",
    },
    {
      id: "005",
      name: "NineboT Engine Speaker",
      description:
        "The built-in engine sound simulation system can simulate the realistic engine roar based on the vehicle's accelerator, brake, speed, and other signals",
      price: "29$",
      imgPath: "/accessory-5.png",
    },
    {
      id: "006",
      name: "NineboT Engine Speaker",
      description:
        "The built-in engine sound simulation system can simulate the realistic engine roar based on the vehicle's accelerator, brake, speed, and other signals",
      price: "29$",
      imgPath: "/accessory-6.png",
    },
    {
      id: "007",
      name: "NineboT Engine Speaker",
      description:
        "The built-in engine sound simulation system can simulate the realistic engine roar based on the vehicle's accelerator, brake, speed, and other signals",
      price: "29$",
      imgPath: "/accessory-7.png",
    },
    {
      id: "008",
      name: "NineboT Engine Speaker",
      description:
        "The built-in engine sound simulation system can simulate the realistic engine roar based on the vehicle's accelerator, brake, speed, and other signals",
      price: "29$",
      imgPath: "/accessory-8.png",
    },

    {
      id: "009",
      name: "NineboT Engine Speaker",
      description:
        "The built-in engine sound simulation system can simulate the realistic engine roar based on the vehicle's accelerator, brake, speed, and other signals",
      price: "29$",
      imgPath: "/accessory-9.png",
    },
  ]);

  return (
    <div className="other-models">
      <div className="container other-models__container">
        <p className="title title_1 other-models__title">OTHER MODELS</p>
        <div className="other-models__subtitle">
          Check out the entire line of Segway scooters
        </div>
        <div className="other-models__swiper">
          <Swiper
            slidesPerView={2.2}
            spaceBetween={20}
            loop={false}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
                allowTouchMove: false,
              },
            }}
          >
            {items.map(({ id, name, price, imgPath }) => (
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
                          blurDataURL={imgPath}
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
                    <a className="ui-btn ui-btn_outline other-models__add-cart">
                      SEE MORE
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
