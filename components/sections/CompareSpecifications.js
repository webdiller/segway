import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FcPrevious, FcNext } from "react-icons/fc";

import "swiper/css";
import "swiper/css/navigation";

export default function CompareSpecifications() {
  return (
    <div className="compare-specfications">
      <div className="container compare-specfications__container">
        <p className="title title_1 compare-specfications__title">
          compare specifications
        </p>
        <p className="text compare-specfications__text">Add model to compare</p>

        <div className="compare-specfications__swiper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={13}
            slidesPerView={2}
            loop={true}
            draggable={true}
            navigation={{
              prevEl: ".compare-specfications__nav_prev",
              nextEl: ".compare-specfications__nav_next",
            }}
            breakpoints={{
              768: {
                spaceBetween: 15,
                slidesPerView: 3,
              },
            }}
          >
            {items.map(
              ({
                id,
                type,
                name,
                shortName,
                Price,
                Maxspeed,
                RangeByMiles,
                BatteryCapacity,
                NetWeight,
                Payload,
                CharginTime,
                NumberOfBatteries,
                MotorPpower,
                PowerOutput,
                MaxIncline,
                ShockAbsorption,
                Safety,
                AtmosphereLight,
                imgPath,
                links,
              }) => (
                <SwiperSlide key={id} className="compare-specfications__item">
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
                  <p className="text text_bold compare-specfications__name">{name}</p>
                  <div className="compare-specfications__items">
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Max. speed</div>
                      <div className="compare-specfications__item-value"></div>
                    </div>
                    <div className="compare-specfications__item">
                      <div className="compare-specfications__item-key">Range (miles)</div>
                      <div className="compare-specfications__item-value"></div>
                    </div>
                  </div>
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
