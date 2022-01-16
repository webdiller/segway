/* eslint-disable @next/next/no-img-element */
import {Navigation} from 'swiper';
import {useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import styles from './FancyModal.module.scss';
import {useSelector} from 'react-redux';
import segwayPlaceholder from '@/base/segway-placeholder.png';
import {FcPrevious, FcNext} from 'react-icons/fc';

export default function FancyModal({slideTo}) {
  const swiperRef = useRef();
  const {images} = useSelector((state) => state.fancyModal);
  const swipeNextRef = useRef();
  const swipePrevRef = useRef();

  const slideToLeft = () => console.log(1);
  const slideToRight = () => {
    // swiperRef.current?.slideNext()
    // console.log(swiperRef.current);
  };

  return (
    <div className={`${styles.fancyModal}`}>
      <div className={styles.fancyModal__wrapper}>
        <img className={styles.fancyModal__closeIcon} src="./icon-close-white.svg" alt="icon-close" width="34" height="34" loading="lazy" />

        <Swiper modules={[Navigation]} className={styles.fancyModal__slider} ref={swiperRef} spaceBetween={0} slidesPerView={1} loop={true}>
          {images.map((element, id) => (
            <SwiperSlide key={id} className={styles.fancyModal__imageWrapper}>
              <Image objectFit="contain" className={styles.fancyModal__image} src={element} alt="Segway image in slider" layout="fill" placeholder="blur" blurDataURL={segwayPlaceholder} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.fancyModal__navigation}>
          <button onClick={slideToLeft} ref={swipePrevRef} aria-label="swipe to left slider" className={`${styles.fancyModal__navigationItem} ${styles.fancyModal__navigationItem_left}`}>
            <FcPrevious className="top-swiper__icon" />
          </button>
          <button onClick={slideToRight} ref={swipeNextRef} aria-label="swipe to right slider" className={`${styles.fancyModal__navigationItem} ${styles.fancyModal__navigationItem_right}`}>
            <FcNext className="top-swiper__icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
