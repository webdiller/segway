/* eslint-disable @next/next/no-img-element */
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import segwayPlaceholder from "../../public/segway-placeholder.png";
import { FcPrevious, FcNext } from "react-icons/fc";
import {
  MdSpeed,
  MdFormatListNumbered,
  MdOutlineLightMode,
} from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { GiWeight, GiSpring } from "react-icons/gi";
import { BsDownload, BsBatteryCharging } from "react-icons/bs";
import { BiTimeFive, BiShapeTriangle } from "react-icons/bi";
import { AiOutlineThunderbolt, AiOutlineSafety } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useState } from "react";
import "swiper/css/navigation";

export default function CompareSpecifications({
  allSegwaysData,
  kickscooterMaxData,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <div className="compare-specfications">
      <div className="container compare-specfications__container">
        <p className="title title_fz-20 compare-specfications__title">
          compare specifications
        </p>
        <p className="text compare-specfications__text">Add model to compare</p>

        <div className="compare-specfications__main-slide-with-swiper">

          <div className="main-slide compare-specfications__main-slide">
            <div className="main-slide__wrapper">
              <div className="main-slide__img-wrapper">
                <Image
                  objectFit="contain"
                  src={kickscooterMaxData.imgPath}
                  alt={kickscooterMaxData.name}
                  width={180}
                  height={180}
                  quality={90}
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL={segwayPlaceholder}
                />
              </div>
              <p className="text text_bold main-slide__name">
                Ninebot Kickscooter MAX
              </p>
              <div className="main-slide__items">
                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <MdSpeed className="main-slide__item-icon" />
                    Max. speed
                  </div>
                  <div className="main-slide__item-value">
                    {kickscooterMaxData.maxSpeed}
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <FaRoad className="main-slide__item-icon" />
                    Range (miles)
                  </div>
                  <div className="main-slide__item-value">
                    {kickscooterMaxData.rangeByMiles}
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <BsBatteryCharging className="main-slide__item-icon" />
                    Battery Capacity
                  </div>
                  <div className="main-slide__item-value">
                    {kickscooterMaxData.batteryCapacity}
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <GiWeight className="main-slide__item-icon" />
                    Net Weight
                  </div>
                  <div className="main-slide__item-value">
                    {kickscooterMaxData.netWeight}
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <BsDownload className="main-slide__item-icon" />
                    Payload
                  </div>
                  <div className="main-slide__item-value">
                    {kickscooterMaxData.payload}
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <BiTimeFive className="main-slide__item-icon" />
                    Chargin Time
                  </div>
                  <div className="main-slide__item-value">
                    {kickscooterMaxData.charginTime}
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <MdFormatListNumbered className="main-slide__item-icon" />
                    Number of Batteries
                  </div>
                  <div className="main-slide__item-value">
                    {kickscooterMaxData.numberOfBatteries}
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <AiOutlineThunderbolt className="main-slide__item-icon" />
                    Motor power
                  </div>
                  <div className="main-slide__item-value">
                    {kickscooterMaxData.motorPower}
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <RiLogoutCircleRLine className="main-slide__item-icon" />
                    Power Output
                  </div>
                  <div className="main-slide__item-value">
                    {kickscooterMaxData.powerOutput}
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <BiShapeTriangle className="main-slide__item-icon" />
                    Max. Incline
                  </div>
                  <div className="main-slide__item-value">
                    {kickscooterMaxData.maxIncline}
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <GiSpring className="main-slide__item-icon" />
                    Shock Absorption
                  </div>
                  <div className="main-slide__item-value">
                    {kickscooterMaxData.shockAbsorption}
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <AiOutlineSafety className="main-slide__item-icon" />
                    Safety
                  </div>
                  <div className="main-slide__item-value">
                    {kickscooterMaxData.safety}
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <MdOutlineLightMode className="main-slide__item-icon" />
                    Atmosphere Light
                  </div>
                  <div className="main-slide__item-value">
                    {kickscooterMaxData.atmosphereLight}
                  </div>
                </div>
              </div>

              <p className="text text_25 main-slide__price">$949.99</p>
              <button className="ui-btn main-slide__buy-btn">
                BUY IT NOW
              </button>
            </div>
          </div>

          {/* 
            Show for mobile devices
            Показываем для мобильных устройств
           */}
          <div className={!selectedModel ? "main-slide main-slide_second compare-specfications__second-slide empty" : "main-slide main-slide_second compare-specfications__second-slide"}>
            <div className="main-slide__wrapper">
              <div className="main-slide__img-compare-wrapper">
                <img width="104" height="104" src="./icon-compare.svg" alt="icon-compare" className="main-slide__img-compare" />
              </div>
              <p className="text text_bold main-slide__name">
               Add model
              </p>
              <div className="main-slide__items">
                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <MdSpeed className="main-slide__item-icon" />
                    Max. speed
                  </div>
                  <div className="main-slide__item-value">
                    {!selectedModel ? ('--') : selectedModel.maxSpeed }
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <FaRoad className="main-slide__item-icon" />
                    Range (miles)
                  </div>
                  <div className="main-slide__item-value">
                    {!selectedModel ? ('--') : selectedModel.rangeByMiles }
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <BsBatteryCharging className="main-slide__item-icon" />
                    Battery Capacity
                  </div>
                  <div className="main-slide__item-value">
                    {!selectedModel ? ('--') : selectedModel.batteryCapacity }
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <GiWeight className="main-slide__item-icon" />
                    Net Weight
                  </div>
                  <div className="main-slide__item-value">
                    {!selectedModel ? ('--') : selectedModel.netWeight }
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <BsDownload className="main-slide__item-icon" />
                    Payload
                  </div>
                  <div className="main-slide__item-value">
                    {!selectedModel ? ('--') : selectedModel.payload }
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <BiTimeFive className="main-slide__item-icon" />
                    Chargin Time
                  </div>
                  <div className="main-slide__item-value">
                    {!selectedModel ? ('--') : selectedModel.charginTime }
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <MdFormatListNumbered className="main-slide__item-icon" />
                    Number of Batteries
                  </div>
                  <div className="main-slide__item-value">
                    {!selectedModel ? ('--') : selectedModel.numberOfBatteries }
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <AiOutlineThunderbolt className="main-slide__item-icon" />
                    Motor power
                  </div>
                  <div className="main-slide__item-value">
                    {!selectedModel ? ('--') : selectedModel.motorPower }
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <RiLogoutCircleRLine className="main-slide__item-icon" />
                    Power Output
                  </div>
                  <div className="main-slide__item-value">
                    {!selectedModel ? ('--') : selectedModel.powerOutput }
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <BiShapeTriangle className="main-slide__item-icon" />
                    Max. Incline
                  </div>
                  <div className="main-slide__item-value">
                    {!selectedModel ? ('--') : selectedModel.maxIncline }
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <GiSpring className="main-slide__item-icon" />
                    Shock Absorption
                  </div>
                  <div className="main-slide__item-value">
                    {!selectedModel ? ('--') : selectedModel.shockAbsorption }
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <AiOutlineSafety className="main-slide__item-icon" />
                    Safety
                  </div>
                  <div className="main-slide__item-value">
                    {!selectedModel ? ('--') : selectedModel.safety }
                  </div>
                </div>

                <div className="main-slide__item">
                  <div className="main-slide__item-key">
                    <MdOutlineLightMode className="main-slide__item-icon" />
                    Atmosphere Light
                  </div>
                  <div className="main-slide__item-value">
                    {!selectedModel ? ('--') : selectedModel.atmosphereLight }
                  </div>
                </div>
              </div>

              <p className="text text_25 main-slide__price">$949.99</p>
              <button className="ui-btn main-slide__buy-btn">
                BUY IT NOW
              </button>
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
              prevEl: ".compare-specfications__nav_prev",
              nextEl: ".compare-specfications__nav_next",
            }}
            onSlideChange={(el) => {
              setActiveIndex(el.activeIndex);
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {allSegwaysData.map(
              ({
                id,
                type,
                name,
                shortName,
                price,
                maxSpeed,
                rangeByMiles,
                batteryCapacity,
                netWeight,
                payload,
                charginTime,
                numberOfBatteries,
                motorPower,
                powerOutput,
                maxIncline,
                shockAbsorption,
                safety,
                atmosphereLight,
                imgPath,
                links,
              }) => (
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
                  <p className="text text_bold compare-specfications__name">
                    {name}
                  </p>

                  <div className="compare-specfications__items">
                    {/* Max. speed */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        Max. speed
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>

                    {/* Range (miles) */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        Range (miles)
                      </div>
                      <div className="compare-specfications__item-value">
                        {rangeByMiles}
                      </div>
                    </div>

                    {/* Battery Capacity */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        Battery Capacity
                      </div>
                      <div className="compare-specfications__item-value">
                        {batteryCapacity}
                      </div>
                    </div>

                    {/* Net Weight */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        Net Weight
                      </div>
                      <div className="compare-specfications__item-value">
                        {netWeight}
                      </div>
                    </div>

                    {/* Payload */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        Payload
                      </div>
                      <div className="compare-specfications__item-value">
                        {payload}
                      </div>
                    </div>

                    {/* Chargin Time */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        Chargin Time
                      </div>
                      <div className="compare-specfications__item-value">
                        {charginTime}
                      </div>
                    </div>

                    {/* Number of Batteries */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        Number of Batteries
                      </div>
                      <div className="compare-specfications__item-value">
                        {numberOfBatteries}
                      </div>
                    </div>

                    {/* Motor power */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        Motor power
                      </div>
                      <div className="compare-specfications__item-value">
                        {motorPower}
                      </div>
                    </div>

                    {/* Power Output */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        Power Output
                      </div>
                      <div className="compare-specfications__item-value">
                        {powerOutput}
                      </div>
                    </div>

                    {/* Max. Incline */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        Max. Incline
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxIncline}
                      </div>
                    </div>

                    {/* Shock Absorption */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        Shock Absorption
                      </div>
                      <div className="compare-specfications__item-value">
                        {shockAbsorption}
                      </div>
                    </div>

                    {/* Safety */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        Safety
                      </div>
                      <div className="compare-specfications__item-value">
                        {safety}
                      </div>
                    </div>

                    {/* Atmosphere Light */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        Atmosphere Light
                      </div>
                      <div className="compare-specfications__item-value">
                        {atmosphereLight}
                      </div>
                    </div>
                  </div>

                  <p className="text text_25 compare-specfications__price">
                    {price}
                  </p>
                  <button className="ui-btn compare-specfications__buy-btn">
                    BUY IT NOW
                  </button>
                </SwiperSlide>
              )
            )}
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
      </div>
    </div>
  );
}
