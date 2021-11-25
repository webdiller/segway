import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import data from "../../public/segway.json";
import segwayPlaceholder from "../../public/segway-placeholder.png";
import { FcPrevious, FcNext } from "react-icons/fc";
import { MdSpeed, MdFormatListNumbered, MdOutlineLightMode } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { GiWeight, GiSpring } from "react-icons/gi";
import { BsDownload, BsBatteryCharging } from "react-icons/bs";
import { BiTimeFive, BiShapeTriangle } from "react-icons/bi";
import { AiOutlineThunderbolt,AiOutlineSafety } from "react-icons/ai";
import { RiLogoutCircleRLine } from "react-icons/ri";
import "swiper/css/navigation";

export default function CompareSpecifications() {

  return (
    <div className="compare-specfications">
      <div className="container compare-specfications__container">
        <p className="title title_fz-20 compare-specfications__title">
          compare specifications
        </p>
        <p className="text compare-specfications__text">Add model to compare</p>

        <div className="compare-specfications__swiper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={2}
            loop={true}
            draggable={true}
            navigation={{
              prevEl: ".compare-specfications__nav_prev",
              nextEl: ".compare-specfications__nav_next",
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {data.map(
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
                motorPpower,
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
                        <MdSpeed className="compare-specfications__item-icon" />
                        Max. speed
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>

                    {/* Range (miles) */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <FaRoad className="compare-specfications__item-icon" />
                        Range (miles)
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>

                    {/* Battery Capacity */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <BsBatteryCharging className="compare-specfications__item-icon" />
                        Battery Capacity
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>

                    {/* Net Weight */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <GiWeight className="compare-specfications__item-icon" />
                        Net Weight
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>

                    {/* Payload */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <BsDownload className="compare-specfications__item-icon" />
                        Payload
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>

                    {/* Chargin Time */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <BiTimeFive className="compare-specfications__item-icon" />
                        Chargin Time
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>

                    {/* Number of Batteries */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <MdFormatListNumbered className="compare-specfications__item-icon" />
                        Number of Batteries
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>

                    {/* Motor power */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <AiOutlineThunderbolt className="compare-specfications__item-icon" />
                        Motor power
                      </div>
                      <div className="compare-specfications__item-value">
                        {rangeByMiles}
                      </div>
                    </div>

                    {/* Power Output */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <RiLogoutCircleRLine className="compare-specfications__item-icon" />
                        Power Output
                      </div>
                      <div className="compare-specfications__item-value">
                        {rangeByMiles}
                      </div>
                    </div>

                    {/* Max. Incline */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <BiShapeTriangle className="compare-specfications__item-icon" />
                        Max. Incline
                      </div>
                      <div className="compare-specfications__item-value">
                        {rangeByMiles}
                      </div>
                    </div>

                    {/* Shock Absorption */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <GiSpring className="compare-specfications__item-icon" />
                        Shock Absorption
                      </div>
                      <div className="compare-specfications__item-value">
                        {rangeByMiles}
                      </div>
                    </div>

                    {/* Safety */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <AiOutlineSafety className="compare-specfications__item-icon" />
                        Safety
                      </div>
                      <div className="compare-specfications__item-value">
                        {rangeByMiles}
                      </div>
                    </div>

                    {/* Atmosphere Light */}
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <MdOutlineLightMode className="compare-specfications__item-icon" />
                        Atmosphere Light
                      </div>
                      <div className="compare-specfications__item-value">
                        {rangeByMiles}
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
