import Image from "next/image";

export default function SegwayProtect() {
  return (
    <div className="segway-protect">
      <div className="container segway-protect__container">
        <div className="segway-protect__cart">
          <div className="segway-protect__img-wrapper">
            <Image
              className="segway-protect__img"
              src="/segway-protect.png"
              alt="Segway Protective Gear Set as a gift"
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              blurDataURL="/segway-protect-placeholder.png"
            />
          </div>

          <div className="segway-protect__content">
            <p className="title title_1 segway-protect__title">
              Segway Protective Gear Set as a gift
            </p>
            <p className="text segway-protect__text">
              The cost of a protection kit when buying a scooter is $0 instead
              of $29.99
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
