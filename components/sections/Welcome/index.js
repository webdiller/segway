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
import {setFancyImages, setFancyModal} from '@/actions/fancyModal';
import {useEffect, useRef, useState} from 'react';
import {setSlideIndex} from '@/actions/welcomeSlider';
import {useMediaQuery} from '@/hooks/useMediaQuery';
import 'swiper/css/pagination';

export default function Welcome({currentSegway, title = 'SEGWAY Ninebot Kickscooter MAX'}) {
  const dispatch = useDispatch();
  let mediaQuery = useMediaQuery('(max-width: 768px)');

  const [imagesFrFancySlider] = useState(currentSegway.galleryImages);
  const {selectedSlide} = useSelector((state) => state.welcomeSlider);
  const mainSliderElement = useRef(null);
  const thumbnailSliderElement = useRef(null);

  const setSlideIndexHandler = (indx) => () => {
    dispatch(setFancyModal(true, indx));
  };

  useEffect(() => {
    dispatch(setFancyImages(imagesFrFancySlider));
  }, [imagesFrFancySlider, dispatch]);

  useEffect(() => {
    mainSliderElement.current.slideTo(selectedSlide, 600, null);
  }, [selectedSlide, mainSliderElement]);

  return (
    <div className="welcome">
      <div className="container welcome__container">
        <div className="welcome__stock-with-title welcome__stock-with-title_mobile">
          <p className="welcome__stock">In stock</p>
          <p className="welcome__title">{title}</p>
        </div>

        <div className="welcome__content-with-swiper">
          <div className="welcome__content">
            <div className="welcome__stock-with-title welcome__stock-with-title_desktop">
              <p className="welcome__stock">In stock</p>
              <p className="title welcome__title">{title}</p>
            </div>
            <SegwayProtectMobile customClass="welcome__protect" />
            <FormWithWarrancy item={currentSegway} customClass="welcome__form" />
            <PaymentsMethods customClass="welcome__payments" />
          </div>

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
              }}
              onSlideChange={(swiper) => {
                thumbnailSliderElement.current.slideTo(swiper.activeIndex, 600, null);
                dispatch(setSlideIndex(swiper.activeIndex));
              }}>
              {currentSegway.galleryImages.map((item, id) => {
                return (
                  <SwiperSlide key={id} className="welcome__swiper-item">
                    <div className="welcome__swiper-img-wrapper">
                      <Image
                        width={mediaQuery ? '370' : '400'}
                        height={mediaQuery ? '374' : '560'}
                        objectFit="contain"
                        className="welcome__swiper-img"
                        src={item}
                        alt="welcome swiper"
                        quality={75}
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL={segwayPlaceholder}
                      />
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
            }}
            onInit={(swiper) => {
              thumbnailSliderElement.current = swiper;
            }}>
            {currentSegway.galleryImages.map((item, id) => {
              return (
                <SwiperSlide onClick={setSlideIndexHandler(id)} key={id} className="welcome__thumbnails-item">
                  <div className={selectedSlide === id ? 'welcome__thumbnails-img-wrapper active' : 'welcome__thumbnails-img-wrapper'}>
                    <Image width="140" height="140" objectFit="contain" src={item} alt="welcome swiper" quality={30} layout="responsive" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
