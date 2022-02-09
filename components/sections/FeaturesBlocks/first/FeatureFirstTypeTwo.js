import Image from 'next/image';
import {useMediaQuery} from '@/hooks/useMediaQuery';

export default function FeatureFirstTypeTwo({customClass, title, text, mediaBreakpoint = 576, mobileBackgroundImage, desktopBackgroundImage}) {
  let mediaQuery = useMediaQuery(`(min-width: ${mediaBreakpoint}px)`);
  return (
    <div className={customClass ? `feature-first-type-two feature-first-type-two_${customClass}` : 'feature-first-type-two'}>
      <div className="feature-first-type-two__bg-image-wrapper">
        {mediaQuery ? <Image quality={100} objectFit="cover" className="feature-first-type-two__bg-image" src={desktopBackgroundImage} alt={title} layout="responsive" /> : <Image quality={100} objectFit="cover" className="feature-first-type-two__bg-image" src={mobileBackgroundImage} alt={title} layout="responsive" />}
      </div>

      <div className="container feature-first-type-two__container">
        <div className="feature-first-type-two__content">
          <p className="title title_fz-20 title_white feature-first-type-two__title">{title}</p>
          <p className="text text_300-on-mobile text_white feature-first-type-two__text">{text}</p>
        </div>
      </div>
    </div>
  );
}
