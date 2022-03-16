import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));
import CustomHead from '@/basic/CustomHead';
import { ShippingItem, ShippingList } from '@/shared/ShippingStatus';
import RadioWrapper from '@/shared/RadioItems/RadioWrapper';
import { useSelector } from 'react-redux';

export default function PaymentShippingPage() {
  const { email, address } = useSelector(state => state.profile);
  return (
    <>
      <CustomHead title="Payment shipping" />
      <div className="payment-shipping">
        <div className="payment-shipping__status">
          <ShippingList>
            <ShippingItem link="/payment" title="Contact" value={email} />
            <ShippingItem link="/payment" title="Ship to" value={address} />
          </ShippingList>
        </div>
        <div className="payment-shipping__methods">
          <p className="payment__title payment-shipping__title">Shipping method</p>
          <RadioWrapper
            id="shippingMethodEconomy"
            radioName="shippingMethod"
            firstChildren={
              <div className="payment-radio__title-text">
                <span className="payment-radio__title-text-title">Economy</span>
                <span className="payment-radio__title-text-text">5 to 8 business days</span>
              </div>
            }
            secondChildren={<div className="payment-radio__link">Free</div>}
          />
        </div>
        <div className="payment-shipping__action-buttons">
          <Link href="/payment/payment">
            <a className="payment__btn  payment-shipping__action-btn">Continue for shipping</a>
          </Link>
          <Link href="/payment">
            <a className="payment__btn payment__btn_transparent payment-shipping__action-btn">Return to information</a>
          </Link>
        </div>
      </div>
    </>
  );
}
