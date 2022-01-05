import Image from 'next/image';
import imageDesktop from '@/base/smart-battery-desktop.png';
import imageMobile from '@/base/smart-battery-mobile.png';
import {useMediaQuery} from '@/hooks/useMediaQuery';

export default function SmartBattery() {
  let mediaQuery = useMediaQuery('(min-width: 768px)');
  return (
    <div className="smart-battery">
      <div className="container smart-battery__container">
        <div className="smart-battery__img-wrapper">
          {mediaQuery ? (
            <Image objectFit="cover" className="smart-battery__img" src={imageDesktop} alt="Smart battery Management system (Smart-BMS)" quality={50} layout="responsive" />
          ) : (
            <Image objectFit="cover" className="smart-battery__img" src={imageMobile} alt="Smart battery Management system (Smart-BMS)" quality={50} layout="responsive" />
          )}
        </div>
        <div className="smart-battery__content">
          <p className="title title_fz-20 title_white smart-battery__title">Smart battery Management system (Smart-BMS)</p>
          <p className="text text_300-on-mobile text_white smart-battery__text">The Smart-BMS closely monitors the battery status with multiple protection mechanisms to ensure the battery durability</p>
        </div>
      </div>
    </div>
  );
}
