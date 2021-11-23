import Image from "next/image";

export default function SegwayProtect() {
  return (
    <div className="segway-protect-mobile">
      <div className="container segway-protect__container">
        <div className="segway-protect-mobile__cart">
          <div className="segway-protect-mobile__img-wrapper">
            <Image
              className="segway-protect-mobile__img"
              src="/segway-protect-mobile.png"
              alt="Segway Protective Gear Set as a gift"
              layout="responsive"
              objectFit="contain"
              width={87}
              height={120}
              placeholder="blur"
              blurDataURL="/segway-protect-mobile.png"
            />
          </div>

          <div className="segway-protect-mobile__content">
            <p className="title title_fz-20 segway-protect__title">
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
