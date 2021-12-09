import Image from 'next/image';
import segwayProtectImg from '@/base/segway-protect.png';

export default function SegwayProtect() {
  return (
    <div className="segway-protect">
      <div className="container segway-protect__container">
        <div className="segway-protect__cart">
          <div className="segway-protect__img-wrapper">
            <Image className="segway-protect__img" src={segwayProtectImg} alt="Segway Protective Gear Set as a gift" layout="fill" objectFit="contain" />
          </div>

          <div className="segway-protect__content">
            <div className="title title_fz-20 segway-protect__title">
              <p className="hide-576">
                Segway Protective Gear Set <span>as a gift</span>
              </p>
              <p className="show-block-576">
                Segway Protective <br /> Gear Set <span>as a gift</span>
              </p>
            </div>
            <p className="text segway-protect__text">
              <span className="hide-576">
                The cost of a protection kit when buying <br />a scooter is $0 instead of $29.99
              </span>
              <span className="show-block-576">
                The cost of a protection kit <br /> when buying a scooter is
                <br /> $0 instead of $29.99
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
