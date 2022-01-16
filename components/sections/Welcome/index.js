/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import PaymentsMethods from '@/blocks/PaymentsMethods';
import FormWithWarrancy from '@/blocks/FormWithWarrancy';
import SegwayProtectMobile from '@/blocks/SegwayProtectMobile';
import arrowLeft from '@/base/icon-arrow-left.svg';
import arrowRight from '@/base/icon-arrow-right.svg';
import segwayPlaceholder from '@/base/segway-placeholder.png';
import {useDispatch, useSelector} from 'react-redux';
import {setFancyImages} from '@/actions/fancyModal';
import {useEffect, useRef, useState} from 'react';
import {setSlideIndex} from '@/actions/welcomeSlider';
import 'swiper/css/pagination';

export default function Welcome({currentSegway}) {
  const [imagesFrFancySlider] = useState(currentSegway.galleryImages);
  const dispatch = useDispatch();
  const {selectedSlide} = useSelector((state) => state.welcomeSlider);
  const mainSliderElement = useRef(null);

  useEffect(() => {
    dispatch(setFancyImages(imagesFrFancySlider));
  }, [imagesFrFancySlider, dispatch]);

  useEffect(() => {
    mainSliderElement.current.slideTo(selectedSlide, 600, null);
  }, [selectedSlide, mainSliderElement]);

  const setSlideIndexHandler = (indx) => () => {
    dispatch(setSlideIndex(indx));
  };

  return (
    <div className="welcome">
      <div className="container welcome__container">
        <div className="welcome__top">
          {/* area name: stock */}
          <div className="welcome__stock-wrapper">
            <p className="welcome__stock">In stock</p>
          </div>

          {/* area name: title */}
          <div className="welcome__title-wrapper">
            <p className="title title_fz-80 welcome__title">SEGWAY Ninebot Kickscooter MAX</p>
          </div>

          {/* area name: protect */}
          <SegwayProtectMobile customClass="welcome__protect-wrapper" />

          {/* area name: form */}
          <div className="welcome__form-wrapper">
            <FormWithWarrancy item={currentSegway} customClass="welcome__form" />
          </div>

          {/* area name: payments */}
          <PaymentsMethods customClass="welcome__payments-wrapper" />

          {/* area name: swiper */}
          <div className="welcome__swiper-wrapper">
            <div className="welcome__swiper">
              <Swiper
                ref={mainSliderElement}
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  el: '.welcome__swiper-pagination'
                }}
                loop={false}
                navigation={{
                  prevEl: '.welcome__swiper-nav_prev',
                  nextEl: '.welcome__swiper-nav_next'
                }}
                breakpoints={{
                  768: {
                    spaceBetween: 0,
                    slidesPerView: 1
                  }
                }}
                onInit={(swiper) => {
                  mainSliderElement.current = swiper;
                }}>
                {currentSegway.galleryImages.map((imgPath, id) => {
                  return (
                    <SwiperSlide key={id} className="welcome__swiper-item">
                      <div className="welcome__swiper-img-wrapper">
                        <Image width="400" height="650" objectFit="contain" className="welcome__swiper-img" src={imgPath} alt="welcome swiper" quality={50} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="welcome__swiper-navigation">
                <div className="welcome__swiper-nav welcome__swiper-nav_prev">
                  <div className="welcome__swiper-icon-wrapper welcome__swiper-icon-wrapper_left">
                    <Image src={arrowLeft} alt="icon" />
                  </div>
                </div>
                <div className="welcome__swiper-nav welcome__swiper-nav_next">
                  <div className="welcome__swiper-icon-wrapper welcome__swiper-icon-wrapper_right">
                    <Image src={arrowRight} alt="icon" />
                  </div>
                </div>
              </div>
              <div className="welcome__swiper-pagination"></div>
            </div>
          </div>

          <div className="welcome__thumbnails">
            <p className="welcome__thumbnails-title">OTHER PHOTO:</p>
            <Swiper
              className="welcome__thumbnails-swiper"
              spaceBetween={10}
              slidesPerView={5}
              loop={false}
              breakpoints={{
                768: {
                  spaceBetween: 20,
                  slidesPerView: 6
                }
              }}>
              {currentSegway.galleryImages.map((imgPath, id) => {
                return (
                  <SwiperSlide onClick={setSlideIndexHandler(id)} key={id} className="welcome__thumbnails-item">
                    <div className={selectedSlide === id ? 'welcome__thumbnails-img-wrapper active' : 'welcome__thumbnails-img-wrapper'}>
                      <Image width="140" height="140" objectFit="contain" src={imgPath} alt="welcome swiper" quality={50} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
