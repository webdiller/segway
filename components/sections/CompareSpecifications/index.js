/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import segwayPlaceholder from '@/base/segway-placeholder.png';
import {FcPrevious, FcNext} from 'react-icons/fc';

import React, {useEffect, useRef, useState} from 'react';
import {useCart} from 'react-use-cart';

import iconSpeed from '@/base/icon-speed.svg';
import iconRange from '@/base/icon-range.svg';
import iconBattery from '@/base/icon-battery.svg';
import iconWeight from '@/base/icon-weight.svg';
import iconPayload from '@/base/icon-payload.svg';
import iconCharging from '@/base/icon-charge-time.svg';
import iconNumBattery from '@/base/icon-num-battery.svg';
import iconPower from '@/base/icon-power.svg';
import iconPowerOutput from '@/base/icon-power-output.svg';
import iconIncline from '@/base/icon-incline.svg';
import iconShock from '@/base/icon-shock.svg';
import iconSafety from '@/base/icon-safety.svg';
import iconAtmosphere from '@/base/icon-atmosphere.svg';
import {setProductModal} from '@/actions/productModal';
import {setCompareModal} from '@/actions/compareModal';
import {useDispatch, useSelector} from 'react-redux';
import ModalWrapper from '@/modals/ModalWrapper';

export default function CompareSpecifications({items, mainSegway}) {
  const {addItem} = useCart();
  const dispatch = useDispatch();
  const targetScrollElement = useRef(null);

  const {active: isActiveCompareModal} = useSelector((state) => state.compareModal);

  // Активный индекс у слайдера (для больших экранов)
  const [activeIndex, setActiveIndex] = useState(0);

  // Все модели
  const [allModels] = useState([...items.adultSegways, ...items.kidsSegways]);

  // Если есть модель, то отобразить данные, иначе показать прочерк
  const [selectedModel, setSelectedModel] = useState();

  const setUrlIfModalActive = () => {
    if (!isActiveCompareModal) {
      dispatch(setProductModal(true));
    } else {
      dispatch(setProductModal(false));
    }
  };

  const closeOnClickOutsite = (event) => {
    if (isActiveCompareModal && targetScrollElement.current === event.target) {
      dispatch(setCompareModal(false));
    }
  };

  const closeModal = () => () => {
    dispatch(setCompareModal(false));
  };

  const openModal = () => () => {
    dispatch(setCompareModal(true));
  };

  const setSelectedModelHandle = (id) => {
    const filtered = allModels.filter((model) => model.id == id);
    setSelectedModel(...filtered);
    dispatch(setCompareModal(false));
    setUrlIfModalActive();
  };

  const addItemToCartAndShowModal = (event, productItem) => {
    addItem(productItem);
    dispatch(setProductModal(true));
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && selectedModel) {
      localStorage.setItem('selectedModel', JSON.stringify(selectedModel));
    }
    if (typeof window !== 'undefined' && !selectedModel) {
      let storageItem = JSON.parse(localStorage.getItem('selectedModel'));
      if (storageItem) {
        setSelectedModel(storageItem);
      }
    }
  }, [selectedModel]);

  useEffect(() => {
    isActiveCompareModal ? document.body.classList.add('disabled') : document.body.classList.remove('disabled');
  }, [isActiveCompareModal]);

  return (
    <div className="compare-specfications">
      <div className="container compare-specfications__container">
        <p className="title title_fz-20 compare-specfications__title">compare specifications</p>

        <p className="text compare-specfications__text">Add model to compare</p>

        {/* START HERE */}
        <div className="compare-specfications__main-slide-with-swiper">
          <div className="main-slide compare-specfications__main-slide">
            <div className="main-slide__wrapper">
              <div className="main-slide__header">
                <div className="main-slide__header-left">
                  <div className="main-slide__img-wrapper">
                    <Image
                      objectFit="contain"
                      src={mainSegway.imgPath}
                      alt={mainSegway.name}
                      width={180}
                      height={180}
                      quality={90}
                      layout="responsive"
                      placeholder="blur"
                      blurDataURL={segwayPlaceholder}
                    />
                  </div>
                  <p className="text text_bold main-slide__name">{mainSegway.name}</p>
                </div>
                <div className="main-slide__header-right">
                  <div onClick={openModal()} className="main-slide__img-compare-wrapper">
                    <img
                      loading="lazy"
                      width="104"
                      height="104"
                      src={!selectedModel ? './icon-compare.svg' : `${selectedModel.imgPath}`}
                      alt="icon-compare"
                      className={!selectedModel ? 'main-slide__img-compare' : 'main-slide__img-compare selected'}
                    />
                  </div>
                  <p className="text text_bold main-slide__name">{!selectedModel ? 'Add model' : selectedModel.name} </p>
                </div>
              </div>

              <div className="main-slide__items">
                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconSpeed} alt="icon" />
                      </div>
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{mainSegway.maxSpeed}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconSpeed} alt="icon" />
                      </div>
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{!selectedModel ? '--' : selectedModel.maxSpeed}</div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconRange} alt="icon" />
                      </div>
                      Range (miles)
                    </div>
                    <div className="main-slide__item-value main-slide__item-value_range">
                      <span className="hide-576">{mainSegway.rangeByMiles}</span>
                      <span className="show-block-576">{mainSegway.rangeByMilesWrap}</span>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconRange} alt="icon" />
                      </div>
                      Max. speed
                    </div>
                    <div className="main-slide__item-value main-slide__item-value_range">
                      {!selectedModel ? (
                        '--'
                      ) : (
                        <>
                          <span className="hide-576">{selectedModel.rangeByMiles}</span>
                          <span className="show-block-576">{selectedModel.rangeByMilesWrap}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconBattery} alt="icon" />
                      </div>
                      Battery Capacity
                    </div>

                    <div className="main-slide__item-value">{mainSegway.batteryCapacity}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconBattery} alt="icon" />
                      </div>
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{!selectedModel ? '--' : selectedModel.batteryCapacity}</div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconWeight} alt="icon" />
                      </div>
                      Net Weight
                    </div>
                    <div className="main-slide__item-value main-slide__item-value_weight">
                      <span className="hide-576">{mainSegway.netWeight}</span>
                      <span className="show-block-576">{mainSegway.netWeightWrap}</span>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconWeight} alt="icon" />
                      </div>
                      Max. speed
                    </div>
                    <div className="main-slide__item-value main-slide__item-value_weight">
                      {!selectedModel ? (
                        '--'
                      ) : (
                        <>
                          <span className="hide-576">{selectedModel.netWeight}</span>
                          <span className="show-block-576">{selectedModel.netWeightWrap}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconPayload} alt="icon" />
                      </div>
                      Payload
                    </div>
                    <div className="main-slide__item-value main-slide__item-value_payload">
                      <span className="hide-576">{mainSegway.payload}</span>
                      <span className="show-block-576">{mainSegway.payloadWrap}</span>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconPayload} alt="icon" />
                      </div>
                      Max. speed
                    </div>
                    <div className="main-slide__item-value main-slide__item-value_payload">
                      {!selectedModel ? (
                        '--'
                      ) : (
                        <>
                          <span className="hide-576">{selectedModel.payload}</span>
                          <span className="show-block-576">{selectedModel.payloadWrap}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconCharging} alt="icon" />
                      </div>
                      Chargin Time
                    </div>
                    <div className="main-slide__item-value">{mainSegway.charginTime}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <Image className="main-slide__item-icon" src={iconCharging} alt="icon" />
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{!selectedModel ? '--' : selectedModel.charginTime}</div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconNumBattery} alt="icon" />
                      </div>
                      Number of Batteries
                    </div>
                    <div className="main-slide__item-value">{mainSegway.numberOfBatteries}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconNumBattery} alt="icon" />
                      </div>
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{!selectedModel ? '--' : selectedModel.numberOfBatteries}</div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconPower} alt="icon" />
                      </div>
                      Motor power
                    </div>
                    <div className="main-slide__item-value">{mainSegway.motorPower}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconPower} alt="icon" />
                      </div>
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{!selectedModel ? '--' : selectedModel.motorPower}</div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconPowerOutput} alt="icon" />
                      </div>
                      Power Output
                    </div>
                    <div className="main-slide__item-value">{mainSegway.powerOutput}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <Image className="main-slide__item-icon" src={iconPowerOutput} alt="icon" />
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{!selectedModel ? '--' : selectedModel.powerOutput}</div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconIncline} alt="icon" />
                      </div>
                      Max. Incline
                    </div>
                    <div className="main-slide__item-value">{mainSegway.maxIncline}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconIncline} alt="icon" />
                      </div>
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{!selectedModel ? '--' : selectedModel.maxIncline}</div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconShock} alt="icon" />
                      </div>
                      Shock Absorption
                    </div>
                    <div className="main-slide__item-value">{mainSegway.shockAbsorption}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconShock} alt="icon" />
                      </div>
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{!selectedModel ? '--' : selectedModel.shockAbsorption}</div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconSafety} alt="icon" />
                      </div>
                      Safety
                    </div>
                    <div className="main-slide__item-value">{mainSegway.safety}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconSafety} alt="icon" />
                      </div>
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{!selectedModel ? '--' : selectedModel.safety}</div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconAtmosphere} alt="icon" />
                      </div>
                      Atmosphere Light
                    </div>
                    <div className="main-slide__item-value">{mainSegway.atmosphereLight}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <div className="main-slide__item-icon-wrapper">
                        <Image className="main-slide__item-icon" src={iconAtmosphere} alt="icon" />
                      </div>
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{!selectedModel ? '--' : selectedModel.atmosphereLight}</div>
                  </div>
                </div>
              </div>

              <div className="main-slide__bottom">
                <div className="main-slide__bottom-left">
                  <p className="text text_25 main-slide__price">$949.99</p>

                  <button onClick={(e) => addItemToCartAndShowModal(e, mainSegway)} className="ui-btn main-slide__buy-btn">
                    <span>ADD TO CART</span>
                  </button>
                  <Link href="/details-page" scroll={false}>
                    <a className="main-slide__see-details">See details</a>
                  </Link>
                </div>
                <div className="main-slide__bottom-right">
                  {!selectedModel ? (
                    ''
                  ) : (
                    <>
                      <p className="text text_25 main-slide__price">${selectedModel.price}</p>

                      <button onClick={(e) => addItemToCartAndShowModal(e, selectedModel)} className="ui-btn main-slide__buy-btn">
                        <span>ADD TO CART</span>
                      </button>
                      <Link href="/details-page" scroll={false}>
                        <a className="main-slide__see-details">See details</a>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Swiper
            className="compare-specfications__swiper"
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={2}
            loop={false}
            allowTouchMove={false}
            navigation={{
              prevEl: '.compare-specfications__nav_prev',
              nextEl: '.compare-specfications__nav_next'
            }}
            onSlideChange={(el) => {
              setActiveIndex(el.activeIndex);
            }}
            breakpoints={{
              768: {
                slidesPerView: 3
              },
              1200: {
                slidesPerView: 3
              }
            }}>
            {allModels.map((item) => {
              const {
                id,
                type,
                name,
                shortName,
                price,
                maxSpeed,
                rangeByMiles,
                rangeByMilesWrap,
                batteryCapacity,
                netWeight,
                netWeightWrap,
                payload,
                payloadWrap,
                charginTime,
                numberOfBatteries,
                motorPower,
                powerOutput,
                maxIncline,
                shockAbsorption,
                safety,
                atmosphereLight,
                imgPath,
                links
              } = item;
              return (
                <SwiperSlide key={id} className="compare-specfications__slide">
                  <div className="compare-specfications__img-wrapper">
                    <Image
                      objectFit="contain"
                      className="compare-specfications__img"
                      src={imgPath}
                      alt={name}
                      width={180}
                      height={180}
                      quality={90}
                      layout="responsive"
                      placeholder="blur"
                      blurDataURL={segwayPlaceholder}
                    />
                  </div>
                  <p className="text text_bold compare-specfications__name">{name}</p>

                  <div className="compare-specfications__items">
                    {/* Max. speed */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Max. speed</div>
                      <div className="compare-specfications__item-value">{maxSpeed}</div>
                    </div>

                    {/* Range (miles) */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Range (miles)</div>
                      <div className="compare-specfications__item-value main-slide__item-value_range">
                        <span className="hide-576">{rangeByMiles}</span>
                        <span className="show-block-576">{rangeByMilesWrap}</span>
                      </div>
                    </div>

                    {/* Battery Capacity */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Battery Capacity</div>
                      <div className="compare-specfications__item-value">{batteryCapacity}</div>
                    </div>

                    {/* Net Weight */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Net Weight</div>
                      <div className="compare-specfications__item-value">
                        <span className="hide-576">{netWeight}</span>
                        <span className="show-block-576">{netWeightWrap}</span>
                      </div>
                    </div>

                    {/* Payload */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Payload</div>
                      <div className="compare-specfications__item-value">
                        <span className="hide-576">{payload}</span>
                        <span className="show-block-576">{payloadWrap}</span>
                      </div>
                    </div>

                    {/* Chargin Time */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Chargin Time</div>
                      <div className="compare-specfications__item-value">{charginTime}</div>
                    </div>

                    {/* Number of Batteries */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Number of Batteries</div>
                      <div className="compare-specfications__item-value">{numberOfBatteries}</div>
                    </div>

                    {/* Motor power */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Motor power</div>
                      <div className="compare-specfications__item-value">{motorPower}</div>
                    </div>

                    {/* Power Output */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Power Output</div>
                      <div className="compare-specfications__item-value">{powerOutput}</div>
                    </div>

                    {/* Max. Incline */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Max. Incline</div>
                      <div className="compare-specfications__item-value">{maxIncline}</div>
                    </div>

                    {/* Shock Absorption */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Shock Absorption</div>
                      <div className="compare-specfications__item-value">{shockAbsorption}</div>
                    </div>

                    {/* Safety */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Safety</div>
                      <div className="compare-specfications__item-value">{safety}</div>
                    </div>

                    {/* Atmosphere Light */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Atmosphere Light</div>
                      <div className="compare-specfications__item-value">{atmosphereLight}</div>
                    </div>
                  </div>

                  <p className="text text_25 compare-specfications__price">${price}</p>

                  <button onClick={(e) => addItemToCartAndShowModal(e, item)} className="ui-btn compare-specfications__buy-btn">
                    <span>ADD TO CART</span>
                  </button>
                  <Link href="/details-page" scroll={false}>
                    <a className="compare-specfications__see-details">See details</a>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div
            className={
              activeIndex === 0 ? 'compare-specfications__navigation disabled-left' : activeIndex === 10 ? 'compare-specfications__navigation disabled-right' : 'compare-specfications__navigation'
            }>
            <button aria-label="swipe to left slider specifications" className="compare-specfications__nav compare-specfications__nav_prev">
              <FcPrevious className="compare-specfications__icon" />
            </button>

            <button aria-label="swipe to right slider specifications" className="compare-specfications__nav compare-specfications__nav_next">
              <FcNext className="compare-specfications__icon" />
            </button>
          </div>
        </div>

        <ModalWrapper mounted={isActiveCompareModal}>
          <div onClick={(e) => closeOnClickOutsite(e)} ref={targetScrollElement} className={isActiveCompareModal ? 'compare-modal active' : 'compare-modal'}>
            <div className="compare-modal__wrapper">
              <div className="compare-modal__wrapper-inner">
                <p className="title compare-modal__title">select a model to compare</p>
                <img onClick={closeModal()} className="compare-modal__icon-close" src="./icon-close.svg" alt="icon-close" width="34" height="34" loading="lazy" />
                <div className="compare-modal__items">
                  {allModels.map(({id, shortName, imgPath}) => (
                    <button
                      onClick={() => {
                        setSelectedModelHandle(id);
                      }}
                      key={id}
                      className={id === '006' ? 'compare-modal__item compare-modal__item_hidden' : 'compare-modal__item'}>
                      <div className="compare-modal__img-wrapper">
                        <Image objectFit="contain" src={imgPath} alt={shortName} width={52} height={58} quality={90} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                      </div>
                      <p className="compare-modal__name">{shortName}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ModalWrapper>
      </div>
    </div>
  );
}
