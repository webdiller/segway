import TitleWithDescription from '@/blocks/TitleWithDescription';
import Image from 'next/image';
import imageMap from '@/base/icon-contacts-map.svg';
import imagePhone from '@/base/icon-contacts-phone.svg';

export default function Contacts() {
  return (
    <div className="contacts">
      <div className="container contacts__top-container">

        <TitleWithDescription
          customClass='contacts__title-with-description'
          titleDesktop={<>CONTACT</>}
          titleMobile={<>CONTACT</>}
          textDesktop={
            <>
              We treat our clients very carefully. For all questions regarding planned purchases, for current orders or cooperation issues, please contact by email <a href="mailto:info@cherry-wheel.com">info@cherry-wheel.com</a> or:
            </>
          }
          textMobile={<>
            We treat our clients very carefully. For all questions regarding planned purchases, for current orders or cooperation issues, please contact by email <a href="mailto:info@cherry-wheel.com">info@cherry-wheel.com</a> or:
          </>}
        />
        <div className="contacts__items">
          <div className="contacts__item">
            <div className="contacts__item-img-wrapper">
              <Image alt="Office icon" src={imageMap} objectFit="contain" layout="responsive" />
            </div>
            <div className="contacts__item-content">
              <p className="text super-accent contacts__item-title">Mail:</p>
              <p className="text contacts__item-description">8605 Santa Monica Boulevard #58391 <br />
                West Hollywood, <br /> CA 90069-4109</p>
            </div>
          </div>

          <div className="contacts__item">
            <div className="contacts__item-img-wrapper">
              <Image alt="Phone icon" src={imagePhone} objectFit="contain" layout="responsive" />
            </div>
            <div className="contacts__item-content">
              <p className="text super-accent contacts__item-title">Phone:</p>
              <p className="text contacts__item-description">All week, 24/7
              </p>
              <a href="tel:+18885902694" className="text contacts__item-link">
                +1 (888) 590-2694
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts__map-container">
        <div className="contacts__map-iframe"></div>
      </div>
    </div>
  );
}
