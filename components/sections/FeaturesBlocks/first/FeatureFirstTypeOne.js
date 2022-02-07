import Image from 'next/image';
import {useMediaQuery} from '@/hooks/useMediaQuery';

export default function FeatureFirstTypeOne({customClass, title, text, mediaBreakpoint = 768, mobileBackgroundImage, desktopBackgroundImage, mobileImage, desktopImage, mobileWidth, mobileHeight, desktopWidth, desktopHeight}) {
  let mediaQuery = useMediaQuery(`(min-width: ${mediaBreakpoint}px)`);
  return (
    <div className={customClass ? `feature-first-type-one feature-first-type-one_${customClass}` : 'feature-first-type-one'}>
      <div className="feature-first-type-one__bg-image-wrapper">
        {mediaQuery ? <Image objectFit="cover" className="feature-first-type-one__bg-image" src={desktopBackgroundImage} alt={title} layout="responsive" /> : <Image objectFit="cover" className="feature-first-type-one__bg-image" src={mobileBackgroundImage} alt={title} layout="responsive" />}
      </div>

      <div className="container feature-first-type-one__container">
        <div className="feature-first-type-one__img-wrapper">
          {mediaQuery ? (
            <Image width={desktopWidth} height={desktopHeight} objectFit="contain" className="feature-first-type-one__img" src={desktopImage} alt={title} quality={100} layout="responsive" />
          ) : (
            <Image width={mobileWidth} height={mobileHeight} objectFit="contain" className="feature-first-type-one__img" src={mobileImage} alt={title} quality={100} layout="responsive" />
          )}
        </div>
        <div className="feature-first-type-one__content">
          <p className="title title_fz-20 title_white feature-first-type-one__title">{title}</p>
          <p className="text text_300-on-mobile text_white feature-first-type-one__text">{text}</p>
        </div>
      </div>
    </div>
  );
}
