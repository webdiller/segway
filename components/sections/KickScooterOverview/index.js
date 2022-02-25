import Image from 'next/image';
import {useMediaQuery} from '@/hooks/useMediaQuery';

export default function KickScooterOverview({titleDesktop = 'KickScooter overview', titleMobile, subtitle = 'SEGWAY Ninebot Kickscooter MAX', mobileImage, desktopImage}) {
  let mediaQuery = useMediaQuery('(min-width: 576px)');

  return (
    <div className="kick-scooter-overview">
      <div className="container kick-scooter-overview__container">
        <p className="title kick-scooter-overview__title-subtitle">
          <span className="hide-991 kick-scooter-overview__title">{titleDesktop}</span>
          <span className="show-block-991 kick-scooter-overview__title">{titleMobile}</span>
          <span className="show-block-991 kick-scooter-overview__subtitle">{subtitle}</span>
        </p>

        <div className="kick-scooter-overview__img-wrapper">
          {mediaQuery ? (
            <Image placeholder="blur" quality={100} layout="responsive" objectFit="contain" className="kick-scooter-overview__img" src={desktopImage} alt={`${subtitle}`} />
          ) : (
            <Image placeholder="blur" quality={100} layout="responsive" objectFit="contain" className="kick-scooter-overview__img" src={mobileImage} alt={`${subtitle}`} />
          )}
        </div>
      </div>
    </div>
  );
}
