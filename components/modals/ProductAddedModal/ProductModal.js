/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import {useCart} from 'react-use-cart';
import {useEffect, useRef, useState} from 'react';
import {Navigation, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FcPrevious, FcNext} from 'react-icons/fc';
import imagePlaceholder from '@/base/circle-placeholder.svg';
import iconCloseBlack from '@/base/icon-close-black.svg';
import iconCloseWhite from '@/base/icon-close-white.svg';
import iconCartBlue from '@/base/icon-cart-blue.svg';
import iconArrowTop from '@/base/icon-arrow-top-black.svg';
import {BiMinus, BiPlus} from 'react-icons/bi';
import {useDispatch, useSelector} from 'react-redux';
import {setProductModal} from 'store/actions/productModal';
import {useRouter} from 'next/dist/client/router';

const ItemSegwayWarranty = ({allItems, segwayItem, updateItemQuantityHandler, addItemHandler}) => {
  const [tabToggle, setTabToggle] = useState(segwayItem.selectedWarranty);
  const [initWarranty, setInitWarranty] = useState(segwayItem.selectedWarranty || segwayItem.id);
  const [isClicked, setIsClicked] = useState(false);

  const tabToggleHandler = (event, expectedWarranty) => {
    if (event.target.classList.contains('selected')) {
      setTabToggle(null);
      setIsClicked(true);
      event.target.classList.remove('selected');
    } else {
      setTabToggle(expectedWarranty);
      setIsClicked(true);
      event.target.classList.add('selected');
    }
  };

  useEffect(() => {
    let idWithoutWarranty = segwayItem.id.split('?')[0];
    let newId = null;

    if (isClicked) {
      if (tabToggle !== null) {
        setIsClicked(false);
        newId = `${idWithoutWarranty}?warrancy=${tabToggle}`;

        updateItemQuantityHandler(segwayItem.id, 0);

        let newItem = {...segwayItem, id: newId};
        delete newItem['quantity'];
        addItemHandler(newItem, segwayItem.quantity);
      } else {
        setIsClicked(false);
        newId = tabToggle ? `${idWithoutWarranty}?warrancy=${tabToggle}` : idWithoutWarranty;

        updateItemQuantityHandler(segwayItem.id, 0);
        let newItem = {...segwayItem, id: newId};
        delete newItem['quantity'];
        addItemHandler(newItem, segwayItem.quantity);
      }
    }
  }, [tabToggle, segwayItem, allItems, initWarranty, isClicked, addItemHandler, updateItemQuantityHandler]);

  return (
    <div className="product-modal__product-warrancy-items">
      <button onClick={(event) => tabToggleHandler(event, 'oneYear')} className={segwayItem.id.includes('oneYear') ? 'product-modal__product-warrancy selected' : 'product-modal__product-warrancy'}>
        <span className="product-modal__product-warrancy-year">1 year</span>
        <span className="product-modal__product-warrancy-price">${segwayItem?.warranty?.oneYear?.price}</span>
      </button>

      <button onClick={(event) => tabToggleHandler(event, 'twoYear')} className={segwayItem.id.includes('twoYear') ? 'product-modal__product-warrancy selected' : 'product-modal__product-warrancy'}>
        <span className="product-modal__product-warrancy-year">2 year</span>
        <span className="product-modal__product-warrancy-price">${segwayItem?.warranty?.twoYear?.price}</span>
      </button>

      <button onClick={(event) => tabToggleHandler(event, 'threeYear')} className={segwayItem.id.includes('threeYear') ? 'product-modal__product-warrancy selected' : 'product-modal__product-warrancy'}>
        <span className="product-modal__product-warrancy-year">3 year</span>
        <span className="product-modal__product-warrancy-price">${segwayItem?.warranty?.threeYear?.price}</span>
      </button>
    </div>
  );
};

