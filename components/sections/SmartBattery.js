import Image from "next/image";

export default function SmartBattery() {
  return (
    <div className="smart-battery">
      <div className="smart-battery__img-wrapper">
        <Image
          className="smart-battery__img"
          src="/smart-battery.png"
          alt="Smart battery Management system (Smart-BMS)"
          width={720}
          height={547}
        />
      </div>

      <div className="container smart-battery__container">
        <div className="smart-battery__content">
          <p className="title-1 title-1_white smart-battery__title">
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
