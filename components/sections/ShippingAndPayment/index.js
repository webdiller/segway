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
          customClass="text-left shipping-and-payment__title-with-description"
          titleDesktop={<>Shipping Guidelines</>}
          titleMobile={<>Shipping Guidelines</>}
          textDesktop={
            <>
              Cherry Wheel LLC ships to all 50 United States, P.O. boxes and U.S. Territories
              (American Samoa, Guam, Puerto Rico and U.S. Virgin Islands).  For orders with pre-order
              items that require more than one shipment, the total shipping and tax charges for each
              shipment will be allocated proportionally to the cost of the items shipped.Orders are
              processed pending item availability and payment verification. We will contact you
              via email if there are any issues with your order. Orders placed before 3pm
              PST are typically processed next-day, excluding weekends, holidays.
              <br />
              *All items are quality controlled and checked for any material faults prior to shipping
            </>
          }
          textMobile={
            <>
              Cherry Wheel LLC ships to all 50 United States, P.O. boxes and U.S. Territories
              (American Samoa, Guam, Puerto Rico and U.S. Virgin Islands).  For orders with pre-order
              items that require more than one shipment, the total shipping and tax charges for each
              shipment will be allocated proportionally to the cost of the items shipped.Orders are
              processed pending item availability and payment verification. We will contact you
              via email if there are any issues with your order. Orders placed before 3pm
              PST are typically processed next-day, excluding weekends, holidays.
              <br />
              *All items are quality controlled and checked for any material faults prior to shipping
            </>
          }
        />

        <div className="site-content">
          <div className="site-content__items">

            <div className="site-content__item">
              <p className="text text_25 text_bold site-content__item-title"><b>Refusal of Delivery</b></p>
              <p className="text">If you refuse delivery of an order, the package will be returned to our warehouse. You will receive a refund for the merchandise and tax paid, but shipping charges are non-refundable.
              </p>
            </div>

            <div className="site-content__item">
              <p className="text text_25 text_bold site-content__item-title"><b>Order And Shipping Confirmation Emails</b></p>
              <p className="text">You will receive an order confirmation email once your order has been submitted into our system. Once your order has shipped, we will send you an email confirmation that will include the tracking number for your package.</p>
              <p className='text'>You may receive several shipments in order to complete the fulfillment of your order and will receive a shipping confirmation email for all items as they are shipped.</p>
            </div>

            <div className="site-content__item">
              <p className="text text_25 text_bold site-content__item-title"><b>Item Availability And Pre-Order</b></p>
              <p className="text">We make every effort to maintain sufficient stock of items on our website; however, we may run out of stock of popular items. We also work to ensure that when you place an order online, the item is available at the time of shipping. In the case that an item is out of stock, we will notify you via e-mail and any changes to your order will be reflected in your order total.</p>
              <p className='text'>Payment will be processed when the your items are shipped.</p>
              <p className='text'>Pre-order items will be processed, charged, and shipped as they become available. Pre-order shipping dates are for estimation purposes only; items may ship before or after the estimated shipping date.</p>
            </div>

            <div className="site-content__item">
              <p className="title site-content__item-title"><b>Payment Options</b></p>
              <p className="text">We accept the following forms of payment: American Express, MasterCard, Visa, Discover, PayPal,  Apple Pay and Google Pay (only available on mobile) and also you can pay with most popular Cryptocurrency. </p>
            </div>

            <div className="site-content__item">
              <p className="text text_25 text_bold site-content__item-title"><b>For Online Payment By Credit Card Or PayPal</b></p>
              <p className="text">The total dollar amount of your order will be authorized at the time your order is placed. The actual payment (transfer of funds) will not occur until your order ships.
              </p>
            </div>

            <div className="site-content__item">
              <p className="text text_25 text_bold site-content__item-title"><b>For Online Payment By Debit Card
              </b></p>
              <p className="text">The total dollar amount of your order will be authorized at the time your card is approved, which may have an effect on your account balance even though the actual payment (transfer of funds) will not occur until your order ships.
              </p>
              <p className='text'>If you order a pre-order item, we recommend that you deduct the full amount of your order from your debit card records to ensure funds are available as your items are shipped.
              </p>
            </div>

            <div className="site-content__item">
              <p className="text text_25 text_bold site-content__item-title"><b>Buy now, pay later with Affirm</b></p>
              <p className="text">Pay off your purchase in easy, fixed payments over 3, 6, or 12 months starting at 0% APR with Affirm*. Prequalify now to receive an instant loan decision and complete your purchase today. Previous purchases are ineligible for this offer. Offer subject to change at any time.</p>
              <p className='text'>*Subject to credit check and approval. For example, if you made a $1,000 purchase you might pay $166.67/mo over 6 months at 0% APR. A down payment may be required. For purchases under $100, limited payment options are available. Affirm loans are made by Cross River Bank, a New Jersey State Chartered Commercial Bank, Member FDIC.
              </p>
            </div>

            <div className="site-content__item">
              <p className="title site-content__item-title"><b>Return policy</b></p>
              <p className="text">To return a product, contact the client services team at returns@cherry-wheel.com with the name, delivery address and order number from your purchase or call (888) 590-2694. You will be emailed a return shipping label. For authorized returns, adhere the USPS or UPS return label onto your return package, and return your package via an authorized location, drop-off point, or scheduled pick up. Please do not combine returns from multiple orders in the same return shipment, as this will delay the processing of your return.
              </p>
              <p className='text'>Returned products must be in their original condition without any scratches and broken parts. Upon receipt of returned goods, Cherry Wheel LLC reserves the right to deny the return if the products do not meet policy requirements. Cherry Wheel LLC accepts returns on domestic US web orders within 30 days from the delivery date. All segway-ninebot.us returns must be returned by sending back directly to our warehouse. </p>
              <p className="text">Refunds will be processed in the original form of payment within 5 business days for the value of the returned products. Please note that it may take up to an additional 10 days for the refund to show up on your account statement depending on your credit issuer&apos;s processing time.
              </p>
              <p className="text">If you would like to exchange an item, please contact the customer service team at returns@cherry-wheel.com  or call (888) 590-2694. We ask that you return your original order following the return instructions listed above, and place a new order online for the replacement item.</p>
            </div>
          </div>
        </div>

        <br /><br /><br />

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
                <p className="text shipping-and-payment__item-title">Quick customer support </p>
                <p className="text text_13 shipping-and-payment__item-description">
                  We provide the fastest possible support to our customers. <br /> For any questions, please call <br />
                  <a href="tel:+18885902694">(888) 590-2694</a> or email <a href="mailto:info@cherry-wheel.com">info@cherry-wheel.com</a>
                </p>
              </div>
            </div>

            <div className="shipping-and-payment__item">
              <div className="shipping-and-payment__item-icon">
                <Image alt="Icon" src={IconCart} />
              </div>
              <div className="shipping-and-payment__item-content">
                <p className="text shipping-and-payment__item-title">A wide range of payment methods</p>
                <p className="text text_13 shipping-and-payment__item-description">
                  You can pay for your order by using differ payment methods like: <br />
                  You can pay for your order by using differ payment methods like: <br />
                  Or you can pay by parts with Affirm.
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
    </div >
  );
}
