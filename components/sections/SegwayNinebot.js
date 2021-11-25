import Image from "next/image";
import FormWithWarrancy from "../blocks/FormWithWarrancy";
import PaymentsMethods from "../blocks/PaymentsMethods";
import SegwayProtectMobile from "../blocks/SegwayProtectMobile";

export default function SegwayNinebot() {
  return (
    <div className="segway-ninebot">
      <div className="container segway-ninebot__container">
        {/* area name: stock */}
        <div className="segway-ninebot__stock-wrapper">
          <p className="segway-ninebot__stock">In stock</p>
        </div>

        {/* area name: title */}
        <div className="segway-ninebot__title-wrapper">
          <p className="title title_fz-108 segway-ninebot__title">
            <span className="hide-576">SEGWAY Ninebot Kickscooter MAX</span>
            <span className="show-block-576">
              SEGWAY Ninebot <br /> Kickscooter <br /> MAX
            </span>
          </p>
        </div>

        {/* area name: protect */}
        <SegwayProtectMobile customClass="segway-ninebot__protect-wrapper" />

        {/* area name: form */}
        <div className="segway-ninebot__form-wrapper">
          <FormWithWarrancy customClass="segway-ninebot__form" />
        </div>

        {/* area name: payments */}
        <PaymentsMethods customClass="segway-ninebot__payments-wrapper" />

        <div className="segway-ninebot__bg-wrapper">
          <Image
            src="/segway-ninebot-background.png"
            alt="Segway Protective Gear Set as a gift"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
