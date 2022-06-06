import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));

const { data } = process.env.NODE_ENV === 'development' ? require('@/base/data-test') : require('@/base/data-prod');

import CustomHead from '@/basic/CustomHead';
import CustomCheckbox from '@/shared/CustomCheckbox';
import CustomInput from '@/shared/CustomInput';
import DropdownList from '@/shared/DropdownList';
import { useDispatch, useSelector } from 'react-redux';
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
import { PaymentElement } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';

export default function PaymentMainPage() {
  const dispatch = useDispatch();
  const router = useRouter();

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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const isValid = e.target.checkValidity();
    isValid && router.push('/payment/shipping')
  }

  return (
    <>
      <CustomHead title="Payment main information" />

      <form onSubmit={onSubmitHandler} className="payment-info">
        <div className="payment-info__contact-area">
          <p className="payment__title payment-info__title">Contact information</p>
          <CustomInput requied handler={e => dispatch(setEmail(e.target.value))} value={email} customClass="payment-info__email" type="text" placeholder="Email" />
          <CustomCheckbox handler={e => dispatch(setEmailMeWithNewsAndOffers(e.target.value))} value={emailMeWithNewsAndOffers} customClass="payment-info__checkbox-first" text="Email me with news and offers" />
        </div>
        <div className="payment-info__shipping-address">
          <p className="payment__title payment-info__title">Shipping address</p>
          <div className="payment-info__form-items">
            <div className="payment-info__form-item payment-info__form-item_50">
              <CustomInput requied handler={e => dispatch(setFirstName(e.target.value))} value={firstName} type="text" placeholder="First name" />
            </div>
            <div className="payment-info__form-item payment-info__form-item_50">
              <CustomInput requied handler={e => dispatch(setLastName(e.target.value))} value={lastName} type="text" placeholder="Last name" />
            </div>
            <div className="payment-info__form-item">
              <CustomInput requied handler={e => dispatch(setAddress(e.target.value))} value={address} type="text" placeholder="Address" />
            </div>
            <div className="payment-info__form-item">
              <CustomInput handler={e => dispatch(setApartment(e.target.value))} value={apartment} type="text" placeholder="Apartment, suite, tc. (optional)" />
            </div>
            <div className="payment-info__form-item">
              <CustomInput requied handler={e => dispatch(setCity(e.target.value))} value={city} type="text" placeholder="City" />
            </div>
            <div className="payment-info__form-item payment-info__form-item_33">
              <DropdownList
                route="/api/address?all_countries=true"
                handler={country => dispatch(setCountry(country))}
                value="United States"
                topLabel="Country / region"
                placeholder="Country / region"
                readOnly
                requied
              />
            </div>
            <div className="payment-info__form-item payment-info__form-item_33">
              <DropdownList
                route={`/api/address?state=${state}`}
                handler={state => dispatch(setState(state))}
                value={state}
                topLabel="State"
                placeholder="State"
                requied
              />
            </div>
            <div className="payment-info__form-item payment-info__form-item_33">
              <CustomInput requied handler={e => dispatch(setZipCode(e.target.value))} value={zipCode} type="text" placeholder="ZIP code" />
            </div>
            <div className="payment-info__form-item">
              <CustomInput mask="+1 999 999 99 99" requied handler={e => dispatch(setPhone(e.target.value))} value={phone} type="text" placeholder="Phone" />
            </div>
            <div className="payment-info__form-item">
              <CustomCheckbox handler={e => dispatch(setSaveThisInfoForNextTime(e.target.value))} value={saveThisInfoForNextTime} customClass="payment-info__checkbox-second" text="Save this information for next time" />
            </div>
            <div className="payment-info__form-item">
              <button type='submit' className="payment__btn payment-info__btn">Continue for shipping</button>
            </div>
          </div>
        </div>
      </form>
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