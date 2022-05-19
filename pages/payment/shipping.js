import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));
import { useRouter } from 'next/router';
import { data } from '@/base/data-test';

import CustomHead from '@/basic/CustomHead';
import { ShippingItem, ShippingList } from '@/shared/ShippingStatus';
import RadioWrapper from '@/shared/RadioItems/RadioWrapper';
import { useSelector } from 'react-redux';
import { setShippingMethod } from 'store/slices/profileSlice';
import { useEffect } from 'react';

export default function PaymentShippingPage() {
  
  const router = useRouter();

  const {
    firstName,
    lastName,
    email,
    state,
    city,
    zipCode,
    country,
    phone,
    address,
    shippingMethod
  } = useSelector(state => state.profile);

  useEffect(() => {
    if (
      !email ||
      !firstName ||
      !lastName ||
      !address ||
      !city ||
      !country ||
      !state ||
      !zipCode ||
      !phone
    ) {
      router.push('/payment')
    }

  }, [email,
    firstName,
    lastName,
    address,
    city,
    country,
    state,
    zipCode,
    phone,
    router]
  )

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
            currentValue={shippingMethod}
            handler={setShippingMethod}
            radioName="shippingMethod"
            id="economy"
            value="economy"
            firstChildren={
              <div className="payment-radio__title-text">
                <span className="payment-radio__title-text-title">Economy</span>
                <span className="payment-radio__title-text-text">1 to 2 business days</span>
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

export async function getStaticProps() {
  return {
    props: {
      accessoeries: data.accessoeries
    }
  };
}