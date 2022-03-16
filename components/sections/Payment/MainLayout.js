import Image from 'next/image';
import Breadcrumbs from './Breadcrumbs';
import UserCartStatus from './UserCartStatus';

export default function MainLayout({ children }) {
  return (
    <div className="payment-layout">
      <div className="container payment-layout__container">
        <div className="payment-layout__left">
          <div className="hide-991">
            <Breadcrumbs />
          </div>
          {children}
        </div>
        <div className="payment-layout__right">

          {/* 1 */}
          {/* <div className="product-modal">
            <div className="product-modal__wrapper"> */}

              {/* <div ref={targetScrollElement} className={visibleProducts ? 'product-modal__content active' : 'product-modal__content'}>
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
              </div> */}

            {/* </div>
          </div> */}
          {/* 2 */}
          <UserCartStatus />
        </div>
      </div>
    </div>
  );
}
