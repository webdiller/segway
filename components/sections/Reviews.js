import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FcPrevious, FcNext } from "react-icons/fc";

import "swiper/css";
import "swiper/css/navigation";

export default function Reviews() {
  return (
    <div className="reviews">
      <div className="container reviews__container">
        <p className="title title_1 reviews__title">Reviews</p>
        <div className="reviews__swiper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={13}
            slidesPerView={2}
            loop={true}
            navigation={{
              prevEl: ".reviews__nav_prev",
              nextEl: ".reviews__nav_next",
            }}
            breakpoints={{
              768: {
                spaceBetween: 15,
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide className="reviews__item">
              <div className="reviews__img-wrapper">
                <Image
                  objectFit="contain"
                  className="reviews__img"
                  src="/review-1.jpg"
                  alt="feature"
                  width={257}
                  height={380}
                  quality={50}
                  layout="responsive"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="reviews__item">
              <div className="reviews__img-wrapper">
                <Image
                  objectFit="contain"
                  className="reviews__img"
                  src="/review-2.jpg"
                  alt="feature"
                  width={257}
                  height={380}
                  quality={50}
                  layout="responsive"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="reviews__item">
              <div className="reviews__img-wrapper">
                <Image
                  objectFit="contain"
                  className="reviews__img"
                  src="/review-3.jpg"
                  alt="feature"
                  width={257}
                  height={380}
                  quality={50}
                  layout="responsive"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="reviews__navigation">
            <button className="reviews__nav reviews__nav_prev">
              <FcPrevious className="reviews__icon" />
            </button>
            <button className="reviews__nav reviews__nav_next">
              <FcNext className="reviews__icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
