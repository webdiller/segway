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

export default function Tabs({

  tab_1_title=(<>Delivery within <br />1 business day</>),
  tab_2_title=(<>Basic 1 year <br />warranty</>),
  tab_3_title=(<>After Sales <br />Support</>),
  tab_4_title=(<>Up to 40 miles <br />per charge</>),

  title_1_desktop=(<>WE ARE IN <br /> LOS ANGELES, CA</>),
  title_1_mobile=(<>WE ARE IN <br /> LOS ANGELES, CA</>),
  text_1_desktop=(<>Free California 1 day shipping. <br/> US Free Shipping 3-5 Days</>),
  text_1_mobile=(<>Free California 1 day shipping. <br /> US Free Shipping 3-5 Days</>),
  
  title_2_desktop=(<>One year <br /> manufacturer′s warranty</>),
  title_2_mobile=(<>One year  manufacturer′s <br /> warranty</>),
  text_2_desktop=(<>The basic warranty is 1 year. <br /> You can also extend the warranty up to 4 years.</>),
  text_2_mobile=(<>The basic warranty is 1 year. <br />You can also extend the warranty <br /> up to 4 years.</>),

  title_3_desktop=(<>After Sales <br /> Support</>),
  title_3_mobile=(<>After Sales <br /> Support</>),
  text_3_desktop=(<>If you have any difficulties with your kickscooter, our specialists will <br /> contact you within 15 minutes</>),
  text_3_mobile=(<>If you have any difficulties with your <br /> kickscooter, our specialists will contact you <br /> within 15 minutes</>),

  title_4_desktop=(<>Up to 40 miles of range <br /> on a single charge</>),
  title_4_mobile=(<>Up to 40 miles of range <br /> on a single charge</>),
  text_4_desktop=(<>
    With a range of up to 40 miles, the longest range on the market, <br />
    and a 20˚uphill climbing angle, the KickScooter MAX allows you to <br />
    ride from San Francisco Bay Area to Palo Alto on a single charge.
    </>),
  text_4_mobile=(<>
    With a range of up to 40 miles, the longest <br />
    range on the market, and a 20˚uphill <br />
    climbing angle, the KickScooter MAX allows <br />
    you to ride from San Francisco Bay Area to <br />
    Palo Alto on a single charge.
  </>),
  customClass
}) {
  const [tab, setTab] = useState(1);
  const setTabHandle = (val) => setTab(val);

  return (
    <div className={customClass ? `tabs tabs_${customClass}` : 'tabs'}>
      <div className="container tabs__container">
        <div className="tabs__tabs">
          <div onClick={() => setTabHandle(1)} className={tab === 1 ? 'tabs__tab active' : 'tabs__tab'}>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_1 tabs__tab-icon-wrapper_color">
              <Image objectFit="contain" layout="responsive" src={tabIcon1Color} alt="icon for tab" />
            </div>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_1 tabs__tab-icon-wrapper_white">
              <Image objectFit="contain" layout="responsive" src={tabIcon1White} alt="icon for tab" />
            </div>
            <span className="tabs__tab-text">{tab_1_title}</span>
          </div>
          <div onClick={() => setTabHandle(2)} className={tab === 2 ? 'tabs__tab active' : 'tabs__tab'}>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_2 tabs__tab-icon-wrapper_color">
              <Image objectFit="contain" layout="responsive" src={tabIcon2Color} alt="icon for tab" />
            </div>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_2 tabs__tab-icon-wrapper_white">
              <Image objectFit="contain" layout="responsive" src={tabIcon2White} alt="icon for tab" />
            </div>
            <span className="tabs__tab-text">{tab_2_title}</span>
          </div>
          <div onClick={() => setTabHandle(3)} className={tab === 3 ? 'tabs__tab active' : 'tabs__tab'}>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_3 tabs__tab-icon-wrapper_color">
              <Image objectFit="contain" layout="responsive" src={tabIcon3Color} alt="icon for tab" />
            </div>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_3 tabs__tab-icon-wrapper_white">
              <Image objectFit="contain" layout="responsive" src={tabIcon3White} alt="icon for tab" />
            </div>
            <span className="tabs__tab-text">{tab_3_title}</span>
          </div>
          <div onClick={() => setTabHandle(4)} className={tab === 4 ? 'tabs__tab active' : 'tabs__tab'}>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_4 tabs__tab-icon-wrapper_color">
              <Image objectFit="contain" layout="responsive" src={tabIcon4Color} alt="icon for tab" />
            </div>
            <div className="tabs__tab-icon-wrapper tabs__tab-icon-wrapper_4 tabs__tab-icon-wrapper_white">
              <Image objectFit="contain" layout="responsive" src={tabIcon4White} alt="icon for tab" />
            </div>
            <span className="tabs__tab-text">{tab_4_title}</span>
          </div>
        </div>

        {/* 1 */}
        <div className={tab === 1 ? 'tabs__presentation active' : 'tabs__presentation'}>
          <div className="tabs__presentation-content">
            <p className="text text_25 tabs__presentation-title">
              <span className="hide-768">{title_1_desktop}</span>
              <span className="show-block-768">{title_1_mobile}</span>
            </p>
            <p className="text tabs__presentation-description">
              <span className="hide-768">{text_1_desktop}</span>
              <span className="show-block-768">{text_1_mobile}</span>
            </p>
          </div>
          <div className="tabs__presentation-icon">
            <div className="tabs__presentation-icon-wrapper">
              <Image objectFit="contain" position="relative" src={iconTabPresentationDelivery} alt="icon for tab" />
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className={tab === 2 ? 'tabs__presentation active' : 'tabs__presentation'}>
          <div className="tabs__presentation-content">
            <p className="text text_25 tabs__presentation-title">
              <span className="hide-768">{title_2_desktop}</span>
              <span className="show-block-768">{title_2_mobile}</span>
            </p>
            <p className="text tabs__presentation-description">
              <span className="hide-768">{text_2_desktop} </span>
              <span className="show-block-768">{text_2_mobile}</span>
            </p>
          </div>
          <div className="tabs__presentation-icon">
            <div className="tabs__presentation-icon-wrapper">
              <Image objectFit="contain" position="relative" src={iconTabPresentationWarrancy} alt="icon for tab" />
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className={tab === 3 ? 'tabs__presentation active' : 'tabs__presentation'}>
          <div className="tabs__presentation-content">
            <p className="text text_25 tabs__presentation-title">
              <span className="hide-768">{title_3_desktop}</span>
              <span className="show-block-768">{title_3_mobile}</span>
            </p>
            <p className="text tabs__presentation-description">
              <span className="hide-768">{text_3_desktop}</span>
              <span className="show-block-768">{text_3_mobile}</span>
            </p>
          </div>

          <div className="tabs__presentation-icon">
            <div className="tabs__presentation-icon-wrapper">
              <Image objectFit="contain" position="relative" src={iconTabPresentationSupport} alt="icon for tab" />
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className={tab === 4 ? 'tabs__presentation active' : 'tabs__presentation'}>
          <div className="tabs__presentation-content">
            <p className="text text_25 tabs__presentation-title">
              <span className="hide-768">{title_4_desktop}</span>
              <span className="show-block-768">{title_4_mobile}</span>
            </p>
            <p className="text tabs__presentation-description">
              <span className="hide-768">{text_4_desktop}</span>
              <span className="show-block-768">{text_4_mobile}</span>
            </p>
          </div>

          <div className="tabs__presentation-icon">
            <div className="tabs__presentation-icon-wrapper tabs__presentation-icon-wrapper_range">
              <Image objectFit="contain" position="relative" src={iconTabPresentationRoad} alt="icon for tab" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
