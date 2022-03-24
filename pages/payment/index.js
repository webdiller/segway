import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));

import { data } from '@/base/data';

import CustomHead from '@/basic/CustomHead';
import CustomCheckbox from '@/shared/CustomCheckbox';
import CustomInput from '@/shared/CustomInput';
import DropdownList from '@/shared/DropdownList';
import { useSelector } from 'react-redux';
import {
  setEmail,
  setEmailMeWithNewsAndOffers,
  setFirstName,
  setLastName,
  setAddress,
  setApartment,
  setCountry,
  setCity,
  setZipCode,
  setPhone,
  setSaveThisInfoForNextTime,
  setState
} from 'store/slices/profileSlice';

export default function PaymentMainPage() {
  const {
    email,
    emailMeWithNewsAndOffers,
    saveThisInfoForNextTime,
    firstName,
    lastName,
    address,
    apartment,
    country,
    city,
    state,
    zipCode,
    phone
  } = useSelector(state => state.profile);
  
  return (
    <>
      <CustomHead title="Payment main information" />

      <div className="payment-info">
        <div className="payment-info__contact-area">
          <p className="payment__title payment-info__title">Contact information</p>
          <CustomInput handler={setEmail} value={email} customClass="payment-info__email" type="text" placeholder="Email" />
          <CustomCheckbox handler={setEmailMeWithNewsAndOffers} value={emailMeWithNewsAndOffers} customClass="payment-info__checkbox-first" text="Email me with news and offers" />
        </div>
        <div className="payment-info__shipping-address">
          <p className="payment__title payment-info__title">Shipping address</p>
          <form className="payment-info__form-items">
            <div className="payment-info__form-item payment-info__form-item_50">
              <CustomInput handler={setFirstName} value={firstName} type="text" placeholder="First name" />
            </div>
            <div className="payment-info__form-item payment-info__form-item_50">
              <CustomInput handler={setLastName} value={lastName} type="text" placeholder="Last name" />
            </div>
            <div className="payment-info__form-item">
              <CustomInput handler={setAddress} value={address} type="text" placeholder="Address" />
            </div>
            <div className="payment-info__form-item">
              <CustomInput handler={setApartment} value={apartment} type="text" placeholder="Apartment, suite, tc. (optional)" />
            </div>
            <div className="payment-info__form-item">
              <CustomInput handler={setCity} value={city} type="text" placeholder="City" />
            </div>
            <div className="payment-info__form-item payment-info__form-item_33">
              <DropdownList handler={setCountry} value={country} placeholder="Country / region" />
            </div>
            <div className="payment-info__form-item payment-info__form-item_33">
              <DropdownList handler={setState} value={state} placeholder="State" />
            </div>
            <div className="payment-info__form-item payment-info__form-item_33">
              <CustomInput handler={setZipCode} value={zipCode} type="text" placeholder="ZIP code" />
            </div>
            <div className="payment-info__form-item">
              <CustomInput handler={setPhone} value={phone} type="text" placeholder="Phone" />
            </div>
            <div className="payment-info__form-item">
              <CustomCheckbox handler={setSaveThisInfoForNextTime} value={saveThisInfoForNextTime} customClass="payment-info__checkbox-second" text="Save this information for next time" />
            </div>
            <div className="payment-info__form-item">
              <Link href="/payment/shipping"><a className="payment__btn payment-info__btn">Continue for shipping</a></Link>
            </div>
          </form>
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