export default function ProductModal({segways, accessoeries}) {
  // scroll
  const targetScrollElement = useRef(null);
  const [currentPageOffset, setCurrentPageOffset] = useState(0);

  // modals
  const [visibleProducts, setVisibleProducts] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const modalRef = useRef(null);

  // data
  const {items: segwaysWithAccessoeriesFromUseCart, cartTotal, addItem, updateItemQuantity} = useCart();
  const {active: isActiveModal} = useSelector((state) => state.productModal);

  const [clientAllSegways, setClientAllSegways] = useState([]);
  const [clientAllAccessoeries, setClientAllAccessoeries] = useState([]);
  const [totalPriceWithWarranty, setTotalPriceWithWarranty] = useState(0);
  const dispatch = useDispatch();
  const router = useRouter();

  const closeModal = (goToUserCart, route) => () => {
    if (goToUserCart) {
      router.push(`${route}`);
      dispatch(setProductModal(false));
    } else {
      const bodySelector = document.querySelector('body');
      modalRef.current.classList.remove('active');
      bodySelector.style.removeProperty('overflow');
      bodySelector.style.removeProperty('position');
      bodySelector.style.removeProperty('top');
      bodySelector.style.removeProperty('width');
      window.scrollTo(0, currentPageOffset);
      dispatch(setProductModal(false));
    }
  };

  const closeModalWrapper = (e) => {
    if (e.target === modalRef.current) {
      const bodySelector = document.querySelector('body');
      modalRef.current.classList.remove('active');
      bodySelector.style.removeProperty('overflow');
      bodySelector.style.removeProperty('position');
      bodySelector.style.removeProperty('top');
      bodySelector.style.removeProperty('width');
      window.scrollTo(0, currentPageOffset);
      dispatch(setProductModal(false));
    }
  };

  const setVisibleProductsToggle = () => () => setVisibleProducts((prev) => !prev);

  const addItemToCart = (item) => () => {
    addItem(item);
  };

  const addItemToCartWithAnimation = (e, item) => {
    addItem(item);
    e.target.classList.add('added');
    setTimeout(() => {
      e.target.classList.remove('added');
    }, 600);
  };

  /** itemId, itemQuantity  */
  const updateItemQuantityInCart = (itemId, itemQuantity) => () => {
    updateItemQuantity(itemId, itemQuantity);
  };

  const addItemInCart = (item, quantity) => {
    addItem(item, quantity);
  };

  useEffect(() => {
    const scooters = segwaysWithAccessoeriesFromUseCart.filter(({type}) => type === 'kickscooter' || type === 'kidsScooter');
    const accessoriesFilter = segwaysWithAccessoeriesFromUseCart.filter(({type}) => type === 'accessory');
    setClientAllSegways(scooters);
    setClientAllAccessoeries(accessoriesFilter);
  }, [segwaysWithAccessoeriesFromUseCart, cartTotal]);

  useEffect(() => {
    setTotalPriceWithWarranty(0);
    segwaysWithAccessoeriesFromUseCart.map((product) => {
      if (product.id.includes('warrancy')) {
        try {
          const {id, warranty, price, quantity} = product;
          let warrantyId = id.split('warrancy=')[1];
          let priceOfWarranty = Number(warranty[warrantyId].price);
          let totalPrice = (priceOfWarranty + Number(price)) * Number(quantity);
          setTotalPriceWithWarranty((prev) => (prev += totalPrice));
        } catch (error) {
          console.log(error);
        }
      } else {
        const {price, quantity} = product;
        let totalPrice = Number(price) * quantity;
        setTotalPriceWithWarranty((prev) => (prev += totalPrice));
      }
    });
  }, [segwaysWithAccessoeriesFromUseCart, cartTotal]);

  useEffect(() => {
    const bodySelector = document.querySelector('body');
    if (isActiveModal) {
      try {
        setCurrentPageOffset(window.pageYOffset);
        modalRef.current.classList.add('enable-background');
        setTimeout(() => {
          bodySelector.style.position = 'fixed';
          bodySelector.style.overflow = 'hidden';
          bodySelector.style.width = '100%';
          bodySelector.style.top = `-${currentPageOffset}px`;
          setVisibleProducts(true);
        }, 200);
        setTimeout(() => {
          modalRef.current.classList.remove('enable-background');
          modalRef.current.classList.add('active');
        }, 350);
      } catch (error) {
        console.log(error);
      }
    } else if (!isActiveModal) {
      modalRef.current.classList.remove('active');
      bodySelector.style.removeProperty('overflow');
      bodySelector.style.removeProperty('position');
      bodySelector.style.removeProperty('top');
      bodySelector.style.removeProperty('width');
      window.scrollTo(0, currentPageOffset);
    }
  }, [isActiveModal, currentPageOffset]);

  return (
    <div onClick={(e) => closeModalWrapper(e)} ref={modalRef} className="product-modal">
      <div className={visibleProducts ? 'product-modal__wrapper active' : 'product-modal__wrapper'}>
        <button onClick={closeModal()} className="product-modal__close-btn">
          <div className="product-modal__close-btn-icon">
            <Image src={iconCloseWhite} alt="icon close" />
          </div>
        </button>

        {/* HEADER START */}
        <div className="product-modal__header">
          <div className="product-modal__top">
            <div className="text text_25 product-modal__top-title">Added to cart</div>
            <div onClick={closeModal()} className="inline-flex-center product-modal__top-img-wrapper">
              <Image src={iconCloseBlack} alt="icon" layout="responsive" />
            </div>
          </div>
          <div className="product-modal__top-actions product-modal__top-actions_mobile">
            <button onClick={closeModal()} className="ui-btn ui-btn_fill-grey product-modal__top-actions-item">
              <span>BACK</span>
            </button>
            <button onClick={closeModal(true, '/user-cart')} className="ui-btn product-modal__top-actions-item">
              <span>CHECK OUT</span>
            </button>
          </div>
        </div>
        {/* HEADER END */}

        {/* CONTENT START */}
        <div ref={targetScrollElement} className={visibleProducts ? 'product-modal__content active' : 'product-modal__content'}>
          <div className="product-modal__summ-and-products">
            <div onClick={setVisibleProductsToggle()} className={visibleProducts ? 'product-modal__summ-area active' : 'product-modal__summ-area'}>
              <div className="inline-flex-center product-modal__summ-icon-cart-wrapper">
                <Image src={iconCartBlue} alt="icon" />
              </div>
              <p className="product-modal__summ-title">Hide order summary</p>
              <div className="inline-flex-center product-modal__summ-icon-arrow-up-wrapper">
                <Image src={iconArrowTop} alt="icon" />
              </div>
              <p className="text text_bold product-modal__summ-total">$ {totalPriceWithWarranty.toFixed(2)}</p>
            </div>

            <div className={visibleProducts ? 'product-modal__products-area active' : 'product-modal__products-area'}>
              {clientAllSegways.map((item) => {
                const {id, name, price, imgPath, quantity} = item;

                return (
                  <div key={id} className="product-modal__product">
                    <div className="product-modal__product-main-area">
                      <div className="product-modal__product-img-wrapper">
                        <Image layout="fill" objectFit="contain" src={imgPath} alt={name} className="product-modal__product-img" />
                      </div>
                      <div className="product-modal__product-name-and-price">
                        <p className="product-modal__product-name">{name}</p>
                        <p className="product-modal__product-price">
                          {quantity} x ${price}
                        </p>
                      </div>
                      <div className="product-modal__product-counter">
                        <button onClick={updateItemQuantityInCart(id, quantity - 1)} className="inline-flex-center product-modal__product-count-minus">
                          <BiMinus />
                        </button>
                        <p className="product-modal__product-count">{quantity}</p>
                        <button onClick={addItemToCart(item)} className="inline-flex-center product-modal__product-count-plus">
                          <BiPlus />
                        </button>
                      </div>
                    </div>
                    <div className="product-modal__product-warrancy-area">
                      <p className="product-modal__product-warrancy-title">Add an extended warranty from Extend</p>
                      <ItemSegwayWarranty allItems={clientAllSegways} segwayItem={item} updateItemQuantityHandler={updateItemQuantity} addItemHandler={addItemInCart} />
                    </div>
                  </div>
                );
              })}

              {clientAllAccessoeries.map((item) => {
                const {id, name, price, imgPath, quantity} = item;

                return (
                  <div key={id} className="product-modal__product">
                    <div className="product-modal__product-main-area">
                      <div className="product-modal__product-img-wrapper">
                        <Image layout="fill" objectFit="contain" src={imgPath} alt={name} className="product-modal__product-img" />
                      </div>
                      <div className="product-modal__product-name-and-price">
                        <p className="product-modal__product-name">{name}</p>
                        <p className="product-modal__product-price">
                          {quantity} x ${price}
                        </p>
                      </div>
                      <div className="product-modal__product-counter">
                        <button onClick={updateItemQuantityInCart(id, quantity - 1)} className="inline-flex-center product-modal__product-count-minus">
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
                  onSlideChange={(el) => {
                    setActiveIndex(el.activeIndex);
                  }}>
                  {accessoeries.map((item) => {
                    const {id, name, nameWrap, description, price, imgPath} = item;
                    return (
                      <SwiperSlide onClick={(e) => addItemToCartWithAnimation(e, item)} key={id} className="product-modal__accessoeries-item">
                        <div className="product-modal__accessoeries-img-main-wrapper">
                          <div className="product-modal__accessoeries-img-wrapper">
                            <Image objectFit="contain" width="152" height="155" layout="responsive" src={imgPath} alt={name} className="product-modal__accessoeries-img" placeholder="blur" blurDataURL={imagePlaceholder} />
                          </div>
                          <div className="product-modal__accessoeries-overlay">
                            <p className="product-modal__accessoeries-overlay-text">Added to card</p>
                            <img width="63" height="50" loading="lazy" className="product-modal__accessoeries-overlay-icon" src="./icon-check-bold.svg" alt="icon" />
                          </div>
                        </div>
                        <p className="product-modal__accessoeries-name">{name}</p>
                        <p className="product-modal__accessoeries-price">${price}</p>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div className={activeIndex !== 0 ? 'product-modal__navigation' : 'product-modal__navigation disabled'}>
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
            <button onClick={closeModal()} className="ui-btn ui-btn_fill-grey product-modal__top-actions-item">
              <span>BACK</span>
            </button>
            <a onClick={closeModal(true, '/user-cart')} className="ui-btn product-modal__top-actions-item">
              <span>CHECK OUT</span>
            </a>
          </div>
        </div>
        {/* CONTENT END */}
      </div>
    </div>
  );
}
