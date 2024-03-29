/* eslint-disable @next/next/no-img-element */
import { VscFilePdf } from 'react-icons/vsc';
import UiLink from 'components/shared/UiLink/UiLink';
import classNames from 'classnames';
import Image from 'next/image';

export default function DownloadManual({ manualImgPath, customClass, downloadManualHref }) {

  return (
    <div className={classNames("download-manual", classNames(customClass))}>
      <div className="container download-manual__container">
        <div className="download-manual__cart">

          <div className="download-manual__img">
            <Image objectFit='contain' width={628} height={465} src={manualImgPath} alt="Download manual" />
          </div>

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
            <UiLink
              download={true}
              target="_blank"
              href={downloadManualHref}
              classNameLink="ui-btn ui-btn_with-icon download-manual__link"
              innerText="Download manual"
              icon={<VscFilePdf className="download-manual__link-icon" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
