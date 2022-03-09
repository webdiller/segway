import { Scrollbar, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from "axios";
const Link = dynamic(() => import('next/link'));
import circlePlaceholder from '@/base/circle-placeholder.svg';
import { useInView } from 'react-intersection-observer';
import UiInput from 'components/shared/UiInput/UiInput';

export default function OtherModels({ items }) {
  const swiperRef = useRef(null);
  const [allSegways] = useState(items)
  const { ref, inView } = useInView({ threshold: 0.5 });

  // form
  const btnRef = useRef();
  const onSubmit = async e => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    console.log(e.currentTarget.elements[0].value);

    let config = {
      method: "post",
      url: `/api/mail`,
      headers: {
        "Content-Type": "application/json"
      },
      data: formData
    };

    btnRef.current.innerHTML = "<span>Sending...</span>";
    btnRef.current.classList.add("loading");
    try {
      const response = await axios(config);

      if (response.status === 200) {
        btnRef.current.innerHTML = "<span>Success</span>";
        btnRef.current.classList.remove("loading");

        setTimeout(() => {
          btnRef.current.innerHTML = "<span>Send</span>";
        }, 3000);
      }
    } catch (error) {
      alert('Error while sending form')
      btnRef.current.innerHTML = "<span>Error while sending</span>";
      setTimeout(() => {
        btnRef.current.innerHTML = "<span>Send</span>";
      }, 3000);
    }

  };
  // form

  useEffect(() => {
    if (document.readyState === 'complete' && window.innerWidth <= 768 && inView) {
      try {
        swiperRef.current.slideNext();
        setTimeout(() => {
          try {
            swiperRef.current.slidePrev();
          } catch (error) { }
        }, 350);
      } catch (error) { }
    }
  }, [swiperRef, inView]);

  return (
    <div ref={ref} className="other-models">
      <div className="container other-models__container">
        <p className="title title_fz-20 other-models__title">Other kickscooters</p>
        <div className="other-models__subtitle">Check out the entire line of Segway scooters</div>
        <div className="other-models__swiper">
          <Swiper
            ref={swiperRef}
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
              769: {
                slidesPerView: 2.2,
                loop: false,
                spaceBetween: 0,
                allowTouchMove: false,
                centeredSlides: false
              }
            }}
            onInit={(swiper) => {
              swiperRef.current = swiper;
            }}>
            {allSegways.map(({ id, name, nameWithoutBrand, price, imgPath }) => (
              <SwiperSlide key={id} className="swiper-slide other-models__item">
                <div className="other-models__item-wrapper">
                  <Link href="#">
                    <a className="other-models__link">
                      <div className="other-models__img-wrapper">
                        <Image quality={100} objectFit="contain" className="other-models__img" src={imgPath} alt={name} layout="fill" placeholder="blur" blurDataURL={circlePlaceholder} />
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

            <SwiperSlide onSubmit={onSubmit} tag="form" className="swiper-slide swiper-slide_form other-models__form">
              <p className="other-models__form-title">
                DIDN’T FIND <br /> A MODEL?
              </p>
              <p className="text other-models__form-text">
                Leave your contact details <br /> and we will help you with <br /> the choice
              </p>
              <UiInput name="formFromOtherModelsPhone" forForm={false} customClass="other-models__form-input" />
              <button ref={btnRef} type="submit" className="ui-btn ui-btn_outline other-models__see-more">
                <span>SEND</span>
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="other-models__swiper-scrollbar"></div>
      </div>
    </div>
  );
}
