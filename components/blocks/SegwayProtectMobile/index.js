import Image from "next/image";
import segwayProtectMobile from "@/base/segway-protect-mobile.png";

export default function SegwayProtectMobile({ customClass }) {
  return (
    <div
      className={
        customClass
          ? `segway-protect-mobile ${customClass}`
          : "segway-protect-mobile"
      }
    >
      <div className="segway-protect-mobile__container">
        <div className="segway-protect-mobile__cart">
          <div className="segway-protect-mobile__content">
            <p className="title title_fz-20 segway-protect-mobile__title">
              <span className="hide-576">
                Segway Protective Gear Set <span className="accent-color">as a gift</span>
              </span>
              <span className="show-block-576">
                Segway Protective <br /> Gear Set <span className="accent-color">as a gift</span>
              </span>
            </p>
            <p className="text segway-protect__text">
              <span className="hide-576">
                The cost of a protection kit when buying a scooter is $0 instead
                of $29.99
              </span>
              <span className="show-block-576">
                The cost of a protection kit <br /> when buying a scooter is
                <br /> $0 instead of $29.99
              </span>
            </p>
          </div>
          <div className="segway-protect-mobile__img-wrapper">
            <Image
              className="segway-protect-mobile__img"
              src={segwayProtectMobile}
              alt="Segway Protective Gear Set as a gift"
              layout="responsive"
              objectFit="contain"
              width={87}
              height={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
