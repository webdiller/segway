import {useCart} from 'react-use-cart';
import {Scrollbar, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import UiLink from '@/ui/UiLink';
import circlePlaceholder from '@/base/circle-placeholder.svg';
import 'swiper/css';
import 'swiper/css/scrollbar';

export default function Accessories({items}) {
  const {addItem} = useCart();

  const onClickHandler = (id, e) => {
    addItem(id);
    e.target.classList.add('ui-btn_added');
    e.target.focus();
    setTimeout(() => {
      e.target.classList.remove('ui-btn_added');
      e.target.blur();
    }, 3000);
  };

  return (
    <div className="accessories">
      <div className="container accessories__container">
        <p className="title accessories__title">Accessories</p>
        <div className="accessories__swiper">
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
            {items.map((item) => {
              const {id, name, nameWrap, description, price, imgPath} = item;
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
                      <p className="text text_uppercase accessories__price-value">${price}</p>
                    </div>
                    <button onClick={(e) => onClickHandler(item, e)} className="ui-btn accessories__add-cart">
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
