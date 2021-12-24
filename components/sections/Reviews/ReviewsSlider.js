import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FcPrevious, FcNext } from "react-icons/fc";
import reviewImg from "@/base/review-1.jpg";

export default function Reviews() {
  return (
    <div className="reviews-slider">
      <div className="container reviews__container">
        <p className="title title_fz-20 reviews__title">Reviews</p>
        <div className="reviews-slider__swiper">
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
            <SwiperSlide className="reviews-slider__item">
              <div className="reviews-slider__img-wrapper">
                <Image
                  objectFit="contain"
                  className="reviews-slider__img"
                  src={reviewImg}
                  alt="feature"
                  width={257}
                  height={380}
                  quality={50}
                  layout="responsive"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="reviews-slider__item">
              <div className="reviews-slider__img-wrapper">
                <Image
                  objectFit="contain"
                  className="reviews-slider__img"
                  src={reviewImg}
                  alt="feature"
                  width={257}
                  height={380}
                  quality={50}
                  layout="responsive"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="reviews-slider__item">
              <div className="reviews-slider__img-wrapper">
                <Image
                  objectFit="contain"
                  className="reviews-slider__img"
                  src={reviewImg}
                  alt="feature"
                  width={257}
                  height={380}
                  quality={50}
                  layout="responsive"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="reviews-slider__navigation">
            <button className="reviews-slider__nav reviews-slider__nav_prev">
              <FcPrevious className="reviews-slider__icon" />
            </button>
            <button className="reviews-slider__nav reviews-slider__nav_next">
              <FcNext className="reviews-slider__icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
