import Image from 'next/image';
import imageDesktop from '@/base/controll-from-smartphone-hand-desktop.png';
import imageMobile from '@/base/controll-from-smartphone-hand-mobile.jpg';

import smartphoneDesktop from '@/base/controll-from-smartphone-payments.png';
import {useMediaQuery} from '@/hooks/useMediaQuery';

const ControllItem = ({imgPathBorder, imgPathMobile, text} = {}) => {
  return (
    <div className="controll-from-smartphone__item">
      <div className="controll-from-smartphone__item-img-wrapper">
        <img loading="lazy" src={imgPathBorder} alt="icon" className="controll-from-smartphone__item-img controll-from-smartphone__item-img_border" />
        <img loading="lazy" src={imgPathMobile} alt="icon" className="controll-from-smartphone__item-img controll-from-smartphone__item-img_mobile" />
      </div>
      <p className="controll-from-smartphone__item-description">{text}</p>
    </div>
  );
};

export default function ControllFromSmartphone() {
  let mediaQuery = useMediaQuery('(min-width: 768px)');

  return (
    <div className="controll-from-smartphone">
      <div className="container controll-from-smartphone__container">
        <div className="controll-from-smartphone__top">
          <p className="title title_fz-20 controll-from-smartphone__title">
            <span className="hide-768">Control from your smartphone</span>
            <span className="show-block-768">
              Control from <br /> your smartphone
            </span>
          </p>
          <p className="text controll-from-smartphone__text">
            You can easily control your Segway electric scooter with your smartphone via Bluetooth. Not being the
            <br />
            key to the kickscooter, it will give a signal in case of an attempt to steal. Check the current speed, data <br />
            on the status of the device’s systems or set the speed limit with a few touches. <br />
            And the skating training program is indispensable for beginners.
          </p>
        </div>

        <div className="controll-from-smartphone__bottom">
          <div className="controll-from-smartphone__bottom-left">
            <div className="controll-from-smartphone__items">
              <ControllItem imgPathBorder="./controll-from-smartphone-1-border.svg" imgPathMobile="./control-1-border-mobile.svg" text="Anti-theft protection" />
              <ControllItem imgPathBorder="./controll-from-smartphone-2-border.svg" imgPathMobile="./control-2-border-mobile.svg" text="Dashboard" />
              <ControllItem imgPathBorder="./controll-from-smartphone-3-border.svg" imgPathMobile="./control-3-border-mobile.svg" text="Firmware upgrade" />
              <ControllItem imgPathBorder="./controll-from-smartphone-4-border.svg" imgPathMobile="./control-4-border-mobile.svg" text="Device status" />
              <ControllItem imgPathBorder="./controll-from-smartphone-5-border.svg" imgPathMobile="./control-5-border-mobile.svg" text="Settings and restrictions" />
              <ControllItem imgPathBorder="./controll-from-smartphone-6-border.svg" imgPathMobile="./control-6-border-mobile.svg" text="Training programs" />
            </div>

            <div className="controll-from-smartphone__payments-img-wrapper">
              <Image className="controll-from-smartphone__payments-img" src={smartphoneDesktop} alt="Smart battery Management system (Smart-BMS)" width={844} height={123} layout="responsive" />
            </div>
          </div>
          <div className="controll-from-smartphone__bottom-right">
            <div className="controll-from-smartphone__hand-image-wrapper">
              {mediaQuery ? (
                <Image objectFit="contain" className="controll-from-smartphone__hand-img" src={imageDesktop} alt="Control from your smartphone" quality={50} layout="responsive" />
              ) : (
                <Image objectFit="contain" className="controll-from-smartphone__hand-img" src={imageMobile} alt="Control from your smartphone" quality={50} layout="responsive" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
