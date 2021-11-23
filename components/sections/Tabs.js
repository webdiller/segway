import Image from "next/image";

export default function Tabs() {
  return (
    <div className="tabs">
      <div className="container tabs__container">
        <div className="tabs__tabs">
          <a href="#tab-delivery" className="ui-btn tabs__tab">
            <div className="tabs__tab-img-wrapper">
              <Image
                className="tabs__tab-img"
                src="/icon-tab-delivery.svg"
                alt="Delivery within 1 business day"
                layout="responsive"
                width={38}
                height={37}
                objectFit="contain"
                placeholder="blur"
                blurDataURL="/icon-tab-delivery.svg"
              />
            </div>
            <span className="tabs__tab-text">
              Delivery within 1 business day
            </span>
          </a>
          <a href="#tab-warranty" className="ui-btn tabs__tab">
            <div className="tabs__tab-img-wrapper">
              <Image
                className="tabs__tab-img"
                src="/icon-tab-warranty.svg"
                alt="Basic 1 year warranty"
                layout="responsive"
                width={25}
                height={35}
                objectFit="contain"
                placeholder="blur"
                blurDataURL="/icon-tab-warranty.svg"
              />
            </div>
            <span className="tabs__tab-text">Basic 1 year warranty</span>
          </a>
          <a href="#tab-support" className="ui-btn tabs__tab">
            <div className="tabs__tab-img-wrapper">
              <Image
                className="tabs__tab-img"
                src="/icon-tab-support.svg"
                alt="After Sales Support"
                layout="responsive"
                width={37}
                height={37}
                objectFit="contain"
                placeholder="blur"
                blurDataURL="/icon-tab-support.svg"
              />
            </div>
            <span className="tabs__tab-text">After Sales Support</span>
          </a>
          <a href="#tab-road" className="ui-btn tabs__tab">
            <div className="tabs__tab-img-wrapper">
              <Image
                className="tabs__tab-img"
                src="/icon-tab-road.svg"
                alt="Up to 40 miles per charge"
                layout="responsive"
                width={36}
                height={36}
                objectFit="contain"
                placeholder="blur"
                blurDataURL="/icon-tab-road.svg"
              />
            </div>
            <span className="tabs__tab-text">Up to 40 miles per charge</span>
          </a>
        </div>
        <div className="tabs__presentations">
          <div id="tabDelivery" className="tabs__presentation">
            <div className="tabs__presentation-content">
              <p className="text text_25 tabs__presentation-title">
                WE ARE IN LOS ANGELES, CA
              </p>
              <p className="text tabs__presentation-description">
                Free California 1 day shipping. US Free Shipping 3-5 Days
              </p>
            </div>
          </div>

          <div id="tabWarrancy" className="tabs__presentation"></div>

          <div id="tabSupport" className="tabs__presentation"></div>

          <div id="tabRoad" className="tabs__presentation">
            <div className="tabs__presentation-content">
              <p className="text text_25 tabs__presentation-title">
                Up to 40 miles of range on a single charge
              </p>
              <p className="text tabs__presentation-description">
                With a range of up to 40 miles, the longest range on the market,
                and a 20˚uphill climbing angle, the KickScooter MAX allows you
                to ride from San Francisco Bay Area to Palo Alto on a single
                charge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
