/* eslint-disable @next/next/no-img-element */
import { VscFilePdf } from "react-icons/vsc";
import UiLink from "../ui/UiLink";

export default function DownloadManual() {
  return (
    <div className="download-manual">
      <div className="container download-manual__container">
        <div className="download-manual__cart">
          <picture className="download-manual__picture">
            <img
              width="762"
              height="465"
              className="download-manual__img"
              src="/example.png"
              alt="DOWNLOAD manual"
              loading="lazy"
            />
          </picture>
          <div className="download-manual__content">
            <p className="title title_fz-20 download-manual__title">
              DOWNLOAD manual
            </p>

            <div className="download-manual__items">
              <div className="download-manual__item">
                <img
                  src="/download-manual-item-1.svg"
                  alt="Assembly and preparation for the trip"
                  className="download-manual__icon"
                />
                <p className="text text_16 download-manual__item-description">
                  Assembly and preparation for the trip
                </p>
              </div>

              <div className="download-manual__item">
                <img
                  src="/download-manual-item-2.svg"
                  alt="How to charge a scooter"
                  className="download-manual__icon"
                />
                <p className="text text_16 download-manual__item-description">
                  How to charge a scooter
                </p>
              </div>

              <div className="download-manual__item">
                <img
                  src="/download-manual-item-3.svg"
                  alt="How to ride properly"
                  className="download-manual__icon"
                />
                <p className="text text_16 download-manual__item-description">
                  How to ride properly
                </p>
              </div>
            </div>

            <UiLink
              target="_blank"
              download
              href="/download-manual.pdf"
              classNameLink="ui-link ui-link_type-1 download-manual__link"
              innerText="Download manual"
              icon={<VscFilePdf className="download-manual__link-icon" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
