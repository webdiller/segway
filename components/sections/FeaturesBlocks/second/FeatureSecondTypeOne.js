import Image from 'next/image';
import {useMediaQuery} from '@/hooks/useMediaQuery';

export default function FeatureSecondTypeOne({desktopImage, mobileImage, customClass, title, text, lastText}) {
  let mediaQuery = useMediaQuery('(min-width: 768px)');

  return (
    <div className={customClass ? `feature-second-type-one feature-second-type-one_${customClass}` : 'feature-second-type-one'}>
      <div className="feature-second-type-one__img-wrapper">
        {mediaQuery ? (
          <Image objectFit="contain" className="feature-second-type-one__img" src={desktopImage} alt={title} quality={100} layout="responsive" />
        ) : (
          <Image objectFit="cover" className="feature-second-type-one__img" src={mobileImage} alt={title} quality={100} layout="responsive" />
        )}
      </div>
      <div className="container feature-second-type-one__container">
        <div className="feature-second-type-one__content">
          <p className="title title_fz-20 feature-second-type-one__title">{title}</p>
          <p className="text text_300-on-mobile feature-second-type-one__text">{text}</p>
          {lastText && <p className="text text_300-on-mobile feature-second-type-one__text">{lastText}</p>}
        </div>
      </div>
    </div>
  );
}
