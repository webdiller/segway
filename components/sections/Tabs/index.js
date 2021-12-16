import Image from 'next/image';
import {useState} from 'react';

import tabIcon1Color from '@/base/icon-tab-1-color.svg';
import tabIcon2Color from '@/base/icon-tab-2-color.svg';
import tabIcon3Color from '@/base/icon-tab-3-color.svg';
import tabIcon4Color from '@/base/icon-tab-4-color.svg';

import tabIcon1White from '@/base/icon-tab-1-white.svg';
import tabIcon2White from '@/base/icon-tab-2-white.svg';
import tabIcon3White from '@/base/icon-tab-3-white.svg';
import tabIcon4White from '@/base/icon-tab-4-white.svg';

import iconTabPresentationDelivery from '@/base/icon-tab-presentation-delivery.svg';
import iconTabPresentationWarrancy from '@/base/icon-tab-presentation-warrancy.svg';
import iconTabPresentationSupport from '@/base/icon-tab-presentation-support.svg';
import iconTabPresentationRoad from '@/base/icon-tab-presentation-road.svg';

export default function Tabs() {
  const [tab, setTab] = useState(4);

  const setTabHandle = (val) => setTab(val);

  return (
    <div className="tabs">
      <div className="container tabs__container">
        <div className="tabs__tabs">
          <div onClick={() => setTabHandle(1)} className={tab === 1 ? 'tabs__tab active' : 'tabs__tab'}>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_1 tabs__tab-icon-wrapper_color">
              <Image objectFit="contain" layout="responsive" src={tabIcon1Color} alt="icon for tab" />
            </div>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_1 tabs__tab-icon-wrapper_white">
              <Image objectFit="contain" layout="responsive" src={tabIcon1White} alt="icon for tab" />
            </div>
            <span className="tabs__tab-text">Delivery within 1 business day</span>
          </div>
          <div onClick={() => setTabHandle(2)} className={tab === 2 ? 'tabs__tab active' : 'tabs__tab'}>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_2 tabs__tab-icon-wrapper_color">
              <Image objectFit="contain" layout="responsive" src={tabIcon2Color} alt="icon for tab" />
            </div>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_2 tabs__tab-icon-wrapper_white">
              <Image objectFit="contain" layout="responsive" src={tabIcon2White} alt="icon for tab" />
            </div>
            <span className="tabs__tab-text">Basic 1 year warranty</span>
          </div>
          <div onClick={() => setTabHandle(3)} className={tab === 3 ? 'tabs__tab active' : 'tabs__tab'}>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_3 tabs__tab-icon-wrapper_color">
              <Image objectFit="contain" layout="responsive" src={tabIcon3Color} alt="icon for tab" />
            </div>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_3 tabs__tab-icon-wrapper_white">
              <Image objectFit="contain" layout="responsive" src={tabIcon3White} alt="icon for tab" />
            </div>
            <span className="tabs__tab-text">After Sales Support</span>
          </div>
          <div onClick={() => setTabHandle(4)} className={tab === 4 ? 'tabs__tab active' : 'tabs__tab'}>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_4 tabs__tab-icon-wrapper_color">
              <Image objectFit="contain" layout="responsive" src={tabIcon4Color} alt="icon for tab" />
            </div>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_4 tabs__tab-icon-wrapper_white">
              <Image objectFit="contain" layout="responsive" src={tabIcon4White} alt="icon for tab" />
            </div>
            <span className="tabs__tab-text">Up to 40 miles per charge</span>
          </div>
        </div>

        <div className={tab === 1 ? 'tabs__presentation tabs__presentation_delivery active' : 'tabs__presentation tabs__presentation_delivery'}>
          <div className="tabs__presentation-content">
            <p className="text text_25 tabs__presentation-title">
              <span className="hide-768">WE ARE IN LOS ANGELES, CA</span>
              <span className="show-block-768">
                WE ARE IN <br /> LOS ANGELES, CA
              </span>
            </p>
            <p className="text tabs__presentation-description">
              <span className="hide-768">Free California 1 day shipping. <br /> US Free Shipping 3-5 Days</span>
              <span className="show-block-768">
                Free California 1 day shipping. <br /> US Free Shipping 3-5 Days
              </span>
            </p>
          </div>
          <div className="tabs__presentation-icon tabs__presentation-icon_large">
            <div className="tabs__presentation-icon-wrapper tabs__presentation-icon-wrapper_large">
              <Image objectFit="contain" position="relative" src={iconTabPresentationDelivery} alt="icon for tab" />
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className={tab === 2 ? 'tabs__presentation tabs__presentation_warrancy active' : 'tabs__presentation tabs__presentation_warrancy'}>
          <div className="tabs__presentation-content">
            <p className="text text_25 tabs__presentation-title">
              <span className="hide-768">One year manufacturer′s warranty</span>
              <span className="show-block-768">
                One year <br /> manufacturer′s warranty
              </span>
            </p>
            <p className="text tabs__presentation-description">
              <span className="hide-768">The basic warranty is 1 year. <br /> You can also extend the warranty up to 4 years.</span>
              <span className="show-block-768">
                The basic warranty is 1 year. <br />
                You can also extend the warranty <br /> up to 4 years.
              </span>
            </p>
          </div>
          <div className="tabs__presentation-icon">
            <div className="tabs__presentation-icon-wrapper">
              <Image objectFit="contain" position="relative" src={iconTabPresentationWarrancy} alt="icon for tab" />
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className={tab === 3 ? 'tabs__presentation tabs__presentation_support active' : 'tabs__presentation tabs__presentation_support'}>
          {/* show always */}
          <div className="tabs__presentation-content">
            <p className="text text_25 tabs__presentation-title">
              <span className="hide-768">After Sales Support</span>
              <span className="show-block-768">
                After Sales <br />
                Support
              </span>
            </p>
            <p className="text tabs__presentation-description">
              <span className="hide-768">If you have any difficulties with your kickscooter, our specialists will <br /> contact you within 15 minutes</span>
              <span className="show-block-768">
                If you have any difficulties with your <br /> kickscooter, our specialists will contact you <br /> within 15 minutes
              </span>
            </p>
          </div>

          <div className="tabs__presentation-icon">
            <div className="tabs__presentation-icon-wrapper">
              <Image objectFit="contain" position="relative" src={iconTabPresentationSupport} alt="icon for tab" />
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className={tab === 4 ? 'tabs__presentation tabs__presentation_road active' : 'tabs__presentation tabs__presentation_road'}>
          <div className="tabs__presentation-content">
            <p className="text text_25 tabs__presentation-title">
              <span className="hide-768">Up to 40 miles of range on a single charge</span>
              <span className="show-block-768">
                Up to 40 miles of range <br />
                on a single charge
              </span>
            </p>
            <p className="text tabs__presentation-description">With a range of up to 40 miles, the longest range on the market, and a 20˚uphill climbing angle, the KickScooter MAX allows you to ride from San Francisco Bay Area to Palo Alto on a single charge.</p>
          </div>

          <div className="tabs__presentation-icon">
            <div className="tabs__presentation-icon-wrapper tabs__presentation-icon-wrapper_range">
              <Image objectFit="contain" position="relative" src={iconTabPresentationRoad} alt="icon for tab" />
            </div>
          </div>
          {/* icon for desktop */}
        </div>
      </div>
    </div>
  );
}
