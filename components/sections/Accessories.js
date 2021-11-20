import Swiper from "swiper";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import UiLink from "../ui/UiLink";

import "swiper/css";
import "swiper/css/navigation";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const initSwiperFoo = (ref) => {
  ref.current = new Swiper(".accessories .swiper-container", {
    slidesPerView: 2.2,
    spaceBetween: 20,
    draggable: true,
    loop: false,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
    },
  });
};

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
  const [width, height] = useWindowSize();
  const swiper = useRef(null);

  useEffect(() => {
    isMobile ? initSwiperFoo(swiper) : null;
  }, [isMobile]);

  return (
    <div className="accessories">
      <div className="container accessories__container">
        <p className="title title_1 accessories__title">Accessories</p>

        <div className="accessories__swiper">
          <div className="accessories__swiper-container">
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
                    <div className="accessories__item-wrapper">
                      <Link href="#">
                        <a className="accessories__link">
                          <div className="accessories__img-wrapper">
                            <Image
                              objectFit="contain"
                              className="accessories__img"
                              src={imgPath}
                              alt={name}
                              layout="fill"
                              placeholder="blur"
                              blurDataURL={imgPath}
                            />
                          </div>
                          <p className="text text_25 accessories__name">
                            {name}
                          </p>
                          <p className="text text_13 text_grey2 accessories__description">
                            {description}
                          </p>
                          <div className="accessories__price">
                            <p className="text text_16 accessories__price-key">
                              Price:{" "}
                            </p>
                            <p className="text text_uppercase accessories__price-value">
                              {price}
                            </p>
                          </div>
                        </a>
                      </Link>
                      <button className="ui-btn ui-btn_outline accessories__add-cart">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                ))}
              </div>
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
