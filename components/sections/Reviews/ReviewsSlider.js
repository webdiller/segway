import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import arrowLeft from '@/base/icon-arrow-left.svg';
import arrowRight from '@/base/icon-arrow-right.svg';

import { GoStar } from 'react-icons/go';

const reviews = [
  {
    id: 1,
    stars: [1, 1, 1, 1, 0],
    name: 'Jackie',
    description: <>
      I bought two scooters for myself (100 kg) and my girlfriend (67 kg),
      so the review is about two at once. At the moment, a month and a
      half I drove 1080 km. On the second, about 500. The most important
      thing is that I took it out of the box and ride it. The power reserve
      is impressive. In the average energy recirculation mode in D mode, my
      record is 52 km (I remind you - 100 kg) (8% left), in S mode - 45 km
      (4% left). Girlfriend has 38% left, so if your weight is up to 70 kg,
      it will definitely pull out the declared 65 km on S. Also, in
      recirculation mode on steep hills or just when you throw gas
      at high speed, it starts to slow down great (for me personally,
      it’s very good), preventing it from accelerating and recharging.
    </>,
    link: '/'
  },
  {
    id: 2,
    stars: [1, 1, 1, 1, 1],
    name: 'Gagnier',
    description: <>
      One of the best urban scooters. The charge is enough for at least 40 kilometers in S mode with a weight of 90.
      A very convenient folding mechanism, despite the weight, folded can be carried without problems in one hand.
      The design looks very reliable, there are no backlashes. Excellent materials.
      The electric motor pulls in any hill.
      Rides in the rain with no problem.
      <br />
      Cool app.
    </>,
    link: '/'
  },
  {
    id: 3,
    stars: [1, 1, 1, 1, 1],
    name: 'Lakey',
    description: <>
      I have been using it for 10 months, for the first 6 I drove 3080 km, the farthest mileage is 58
      km with a weight of 82 kg. The scooter pulls any slides, but only in the &apos;SPORT&apos; mode.
      and pierced the rear wheel, while I pump it up every two days, I don’t want to
      change the tire. The protection against water is super, though I put an additional
      one when buying. 3,000 km, the loss in the battery is less than 10%. They were
      surprised at the store. At this time, with a loss of 30 - 40% of the charge,
      power is slightly lost and the speed drops to 24 km / h. In general, who wants
      to ride longer and recommend it around the city. the cobblestone pavement
      certainly shakes. Someone in the shortcomings writes the weight of the
      scooter, but when you bought what did you think about?
    </>,
    link: '/'
  },
  {
    id: 4,
    stars: [1, 1, 1, 1, 0],
    name: 'Alex',
    description: <>
      This is more than a &apos;kickscooter&apos; - it&apos;s a full-fledged sidewalk scooter. Made &apos;monolithically&apos;,
      eliminated all the shortcomings of previous Ninebot models, while retaining the main advantages. There is a display,
      but this is a dubious merit, in practice there is no benefit from it, but it can distract with its presence.
      Convenient charging port with spring-loaded cover - convenient to open blindly and impossible to forget to
      close. The first product in my experience in which there is nothing to improve, everything is immediately done as it should.

    </>,
    link: '/'
  },
]

export default function Reviews() {

  const collapseHandler = (e) => {
    if (e.target.tagName === 'BUTTON') {
      if (e.target.parentElement.classList.contains('opened')) {
        e.target.innerText = "Read more"
        e.target.parentElement.classList.remove('opened')
      } else {
        e.target.innerText = "Read less"
        e.target.parentElement.classList.add('opened')
      }
    }
  }

  return (
    <div className="reviews-slider">
      <div className="container reviews-slider__container">
        <p className="title title_fz-20 reviews-slider__title">Last reviews</p>

        <div className="reviews-slider__swiper">

          <Swiper
            modules={[Navigation, Pagination]}
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
                <SwiperSlide
                  key={id}
                  className="reviews-slider__item">
                  <div
                    className="reviews-slider__item-wrapper"
                    onClick={collapseHandler}>
                    <div
                      className="reviews-slider__item-stars">
                      {stars.map((star, indx) => {
                        return (
                          <GoStar key={indx} className={star === 1 ? "reviews-slider__item-star active" : "reviews-slider__item-star"} />
                        )
                      })}
                    </div>
                    <p className="reviews-slider__item-name">{name}</p>
                    <p className="reviews-slider__item-description">{description}</p>
                    <button className="reviews-slider__item-link">Read more</button>
                  </div>
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
