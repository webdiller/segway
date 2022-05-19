import Image from 'next/image';
import {useMediaQuery} from '@/hooks/useMediaQuery';
import classNames from 'classnames';

export default function RefactoredFeature({
  additionalClasses, 

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

  qualityDesktop = 100,
  qualityMobile = 100,
  mediaBreakpoint = 576
}) {
  
  let mediaQuery = useMediaQuery(`(min-width: ${mediaBreakpoint}px)`);

  return (
    <div className={classNames('refactored-feature', classNames(additionalClasses))}>
      {mediaQuery ? (
        <div className="refactored-feature__main-image">
          <Image placeholder="blur" quality={qualityDesktop} width={imgDesktopWidth} height={imgDesktopHeight} objectFit="cover" src={imgDesktop} alt={titleDesktop} layout="responsive" />
        </div>
      ) : (
        <div className="refactored-feature__main-image">
          <Image placeholder="blur" quality={qualityMobile} width={imgMobileWidth} height={imgMobileHeight} objectFit="cover" src={imgMobile} alt={titleDesktop} layout="responsive" />
        </div>
      )}

      <div className="refactored-feature__main-container">
        <div className="container refactored-feature__inner-container">
          <div className="refactored-feature__content">
            {mediaQuery ? (
              <>
                <p className="refactored-feature__title">{titleDesktop}</p>
                <p className="refactored-feature__text">{textDesktop}</p>
                {descriptionDesktop && <p className="refactored-feature__description">{descriptionDesktop}</p>}
              </>
            ) : (
              <>
                <p className="refactored-feature__title">{titleMobile}</p>
                <p className="refactored-feature__text">{textMobile}</p>
                {descriptionMobile && <p className="refactored-feature__description">{descriptionMobile}</p>}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
