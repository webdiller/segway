import Image from 'next/image';
import {useMediaQuery} from '@/hooks/useMediaQuery';
export default function FeatureSimple({
  titleDesktop,
  textDesktop,
  descriptionDesktop,
  titleMobile,
  textMobile,
  descriptionMobile,
  imgDesktop,
  imgDesktopWidth,
  imgDesktopHeight,
  imgMobile,
  imgMobileWidth,
  imgMobileHeight,
  customClass,
  imgGradient,
  imgGradientWidth,
  imgGradientHeight,
  qualityGradient = 75,
  qualityDesktop = 100,
  qualityMobile = 100,
  mediaBreakpoint = 576
}) {
  let mediaQuery = useMediaQuery(`(min-width: ${mediaBreakpoint}px)`);
  return (
    <div className={customClass ? `feature-simple feature-simple_${customClass}` : 'feature-simple'}>
      {imgGradient && (
        <Image
          quality={qualityGradient}
          objectFit="cover"
          className="feature-simple__gradient"
          src={imgGradient}
          alt={titleDesktop}
          layout="responsive"
          width={imgGradientWidth}
          height={imgGradientHeight}
        />
      )}
      {mediaQuery ? (
        <div className="feature-simple__main-image">
          <Image quality={qualityDesktop} width={imgDesktopWidth} height={imgDesktopHeight} objectFit="cover" className="" src={imgDesktop} alt={titleDesktop} layout="responsive" />
        </div>
      ) : (
        <div className="feature-simple__main-image">
          <Image quality={qualityMobile} width={imgMobileWidth} height={imgMobileHeight} objectFit="cover" src={imgMobile} alt={titleDesktop} layout="responsive" />
        </div>
      )}

      <div className="feature-simple__main-container">
        <div className="container feature-simple__inner-container">
          <div className="feature-simple__content">
            {mediaQuery ? (
              <>
                <p className="feature-simple__title">{titleDesktop}</p>
                <p className="feature-simple__text">{textDesktop}</p>
                {descriptionDesktop && <p className="feature-simple__description">{descriptionDesktop}</p>}
              </>
            ) : (
              <>
                <p className="feature-simple__title">{titleMobile}</p>
                <p className="feature-simple__text">{textMobile}</p>
                {descriptionMobile && <p className="feature-simple__description">{descriptionMobile}</p>}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
