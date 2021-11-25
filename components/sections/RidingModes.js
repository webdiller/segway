import Image from "next/image";

export default function RidingModes() {
  return (
    <div className="riding-model">
      <div className="container riding-model__container">
        <div className="riding-model__content">
          <p className="title title_fz-20 title_white riding-model__title">
            3 Riding Modes
          </p>
          <p className="text text_300-on-mobile text_white riding-model__text">
            Eco, Standard, and Sports modes can be directly accessed by the
            intuitive LED dashboard, which also displays maintenance signals,
            power levels, Bluetooth connectivity and more.
          </p>
        </div>
      </div>
      <div className="riding-model__img-wrapper">
        <Image
          className="riding-model__img"
          src="/riding-model.png"
          alt="3 Riding Modes"
          width={720}
          height={547}
          layout="responsive"
        />
      </div>
    </div>
  );
}
