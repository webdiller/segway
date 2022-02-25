import {Navigation} from 'swiper';
import {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import styles from './index.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {setFancyModal} from '@/actions/fancyModal';
import segwayPlaceholder from '@/base/segway-placeholder.png';
import {FcPrevious, FcNext} from 'react-icons/fc';
import ModalWrapper from '../ModalWrapper';

import iconCloseBlack from '@/base/icon-close-black.svg';
import iconCloseWhite from '@/base/icon-close-white.svg';

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
    if (typeof window !== undefined) {
      try {
        swiperRef.current.slideTo(activeIndex, 600, null);
      } catch (error) {
        console.log('Handle error from FancyModal');
      }
    }
  }, [activeIndex]);

  useEffect(() => {
    activeModal ? document.body.classList.add('disabled') : document.body.classList.remove('disabled');
  }, [activeModal]);

  return (
    <ModalWrapper mounted={activeModal}>
      <div className={activeModal ? `${styles.fancyModal} ${styles.fancyModal__active}` : `${styles.fancyModal}`}>
        <div className={styles.fancyModal__wrapper}>
          <div className={styles.fancyModal__closeIcon_desktop}><Image onClick={closeModal()}  src={iconCloseWhite} alt="icon-close" width={34} height={34} /></div>
          <div className={styles.fancyModal__closeIcon_mobile}><Image onClick={closeModal()}  src={iconCloseBlack} alt="icon-close" width={34} height={34} /></div>
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
                <Image quality={100} objectFit="contain" className={styles.fancyModal__image} src={element} alt="Segway image in slider" layout="fill" placeholder="blur" blurDataURL={segwayPlaceholder} />
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
    </ModalWrapper>
  );
}
