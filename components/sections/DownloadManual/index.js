/* eslint-disable @next/next/no-img-element */
import {VscFilePdf} from 'react-icons/vsc';
import UiLink from '@/ui/UiLink';
import {useRef} from 'react';

export default function DownloadManual() {
  const refElement = useRef(null);
  const clickHandler = () => {
    refElement.current.focus();
    setTimeout(() => {
      refElement.current.blur();
    }, 500);
  };
  return (
    <div className="download-manual">
      <div className="container download-manual__container">
        <div className="download-manual__cart">
          <picture className="download-manual__picture">
            <source srcSet="/download-manual-desktop.webp" media="(min-width: 480px)" />
            <source srcSet="/download-manual-desktop.png" media="(min-width: 480px)" />
            <source srcSet="/download-manual-mobile.webp" />
            <img width="762" height="465" className="download-manual__img" src="/download-manual-mobile.png" alt="Download manual" loading="lazy" />
          </picture>

          <div className="download-manual__content">
            <p className="title title_fz-20 download-manual__title">DOWNLOAD manual</p>

            <div className="download-manual__items">
              <div className="download-manual__item download-manual__item_1">
                <img src="/download-manual-item-1.svg" alt="Assembly and preparation for the trip" className="download-manual__icon" loading="lazy" width="30" height="30" />
                <p className="text text_16 download-manual__item-description">
                  <span className="hide-576">
                    Assembly and <br /> preparation for the trip
                  </span>
                  <span className="show-block-576">
                    Assembly and <br />
                    preparation
                    <br />
                    for the trip
                  </span>
                </p>
              </div>

              <div className="download-manual__item">
                <img src="/download-manual-item-2.svg" alt="How to charge a scooter" className="download-manual__icon" loading="lazy" width="20" height="30" />
                <p className="text text_16 download-manual__item-description">
                  How to charge <br /> a scooter
                </p>
              </div>

              <div className="download-manual__item">
                <img src="/download-manual-item-3.svg" alt="How to ride properly" className="download-manual__icon" loading="lazy" width="30" height="30" />
                <p className="text text_16 download-manual__item-description">
                  How to ride <br /> properly
                </p>
              </div>
            </div>

            {/* <UiLink unfocusOnClick={true} target="_blank" download href="/download-manual.pdf" classNameLink="ui-btn ui-btn_with-icon download-manual__link" innerText="Download manual" icon={<VscFilePdf className="download-manual__link-icon" />} /> */}
            <button onClick={clickHandler} ref={refElement} className="ui-btn ui-btn_with-icon download-manual__link"><span>download manual</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}
