import Link from 'next/link'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper';
import classNames from 'classnames';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function CategorySlider({ customClassNames, title, products, typeItemName, typeScrollBar, allowTouchMove=true }) {
  return (
    <div className={classNames('category-slider', classNames(customClassNames))}>
      <div className="container category-slider__container">
        <p className="title category-slider__title">{title}</p>
        <Swiper
          className="category-slider__swiper"

          modules={[Scrollbar, FreeMode]}

          slidesPerView="auto"
          freeMode={true}
          loop={false}
          centeredSlides={false}
          allowTouchMove={allowTouchMove}

          scrollbar={{
            el: '.category-slider__scrollbar',
            draggable: true
          }}
        >
          {products.map(({ id, excludeForMap, nameWrap, nameWithoutBrand, imgPath, pageLinkName, pageLinkNameWithCategory }) => {
            const classForName = typeItemName === 'accessories' ? 'category-slider__name category-slider__name_accessory' : 'category-slider__name'
            if (!excludeForMap) {
              return (
                <SwiperSlide key={id} className="category-slider__item">
                  <div className="category-slider__image">
                    <Image
                      src={imgPath}
                      quality={100}
                      objectFit="contain"
                      layout='fill'
                      alt="Segway image in slider"
                    />
                  </div>
                  <p className={`text text_25 ${classForName}`}>{nameWithoutBrand || nameWrap}</p>
                  <div className="text category-slider__prices">
                    <p className="category-slider__price">$899.99</p>
                    <span className="category-slider__price-separator">or</span>
                    <p className="category-slider__price category-slider__price_alt">$7 / <span>month</span></p>
                  </div>

                  <Link href={pageLinkNameWithCategory || pageLinkName}>
                    <a className="ui-btn category-slider__see-more">
                      <span>SEE MORE</span>
                    </a>
                  </Link>
                </SwiperSlide>
              )
            }
          })}
          <div className={typeScrollBar === 'white' ? "category-slider__scrollbar category-slider__scrollbar_white" : "category-slider__scrollbar"}></div>
        </Swiper>
      </div>
    </div>
  )
}
