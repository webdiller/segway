import Image from 'next/image';
import {useMediaQuery} from '@/hooks/useMediaQuery';

export default function FeatureSixthTypeTwo({title, text, mediaBreakpoint = 991, customClass, desktopImage, mobileImage, mobileWidth, mobileHeight, desktopWidth, desktopHeight}) {
  let mediaQuery = useMediaQuery(`(min-width: ${mediaBreakpoint}px)`);
  return (
    <div className={customClass ? `feature-sixth-type-two feature-sixth-type-two_${customClass}` : 'feature-sixth-type-two'}>
      <div className="container feature-sixth-type-two__container">
        <div className="feature-sixth-type-two__img-wrapper">
          {mediaQuery ? (
            <Image width={desktopWidth} height={desktopHeight} objectFit="cover" className="feature-sixth-type-two__img" src={desktopImage} alt={title} quality={100} layout="responsive" />
          ) : (
            <Image width={mobileWidth} height={mobileHeight} objectFit="cover" className="feature-sixth-type-two__img" src={mobileImage} alt={title} quality={100} layout="responsive" />
          )}
        </div>

        <div className="feature-sixth-type-two__content">
          <p className="title title_fz-20 feature-sixth-type-two__title">{title}</p>
          <p className="text text_300-on-mobile feature-sixth-type-two__text">{text}</p>
        </div>
      </div>
    </div>
  );
}
