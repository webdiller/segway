import Image from 'next/image';
import {useMediaQuery} from '@/hooks/useMediaQuery';

export default function LargeImage({imageAltText, desktopImage, mobileImage, mediaBreakpoint = 576, desktopWidth, desktopHeight, mobileWidth, mobileHeight}) {
  let mediaQuery = useMediaQuery(`(min-width: ${mediaBreakpoint}px)`);

  return (
    <div className="large-image">
      <div className="large-image__img-wrapper">
        {mediaQuery ? (
          <Image
            width={desktopWidth}
            height={desktopHeight}
            placeholder="blur"
            objectFit="contain"
            className="large-image__img"
            src={desktopImage}
            alt={imageAltText}
            layout="responsive"
            quality={70}
          />
        ) : (
          <Image
            width={mobileWidth}
            height={mobileHeight}
            placeholder="blur"
            objectFit="contain"
            className="large-image__img"
            src={mobileImage}
            alt={imageAltText}
            layout="responsive"
            quality={70}
          />
        )}
      </div>
    </div>
  );
}
