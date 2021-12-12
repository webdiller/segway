import TitleWithDescription from '@/blocks/TitleWithDescription';
import Image from 'next/image';
import imageMap from '@/base/icon-contacts-map.svg';
import imagePhone from '@/base/icon-contacts-phone.svg';

export default function Contacts() {
  return (
    <div className="contacts">
      <div className="container contacts__top-container">
        <TitleWithDescription customClassMain="contacts__title-with-description" titleText="CONTACT" descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis tortor eget nulla cursus sit. Aliquet nibh phasellus arcu in. A amet volutpat cursus hac nunc porttitor tristique id. " />
        <div className="contacts__items">
          <div className="contacts__item">
            <div className="contacts__item-img-wrapper">
              <Image alt="Office icon" src={imageMap} objectFit="contain" layout="responsive" />
            </div>
            <div className="contacts__item-content">
              <p className="text super-accent contacts__item-title">Office</p>
              <p className="text contacts__item-description">2637 Fairfax Ave Culver City, CA 90232</p>
            </div>
          </div>

          <div className="contacts__item">
            <div className="contacts__item-img-wrapper">
              <Image alt="Phone icon" src={imagePhone} objectFit="contain" layout="responsive" />
            </div>
            <div className="contacts__item-content">
              <p className="text super-accent contacts__item-title">Telephone</p>
              <p className="text contacts__item-description">All week, 24/7 </p>
              <a href="tel:+18888888888" className="text contacts__item-link">
                +1 (888) 888-88-88
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
