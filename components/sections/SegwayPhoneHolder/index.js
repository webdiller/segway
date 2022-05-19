import Image from 'next/image';
import segwayProtectImg from '@/base/segway-phone-holder.png';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@/hooks/useMediaQuery';

SegwayPhoneHolder.propTypes = {
  titleDesktop: PropTypes.object,
  titleMobile: PropTypes.object,
  textDesktop: PropTypes.object,
  textMobile: PropTypes.object,
  customClass: PropTypes.string,
}

SegwayPhoneHolder.defaultProps = {
  titleDesktop: (<>Segway Phone <br />holder <b>as a gift</b> </>),
  titleMobile: (<> Segway Phone <br />holder <b>as a gift</b></>),
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
 */

export default function SegwayPhoneHolder({ titleDesktop, titleMobile, textDesktop, textMobile, customClass }) {
  const isMobile = useMediaQuery('(max-width: 769px)')
  return (
    <div className={customClass ? `segway-phone-holder segway-phone-holder_${customClass}` : "segway-phone-holder"}>
      <div className="container segway-phone-holder__container">
        <div className="segway-phone-holder__cart">
          <div className="segway-phone-holder__img-wrapper">
            <Image

              width={!isMobile ? 165 : 71}
              height={!isMobile ? 269 : 115}
              className="segway-phone-holder__img"
              src={segwayProtectImg}
              alt="Segway Phone Holder as a gift"
            />
          </div>

          <div className="segway-phone-holder__content">
            <div className="title title_fz-20 segway-phone-holder__title">
              <p className="hide-576"> {titleDesktop}</p>
              <p className="show-block-576">{titleMobile}</p>
            </div>
            <p className="text segway-phone-holder__text">
              <span className="hide-576">{textDesktop}</span>
              <span className="show-block-576">{textMobile}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
