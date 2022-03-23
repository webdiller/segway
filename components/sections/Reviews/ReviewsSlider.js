import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import arrowLeft from '@/base/icon-arrow-left.svg';
import arrowRight from '@/base/icon-arrow-right.svg';

import { GoStar } from 'react-icons/go';

import Link from "next/link";

const reviews = [
  {
    id: 1,
    stars: [1, 1, 1, 1, 0],
    name: 'Jackie',
    description: <>
      The price point for the printer is frankly incredible for the money.
      As far as a beginner printer...I purchased one of these for my niece
      (early teen) and the machine is working with no necessary involvement on my part.
    </>,
    link: '/'
  },
  {
    id: 2,
    stars: [1, 1, 1, 1, 1],
    name: 'Gagnier',
    description: <>
      The price point for the printer is frankly incredible for the money.
      As far as a beginner printer...I purchased one of these for my niece
      (early teen) and the machine is working with no necessary involvement on my part.
    </>,
    link: '/'
  },
  {
    id: 3,
    stars: [1, 1, 1, 1, 1],
    name: 'Lakey',
    description: <>
      The price point for the printer is frankly incredible for the money.
      As far as a beginner printer...I purchased one of these for my niece
      (early teen) and the machine is working with no necessary involvement on my part.
    </>,
    link: '/'
  }
]

export default function Reviews() {

  return (
    <div className="reviews-slider">
      <div className="container reviews-slider__container">
        <p className="title title_fz-20 reviews-slider__title">Last reviews</p>

        <div className="reviews-slider__swiper">

          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            navigation={{
              prevEl: ".reviews-slider__nav_left",
              nextEl: ".reviews-slider__nav_right",
            }}
            pagination={{
              clickable: true,
              el: '.reviews-slider__pagination'
            }}
            spaceBetween={10}
            slidesPerView={1.55}
            breakpoints={{
              576: {
                spaceBetween: 15,
                slidesPerView: 2.5,
              },
              768: {
                spaceBetween: 20,
                slidesPerView: 3,
              },
            }}>
            {reviews.map(({
              id,
              stars,
              name,
              description,
              link
            }) => {
              return (
                <SwiperSlide key={id} className="reviews-slider__item">
                  <div className="reviews-slider__item-stars">
                    {stars.map((star, indx) => {
                      return (
                        <GoStar key={indx} className={star === 1 ? "reviews-slider__item-star active" : "reviews-slider__item-star"} />
                      )
                    })}
                  </div>
                  <p className="reviews-slider__item-name">{name}</p>
                  <p className="reviews-slider__item-description">{description}</p>
                  <Link href={link}><a className="reviews-slider__item-link">Read more</a></Link>
                </SwiperSlide>
              )
            })}

          </Swiper>

          <div className="container reviews-slider__navigation">
            <div className="reviews-slider__nav reviews-slider__nav_left">
              <Image src={arrowLeft} alt="icon" />
            </div>
            <div className="reviews-slider__nav reviews-slider__nav_right">
              <Image src={arrowRight} alt="icon" />
            </div>
          </div>

          <div className="reviews-slider__pagination"></div>

        </div>

      </div>
    </div>
  );
}
