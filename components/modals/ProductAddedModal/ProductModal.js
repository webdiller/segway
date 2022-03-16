import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FcPrevious, FcNext } from 'react-icons/fc';
import imagePlaceholder from '@/base/circle-placeholder.svg';
import iconCloseBlack from '@/base/icon-close-black.svg';
import iconCloseWhite from '@/base/icon-close-white.svg';
import iconCartBlue from '@/base/icon-cart-blue.svg';
import iconArrowTop from '@/base/icon-arrow-top-black.svg';
import iconCheckForAccesoeriesSlider from '@/base/icon-check-bold.svg'
import { BiMinus, BiPlus } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { productModalActiveSet } from 'store/slices/modalsSlice';
import { addQuantity, pushProduct, removeProduct } from 'store/slices/productCartSlice';
import { WarrancyToggler, ColorToggler } from './index'

export default function ProductModal({ accessoeries }) {

  const modalWrapperElement = useRef(null);
  const targetScrollElement = useRef(null);
  const targetVisibleItemsElement = useRef(null);
  const targetItemsAreaElement = useRef(null);


  const [visibleProducts, setVisibleProducts] = useState(true);
  const modalRef = useRef(null);

  const { products, totalPrice } = useSelector((state) => state.products);
  const { productModal: { activeModal } } = useSelector((state) => state.modals);

  const dispatch = useDispatch();

  const closeModal = () => {
    if (window.innerWidth <= 991) {
      modalRef.current.classList.add('scroll-modal-to-bottom');
      setTimeout(() => {
        modalRef.current.classList.remove('scroll-modal-to-bottom');
        modalRef.current.classList.remove('active');
        dispatch(productModalActiveSet(false));
      }, 300);
    } else {
      modalRef.current.classList.remove('scroll-modal-to-bottom');
      modalRef.current.classList.remove('active');
      dispatch(productModalActiveSet(false));
    }
  };

  const closeModalWrapper = (e) => {
    if (e.target === modalRef.current) {
      modalRef.current.classList.remove('active');
      dispatch(productModalActiveSet(false));
    }
  };

  const setVisibleProductsToggle = () => setVisibleProducts((prev) => !prev);

  const addItemToCartWithAnimation = (e, item) => {
    dispatch(pushProduct(item))
    e.target.classList.add('added');
    setTimeout(() => {
      e.target.classList.remove('added');
    }, 600);
  };

  useEffect(() => {
    const onEventHandler = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    document.addEventListener('keydown', onEventHandler);
    return () => {
      document.removeEventListener('keydown', onEventHandler);
    };
  });

  return (
    <div ref={modalRef} onClick={(e) => closeModalWrapper(e)} className={activeModal ? "product-modal product-modal_fixed active" : "product-modal product-modal_fixed"}>
      <div ref={modalWrapperElement} className={visibleProducts ? 'product-modal__wrapper active' : 'product-modal__wrapper'}>
        <button onClick={closeModal} className="product-modal__close-btn">
          <div className="product-modal__close-btn-icon">
            <Image src={iconCloseWhite} alt="icon close" />
          </div>
        </button>

        {/* HEADER START */}
        <div className="product-modal__header">
          <div className="product-modal__top">
            <div className="text text_25 product-modal__top-title">Added to cart</div>

            <div onClick={closeModal} className="inline-flex-center product-modal__top-img-wrapper">
              <Image src={iconCloseBlack} alt="icon" layout="responsive" />
            </div>
          </div>
          <div className="product-modal__top-actions product-modal__top-actions_mobile">
            <button onClick={closeModal} className="ui-btn ui-btn_fill-grey product-modal__top-actions-item">
              <span>BACK</span>
            </button>
            <Link href="/payment" >
              <a className="ui-btn product-modal__top-actions-item" onClick={() => document.body.classList.remove('disabled')}><span>CHECK OUT</span></a>
            </Link>
          </div>
        </div>
        {/* HEADER END */}

        {/* CONTENT START */}
        <div ref={targetScrollElement} className={visibleProducts ? 'product-modal__content active' : 'product-modal__content'}>
          <div className="product-modal__summ-and-products">
            <div ref={targetVisibleItemsElement} className={visibleProducts ? 'product-modal__summ-area active' : 'product-modal__summ-area'}>
              <div onClick={setVisibleProductsToggle} className="product-modal__summ-icon-with-text">
                <div className="inline-flex-center product-modal__summ-icon-cart-wrapper">
                  <Image src={iconCartBlue} alt="icon" />
                </div>
                <p className="product-modal__summ-title">Hide order summary</p>
              </div>

              <div className="inline-flex-center product-modal__summ-icon-arrow-up-wrapper">
                <Image src={iconArrowTop} alt="icon" />
              </div>
              <p className="text text_bold product-modal__summ-total">$ {totalPrice.toFixed(2)}</p>
            </div>

            <div ref={targetItemsAreaElement} className={visibleProducts ? 'product-modal__products-area active' : 'product-modal__products-area'}>
              {products.map((item) => {
                const { id, name, price, imgPath, quantity, colors } = item;

                return (
                  <div key={id} className="product-modal__product">
                    <div className="product-modal__product-main-area">
                      <div className="product-modal__product-img-wrapper">
                        <Image layout="fill" objectFit="contain" src={imgPath} alt={name} className="product-modal__product-img" />
                      </div>

                      <div className="product-modal__product-name-and-price">
                        <p className="product-modal__product-name">{name}</p>
                        <p className="product-modal__product-price">{quantity} x ${price}</p>
                        {/* <span style={{ fontSize: 12, whiteSpace: 'nowrap' }}>id: {id}</span> */}
                        {colors && (
                          <ColorToggler product={item} />
                        )}
                      </div>

                      <div className="product-modal__product-counter">
                        <button onClick={() => dispatch(removeProduct(item))} className="inline-flex-center product-modal__product-count-minus">
                          <BiMinus />
                        </button>
                        <p className="product-modal__product-count">{quantity}</p>
                        <button onClick={() => dispatch(addQuantity({ id: item.id }))} className="inline-flex-center product-modal__product-count-plus">
                          <BiPlus />
                        </button>
                      </div>
                    </div>

                    {item.warranty && (
                      <div className="product-modal__product-warrancy-area">
                        <p className="product-modal__product-warrancy-title">Add an extended warranty from Extend</p>
                        <WarrancyToggler product={item} />
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          </div>


          {/* Слайдер с аксессуарами */}
          <div className="product-modal__accessoeries">
            <p className="text text_25 product-modal__accessoeries-title">Accessories</p>
            <div className="product-modal__accessoeries-swiper-wrapper">
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
                  }}
                >

                  {accessoeries.map((item) => {
                    const { id, name, nameWrap, description, price, imgPath } = item;
                    return (
                      <SwiperSlide onClick={(e) => addItemToCartWithAnimation(e, item)} key={id} className="product-modal__accessoeries-item">
                        <div className="product-modal__accessoeries-img-main-wrapper">
                          <div className="product-modal__accessoeries-img-wrapper">
                            <Image objectFit="contain" width="152" height="155" layout="responsive" src={imgPath} alt={name} className="product-modal__accessoeries-img" placeholder="blur" blurDataURL={imagePlaceholder} />
                          </div>
                          <div className="product-modal__accessoeries-overlay">
                            <p className="product-modal__accessoeries-overlay-text">Added to card</p>
                            <div className="product-modal__accessoeries-overlay-icon">
                              <Image className="product-modal__accessoeries-overlay-icon" src={iconCheckForAccesoeriesSlider} alt="icon" />
                            </div>
                          </div>
                        </div>
                        <p className="product-modal__accessoeries-name">{name}</p>
                        <p className="product-modal__accessoeries-price">${price}</p>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div className="product-modal__navigation">
                  <div aria-label="swipe to left accessoeries" className="product-modal__nav product-modal__nav_prev">
                    <FcPrevious className="product-modal__nav-icon" />
                  </div>
                  <div aria-label="swipe to right accessoeries" className="product-modal__nav product-modal__nav_next">
                    <FcNext className="product-modal__nav-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hide-991 product-modal__top-actions product-modal__top-actions_desktop">
            <button onClick={closeModal} className="ui-btn ui-btn_fill-grey product-modal__top-actions-item">
              <span>BACK</span>
            </button>
            <Link href="/payment">
              <a onClick={closeModal} className="ui-btn product-modal__top-actions-item">
                <span>CHECK OUT</span>
              </a>
            </Link>
          </div>
        </div>
        {/* CONTENT END */}
      </div>
    </div>
  );
}
