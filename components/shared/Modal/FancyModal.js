/* eslint-disable @next/next/no-img-element */
import {Navigation} from 'swiper';
import {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import styles from './FancyModal.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {setFancyModal} from '@/actions/fancyModal';
import segwayPlaceholder from '@/base/segway-placeholder.png';
import {FcPrevious, FcNext} from 'react-icons/fc';

export default function FancyModal() {
  const dispatch = useDispatch();

  const {images, active: activeModal, activeIndex} = useSelector((state) => state.fancyModal);
  const swipeNextRef = useRef();
  const swipePrevRef = useRef();
  const swiperRef = useRef();

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideToLeft = () => swiperRef.current.slidePrev();
  const slideToRight = () => {
    swiperRef.current.slideNext();
  };

  const closeModal = () => () => {
    dispatch(setFancyModal(false, activeIndex));
  };

  useEffect(() => {
    swiperRef.current.slideTo(activeIndex, 600, null);
  }, [activeIndex]);

  useEffect(() => {
    activeModal ? document.body.classList.add('disabled') : document.body.classList.remove('disabled');
  }, [activeModal]);

  return (
    <div className={activeModal ? `${styles.fancyModal} ${styles.fancyModal__active}` : `${styles.fancyModal}`}>
      <div className={styles.fancyModal__wrapper}>
        <img onClick={closeModal()} className={styles.fancyModal__closeIcon_desktop} src="./icon-close-white.svg" alt="icon-close" width="34" height="34" loading="lazy" />
        <img onClick={closeModal()} className={styles.fancyModal__closeIcon_mobile} src="./icon-close-black.svg" alt="icon-close" width="34" height="34" loading="lazy" />
        <Swiper
          modules={[Navigation]}
          className={styles.fancyModal__slider}
          spaceBetween={0}
          slidesPerView={1}
          loop={false}
          onInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            let indx = swiper.activeIndex;
            setCurrentSlide(indx);
          }}>
          {images.map((element, id) => (
            <SwiperSlide key={id} className={styles.fancyModal__imageWrapper}>
              <Image objectFit="contain" className={styles.fancyModal__image} src={element} alt="Segway image in slider" layout="fill" placeholder="blur" blurDataURL={segwayPlaceholder} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.fancyModal__navigation}>
          <button onClick={slideToLeft} ref={swipePrevRef} aria-label="swipe to left slider" className={currentSlide === 0 ? `${styles.fancyModal__navigationItem} ${styles.fancyModal__navigationItem_hidden}` : `${styles.fancyModal__navigationItem}`}>
            <FcPrevious className="top-swiper__icon" />
          </button>
          <button onClick={slideToRight} ref={swipeNextRef} aria-label="swipe to right slider" className={(currentSlide + 1) === images.length ? `${styles.fancyModal__navigationItem} ${styles.fancyModal__navigationItem_hidden}` : `${styles.fancyModal__navigationItem}`}>
            <FcNext className="top-swiper__icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
