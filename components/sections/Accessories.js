import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import UiLink from "../ui/UiLink";
import circlePlaceholder from "../../public/circle-placeholder.svg";

import "swiper/css";
import "swiper/css/navigation";

export default function Accessories({accessoeriesData}) {
  
  return (
    <div className="accessories">
      <div className="container accessories__container">
        <p className="title accessories__title">Accessories</p>
        <div className="accessories__swiper">
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
            {accessoeriesData.map(({ id, name, description, price, imgPath }) => (
              <SwiperSlide key={id} className="swiper-slide accessories__item">
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
                          blurDataURL={circlePlaceholder}
                        />
                      </div>
                      <p className="text text_25 accessories__name">{name}</p>
                      <p className="text text_13 text_grey2 accessories__description">
                        {description}
                      </p>
                      <div className="accessories__price">
                        <p className="text text_16 accessories__price-key">
                          Price:
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
              </SwiperSlide>
            ))}
          </Swiper>
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
