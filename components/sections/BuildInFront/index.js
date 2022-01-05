/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import imageDesktop from '@/base/build-in-front.png';
import imageMobile from '@/base/build-in-front-mobile.png';
import {useMediaQuery} from '@/hooks/useMediaQuery';

export default function BuildInFront() {
  let mediaQuery = useMediaQuery('(min-width: 768px)');

  return (
    <div className="build-in-front">
      <img width="455" height="455" className="build-in-front__shine-left" src="/build-in-front-shine.png" alt="build-in-front-shine" loading="lazy" />

      <div className="build-in-front__img-wrapper">
        {mediaQuery ? <Image objectFit="contain" className="build-in-front__img" src={imageDesktop} alt="Build in front light" quality={50} layout="responsive" /> : <Image objectFit="contain" className="build-in-front__img" src={imageMobile} alt="Build in front light" quality={50} layout="responsive" />}
      </div>

      <div className="container build-in-front__container">
        <div className="build-in-front__content">
          <p className="title title_fz-20 title_white build-in-front__title">Built-In Front LED Light</p>
          <p className="text text_300-on-mobile text_white build-in-front__text">Front-facing lights are designed with 2.5w high-brightness LED light to illuminate the path ahead of you and increase your visibility to others around you.</p>

          <p className="text text_300-on-mobile text_grey build-in-front__text build-in-front__text_last">*Disclaimer: for your safety, please try not to ride at night</p>
        </div>
      </div>
    </div>
  );
}
