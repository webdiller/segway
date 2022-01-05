import Image from 'next/image';
import imageDesktop from '@/base/kick-scooter-overview-desktop.jpg';
import imageMobile from '@/base/kick-scooter-overview-mobile.jpg';
import {useMediaQuery} from '@/hooks/useMediaQuery';

export default function KickScooterOverview() {
  let mediaQuery = useMediaQuery('(min-width: 768px)');

  return (
    <div className="kick-scooter-overview">
      <div className="container kick-scooter-overview__container">
        <p className="title kick-scooter-overview__title">
          <span className="kick-scooter-overview__desktop">KickScooter overview SEGWAY Ninebot Kickscooter MAX</span>
          <span className="kick-scooter-overview__mobile">KickScooter overview</span>
        </p>
        <p className="kick-scooter-overview__subtitle">SEGWAY Ninebot Kickscooter MAX </p>

        <div className="kick-scooter-overview__img-wrapper">
          {mediaQuery ? (
            <Image objectFit="contain" className="kick-scooter-overview__img" src={imageDesktop} alt="KickScooter overview SEGWAY Ninebot Kickscooter MAX" quality={50} layout="responsive" />
          ) : (
            <Image objectFit="contain" className="kick-scooter-overview__img" src={imageMobile} alt="KickScooter overview SEGWAY Ninebot Kickscooter MAX" quality={50} layout="responsive" />
          )}
        </div>
      </div>
    </div>
  );
}
