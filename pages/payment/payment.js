import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));

import CustomHead from '@/basic/CustomHead';
import { ShippingItem, ShippingList } from '@/shared/ShippingStatus';
import RadioWrapper from '@/shared/RadioItems/RadioWrapper';
import Image from 'next/image';
import paymentClose from '@/base/icons/payment-close.svg'

import paymentsLarge from '@/base/payments-large.jpg'
import paymentsSmall from '@/base/payments-small.jpg'
import iconExtend from '@/base/icon-extend.jpg'
import iconPaypel from '@/base/icon-paypel.svg'
import iconAffirm from '@/base/icon-affirm.svg'
import iconCoinbase from '@/base/icon-coinbase.svg'
import CustomInput from '@/shared/CustomInput';
import DropdownList from '@/shared/DropdownList';
import { useDispatch, useSelector } from 'react-redux';

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

import { data } from '@/base/data';

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from "@stripe/react-stripe-js";

import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import AnimatedModalWrapper from '@/modals/AnimatedModalWrapper';
import SuccessModal from './success-modal';
import { isActivePaymentModalSet } from 'store/slices/paymentModalSlice';
import { clearProducts } from 'store/slices/productCartSlice';
import prepareProductsForAffirm from '@/helpers/prepareProductsForAffirm';
import prepareMetadataForStripe from '@/helpers/prepareMetadataForStripe';
import prepareProductsForExtend from '@/helpers/prepareProductsForExtend';

