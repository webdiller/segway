import Image from 'next/image';
import segwayProtectImg from '@/base/segway-protect.png';
import PropTypes from 'prop-types';

SegwayProtect.propTypes = {
  titleDesktop: PropTypes.object,
  titleMobile: PropTypes.object,
  textDesktop: PropTypes.object,
  textMobile: PropTypes.object,
  customClass: PropTypes.string,
}

SegwayProtect.defaultProps = {
  titleDesktop: (<>Segway Protective <br /> Gear Set <b>as a gift</b> </>),
  titleMobile: (<> Segway Protective <br /> Gear Set <b>as a gift</b></>),
  textDesktop: (<>The cost of a protection kit when buying <br /> a scooter is $0 instead of $29.99</>),
  textMobile: (<>The cost of a protection kit <br />  when buying a scooter is <br /> $0 instead of $29.99</>),
};

/**
 * Варианты:
 * С фоном / без фона
 * Мобилка вариант 1: с рамкой и без синего фона
 * Мобилка вариант 2: без рамки и с синим фоном
 * 
 * Классы:
 * desktopBackground: color
 * mobileBorder: true
 * 
 */

export default function SegwayProtect({titleDesktop,titleMobile,textDesktop,textMobile, customClass}) {
  return (
    <div className={customClass ? `segway-protect segway-protect_${customClass}` : "segway-protect"}>
      <div className="container segway-protect__container">
        <div className="segway-protect__cart">
          <div className="segway-protect__img-wrapper">
            <Image className="segway-protect__img" src={segwayProtectImg} alt="Segway Protective Gear Set as a gift" layout="fill" objectFit="contain" />
          </div>

          <div className="segway-protect__content">
            <div className="title title_fz-20 segway-protect__title">
              <p className="hide-576"> {titleDesktop}</p>
              <p className="show-block-576">{titleMobile}</p>
            </div>
            <p className="text segway-protect__text">
              <span className="hide-576">{textDesktop}</span>
              <span className="show-block-576">{textMobile}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
