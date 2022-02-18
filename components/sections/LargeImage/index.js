import Image from 'next/image';
import {useMediaQuery} from '@/hooks/useMediaQuery';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) => (typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str));

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
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            objectFit="contain"
            className="large-image__img"
            src={desktopImage}
            alt={imageAltText}
            layout="responsive"
            quality={100}
          />
        ) : (
          <Image
            width={mobileWidth}
            height={mobileHeight}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            objectFit="contain"
            className="large-image__img"
            src={mobileImage}
            alt={imageAltText}
            layout="responsive"
            quality={100}
          />
        )}
      </div>
    </div>
  );
}
