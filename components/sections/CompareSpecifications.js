import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FcPrevious, FcNext } from "react-icons/fc";
import { MdSpeed } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import data from "../../public/segway.json";
// MdSpeed,
// FaRoad
// BsBatteryCharging
// GiWeight
// BsDownload
// BiTimeFive
// MdFormatListNumbered

import "swiper/css";
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
                      blurDataURL={imgPath}
                    />
                  </div>
                  <p className="text text_bold compare-specfications__name">
                    {name}
                  </p>

                  <div className="compare-specfications__items">
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <MdSpeed className="compare-specfications__item-icon" />
                        Max. speed
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <MdSpeed className="compare-specfications__item-icon" />
                        Max. speed
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <MdSpeed className="compare-specfications__item-icon" />
                        Max. speed
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <MdSpeed className="compare-specfications__item-icon" />
                        Max. speed
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <MdSpeed className="compare-specfications__item-icon" />
                        Max. speed
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <MdSpeed className="compare-specfications__item-icon" />
                        Max. speed
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <MdSpeed className="compare-specfications__item-icon" />
                        Max. speed
                      </div>
                      <div className="compare-specfications__item-value">
                        {maxSpeed}
                      </div>
                    </div>
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">
                        <FaRoad className="compare-specfications__item-icon" />
                        Range (miles)
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
