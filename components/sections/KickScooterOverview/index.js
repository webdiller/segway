import Image from 'next/image';
import {useMediaQuery} from '@/hooks/useMediaQuery';

export default function KickScooterOverview({title = 'KickScooter overview', subtitle = 'SEGWAY Ninebot Kickscooter MAX', mobileImage, desktopImage}) {
  let mediaQuery = useMediaQuery('(min-width: 576px)');

  return (
    <div className="kick-scooter-overview">
      <div className="container kick-scooter-overview__container">
        <p className="title kick-scooter-overview__title-subtitle">
          <span className="kick-scooter-overview__title">{title}</span>
          <span className="kick-scooter-overview__subtitle">{subtitle}</span>
        </p>

        <div className="kick-scooter-overview__img-wrapper">
          {mediaQuery ? (
            <Image placeholder="blur" quality={100} layout="responsive" objectFit="contain" className="kick-scooter-overview__img" src={desktopImage} alt={`${title} ${subtitle}`} />
          ) : (
            <Image placeholder="blur" quality={100} layout="responsive" objectFit="contain" className="kick-scooter-overview__img" src={mobileImage} alt={`${title} ${subtitle}`} />
          )}
        </div>
      </div>
    </div>
  );
}
