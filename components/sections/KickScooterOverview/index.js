import Image from 'next/image';
import {useMediaQuery} from '@/hooks/useMediaQuery';

export default function KickScooterOverview({desktopTitle = 'KickScooter overview SEGWAY Ninebot Kickscooter MAX', mobileTitle = 'KickScooter overview', subtitle = 'SEGWAY Ninebot Kickscooter MAX', mobileImage, desktopImage}) {
  let mediaQuery = useMediaQuery('(min-width: 768px)');

  return (
    <div className="kick-scooter-overview">
      <div className="container kick-scooter-overview__container">
        <p className="title kick-scooter-overview__title">
          <span className="kick-scooter-overview__desktop">{desktopTitle}</span>
          <span className="kick-scooter-overview__mobile">{mobileTitle}</span>
        </p>
        <p className="kick-scooter-overview__subtitle">{subtitle} </p>

        <div className="kick-scooter-overview__img-wrapper">
          {mediaQuery ? <Image quality={100} layout="fill" objectFit="contain" className="kick-scooter-overview__img" src={desktopImage} alt={desktopTitle} /> : <Image quality={100} layout="fill" objectFit="contain" className="kick-scooter-overview__img" src={mobileImage} alt={desktopTitle} />}
        </div>
      </div>
    </div>
  );
}
