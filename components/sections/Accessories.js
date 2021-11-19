import Swiper from "swiper";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import UiLink from "../ui/UiLink";

import "swiper/css";
import "swiper/css/navigation";

/** Свайпер в шапке с самокатами */
export default function Accessories({ isMobile }) {
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

  const swiper = useRef(null);

  const initSwiperFoo = () => {
    swiper.current = new Swiper(".accessories .swiper-container", {
      slidesPerView: 2,
      spaceBetween: 20,
      draggable: true,
      loop: false,
    });
  };

  useEffect(() => {
    isMobile ? initSwiperFoo() : null;
  }, [isMobile]);

  return (
    <div className="accessories">
      <div className="container accessories__container">
        <p className="title title_1 accessories__title">Accessories</p>

        <div className="accessories__swiper">
          <div className="swiper-container">
            <div
              className={
                isMobile
                  ? "swiper-wrapper"
                  : "swiper-wrapper swiper-wrapper_desktop"
              }
            >
              {items.map(({ id, name, description, price, imgPath }) => (
                <div key={id} className="swiper-slide accessories__item">
                  <Link href="#">
                    <a className="accessories__link">
                      <div className="accessories__img-wrapper">
                        <Image
                          objectFit="contain"
                          className="accessories__img"
                          src={imgPath}
                          alt={name}
                          width={160}
                          height={160}
                          quality={100}
                          layout="fixed"
                          placeholder="blur"
                          blurDataURL={imgPath}
                        />
                      </div>
                      <p className="text text_25 accessories__name">{name}</p>
                      <p className="text text_13 text_grey2 accessories__description">
                        {description}
                      </p>
                      <p className="text text_uppercase accessories__price">
                        {price}
                      </p>
                    </a>
                  </Link>
                  <button className="ui-btn ui-btn_outline accessories__add-cart">
                    ADD TO CART
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

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
