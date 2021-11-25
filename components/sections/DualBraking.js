import Image from "next/image";

export default function DualBraking() {
  return (
    <div className="dual-braking">
      <div className="dual-braking__picture">
        <Image
          className="dual-braking__img"
          src="/dual-braking.png"
          alt="Dual Braking System"
          width={720}
          height={547}
          layout="responsive"
        />
      </div>
      <div className="container dual-braking__container">
        <div className="dual-braking__content">
          <p className="title dual-braking__title">Dual Braking System</p>
          <p className="text dual-braking__text">
            Simultaneous mechanical front drum brake and regenerative electric
            back brake provide both stability and steerability.
          </p>
          <p className="text dual-braking__text">*IPX5 water resistance</p>
        </div>
      </div>
    </div>
  );
}
