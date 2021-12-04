import Image from "next/image";
import dualBraking from "../../public/dual-braking.png";

export default function DualBraking() {
  return (
    <div className="dual-braking">
      <div className="dual-braking__picture">
        <Image
          className="dual-braking__img"
          src={dualBraking}
          alt="Dual Braking System"
          width={720}
          height={547}
          layout="responsive"
        />
      </div>
      <div className="container dual-braking__container">
        <div className="dual-braking__content">
          <p className="title title_fz-20 dual-braking__title">Dual Braking System</p>
          <p className="text text_300-on-mobile dual-braking__text">
            Simultaneous mechanical front drum brake and regenerative electric
            back brake provide both stability and steerability.
          </p>
          <p className="text text_300-on-mobile dual-braking__text">*IPX5 water resistance</p>
        </div>
      </div>
    </div>
  );
}