export default function PauymentLastPage() {

  let mediaQuery = useMediaQuery('(min-width: 769px)');

  const dispatch = useDispatch();
  const router = useRouter();
  const messageElementRef = useRef()
  const submitBtnRef = useRef()

  const stripeElementOptionsNumber = {
    placeholder: 'Card number',
    style: {
      base: {
        fontSize: mediaQuery ? '13px' : '16px',
        fontWeight: '400',
        fontFamily: 'Proxima Nova',  // set integrated font family
        lineHeight: mediaQuery ? '40px' : '50px',
        color: '#323941',
        "::placeholder": {
          color: '#c9c9c9'
        }
      }
    }
  }

  const stripeElementOptionsExpirations = {
    placeholder: 'Expirations date (MM / YY)',
    style: {
      base: {
        fontSize: mediaQuery ? '13px' : '16px',
        fontWeight: '400',
        fontFamily: 'Proxima Nova',  // set integrated font family
        lineHeight: mediaQuery ? '40px' : '50px',
        color: '#323941',
        "::placeholder": {
          color: '#c9c9c9'
        }
      }
    }
  }

  const stripeElementOptionsCode = {
    placeholder: 'Security Code (CVC)',
    style: {
      base: {
        fontSize: mediaQuery ? '13px' : '16px',
        fontWeight: '400',
        fontFamily: 'Proxima Nova',  // set integrated font family
        lineHeight: mediaQuery ? '40px' : '50px',
        color: '#323941',
        "::placeholder": {
          color: '#c9c9c9'
        }
      }
    }
  }

  const { isActivePaymentModal } = useSelector(state => state.paymentModal)

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

  const {
    firstName,
    lastName,
    email,
    state,
    city,
    zipCode,
    apartment,
    country,
    phone,
    address,
    paymentMethod,
    billingAddress
  } = useSelector(state => state.profile);

  const { products, totalPrice } = useSelector(state => state.products)

  const stripe = useStripe();
  const elements = useElements();

  const billing_details = {
    address: {
      country: 'US',
      city: billingAddress == 'same' ? `${city}` : `${differentCity}`,
      state: billingAddress == 'same' ? `${state}` : `${differentState}`,
      line1: billingAddress == 'same' ? `${address}` : `${differentAddress}`,
      postal_code: billingAddress == 'same' ? `${zipCode}` : `${differentZipCode}`,
    },
    name: billingAddress == 'same' ? `${firstName} ${lastName}` : `${differentFirstName} ${differentLastName}`,
    email: email,
    phone: billingAddress == 'same' ? `${phone}` : `${differentPhone}`
  }

  const [stripeStatus, stripeStatusSet] = useState({
    error: false,
    errorMessage: null,
    errorCode: null,

    success: false,
    successMessage: null
  });
  const [paymentMessage, paymentMessageSet] = useState({
    active: false,
    message: ''
  });
  const [payText, payTextSet] = useState('Pay now')

  const handleSubmitStripe = async (e) => {
    e.preventDefault();

    let config = {
      method: "post",
      url: `/api/stripe/create-payment-intent-stripe`,
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        amount: totalPrice * 100,
        email: billing_details.email,
        phone: billing_details.phone,
        metadata: prepareMetadataForStripe(products)
      }
    };

    const cardNumber = elements.getElement(CardNumberElement)

    let clientSecret = null;
    if (products.length > 0) {
      try {
        const { data } = await axios(config);
        clientSecret = data.clientSecret

        submitBtnRef.current.classList.add('loading')
        payTextSet('Loading...')

      } catch (error) {
        submitBtnRef.current.classList.remove('loading')
        payTextSet('Pay now')
        console.log('error: ', error);
      }

      try {
        const { error: createPaymentError, paymentMethod: createPaymentStatus } = await stripe.createPaymentMethod(
          {
            type: 'card',
            card: cardNumber,
            billing_details,
            metadata: {
              phone_number: billing_details.phone,
              appartment: billingAddress == 'same' ? `${apartment}` : `${differentApartment}`
            },
          }
        )

        if (createPaymentError) {
          stripeStatusSet({
            error: true,
            errorCode: createPaymentError.code,
            errorMessage: createPaymentError.message
          })

          submitBtnRef.current.classList.remove('loading')
          payTextSet('Pay now')
        }

        if (createPaymentStatus) {
          console.log('createPaymentStatus: ', createPaymentStatus);
          stripeStatusSet({
            success: true,
            successMessage: "Success"
          })
        }
        const { error: confirmPaymentError, paymentIntent: confirmPaymentStatus } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: createPaymentStatus.id,
        })

        if (confirmPaymentError) {
          console.log('confirmPaymentError: ', confirmPaymentError);
          stripeStatusSet({
            error: true,
            errorMessage: confirmPaymentError.message
          })
          submitBtnRef.current.classList.remove('loading')
          payTextSet('Pay now')
        }
        if (confirmPaymentStatus) {
          console.log('confirmPaymentStatus: ', confirmPaymentStatus);
          stripeStatusSet({
            success: true,
            successMessage: "Success"
          })
          dispatch(isActivePaymentModalSet(true))
          dispatch(clearProducts())
          submitBtnRef.current.classList.remove('loading')
          payTextSet('Pay now');
        }
      } catch (error) {
        console.log(error);
        submitBtnRef.current.classList.remove('loading')
        payTextSet('Pay now')
      }
    } else {
      paymentMessageSet({ active: true, message: 'Your shopping cart is empty' })
      messageElementRef.current.scrollIntoView({ block: "start", behavior: "smooth" })

      submitBtnRef.current.classList.remove('loading')
      payTextSet('Pay now')
    }
  };

  const handleSubmitExtend = async (e) => {
    e.preventDefault();

    let config = {
      method: "GET",
      // PRODUCTION
      // url: `https://api.helloextend.com/stores/${process.env.NEXT_PUBLIC_EXTEND_STORE_ID_DEV}/products`,

      // DEV
      url: `https://api-demo.helloextend.com/stores/${process.env.NEXT_PUBLIC_EXTEND_STORE_ID_DEV}/products`,
      headers: {
        'Accept': 'application/json; version=2021-04-01',
        'Content-Type': 'application/json',
        'X-Extend-Access-Token': `${process.env.NEXT_PUBLIC_EXTEND_API_ID_DEV}`,
      },
    };

    if (products.length > 0) {
      console.log(prepareProductsForExtend(products));
      try {
        const res = await axios(config);
        console.log(res);
      } catch (error) {
        submitBtnRef.current.classList.remove('loading')
        payTextSet('Pay now')
        console.log('error: ', error);
      }
    } else {
      paymentMessageSet({ active: true, message: 'Your shopping cart is empty' })
      messageElementRef.current.scrollIntoView({ block: "start", behavior: "smooth" })

      submitBtnRef.current.classList.remove('loading')
      payTextSet('Pay now')
    }
  }

  const handleSubmitPaypel = async (e) => {
    e.preventDefault();
  }

  const handleSubmitAffirm = async e => {
    e.preventDefault();

    let clientSecret = null;

    if (products.length > 0) {
      try {

        const preparedItems = prepareProductsForAffirm(products)

        /* Creating affirm object */
        const affirm_checkoun = {

          merchant: {
            user_confirmation_url: "https://merchantsite.com/confirm",
            user_cancel_url: "https://merchantsite.com/cancel",
            user_confirmation_url_action: "POST",
            name: billing_details.name
          },

          shipping: {
            name: {
              first: billingAddress == 'same' ? `${firstName}` : `${differentFirstName}`,
              last: billingAddress == 'same' ? `${lastName}` : `${differentLastName}`
            },
            address: {
              line1: billing_details.address.line1,
              city: billing_details.address.city,
              state: billing_details.address.state,
              zipcode: billing_details.address.postal_code,
              country: billing_details.address.country
            },
            phone_number: billing_details.phone,
            email: billing_details.email
          },

          billing: {
            name: {
              first: billingAddress == 'same' ? `${firstName}` : `${differentFirstName}`,
              last: billingAddress == 'same' ? `${lastName}` : `${differentLastName}`
            },
            address: {
              line1: billing_details.address.line1,
              city: billing_details.address.city,
              state: billing_details.address.state,
              zipcode: billing_details.address.postal_code,
              country: billing_details.address.country
            },
            phone_number: billing_details.phone,
            email: billing_details.email
          },

          items: preparedItems,

          currency: "USD",
          // financing_program: "flyus_3z6r12r",
          shipping_amount: totalPrice * 100,
          // tax_amount: 500,
          total: totalPrice * 100
        }

        // affirm.checkout(affirm_checkoun);

        // affirm.checkout.open()

      } catch (error) {
        console.log('error: ', error);
      }

    } else {
      paymentMessageSet({ active: true, message: 'Your shopping cart is empty' })
      messageElementRef.current.scrollIntoView({ block: "start", behavior: "smooth" })
    }
  }

  const handleSubmitCoinbase = async (e) => {
    e.preventDefault();
  }

  /** Если у пользователя отсутствую базовые данные, то редирект */
  // TODO: Расскоментировать в проде
  // useEffect(() => {
  //   if (
  //     !email ||
  //     !firstName ||
  //     !lastName ||
  //     !address ||
  //     !city ||
  //     !country ||
  //     !state ||
  //     !zipCode ||
  //     !phone
  //   ) {
  //     router.push('/payment')
  //   }

  // }, [email,
  //   firstName,
  //   lastName,
  //   address,
  //   city,
  //   country,
  //   state,
  //   zipCode,
  //   phone,
  //   router]
  // )

  useEffect(() => {
    try {
      const { error, errorMessage, errorCode, success, successMessage } = stripeStatus;
      if (errorCode) {
        paymentMessageSet({ active: true, message: errorMessage })
        messageElementRef.current.scrollIntoView({ block: "start", behavior: "smooth" })
      }
    } catch (error) {

    }
  }, [stripeStatus])

  return (
    <>
      <CustomHead title="Payment main information" />
      <form
        id="payment-form"
        className="payment-payment"
        onSubmit={
          paymentMethod == 'paymentMethodsCreditCard' ? handleSubmitStripe
            : paymentMethod == 'paymentMethodsExtend' ? handleSubmitExtend
              : paymentMethod == 'paymentMethodsPaypel' ? handleSubmitPaypel
                : paymentMethod == 'paymentMethodsAffirm' ? handleSubmitAffirm
                  : paymentMethod == 'paymentMethodsCoinbase' ? handleSubmitCoinbase
                    : handleSubmitStripe
        }>

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

        <div ref={messageElementRef} className={paymentMessage.active ? "text text_13 payment-message active" : "text text_13 payment-message"}>
          <p className="payment-message__text">{paymentMessage.message}</p>
          <div onClick={() => paymentMessageSet({ ...paymentMessage, active: false })} className="payment-message__img">
            <Image width={mediaQuery ? 16 : 24} height={mediaQuery ? 16 : 24} src={paymentClose} alt="Close info message" />
          </div>
        </div>

        <RadioWrapper
          currentValue={paymentMethod}
          handler={setPaymentMethod}
          radioName="paymentMethod"
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
            <div className="payment-radio__input">
              <CustomInput
                showIconLock
                type="text"
                placeholder="Card number">
                <CardNumberElement
                  className='stripe-element'
                  options={stripeElementOptionsNumber}
                  id="card-number-element" />
              </CustomInput>
            </div>
            <div className="payment-radio__input"><CustomInput type="text" placeholder="Name on card"></CustomInput></div>
            <div className="payment-radio__input payment-radio__input_50">
              <CustomInput type="text" placeholder="Expiration date ( MM / YY )">
                <CardExpiryElement
                  className='stripe-element'
                  options={stripeElementOptionsExpirations}
                  id="card-expiry" />
              </CustomInput>
            </div>
            <div className="payment-radio__input payment-radio__input_50">
              <CustomInput showIconQuestion type="text" placeholder="Security Code (CVC)">
                <CardCvcElement
                  className='stripe-element'
                  options={stripeElementOptionsCode}
                  id="card-cvv" />
              </CustomInput></div>
          </div>}
        />

        <RadioWrapper
          currentValue={paymentMethod}
          handler={setPaymentMethod}
          radioName="paymentMethod"
          value="paymentMethodsExtend"
          id="paymentMethodsExtend"

          hideSecondChildOnBlur
          customClass="bb-0"
          firstChildren={
            <div className="payment-radio__payment-image">
              <Image width={30} height={30} objectFit="contain" src={iconExtend} alt="Icon payment" />
            </div>
          }
          secondChildren={<div className="payment-radio__description">
            After clicking “Complete order”, you will be redirected <br />
            to Extend to complete your purchase securely.
          </div>}
        />

        <RadioWrapper
          currentValue={paymentMethod}
          handler={setPaymentMethod}
          radioName="paymentMethod"
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
          radioName="paymentMethod"
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
          radioName="paymentMethod"
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



        <div className="payment-payment__action-buttons">
          <button
            ref={submitBtnRef}
            disabled={!stripe || !elements}
            id="submit"
            type="submit"
            className="ui-btn payment__btn payment-payment__action-btn">
            <span id="button-text">{payText}</span>
          </button>
          <Link href="/payment">
            <a className="payment__btn payment__btn_transparent payment-payment__action-btn">Return to shipping</a>
          </Link>
        </div>

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

            <div className="payment-radio__input payment-radio__input_50">
              <CustomInput
                handler={e => dispatch(setDifferentFirstName(e.target.value))}
                type="text"
                placeholder="First name" />
            </div>

            <div className="payment-radio__input payment-radio__input_50">
              <CustomInput
                handler={e => dispatch(setDifferentLastName(e.target.value))}
                value={differentLastName}
                type="text" placeholder="Last name" />
            </div>

            <div className="payment-radio__input">
              <CustomInput
                handler={e => dispatch(setDifferentAddress(e.target.value))}
                value={differentAddress}
                type="text" placeholder="Address" />
            </div>

            <div className="payment-radio__input">
              <CustomInput
                handler={e => dispatch(setDifferentApartment(e.target.value))}
                value={differentApartment}
                type="text" placeholder="Apartment, suite, tc. (optional)" />
            </div>

            <div className="payment-radio__input">
              <CustomInput
                handler={e => dispatch(setDifferentCity(e.target.value))}
                value={differentCity}
                type="text" placeholder="City" />
            </div>

            <div className="payment-radio__input payment-radio__input_33">
              <DropdownList
                handler={country => dispatch(setDifferentCountry(country))}
                value={differentCountry}
                route="/api/address?all_countries=true"
                topLabel="Country / region"
                placeholder="Country / region"
                readOnly
              />
            </div>

            <div className="payment-radio__input payment-radio__input_33">
              <DropdownList
                handler={state => dispatch(setDifferentState(state))}
                value={differentState}
                topLabel="State"
                placeholder="State"
              />
            </div>

            <div className="payment-radio__input payment-radio__input_33">
              <CustomInput
                handler={e => dispatch(setDifferentZipCode(e.target.value))}
                value={differentZipCode}
                type="text" placeholder="ZIP code" />
            </div>

            <div className="payment-radio__input">
              <CustomInput
                mask="+1 999 999 99 99"
                handler={e => dispatch(setDifferentPhone(e.target.value))}
                value={differentPhone}
                type="text" placeholder="Phone" />
            </div>
          </div>}
        />

      </form>

      <AnimatedModalWrapper
        handler={() => dispatch(isActivePaymentModalSet(false))}
        isActive={isActivePaymentModal}>
        <SuccessModal
          handler={() => dispatch(isActivePaymentModalSet(false))} />
      </AnimatedModalWrapper>
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
