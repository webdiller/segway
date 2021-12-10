/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import smartphoneDesktop from "@/base/controll-from-smartphone-payments.png";

import ControllFromSmartphoneIcon_1_white from "@/base/controll-from-smartphone-1-white.svg";
import ControllFromSmartphoneIcon_2_white from "@/base/controll-from-smartphone-2-white.svg";
import ControllFromSmartphoneIcon_3_white from "@/base/controll-from-smartphone-3-white.svg";
import ControllFromSmartphoneIcon_4_white from "@/base/controll-from-smartphone-4-white.svg";
import ControllFromSmartphoneIcon_5_white from "@/base/controll-from-smartphone-5-white.svg";
import ControllFromSmartphoneIcon_6_white from "@/base/controll-from-smartphone-6-white.svg";

import ControllFromSmartphoneIcon_1_color from "@/base/controll-from-smartphone-1-color.svg";
import ControllFromSmartphoneIcon_2_color from "@/base/controll-from-smartphone-2-color.svg";
import ControllFromSmartphoneIcon_3_color from "@/base/controll-from-smartphone-3-color.svg";
import ControllFromSmartphoneIcon_4_color from "@/base/controll-from-smartphone-4-color.svg";
import ControllFromSmartphoneIcon_5_color from "@/base/controll-from-smartphone-5-color.svg";
import ControllFromSmartphoneIcon_6_color from "@/base/controll-from-smartphone-6-color.svg";

export default function ControllFromSmartphone() {
  return (
    <div className="controll-from-smartphone">
      <div className="container controll-from-smartphone__container">
        <div className="controll-from-smartphone__top">
          <p className="title title_fz-20 controll-from-smartphone__title">
            <span className="hide-768">Control from your smartphone</span>
            <span className="show-block-768">
              Control from <br /> your smartphone
            </span>
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
                <div className="controll-from-smartphone__item-icon-wrapper controll-from-smartphone__item-icon-wrapper_white">
                  <Image src={ControllFromSmartphoneIcon_1_white} alt="icon" />
                </div>
                <div className="controll-from-smartphone__item-icon-wrapper controll-from-smartphone__item-icon-wrapper_color">
                  <Image src={ControllFromSmartphoneIcon_1_color} alt="icon" />
                </div>

                <p className="controll-from-smartphone__item-description">
                  Anti-theft protection
                </p>
              </div>

              <div className="controll-from-smartphone__item">
                <div className="controll-from-smartphone__item-icon-wrapper controll-from-smartphone__item-icon-wrapper_white">
                  <Image src={ControllFromSmartphoneIcon_2_white} alt="icon" />
                </div>
                <div className="controll-from-smartphone__item-icon-wrapper controll-from-smartphone__item-icon-wrapper_color">
                  <Image src={ControllFromSmartphoneIcon_2_color} alt="icon" />
                </div>
                <p className="controll-from-smartphone__item-description">
                  Dashboard
                </p>
              </div>

              <div className="controll-from-smartphone__item">
                <div className="controll-from-smartphone__item-icon-wrapper controll-from-smartphone__item-icon-wrapper_white">
                  <Image src={ControllFromSmartphoneIcon_3_white} alt="icon" />
                </div>
                <div className="controll-from-smartphone__item-icon-wrapper controll-from-smartphone__item-icon-wrapper_color">
                  <Image src={ControllFromSmartphoneIcon_3_color} alt="icon" />
                </div>
                <p className="controll-from-smartphone__item-description">
                  Firmware upgrade
                </p>
              </div>

              <div className="controll-from-smartphone__item">
                <div className="controll-from-smartphone__item-icon-wrapper controll-from-smartphone__item-icon-wrapper_white">
                  <Image src={ControllFromSmartphoneIcon_4_white} alt="icon" />
                </div>
                <div className="controll-from-smartphone__item-icon-wrapper controll-from-smartphone__item-icon-wrapper_color">
                  <Image src={ControllFromSmartphoneIcon_4_color} alt="icon" />
                </div>
                <p className="controll-from-smartphone__item-description">
                  Device status
                </p>
              </div>

              <div className="controll-from-smartphone__item">
                <div className="controll-from-smartphone__item-icon-wrapper controll-from-smartphone__item-icon-wrapper_white">
                  <Image src={ControllFromSmartphoneIcon_5_white} alt="icon" />
                </div>
                <div className="controll-from-smartphone__item-icon-wrapper controll-from-smartphone__item-icon-wrapper_color">
                  <Image src={ControllFromSmartphoneIcon_5_color} alt="icon" />
                </div>
                <p className="controll-from-smartphone__item-description">
                  Settings and restrictions
                </p>
              </div>

              <div className="controll-from-smartphone__item">
                <div className="controll-from-smartphone__item-icon-wrapper controll-from-smartphone__item-icon-wrapper_white">
                  <Image src={ControllFromSmartphoneIcon_6_white} alt="icon" />
                </div>
                <div className="controll-from-smartphone__item-icon-wrapper controll-from-smartphone__item-icon-wrapper_color">
                  <Image src={ControllFromSmartphoneIcon_6_color} alt="icon" />
                </div>
                <p className="controll-from-smartphone__item-description">
                  Training program
                </p>
              </div>
            </div>

            <div className="controll-from-smartphone__payments-img-wrapper">
              <Image
                className="controll-from-smartphone__payments-img"
                src={smartphoneDesktop}
                alt="Smart battery Management system (Smart-BMS)"
                width={844}
                height={123}
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
                src="/controll-from-smartphone-hand-mobile.jpg"
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
