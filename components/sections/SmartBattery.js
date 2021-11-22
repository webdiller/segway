/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function SmartBattery() {
  return (
    <div className="smart-battery">

      <picture className="smart-battery__picture">
        <source
          srcSet="/smart-battery-desktop.webp"
          media="(min-width: 768px)"
        />
        <source
          srcSet="/smart-battery-desktop.png"
          media="(min-width: 768px)"
        />
        <source srcSet="/smart-battery-mobile.webp" />
        <img
          width="720"
          height="547"
          className="smart-battery__img"
          src="/smart-battery-mobile.png"
          alt="Smart battery Management system (Smart-BMS)"
          loading="lazy"
        />
      </picture>

      <div className="container smart-battery__container">
        <div className="smart-battery__content">
          <p className="title title_white smart-battery__title">
            Smart battery Management system (Smart-BMS)
          </p>
          <p className="text text_white smart-battery__text">
            The Smart-BMS closely monitors the battery status with multiple
            protection mechanisms to ensure the battery durability
          </p>
        </div>
      </div>
    </div>
  );
}
