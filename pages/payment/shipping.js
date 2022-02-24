import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));
import CustomHead from '@/basic/CustomHead';
import { ShippingItem, ShippingList } from '@/shared/ShippingStatus';

export default function PaymentShippingPage() {
  return (
    <>
      <CustomHead title="Payment shipping" />
      <div className="payment-shipping">
        <div className="payment-shipping__status">
          <ShippingList>
            <ShippingItem title="Contact" value="yourmail@mai.com" />
            <ShippingItem title="Contact" value="yourmail@mai.com" />
          </ShippingList>
        </div>
        <div className="payment-shipping__methods">
          <p className="payment__title payment-shipping__title">Shipping method</p>
        </div>
        <div className="payment-shipping__action-buttons">
          <Link href="/payment/payment"><a className="payment__btn">Continue for shipping</a></Link>
          <Link href="/payment"><a className="payment__btn payment__btn_transparent">Return to information</a></Link>
        </div>
      </div>
    </>
  );
}