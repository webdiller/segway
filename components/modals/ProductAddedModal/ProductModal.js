/* eslint-disable @next/next/no-img-element */
import {useCart} from 'react-use-cart';
import {useEffect, useRef, useState} from 'react';
import {Navigation, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import Image from 'next/image';
import iconCloseBlack from '@/base/icon-close-black.svg';
import iconCloseWhite from '@/base/icon-close-white.svg';
import iconCartBlue from '@/base/icon-cart-blue.svg';
import iconArrowTop from '@/base/icon-arrow-top-black.svg';
import {BiMinus, BiPlus} from 'react-icons/bi';
import useToggleScroll from '@/hooks/useToggleScroll';

export default function ProductModal({accessoeries}) {
  // modals
  const [activeModal, setActiveModal] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const modalRef = useRef(null);
  const {setDisabledHandle} = useToggleScroll();

  // data
  const {items, cartTotal, addItem, updateItemQuantity} = useCart();
  const [clientItems, setClientItems] = useState([]);
  const [clientItemsTotal, setClientItemsTotal] = useState([]);

  const closeModal = (ref) => () => {
    if (activeModal) {
      setActiveModal(false);
      setDisabledHandle(false);
    }
  };

  const closeModalWrapper = (e) => {
    if (e.target === modalRef.current) {
      setActiveModal(false);
      setDisabledHandle(false);
    }
  };

  const setVisibleProductsToggle = () => () => setVisibleProducts((prev) => !prev);

  const addItemToCart = (item) => () => {
    addItem(item);
  };

  const updateItemInCart = (itemId, itemQuantity) => () => {
    updateItemQuantity(itemId, itemQuantity);
  };

  useEffect(() => {
    activeModal ? setDisabledHandle(true) : setDisabledHandle(false);
  }, [activeModal, setDisabledHandle]);

  useEffect(() => {
    setClientItems(items);
    setClientItemsTotal(Math.round(cartTotal));
  }, [items, cartTotal]);

  return (
    <div onClick={(e) => closeModalWrapper(e)} ref={modalRef} className={activeModal ? 'product-modal active' : 'product-modal'}>
      <div className="product-modal__wrapper">
        <button onClick={closeModal()} className="product-modal__close-btn">
          <div className="product-modal__close-btn-icon">
            <Image src={iconCloseWhite} alt="icon close" />
          </div>
        </button>

        {/* HEADER START */}
        <div className="product-modal__header">
          <div className="product-modal__top">
            <div className="text text_25 product-modal__top-title">Added to cart</div>
            <div className="inline-flex-center product-modal__top-img-wrapper">
              <Image src={iconCloseBlack} alt="icon" layout="responsive" />
            </div>
          </div>
          <div className="container product-modal__top-actions">
            <button className="ui-btn ui-btn_fill-grey product-modal__top-actions-item">
              <span>BACK</span>
            </button>
            <button className="ui-btn product-modal__top-actions-item">
              <span>CHECK OUT</span>
            </button>
          </div>
        </div>
        {/* HEADER END */}

        {/* CONTENT START */}
        <div className="product-modal__content">
          <div className="container product-modal__summ-and-products">
            <div onClick={setVisibleProductsToggle()} className={visibleProducts ? 'product-modal__summ-area active' : 'product-modal__summ-area'}>
              <div className="inline-flex-center product-modal__summ-icon-cart-wrapper">
                <Image src={iconCartBlue} alt="icon" />
              </div>
              <p className="product-modal__summ-title">Hide order summary</p>
              <div className="inline-flex-center product-modal__summ-icon-arrow-up-wrapper">
                <Image src={iconArrowTop} alt="icon" />
              </div>
              <p className="text text_bold product-modal__summ-total">$ {clientItemsTotal}</p>
            </div>

            <div className={visibleProducts ? 'product-modal__products-area active' : 'product-modal__products-area'}>
              <div className="product-modal__product">
                <div className="product-modal__product-main-area">
                  <div className="product-modal__product-img-wrapper">
                    <img src="" alt="" className="product-modal__product-img" />
                  </div>
                  <div className="product-modal__product-name-and-price">
                    <p className="product-modal__product-name">Ninebot KickScooter MAX</p>
                    <p className="product-modal__product-price"> 1 x $949.99</p>
                  </div>
                  <div className="product-modal__product-counter">
                    <button className="inline-flex-center product-modal__product-count-minus">
                      <BiMinus />
                    </button>
                    <p className="product-modal__product-count">1</p>
                    <button className="inline-flex-center product-modal__product-count-plus">
                      <BiPlus />
                    </button>
                  </div>
                </div>
                <div className="product-modal__product-warrancy-area">
                  <p className="product-modal__product-warrancy-title">Add an extended warranty from Extend</p>
                  <div className="product-modal__product-warrancy-items">
                    <button className="product-modal__product-warrancy">
                      <span className="product-modal__product-warrancy-year">1 year</span>
                      <span className="product-modal__product-warrancy-price">$139</span>
                    </button>
                    <button className="product-modal__product-warrancy">
                      <span className="product-modal__product-warrancy-year">2 year</span>
                      <span className="product-modal__product-warrancy-price">$209</span>
                    </button>
                    <button className="product-modal__product-warrancy">
                      <span className="product-modal__product-warrancy-year">3 year</span>
                      <span className="product-modal__product-warrancy-price">$279</span>
                    </button>
                  </div>
                </div>
              </div>

              {clientItems.map((item) => {
                const {id, type, name, shortName, price, maxSpeed, rangeByMiles, batteryCapacity, netWeight, payload, charginTime, numberOfBatteries, motorPower, powerOutput, maxIncline, shockAbsorption, safety, atmosphereLight, imgPath, imgSmallPath, quantity} = item;
                return (
                  <div key={id} className="product-modal__product">
                    <div className="product-modal__product-main-area">
                      <div className="product-modal__product-img-wrapper">
                        <img src={`./${imgPath}`} alt={name} className="product-modal__product-img" />
                      </div>
                      <div className="product-modal__product-name-and-price">
                        <p className="product-modal__product-name">{name}</p>
                        <p className="product-modal__product-price">
                          {' '}
                          {quantity} x ${price}
                        </p>
                      </div>
                      <div className="product-modal__product-counter">
                        <button onClick={updateItemInCart(id, quantity - 1)} className="inline-flex-center product-modal__product-count-minus">
                          <BiMinus />
                        </button>
                        <p className="product-modal__product-count">{quantity}</p>
                        <button onClick={addItemToCart(item)} className="inline-flex-center product-modal__product-count-plus">
                          <BiPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="product-modal__accessoeries">
            <p className="text text_25 product-modal__accessoeries-title">Accessories</p>
            <div className="container product-modal__accessoeries-swiper-wrapper">
              <div className="product-modal__accessoeries-swiper">
                <Swiper
                  modules={[Navigation, FreeMode]}
                  spaceBetween={10}
                  slidesPerView={2}
                  loop={false}
                  freeMode={true}
                  navigation={{
                    prevEl: '.product-modal__nav_prev',
                    nextEl: '.product-modal__nav_next'
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 16
                    }
                  }}>
                  {accessoeries.map((item) => {
                    const {id, name, nameWrap, description, price, imgPath} = item;
                    return (
                      <SwiperSlide key={id} className="product-modal__accessoeries-item">
                        <div className="product-modal__accessoeries-img-wrapper">
                          <img src={`.${imgPath}`} alt={name} className="product-modal__accessoeries-img" />
                        </div>
                        <p className="product-modal__accessoeries-name">{name}</p>
                        <p className="product-modal__accessoeries-price">${price}}</p>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div className={activeIndex !== 0 ? 'product-modal__navigation' : 'product-modal__navigation disabled'}>
                  <button className="product-modal__nav product-modal__nav_prev">
                    <BsChevronCompactLeft className="product-modal__nav-icon" />
                  </button>
                  <button className="product-modal__nav product-modal__nav_next">
                    <BsChevronCompactRight className="product-modal__nav-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTENT END */}
      </div>
    </div>
  );
}
