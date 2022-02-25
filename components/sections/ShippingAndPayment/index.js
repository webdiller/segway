import TitleWithDescription from '@/blocks/TitleWithDescription';
import Image from 'next/image';

import IconCar from '@/base/icons/shipping-icon-car.svg';
import IconRoket from '@/base/icons/shipping-icon-roket.svg';
import IconCart from '@/base/icons/shipping-icon-cart.svg';
import MainImage from '@/base/shipping-and-payment-image.jpg';

export default function ShippingAndPayment() {
  return (
    <div className="shipping-and-payment">
      <div className="container shipping-and-payment__container">
        <TitleWithDescription
          customClass="shipping-and-payment__title-with-description"
          titleDesktop={<>SHIPPING AND PAYMENT</>}
          titleMobile={<>SHIPPING AND PAYMENT</>}
          textDesktop={
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis tortor eget nulla cursus <br />
              sit. Aliquet nibh phasellus arcu in. A amet volutpat cursus hac nunc porttitor tristique id.
            </>
          }
          textMobile={
            <>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Non duis tortor eget nulla <br />
              cursus sit. Aliquet nibh phasellus arcu in. A <br />
              amet volutpat cursus hac nunc porttitor <br />
              tristique id.
            </>
          }
        />
        <div className="shipping-and-payment__content">
          <div className="shipping-and-payment__items">
            <div className="shipping-and-payment__item">
              <div className="shipping-and-payment__item-icon">
                <Image alt="Icon" src={IconCar} />
              </div>
              <div className="shipping-and-payment__item-content">
                <p className="text shipping-and-payment__item-title">Delivery within 1 business day</p>
                <p className="text text_13 shipping-and-payment__item-description">
                  WE ARE IN LOS ANGELES, CA. <br /> Free California 1 day shipping. <br /> US Free Shipping 3-5 Days.
                </p>
              </div>
            </div>

            <div className="shipping-and-payment__item">
              <div className="shipping-and-payment__item-icon">
                <Image alt="Icon" src={IconRoket} />
              </div>
              <div className="shipping-and-payment__item-content">
                <p className="text shipping-and-payment__item-title">Delivery within 1 business day</p>
                <p className="text text_13 shipping-and-payment__item-description">
                  WE ARE IN LOS ANGELES, CA. <br /> Free California 1 day shipping. <br /> US Free Shipping 3-5 Days.
                </p>
              </div>
            </div>

            <div className="shipping-and-payment__item">
              <div className="shipping-and-payment__item-icon">
                <Image alt="Icon" src={IconCart} />
              </div>
              <div className="shipping-and-payment__item-content">
                <p className="text shipping-and-payment__item-title">Delivery within 1 business day</p>
                <p className="text text_13 shipping-and-payment__item-description">
                  WE ARE IN LOS ANGELES, CA. <br /> Free California 1 day shipping. <br /> US Free Shipping 3-5 Days.
                </p>
              </div>
            </div>
          </div>

          <div className="shipping-and-payment__large-image">
            <div className="shipping-and-payment__large-image-wrapper">
              <Image placeholder="blur" layout="responsive" objectFit="contain" src={MainImage} alt="Main page image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
