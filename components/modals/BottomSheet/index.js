/* eslint-disable @next/next/no-img-element */
import {useRef, useState} from 'react';
import {Navigation, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import Image from 'next/image';
import Sheet from 'react-modal-sheet';
import iconClose from '@/base/icon-close-black.svg';
import iconCartBlue from '@/base/icon-cart-blue.svg';
import iconArrowTop from '@/base/icon-arrow-top-black.svg';
import {BiMinus, BiPlus} from 'react-icons/bi';

const BottomSheet = () => {
  const [activeSheet, setActiveSheet] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef();

  /** 0 => 0.8 | 1 => 0.4 | 2 => 0 (close modal) */
  const snapTo = (index) => () => {
    ref.current?.snapTo(index);
    setVisibleProducts(true);
  };

  /** 0 => 0.8 | 1 => 0.4 | 2 => 0 (close modal) */
  const snapPoints = [0.86, 530, 0];

  const toggleArea = () => {
    return () => {
      if (!visibleProducts) {
        setVisibleProducts(true);
        ref.current?.snapTo(0);
      } else {
        setVisibleProducts(false);
        ref.current?.snapTo(1);
      }
    };
  };

  return (
    <div className="bottom-sheet">
      {/* <Sheet.Backdrop className="bottom-sheet__backdrop"> */}
      <Sheet disableDrag={true} snapPoints={snapPoints} initialSnap={1} ref={ref} isOpen={activeSheet} onClose={() => {}}>
        <Sheet.Container className="bottom-sheet__container">
          <Sheet.Header>
            <div className="bottom-sheet__top">
              <div className="text text_25 bottom-sheet__top-title">Added to cart</div>
              <div onClick={snapTo(2)} className="inline-flex-center bottom-sheet__top-img-wrapper">
                <Image src={iconClose} alt="icon" layout="responsive" />
              </div>
            </div>
            <div className="container bottom-sheet__top-actions">
              <button className="ui-btn ui-btn_fill-grey bottom-sheet__top-actions-item">
                <span>BACK</span>
              </button>
              <button className="ui-btn bottom-sheet__top-actions-item">
                <span>CHECK OUT</span>
              </button>
            </div>
          </Sheet.Header>
          <Sheet.Content className="bottom-sheet__content">
            <div className="container bottom-sheet__summ-and-products">
              <div onClick={toggleArea()} className={visibleProducts ? 'bottom-sheet__summ-area active' : 'bottom-sheet__summ-area'}>
                <div className="inline-flex-center bottom-sheet__summ-icon-cart-wrapper">
                  <Image src={iconCartBlue} alt="icon" />
                </div>
                <p className="bottom-sheet__summ-title">Hide order summary</p>
                <div className="inline-flex-center bottom-sheet__summ-icon-arrow-up-wrapper">
                  <Image src={iconArrowTop} alt="icon" />
                </div>
                <p className="text text_bold bottom-sheet__summ-total">$949.99</p>
              </div>

              <div className={visibleProducts ? 'bottom-sheet__products-area active' : 'bottom-sheet__products-area'}>
                <div className="bottom-sheet__product">
                  <div className="bottom-sheet__product-main-area">
                    <div className="bottom-sheet__product-img-wrapper">
                      <img src="" alt="" className="bottom-sheet__product-img" />
                    </div>
                    <div className="bottom-sheet__product-name-and-price">
                      <p className="bottom-sheet__product-name">Ninebot KickScooter MAX</p>
                      <p className="bottom-sheet__product-price"> 1 x $949.99</p>
                    </div>
                    <div className="bottom-sheet__product-counter">
                      <button className="inline-flex-center bottom-sheet__product-count-minus">
                        <BiMinus />
                      </button>
                      <p className="bottom-sheet__product-count">1</p>
                      <button className="inline-flex-center bottom-sheet__product-count-plus">
                        <BiPlus />
                      </button>
                    </div>
                  </div>
                  <div className="bottom-sheet__product-warrancy-area">
                    <p className="bottom-sheet__product-warrancy-title">Add an extended warranty from Extend</p>
                    <div className="bottom-sheet__product-warrancy-items">
                      <button className="bottom-sheet__product-warrancy">
                        <span className="bottom-sheet__product-warrancy-year">1 year</span>
                        <span className="bottom-sheet__product-warrancy-price">$139</span>
                      </button>
                      <button className="bottom-sheet__product-warrancy">
                        <span className="bottom-sheet__product-warrancy-year">2 year</span>
                        <span className="bottom-sheet__product-warrancy-price">$209</span>
                      </button>
                      <button className="bottom-sheet__product-warrancy">
                        <span className="bottom-sheet__product-warrancy-year">3 year</span>
                        <span className="bottom-sheet__product-warrancy-price">$279</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bottom-sheet__product">
                  <div className="bottom-sheet__product-main-area">
                    <div className="bottom-sheet__product-img-wrapper">
                      <img src="" alt="" className="bottom-sheet__product-img" />
                    </div>
                    <div className="bottom-sheet__product-name-and-price">
                      <p className="bottom-sheet__product-name">Ninebot Engine Speaker</p>
                      <p className="bottom-sheet__product-price"> 1 x $949.99</p>
                    </div>
                    <div className="bottom-sheet__product-counter">
                      <button className="inline-flex-center bottom-sheet__product-count-minus">
                        <BiMinus />
                      </button>
                      <p className="bottom-sheet__product-count">1</p>
                      <button className="inline-flex-center bottom-sheet__product-count-plus">
                        <BiPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-sheet__accessoeries">
              <p className="text text_25 bottom-sheet__accessoeries-title">Accessories</p>
              <div className="container bottom-sheet__accessoeries-swiper-wrapper">
                <div className="bottom-sheet__accessoeries-swiper">
                  <Swiper
                    modules={[Navigation, FreeMode]}
                    spaceBetween={10}
                    slidesPerView={2}
                    loop={false}
                    freeMode={true}
                    navigation={{
                      prevEl: '.bottom-sheet__nav_prev',
                      nextEl: '.bottom-sheet__nav_next'
                    }}
                  >
                    <SwiperSlide className="bottom-sheet__accessoeries-item">
                      <div className="bottom-sheet__accessoeries-img-wrapper">
                        <img src="" alt="" className="bottom-sheet__accessoeries-img" />
                      </div>
                      <p className="bottom-sheet__accessoeries-name">Ninebot Engine Speaker</p>
                      <p className="bottom-sheet__accessoeries-price">$949.99</p>
                    </SwiperSlide>
                    <SwiperSlide className="bottom-sheet__accessoeries-item">
                      <div className="bottom-sheet__accessoeries-img-wrapper">
                        <img src="" alt="" className="bottom-sheet__accessoeries-img" />
                      </div>
                      <p className="bottom-sheet__accessoeries-name">Ninebot Engine Speaker</p>
                      <p className="bottom-sheet__accessoeries-price">$949.99</p>
                    </SwiperSlide>
                    <SwiperSlide className="bottom-sheet__accessoeries-item">
                      <div className="bottom-sheet__accessoeries-img-wrapper">
                        <img src="" alt="" className="bottom-sheet__accessoeries-img" />
                      </div>
                      <p className="bottom-sheet__accessoeries-name">Ninebot Engine Speaker</p>
                      <p className="bottom-sheet__accessoeries-price">$949.99</p>
                    </SwiperSlide>
                    <SwiperSlide className="bottom-sheet__accessoeries-item">
                      <div className="bottom-sheet__accessoeries-img-wrapper">
                        <img src="" alt="" className="bottom-sheet__accessoeries-img" />
                      </div>
                      <p className="bottom-sheet__accessoeries-name">Ninebot Engine Speaker</p>
                      <p className="bottom-sheet__accessoeries-price">$949.99</p>
                    </SwiperSlide>
                  </Swiper>
                  <div className={activeIndex !== 0 ? 'bottom-sheet__navigation' : 'bottom-sheet__navigation disabled'}>
                    <button className="bottom-sheet__nav bottom-sheet__nav_prev">
                      <BsChevronCompactLeft className="bottom-sheet__nav-icon" />
                    </button>
                    <button className="bottom-sheet__nav bottom-sheet__nav_next">
                      <BsChevronCompactRight className="bottom-sheet__nav-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
      {/* </Sheet.Backdrop> */}
    </div>
  );
};

export default BottomSheet;
