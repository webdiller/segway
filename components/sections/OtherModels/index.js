import {Scrollbar, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import {useRef} from 'react';
import Link from 'next/link';
import circlePlaceholder from '@/base/circle-placeholder.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import UiInput from '@/ui/UiInput';

export default function OtherModels({items}) {
  const swiperRef = useRef(null);
  const filteredModels = [items[0], items[1], items[2], items[3], items[4], items[5], items[6]];
  return (
    <div className="other-models">
      <div className="container other-models__container">
        <p className="title title_fz-20 other-models__title">OTHER MODELS</p>
        <div className="other-models__subtitle">Check out the entire line of Segway scooters</div>
        <div ref={swiperRef} className="other-models__swiper">
          <Swiper
            modules={[Scrollbar, FreeMode]}
            slidesPerView="auto"
            freeMode={true}
            loop={false}
            centeredSlides={false}
            allowTouchMove={true}
            scrollbar={{
              el: '.other-models__swiper-scrollbar',
              draggable: true
            }}
            breakpoints={{
              768: {
                slidesPerView: 2.2,
                loop: false,
                spaceBetween: 0,
                allowTouchMove: false,
                centeredSlides: false
              }
            }}>
            {filteredModels.map(({id, name, nameWithoutBrand, price, imgPath}) => (
              <SwiperSlide key={id} className="swiper-slide other-models__item">
                <div className="other-models__item-wrapper">
                  <Link href="#">
                    <a className="other-models__link">
                      <div className="other-models__img-wrapper">
                        <Image objectFit="contain" className="other-models__img" src={imgPath} alt={name} layout="fill" placeholder="blur" blurDataURL={circlePlaceholder} />
                      </div>
                      <p className="text text_25 other-models__name">{nameWithoutBrand}</p>
                      <div className="other-models__price">
                        <p className="text text_uppercase other-models__price-value">${price}</p>
                      </div>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="ui-btn other-models__see-more">
                      <span>SEE MORE</span>
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide className="swiper-slide swiper-slide_form other-models__form">
              <p className="other-models__form-title">
                DIDN’T FIND <br /> A MODEL?
              </p>
              <p className="text other-models__form-text">
                Leave your contact details <br /> and we will help you with <br /> the choice
              </p>
              <UiInput forForm={false} customClass="other-models__form-input" />
              <Link href="#">
                <a className="ui-btn ui-btn_outline other-models__see-more">
                  <span>SEND</span>
                </a>
              </Link>
            </SwiperSlide>

            {/* <SwiperSlide key="020202" className="swiper-slide other-models__item_hide other-models__item">
              <div className="other-models__item-wrapper">
                <Link href="#">
                  <a className="other-models__link">
                    <div className="other-models__img-wrapper">
                    </div>
                    <p className="text text_25 other-models__name"></p>
                    <div className="other-models__price">
                      <p className="text text_uppercase other-models__price-value"></p>
                    </div>
                  </a>
                </Link>
              </div>
            </SwiperSlide> */}

          </Swiper>
        </div>
        <div className="other-models__swiper-scrollbar"></div>
      </div>
    </div>
  );
}
