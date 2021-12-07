import Link from 'next/link';
import {Scrollbar, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import UiLink from '@/ui/UiLink';
import circlePlaceholder from '@/base/circle-placeholder.svg';
import useAddToCart from '@/hooks/useAddToCart';

import 'swiper/css';
import 'swiper/css/scrollbar';
import {useState} from 'react';

export default function Accessories({accessoeriesData}) {
  const {added, setAddedHandler} = useAddToCart();
  const [activeButton, setActiveButton] = useState();
  const onClickHandler = (id) => {
    setAddedHandler;
    setActiveButton(id);
  };
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
            slidesPerView={2.1}
            spaceBetween={15}
            loop={false}
            freeMode={true}
            scrollbar={{
              el: '.accessories__swiper-scrollbar',
              draggable: true
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
                allowTouchMove: false
              }
            }}>
            {accessoeriesData.map(({id, name, nameWrap, description, price, imgPath}) => {
              return (
                <SwiperSlide key={id} className="swiper-slide accessories__item">
                  <div className="accessories__item-wrapper">
                    <div className="accessories__img-wrapper">
                      <Image objectFit="contain" className="accessories__img" src={imgPath} alt="NineboT Engine Speaker" layout="fill" placeholder="blur" blurDataURL={circlePlaceholder} />
                    </div>
                    <p className="text text_25 accessories__name">{nameWrap}</p>
                    <p className="text text_13 text_grey2 accessories__description">{description}</p>
                    <div className="accessories__price">
                      <p className="text text_16 accessories__price-key">Price:</p>
                      <p className="text text_uppercase accessories__price-value">{price}</p>
                    </div>
                    {/* <Link passHref href={`/product-cart-popup/[productId]?accessoryId=${id}`} as={`/product-cart-popup/accessory-${id}`}>
                      <button className="ui-btn accessories__add-cart">
                        <span>ADD TO CART</span>
                      </button>
                    </Link> */}
                    <button onClick={() => onClickHandler(id)} className={(activeButton == id) ? "ui-btn ui-btn_added accessories__add-cart" : "ui-btn accessories__add-cart"}>
                      <span>ADD TO CART</span>
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="accessories__swiper-scrollbar"></div>
        <div className="accessories__bottom">
          <UiLink href="#" classNameLink="ui-link ui-link_type-1 accessories__bottom-link" innerText="SEE MORE" />
        </div>
      </div>
    </div>
  );
}
