/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import segwayPlaceholder from '@/base/segway-placeholder.png';
import {FcPrevious, FcNext} from 'react-icons/fc';
import {MdSpeed, MdFormatListNumbered, MdOutlineLightMode} from 'react-icons/md';
import {FaRoad} from 'react-icons/fa';
import {GiWeight, GiSpring} from 'react-icons/gi';
import {BsDownload, BsBatteryCharging} from 'react-icons/bs';
import {BiTimeFive, BiShapeTriangle} from 'react-icons/bi';
import {AiOutlineThunderbolt, AiOutlineSafety} from 'react-icons/ai';
import {RiLogoutCircleRLine} from 'react-icons/ri';
import React, {useEffect, useState} from 'react';
import Swipe from 'react-easy-swipe';
import noScroll from 'no-scroll';
import {useCart} from 'react-use-cart';
import 'swiper/css/navigation';

export default function CompareSpecifications({items}) {
  const {addItem} = useCart();

  // Активный индекс у слайдера (для больших экранов)
  const [activeIndex, setActiveIndex] = useState(0);

  // Все модели
  const [allModels, setAllModels] = useState(items.adultSegways);

  // Если есть модель, то отобразить данные, иначе показать прочерк
  const [selectedModel, setSelectedModel] = useState();

  // Показать модкалку, или нет?
  const [modalActive, setModalActive] = useState(false);

  const setModalActiveHandle = () => {
    noScroll.toggle();
    setModalActive((prev) => !prev);
  };

  const setSelectedModelHandle = (id) => {
    const filtered = allModels.filter((model) => model.id == id);
    setSelectedModel(...filtered);
    setModalActive(false);
    noScroll.off();
  };

  const onSwipeUp = () => {
    setModalActive(false);
    noScroll.off();
  };

  const onSwipeDown = () => {
    setModalActive(false);
    noScroll.off();
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && selectedModel) {
      localStorage.setItem('selectedModel', JSON.stringify(selectedModel));
    }
  }, [selectedModel]);

  useEffect(() => {
    if (typeof window !== 'undefined' && !selectedModel) {
      let storageItem = JSON.parse(localStorage.getItem('selectedModel'));
      console.log(storageItem);
      if (storageItem) {
        setSelectedModel(storageItem);
      }
    }
  }, []);

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
                    <Image objectFit="contain" src={allModels[5].imgPath} alt={allModels[5].name} width={180} height={180} quality={90} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                  </div>
                  <p className="text text_bold main-slide__name">Ninebot Kickscooter MAX</p>
                </div>
                <div className="main-slide__header-right">
                  <div onClick={setModalActiveHandle} className="main-slide__img-compare-wrapper">
                    <img width="104" height="104" src={!selectedModel ? './icon-compare.svg' : `${selectedModel.imgPath}`} alt="icon-compare" className={!selectedModel ? 'main-slide__img-compare' : 'main-slide__img-compare selected'} />
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
                      <MdSpeed className="main-slide__item-icon" />
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{allModels[5].maxSpeed}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <MdSpeed className="main-slide__item-icon" />
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
                      <FaRoad className="main-slide__item-icon" />
                      Range (miles)
                    </div>
                    <div className="main-slide__item-value">{allModels[5].rangeByMiles}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <MdSpeed className="main-slide__item-icon" />
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{!selectedModel ? '--' : selectedModel.rangeByMiles}</div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <BsBatteryCharging className="main-slide__item-icon" />
                      Battery Capacity
                    </div>
                    <div className="main-slide__item-value">{allModels[5].batteryCapacity}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <MdSpeed className="main-slide__item-icon" />
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
                      <GiWeight className="main-slide__item-icon" />
                      Net Weight
                    </div>
                    <div className="main-slide__item-value">{allModels[5].netWeight}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <MdSpeed className="main-slide__item-icon" />
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{!selectedModel ? '--' : selectedModel.netWeight}</div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <BsDownload className="main-slide__item-icon" />
                      Payload
                    </div>
                    <div className="main-slide__item-value">{allModels[5].payload}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <MdSpeed className="main-slide__item-icon" />
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{!selectedModel ? '--' : selectedModel.payload}</div>
                  </div>
                </div>

                {/* ITEM */}
                <div className="main-slide__item">
                  {/* LEFT */}
                  <div className="main-slide__item-left">
                    <div className="main-slide__item-key">
                      <BiTimeFive className="main-slide__item-icon" />
                      Chargin Time
                    </div>
                    <div className="main-slide__item-value">{allModels[5].charginTime}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <MdSpeed className="main-slide__item-icon" />
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
                      <MdFormatListNumbered className="main-slide__item-icon" />
                      Number of Batteries
                    </div>
                    <div className="main-slide__item-value">{allModels[5].numberOfBatteries}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <MdSpeed className="main-slide__item-icon" />
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
                      <AiOutlineThunderbolt className="main-slide__item-icon" />
                      Motor power
                    </div>
                    <div className="main-slide__item-value">{allModels[5].motorPower}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <MdSpeed className="main-slide__item-icon" />
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
                      <RiLogoutCircleRLine className="main-slide__item-icon" />
                      Power Output
                    </div>
                    <div className="main-slide__item-value">{allModels[5].powerOutput}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <MdSpeed className="main-slide__item-icon" />
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
                      <BiShapeTriangle className="main-slide__item-icon" />
                      Max. Incline
                    </div>
                    <div className="main-slide__item-value">{allModels[5].maxIncline}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <MdSpeed className="main-slide__item-icon" />
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
                      <GiSpring className="main-slide__item-icon" />
                      Shock Absorption
                    </div>
                    <div className="main-slide__item-value">{allModels[5].shockAbsorption}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <MdSpeed className="main-slide__item-icon" />
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
                      <AiOutlineSafety className="main-slide__item-icon" />
                      Safety
                    </div>
                    <div className="main-slide__item-value">{allModels[5].safety}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <MdSpeed className="main-slide__item-icon" />
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
                      <MdOutlineLightMode className="main-slide__item-icon" />
                      Atmosphere Light
                    </div>
                    <div className="main-slide__item-value">{allModels[5].atmosphereLight}</div>
                  </div>
                  {/* RIGHT */}
                  <div className="main-slide__item-right">
                    <div className="main-slide__item-key">
                      <MdSpeed className="main-slide__item-icon" />
                      Max. speed
                    </div>
                    <div className="main-slide__item-value">{!selectedModel ? '--' : selectedModel.atmosphereLight}</div>
                  </div>
                </div>
              </div>

              <div className="main-slide__bottom">
                <div className="main-slide__bottom-left">
                  <p className="text text_25 main-slide__price">$949.99</p>
                  <Link href={`?buyItNow=true&buyItNowFromFixedModal=false&id=006`} scroll={false}>
                    <a
                      onClick={() => {
                        addItem(items.adultSegways[5]);
                      }}
                      className="ui-btn main-slide__buy-btn">
                      <span>BUY IT NOW</span>
                    </a>
                  </Link>
                </div>
                <div className="main-slide__bottom-right">
                  {!selectedModel ? (
                    ''
                  ) : (
                    <>
                      <p className="text text_25 main-slide__price">${selectedModel.price}</p>
                      <Link href={`?buyItNow=true&buyItNowFromFixedModal=false&id=${selectedModel.id}`} scroll={false}>
                        <a onClick={() => addItem(selectedModel)} className="ui-btn main-slide__buy-btn">
                          <span>BUY IT NOW</span>
                        </a>
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
            loop={true}
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
              const {id, type, name, shortName, price, maxSpeed, rangeByMiles, batteryCapacity, netWeight, payload, charginTime, numberOfBatteries, motorPower, powerOutput, maxIncline, shockAbsorption, safety, atmosphereLight, imgPath, links} = item;
              return (
                <SwiperSlide key={id} className="compare-specfications__slide">
                  <div className="compare-specfications__img-wrapper">
                    <Image objectFit="contain" className="compare-specfications__img" src={imgPath} alt={name} width={180} height={180} quality={90} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
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
                      <div className="compare-specfications__item-value">{rangeByMiles}</div>
                    </div>

                    {/* Battery Capacity */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Battery Capacity</div>
                      <div className="compare-specfications__item-value">{batteryCapacity}</div>
                    </div>

                    {/* Net Weight */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Net Weight</div>
                      <div className="compare-specfications__item-value">{netWeight}</div>
                    </div>

                    {/* Payload */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Payload</div>
                      <div className="compare-specfications__item-value">{payload}</div>
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
                  <Link href={`?buyItNow=true&buyItNowFromFixedModal=false&id=${id}`} scroll={false}>
                    <a onClick={() => addItem(item)} className="ui-btn compare-specfications__buy-btn">
                      <span>BUY IT NOW</span>
                    </a>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="compare-specfications__navigation">
            <button className="compare-specfications__nav compare-specfications__nav_prev">
              <FcPrevious className="compare-specfications__icon" />
            </button>
            <button className="compare-specfications__nav compare-specfications__nav_next">
              <FcNext className="compare-specfications__icon" />
            </button>
          </div>
        </div>

        <div className={modalActive ? 'compare-modal active' : 'compare-modal'}>
          <Swipe onSwipeUp={onSwipeUp} onSwipeDown={onSwipeDown}>
            <div className="compare-modal__wrapper">
              <p className="title compare-modal__title">select a model to compare</p>
              <img onClick={setModalActiveHandle} className="compare-modal__icon-close" src="./icon-close.svg" alt="icon-close" width="34" height="34" loading="lazy" />
              <div className="compare-modal__items">
                {allModels.map(({id, name, imgPath}) => (
                  <button
                    onClick={() => {
                      setSelectedModelHandle(id);
                    }}
                    key={id}
                    className="compare-modal__item">
                    <div className="compare-modal__img-wrapper">
                      <Image objectFit="contain" src={imgPath} alt={name} width={52} height={58} quality={90} layout="responsive" placeholder="blur" blurDataURL={segwayPlaceholder} />
                    </div>
                    <p className="compare-modal__name">{name}</p>
                  </button>
                ))}
              </div>
            </div>
          </Swipe>
        </div>
      </div>
    </div>
  );
}
