import Image from "next/image";
import { useState } from "react";

import { FaBoxOpen, FaRoad } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";
import { MdOutlineSettingsSuggest } from "react-icons/md";

import iconTabPresentationDelivery from "../../public/icon-tab-presentation-delivery.svg";
import iconTabPresentationWarrancy from "../../public/icon-tab-presentation-warrancy.svg";
import iconTabPresentationSupport from "../../public/icon-tab-presentation-support.svg";
import iconTabPresentationRoad from "../../public/icon-tab-presentation-road.svg";

export default function Tabs() {
  const [tab, setTab] = useState(4);

  const setTabHandle = (val) => setTab(val);

  return (
    <div className="tabs">
      <div className="container tabs__container">
        <div className="tabs__tabs">
          <button
            onClick={() => setTabHandle(1)}
            className={tab === 1 ? "tabs__tab active" : "tabs__tab"}
          >
            <FaBoxOpen className="tabs__tab-icon" />
            <span className="tabs__tab-text">
              Delivery within 1 business day
            </span>
          </button>
          <button
            onClick={() => setTabHandle(2)}
            className={tab === 2 ? "tabs__tab active" : "tabs__tab"}
          >
            <RiFileList3Line className="tabs__tab-icon" />
            <span className="tabs__tab-text">Basic 1 year warranty</span>
          </button>
          <button
            onClick={() => setTabHandle(3)}
            className={tab === 3 ? "tabs__tab active" : "tabs__tab"}
          >
            <MdOutlineSettingsSuggest className="tabs__tab-icon" />
            <span className="tabs__tab-text">After Sales Support</span>
          </button>
          <button
            onClick={() => setTabHandle(4)}
            className={tab === 4 ? "tabs__tab active" : "tabs__tab"}
          >
            <FaRoad className="tabs__tab-icon" />
            <span className="tabs__tab-text">Up to 40 miles per charge</span>
          </button>
        </div>

        <div
          className={
            tab === 1
              ? "tabs__presentation tabs__presentation_delivery active"
              : "tabs__presentation tabs__presentation_delivery"
          }
        >
          <div className="tabs__presentation-content">
            <p className="text text_25 tabs__presentation-title">
              <span className="hide-768">WE ARE IN LOS ANGELES, CA</span>
              <span className="show-block-768">
                WE ARE IN <br /> LOS ANGELES, CA
              </span>
            </p>
            <p className="text tabs__presentation-description">
              <span className="hide-768">
                Free California 1 day shipping. US Free Shipping 3-5 Days
              </span>
              <span className="show-block-768">
                Free California 1 day shipping. <br /> US Free Shipping 3-5 Days
              </span>
            </p>
          </div>
          <div className="tabs__presentation-icon tabs__presentation-icon_large">
            <div className="tabs__presentation-icon-wrapper">
              <Image src={iconTabPresentationDelivery} alt="" />
            </div>
          </div>
        </div>

        {/* 2 */}
        <div
          className={
            tab === 2
              ? "tabs__presentation tabs__presentation_warrancy active"
              : "tabs__presentation tabs__presentation_warrancy"
          }
        >
          <div className="tabs__presentation-content">
            <p className="text text_25 tabs__presentation-title">
              <span className="hide-768">One year manufacturers warranty</span>
              <span className="show-block-768">
                One year manufacturers warranty
              </span>
            </p>
            <p className="text tabs__presentation-description">
              <span className="hide-768">
                The basic warranty is 1 year. You can also extend the warranty
                up to 4 years.
              </span>
              <span className="show-block-768">
                The basic warranty is 1 year. You can also extend the warranty
                up to 4 years.
              </span>
            </p>
          </div>
          <div className="tabs__presentation-icon">
            <div className="tabs__presentation-icon-wrapper">
              <Image src={iconTabPresentationWarrancy} alt="" />
            </div>
          </div>
        </div>

        {/* 3 */}
        <div
          className={
            tab === 3
              ? "tabs__presentation tabs__presentation_support active"
              : "tabs__presentation tabs__presentation_support"
          }
        >
          {/* show always */}
          <div className="tabs__presentation-content">
            <p className="text text_25 tabs__presentation-title">
              <span className="hide-768">After Sales Support</span>
              <span className="show-block-768">After Sales Support</span>
            </p>
            <p className="text tabs__presentation-description">
              <span className="hide-768">
                If you have any difficulties with your kickscooter, our
                specialists will contact you within 15 minutes
              </span>
              <span className="show-block-768">
                If you have any difficulties with your kickscooter, our
                specialists will contact you within 15 minutes
              </span>
            </p>
          </div>

          <div className="tabs__presentation-icon">
            <div className="tabs__presentation-icon-wrapper">
              <Image src={iconTabPresentationSupport} alt="" />
            </div>
          </div>
        </div>

        {/* 4 */}
        <div
          className={
            tab === 4
              ? "tabs__presentation tabs__presentation_road active"
              : "tabs__presentation tabs__presentation_road"
          }
        >
          <div className="tabs__presentation-content">
            <p className="text text_25 tabs__presentation-title">
              <span className="hide-768">
                Up to 40 miles of range on a single charge
              </span>
              <span className="show-block-768">
                Up to 40 miles of range on a single charge
              </span>
            </p>
            <p className="text tabs__presentation-description">
              <span className="hide-768">
                With a range of up to 40 miles, the longest range on the market,
                and a 20˚uphill climbing angle, the KickScooter MAX allows you
                to ride from San Francisco Bay Area to Palo Alto on a single
                charge.
              </span>
              <span className="show-block-768">
                With a range of up to 40 miles, the longest range on the market,
                and a 20˚uphill climbing angle, the KickScooter MAX allows you
                to ride from San Francisco Bay Area to Palo Alto on a single
                charge.
              </span>
            </p>
          </div>

          <div className="tabs__presentation-icon">
            <div className="tabs__presentation-icon-wrapper">
              <Image src={iconTabPresentationRoad} alt="" />
            </div>
          </div>
          {/* icon for desktop */}
        </div>
      </div>
    </div>
  );
}
