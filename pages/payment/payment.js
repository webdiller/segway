import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));

import CustomHead from '@/basic/CustomHead';
import { ShippingItem, ShippingList } from '@/shared/ShippingStatus';
import RadioWrapper from '@/shared/RadioItems/RadioWrapper';
import Image from 'next/image';

import { data } from '@/base/data';

import paymentsLarge from '@/base/payments-large.jpg'
import paymentsSmall from '@/base/payments-small.jpg'
import iconPaypel from '@/base/icon-paypel.svg'
import iconAffirm from '@/base/icon-affirm.svg'
import iconCoinbase from '@/base/icon-coinbase.svg'
import CustomInput from '@/shared/CustomInput';
import DropdownList from '@/shared/DropdownList';
import { useSelector } from 'react-redux';

import { setBillingAddress, setPaymentMethod } from 'store/slices/profileSlice';

import {
  setDifferentFirstName,
  setDifferentLastName,
  setDifferentAddress,
  setDifferentApartment,
  setDifferentCity,
  setDifferentCountry,
  setDifferentState,
  setDifferentZipCode,
  setDifferentPhone
} from 'store/slices/differentBillingSlice';

export default function PauymentLastPage() {
  const {
    email,
    address,
    paymentMethod,
    billingAddress
  } = useSelector(state => state.profile);

  const {
    differentFirstName,
    differentLastName,
    differentAddress,
    differentApartment,
    differentCity,
    differentCountry,
    differentState,
    differentZipCode,
    differentPhone,
  } = useSelector(state => state.differentBilling);

  return (
    <>
      <CustomHead title="Payment main information" />
      <div className="payment-payment">
        <div className="payment-payment__status">
          <ShippingList>
            <ShippingItem link="/payment" title="Contact" value={email} />
            <ShippingItem link="/payment" title="Ship to" value={address} />
            <ShippingItem link="/payment/shipping" title="Method" value="Economy • Free" />
          </ShippingList>
        </div>

        <div className="payment-payment__head-for-form-first">
          <p className="payment__title payment-payment__title">Payment</p>
          <p className="payment__description payment-payment__description">All transactions are secure and encrypted</p>
        </div>

        <RadioWrapper
          currentValue={paymentMethod}
          handler={setPaymentMethod}
          radioName="shippingMethods"
          value="paymentMethodsCreditCard"
          id="paymentMethodsCreditCard"

          customClass="bb-0 payment-radio__border-input-top-alt"
          firstChildren={
            <div className="payment-radio__title-text">
              <span className="mb-0 payment-radio__title-text-title">Credit card</span>
            </div>
          }
          secondChildren={<div className="payment-radio__payments">
            <div className="hide-768 payment-radio__payments-img-wrapper">
              <Image quality={100} src={paymentsLarge} alt="Payment icon" layout="responsive" />
            </div>
            <div className="show-block-768 payment-radio__payments-img-wrapper">
              <Image quality={100} src={paymentsSmall} alt="Payment icon" layout="responsive" />
            </div>
            <small className="hide-768 text text_13 payment-radio__payments-more">and more...</small>
          </div>}
          dropdownChildren={<div className='payment-radio__inputs'>
            <div className="payment-radio__input"><CustomInput showIconLock type="text" placeholder="Card number" /></div>
            <div className="payment-radio__input"><CustomInput type="text" placeholder="Name on card" /></div>
            <div className="payment-radio__input payment-radio__input_50"><CustomInput type="text" placeholder="Expiration date ( MM / YY )" /></div>
            <div className="payment-radio__input payment-radio__input_50"><CustomInput showIconQuestion type="text" placeholder="Security Code (CVC)" /></div>
          </div>}
        />

        <RadioWrapper
          currentValue={paymentMethod}
          handler={setPaymentMethod}
          radioName="shippingMethods"
          value="paymentMethodsPaypel"
          id="paymentMethodsPaypel"

          hideSecondChildOnBlur
          customClass="bb-0"
          firstChildren={
            <div className="payment-radio__payment-image">
              <Image src={iconPaypel} alt="Icon payment" />
            </div>
          }
          secondChildren={<div className="payment-radio__description">
            After clicking “Complete order”, you will be redirected <br />
            to PayPal to complete your purchase securely.
          </div>}
        />

        <RadioWrapper
          currentValue={paymentMethod}
          handler={setPaymentMethod}
          radioName="shippingMethods"
          value="paymentMethodsAffirm"
          id="paymentMethodsAffirm"

          hideSecondChildOnBlur
          customClass="bb-0"
          firstChildren={
            <div className="payment-radio__payment-image">
              <Image src={iconAffirm} alt="Icon payment" />
            </div>
          }
          secondChildren={<div className="payment-radio__description">
            After clicking “Complete order”, you will be redirected <br />
            to PayPal to complete your purchase securely.
          </div>}
        />

        <RadioWrapper
          currentValue={paymentMethod}
          handler={setPaymentMethod}
          radioName="shippingMethods"
          value="paymentMethodsCoinbase"
          id="paymentMethodsCoinbase"

          hideSecondChildOnBlur
          firstChildren={
            <div className="payment-radio__payment-image">
              <Image src={iconCoinbase} alt="Icon payment" />
            </div>
          }
          secondChildren={<div className="payment-radio__description">
            After clicking “Complete order”, you will be redirected <br />
            to PayPal to complete your purchase securely.
          </div>}
        />

        <div className="payment-payment__head-for-form-second">
          <p className="payment__title payment-payment__title">Billing address</p>
          <p className="payment__description payment-payment__description">Select the address that matches your card or payment method</p>
        </div>

        <RadioWrapper
          currentValue={billingAddress}
          handler={setBillingAddress}
          radioName="billingAddress"
          value="same"
          id="same"

          customClass="mb-0 bb-0"
          firstChildren={
            <div className="mb-0 payment-radio__title-text">
              <p className="mb-0 payment-radio__title-text-title payment-radio__title-text-title_bold">Same as shipping address</p>
            </div>
          }
        />

        <RadioWrapper
          currentValue={billingAddress}
          handler={setBillingAddress}
          radioName="billingAddress"
          value="different"
          id="different"

          customClass="payment-radio__border-input-top"
          firstChildren={
            <div className="mb-0 payment-radio__title-text">
              <p className="mb-0 payment-radio__title-text-title payment-radio__title-text-title_bold">Use a different billing address</p>
            </div>
          }
          dropdownChildren={<div className='payment-radio__inputs payment-radio__inputs_alt'>
            <div className="payment-radio__input payment-radio__input_50"><CustomInput handler={setDifferentFirstName} value={differentFirstName} type="text" placeholder="First name" /></div>
            <div className="payment-radio__input payment-radio__input_50"><CustomInput handler={setDifferentLastName} value={differentLastName} type="text" placeholder="Last name" /></div>
            <div className="payment-radio__input"><CustomInput handler={setDifferentAddress} value={differentAddress} type="text" placeholder="Address" /></div>
            <div className="payment-radio__input"><CustomInput handler={setDifferentApartment} value={differentApartment} type="text" placeholder="Apartment, suite, tc. (optional)" /></div>
            <div className="payment-radio__input"><CustomInput handler={setDifferentCity} value={differentCity} type="text" placeholder="City" /></div>
            <div className="payment-radio__input payment-radio__input_33"><DropdownList handler={setDifferentCountry} value={differentCountry} placeholder="Country / region" /></div>
            <div className="payment-radio__input payment-radio__input_33"><DropdownList handler={setDifferentState} value={differentState} placeholder="State" /></div>
            <div className="payment-radio__input payment-radio__input_33"><CustomInput handler={setDifferentZipCode} value={differentZipCode} type="text" placeholder="ZIP code" /></div>
            <div className="payment-radio__input"><CustomInput handler={setDifferentPhone} value={differentPhone} type="text" placeholder="Phone" /></div>
          </div>}
        />

        <div className="payment-payment__action-buttons">
          <button className="payment__btn payment-payment__action-btn">Pay now</button>
          <Link href="/payment">
            <a className="payment__btn payment__btn_transparent payment-payment__action-btn">Return to shipping</a>
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
