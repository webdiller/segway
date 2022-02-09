import Image from 'next/image';
import {useMediaQuery} from '@/hooks/useMediaQuery';

export default function FeatureThirdTypeOne({
  customClass,
  title,
  text,
  mediaBreakpoint = 768,
  mobileBackgroundImage,
  desktopBackgroundImage,
  mobileImage,
  desktopImage,
  mobileWidth,
  mobileHeight,
  desktopWidth,
  desktopHeight,
  lastText
}) {
  let mediaQuery = useMediaQuery(`(min-width: ${mediaBreakpoint}px)`);

  return (
    <div className={customClass ? `feature-third-type-one feature-third-type-one_${customClass}` : 'feature-third-type-one'}>
      {mobileBackgroundImage && desktopBackgroundImage && (
        <div className="feature-third-type-one__bg-image-wrapper">
          {mediaQuery ? (
            <Image objectFit="cover" className="feature-third-type-one__bg-image" src={desktopBackgroundImage} alt={title} layout="responsive" />
          ) : (
            <Image objectFit="cover" className="feature-third-type-one__bg-image" src={mobileBackgroundImage} alt={title} layout="responsive" />
          )}
        </div>
      )}

      <div className="feature-third-type-one__img-wrapper">
        {mediaQuery ? (
          <Image width={desktopWidth} height={desktopHeight} objectFit="contain" className="feature-third-type-one__img" src={desktopImage} alt={title} quality={100} layout="responsive" />
        ) : (
          <Image width={mobileWidth} height={mobileHeight} objectFit="contain" className="feature-third-type-one__img" src={mobileImage} alt={title} quality={100} layout="responsive" />
        )}
      </div>

      <div className="container feature-third-type-one__container">
        <div className="feature-third-type-one__content">
          <p className="title title_fz-20 title_white feature-third-type-one__title">{title}</p>
          <p className="text text_300-on-mobile text_white feature-third-type-one__text">{text}</p>
          <p className="text text_300-on-mobile text_grey feature-third-type-one__text feature-third-type-one__text_last">{lastText}</p>
        </div>
      </div>
    </div>
  );
}
