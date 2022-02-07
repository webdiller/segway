import Image from 'next/image';
import {useMediaQuery} from '@/hooks/useMediaQuery';

export default function FeatureFifthTypeOne({title, text, mediaBreakpoint = 991, customClass, mobileBackgroundImage, desktopBackgroundImage, desktopImage, mobileImage, mobileWidth, mobileHeight, desktopWidth, desktopHeight}) {
  let mediaQuery = useMediaQuery(`(min-width: ${mediaBreakpoint}px)`);
  return (
    <div className={customClass ? `feature-fifth-type-one feature-fifth-type-one_${customClass}` : 'feature-fifth-type-one'}>
      <div className="feature-fifth-type-one__bg-image-wrapper">
        {mediaQuery ? <Image objectFit="cover" className="feature-fifth-type-one__bg-image" src={desktopBackgroundImage} alt={title} layout="responsive" /> : <Image objectFit="cover" className="feature-fifth-type-one__bg-image" src={mobileBackgroundImage} alt={title} layout="responsive" />}
      </div>

      <div className="container feature-fifth-type-one__container">
        <div className="feature-fifth-type-one__img-wrapper">
          {mediaQuery ? (
            <Image width={desktopWidth} height={desktopHeight} objectFit="cover" className="feature-fifth-type-one__img" src={desktopImage} alt={title} quality={100} layout="responsive" />
          ) : (
            <Image width={mobileWidth} height={mobileHeight} objectFit="cover" className="feature-fifth-type-one__img" src={mobileImage} alt={title} quality={100} layout="responsive" />
          )}
        </div>
        <div className="feature-fifth-type-one__content">
          <p className="title title_fz-20 title_white feature-fifth-type-one__title">{title}</p>
          <p className="text text_300-on-mobile text_white feature-fifth-type-one__text">{text}</p>
        </div>
      </div>
    </div>
  );
}
