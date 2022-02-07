import Image from 'next/image';
import {useMediaQuery} from '@/hooks/useMediaQuery';

export default function FeatureSeventhTypeOne({
  titleDesktop,
  titleMobile,
  text,
  text2,
  text3,
  mediaBreakpoint = 991,
  customClass,
  desktopImage,
  desktopBackgroundImage,
  mobileBackgroundImage,
  mobileImage,
  mobileWidth,
  mobileHeight,
  desktopWidth,
  desktopHeight
}) {
  let mediaQuery = useMediaQuery(`(min-width: ${mediaBreakpoint}px)`);
  return (
    <div className={customClass ? `feature-seventh-type-one feature-seventh-type-one_${customClass}` : 'feature-seventh-type-one'}>
      <div className="feature-seventh-type-one__bg-image-wrapper">
        {mediaQuery ? (
          <Image objectFit="cover" className="feature-seventh-type-one__bg-image" src={desktopBackgroundImage} alt={titleDesktop} layout="responsive" />
        ) : (
          <Image objectFit="cover" className="feature-seventh-type-one__bg-image" src={mobileBackgroundImage} alt={titleDesktop} layout="responsive" />
        )}
      </div>
      <div className="container feature-seventh-type-one__container">
        <div className="feature-seventh-type-one__content">
          <p className="title title_fz-20 title_white feature-seventh-type-one__title feature-seventh-type-one__title_desktop">{titleDesktop}</p>
          <p className="title title_fz-20 title_white feature-seventh-type-one__title feature-seventh-type-one__title_mobile">{titleMobile}</p>
          <p className="text text_300-on-mobile text_white feature-seventh-type-one__text">{text}</p>
          {text2 && <p className="text text_300-on-mobile text_white feature-seventh-type-one__text2">{text2}</p>}
          {text3 && <p className="text text_300-on-mobile text_white feature-seventh-type-one__text3">{text3}</p>}
        </div>
      </div>
      <div className="feature-seventh-type-one__img-wrapper">
        {mediaQuery ? (
          <Image width={desktopWidth} height={desktopHeight} objectFit="contain" className="feature-seventh-type-one__img" src={desktopImage} alt={titleDesktop} quality={100} layout="responsive" />
        ) : (
          <Image width={mobileWidth} height={mobileHeight} objectFit="contain" className="feature-seventh-type-one__img" src={mobileImage} alt={titleDesktop} quality={100} layout="responsive" />
        )}
      </div>
    </div>
  );
}
