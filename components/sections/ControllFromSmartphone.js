/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import { GiSiren } from "react-icons/gi";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdManageSearch } from "react-icons/md";
import { FiSettings, FiDownloadCloud } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

export default function ControllFromSmartphone() {
  return (
    <div className="controll-from-smartphone">
      <div className="container controll-from-smartphone__container">
        <div className="controll-from-smartphone__top">
          <p className="title title_fz-20 controll-from-smartphone__title">
            Control from your smartphone
          </p>
          <p className="text controll-from-smartphone__text">
            You can easily control your Segway electric scooter with your
            smartphone via Bluetooth. Not being the key to the kickscooter, it
            will give a signal in case of an attempt to steal. Check the current
            speed, data on the status of the device’s systems or set the speed
            limit with a few touches. And the skating training program is
            indispensable for beginners.
          </p>
        </div>

        <div className="controll-from-smartphone__bottom">
          <div className="controll-from-smartphone__bottom-left">
            <div className="controll-from-smartphone__items">
              <div className="controll-from-smartphone__item">
                <div className="controll-from-smartphone__item-icon-wrapper">
                  <GiSiren className="controll-from-smartphone__item-icon" />
                  <div className="controll-from-smartphone__polygon-wrapper">
                    <Image
                      className="controll-from-smartphone__polygon"
                      src="/icon-polygon.svg"
                      height={98}
                      width={98}
                      alt="polygon svg"
                    />
                  </div>
                </div>
                <p className="controll-from-smartphone__item-description">
                  Anti-theft protection
                </p>
              </div>

              <div className="controll-from-smartphone__item">
                <div className="controll-from-smartphone__item-icon-wrapper">
                  <AiOutlineDashboard className="controll-from-smartphone__item-icon" />
                  <div className="controll-from-smartphone__polygon-wrapper">
                    <Image
                      className="controll-from-smartphone__polygon"
                      src="/icon-polygon.svg"
                      height={98}
                      width={98}
                      alt="polygon svg"
                    />
                  </div>
                </div>
                <p className="controll-from-smartphone__item-description">
                  Dashboard
                </p>
              </div>

              <div className="controll-from-smartphone__item">
                <div className="controll-from-smartphone__item-icon-wrapper">
                  <FiDownloadCloud className="controll-from-smartphone__item-icon" />
                  <div className="controll-from-smartphone__polygon-wrapper">
                    <Image
                      className="controll-from-smartphone__polygon"
                      src="/icon-polygon.svg"
                      height={98}
                      width={98}
                      alt="polygon svg"
                    />
                  </div>
                </div>
                <p className="controll-from-smartphone__item-description">
                  Firmware upgrade
                </p>
              </div>

              <div className="controll-from-smartphone__item">
                <div className="controll-from-smartphone__item-icon-wrapper">
                  <MdManageSearch className="controll-from-smartphone__item-icon" />
                  <div className="controll-from-smartphone__polygon-wrapper">
                    <Image
                      className="controll-from-smartphone__polygon"
                      src="/icon-polygon.svg"
                      height={98}
                      width={98}
                      alt="polygon svg"
                    />
                  </div>
                </div>
                <p className="controll-from-smartphone__item-description">
                  Device status
                </p>
              </div>

              <div className="controll-from-smartphone__item">
                <div className="controll-from-smartphone__item-icon-wrapper">
                  <FiSettings className="controll-from-smartphone__item-icon" />
                  <div className="controll-from-smartphone__polygon-wrapper">
                    <Image
                      className="controll-from-smartphone__polygon"
                      src="/icon-polygon.svg"
                      height={98}
                      width={98}
                      alt="polygon svg"
                    />
                  </div>
                </div>
                <p className="controll-from-smartphone__item-description">
                  Settings and restrictions
                </p>
              </div>

              <div className="controll-from-smartphone__item">
                <div className="controll-from-smartphone__item-icon-wrapper">
                  <FaGraduationCap className="controll-from-smartphone__item-icon" />
                  <div className="controll-from-smartphone__polygon-wrapper">
                    <Image
                      className="controll-from-smartphone__polygon"
                      src="/icon-polygon.svg"
                      height={98}
                      width={98}
                      alt="polygon svg"
                    />
                  </div>
                </div>
                <p className="controll-from-smartphone__item-description">
                  Training program
                </p>
              </div>
            </div>

            <div className="controll-from-smartphone__payments-img-wrapper">
              <Image
                className="controll-from-smartphone__payments-img"
                src="/controll-from-smartphone-payments.png"
                alt="Smart battery Management system (Smart-BMS)"
                width={844}
                height={123}
                placeholder="blur"
                blurDataURL="/controll-from-smartphone-payments.png"
                layout="responsive"
              />
            </div>
          </div>
          <div className="controll-from-smartphone__bottom-right">
            <picture className="controll-from-smartphone__hand-picture">
              <source
                srcSet="/controll-from-smartphone-hand-desktop.webp"
                media="(min-width: 768px)"
              />
              <source
                srcSet="/controll-from-smartphone-hand-desktop.png"
                media="(min-width: 768px)"
              />
              <source srcSet="/controll-from-smartphone-hand-mobile.webp" />
              <img
                width="762"
                height="465"
                className="controll-from-smartphone__hand-img"
                src="/controll-from-smartphone-hand-mobile.png"
                alt="Control from your smartphone"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
