import Link from 'next/link'

import { Scrollbar, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import axios from "axios";
import ReactInputMask from 'react-input-mask';

import circlePlaceholder from '@/base/circle-placeholder.svg';
import { useInView } from 'react-intersection-observer';

import { useDispatch, useSelector } from 'react-redux';
import { disableOtherModelsSlider } from 'store/slices/elementInViewSlice';

export default function OtherModels({ items }) {

  const swiperRef = useRef(null);
  const [allSegways] = useState(items)
  const { ref, inView } = useInView({ threshold: 0.5 });

  const dispatch = useDispatch()
  const { otherModelsSlider } = useSelector(state => state.elementInView)

  const btnRef = useRef();
  const onSubmit = async e => {
    e.preventDefault();

    const formData = {};
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    formData = { ...formData, fromWhere: `страница модели ${document.title}` }

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

  useEffect(() => {
    if (document.readyState === 'complete' && window.innerWidth <= 768 && inView && otherModelsSlider) {
      try {
        swiperRef.current.slideNext();
        setTimeout(() => {
          try {
            swiperRef.current.slidePrev();
          } catch (error) { }
        }, 450);
      } catch (error) { }
      finally {
        dispatch(disableOtherModelsSlider(false))
      }
    }
  }, [swiperRef, inView, otherModelsSlider, dispatch]);

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
            {allSegways.map(({ id, type, name, nameWithoutBrand, price, imgPath, excludeForMap, pageLinkNameWithCategory }) => {
              if (!excludeForMap) {
                return (
                  <SwiperSlide key={id} className="swiper-slide other-models__item">
                    <div className="other-models__item-wrapper">
                      <Link href={pageLinkNameWithCategory}>
                        <a className="other-models__link">
                          <div className="other-models__img-wrapper">
                            <Image quality={100} objectFit="contain" className="other-models__img" src={imgPath} alt={name} layout="fill" placeholder="blur" blurDataURL={circlePlaceholder} />
                          </div>
                          <p className="text text_25 other-models__name">{nameWithoutBrand}</p>
                          {type === 'accessory' ? (
                            <div className="other-models__prices">
                              <p className="other-models__price-current">$899.99</p>
                            </div>
                          ) : (
                            <div className="other-models__prices">
                              <p className="other-models__price-current">$899.99</p>
                              <span className='other-models__price-separator'>or</span>
                              <div className="other-models__price-period">
                                <p className="other-models__price-period-key">$7</p>
                                <p className="other-models__price-period-value">/ month</p>
                              </div>
                            </div>)
                          }
                        </a>
                      </Link>
                      <Link href={pageLinkNameWithCategory}>
                        <a className="ui-btn other-models__see-more">
                          <span>SEE MORE</span>
                        </a>
                      </Link>
                    </div>
                  </SwiperSlide>
                )
              }
            })}

            <SwiperSlide onSubmit={onSubmit} tag="form" className="swiper-slide swiper-slide_form other-models__form">
              <p className="other-models__form-title">
                DIDN’T FIND <br /> A MODEL?
              </p>
              <p className="text other-models__form-text">
                Leave your contact details <br /> and we will help you with <br /> the choice
              </p>

              <ReactInputMask
                name="formFromOtherModelsPhone"
                placeholder="+1 ___ ___ __ __"
                mask="+1 999 999 99 99"
                className='other-models__form-input'
                required
              />

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
