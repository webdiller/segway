import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));

import CustomHead from '@/basic/CustomHead';
import { ShippingItem, ShippingList } from '@/shared/ShippingStatus';
import RadioWrapper from '@/shared/RadioItems/RadioWrapper';
import Image from 'next/image';
import paymentClose from '@/base/icons/payment-close.svg'

import paymentsLarge from '@/base/payments-large.jpg'
import paymentsSmall from '@/base/payments-small.jpg'
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

export default function PauymentLastPage() {

  let mediaQuery = useMediaQuery('(min-width: 769px)');

  const dispatch = useDispatch();
  const router = useRouter();
  const messageElementRef = useRef()

  const stripeElementOptions = {
    placeholder: 'Card number',
    style: {
      base: {
        fontSize: mediaQuery ? '13px' : '16px',
        fontWeight: '400',
        fontFamily: 'Proxima Nova',  // set integrated font family
        lineHeight: mediaQuery ? '40px' : '50px',
        color: '#323941',
        "::placeholder": {
          color: '#999999'
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

  const handleSubmitStripe = async (e) => {
    e.preventDefault();

    let config = {
      method: "post",
      url: `/api/stripe/create-payment-intent-stripe`,
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        amount: totalPrice * 100
      }
    };

    const cardNumber = elements.getElement(CardNumberElement)

    let clientSecret = null;
    if (products.length > 0) {
      try {
        const { data } = await axios(config);
        clientSecret = data.clientSecret
      } catch (error) {
        console.log('error: ', error);
      }

      try {
        const { error: createPaymentError, paymentMethod: createPaymentStatus } = await stripe.createPaymentMethod(
          {
            type: 'card',
            card: cardNumber
          }
        )

        if (createPaymentError) {
          stripeStatusSet({
            error: true,
            errorCode: createPaymentError.code,
            errorMessage: createPaymentError.message
          })
        }
        if (createPaymentStatus) {
          console.log('createPaymentStatus: ', createPaymentStatus);
          stripeStatusSet({
            success: true,
            successMessage: "Success"
          })
        }

        const { error: confirmPaymentError, paymentIntent: confirmPaymentStatus } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: createPaymentStatus.id
        })

        if (confirmPaymentError) {
          console.log('confirmPaymentError: ', confirmPaymentError);
          stripeStatusSet({
            error: true,
            errorMessage: confirmPaymentError.message
          })
        }
        if (confirmPaymentStatus) {
          console.log('confirmPaymentStatus: ', confirmPaymentStatus);
          stripeStatusSet({
            success: true,
            successMessage: "Success"
          })
          dispatch(isActivePaymentModalSet(true))
          dispatch(clearProducts())
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      paymentMessageSet({ active: true, message: 'Your shopping cart is empty' })
      document.body.scrollIntoView(messageElementRef.current)
    }
  };

  const handleSubmitPaypel = async (e) => {
    e.preventDefault();
  }

  const handleSubmitAffirm = async e => {
    e.preventDefault();

    let clientSecret = null;

    if (products.length > 0) {
      try {

        console.log('products: ', prepareProductsForAffirm(products));
        
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
          items: [
            {
              display_name: "Awesome Pants",
              sku: "ABC-123",
              unit_price: 1999,
              qty: 3,
              item_image_url: "http://merchantsite.com/images/awesome-pants.jpg",
              item_url: "http://merchantsite.com/products/awesome-pants.html",
              categories: [
                ["Home", "Bedroom"],
                ["Home", "Furniture", "Bed"]
              ]
            }
          ],
          metadata: {
            shipping_type: "UPS Ground",
            mode: "modal"
          },
          order_id: "JKLMO4321",
          currency: "USD",
          financing_program: "flyus_3z6r12r",
          shipping_amount: 1000,
          tax_amount: 500,
          total: 100000
        }

      } catch (error) {
        console.log('error: ', error);
      }

    } else {
      paymentMessageSet({ active: true, message: 'Your shopping cart is empty' })
      document.body.scrollIntoView(messageElementRef.current)
    }
  }

  const handleSubmitCoinbase = async (e) => {
    e.preventDefault();
  }

  /** Если у пользователя отсутствую базовые данные, то редирект */
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

  useEffect(() => {
    try {
      const { error, errorMessage, errorCode, success, successMessage } = stripeStatus;
      if (errorCode) {
        paymentMessageSet({ active: true, message: errorMessage })
        document.body.scrollIntoView(messageElementRef.current)
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
                  options={stripeElementOptions}
                  id="card-number-element" />
              </CustomInput>
            </div>
            <div className="payment-radio__input"><CustomInput type="text" placeholder="Name on card"></CustomInput></div>
            <div className="payment-radio__input payment-radio__input_50">
              <CustomInput type="text" placeholder="Expiration date ( MM / YY )">
                <CardExpiryElement
                  className='stripe-element'
                  options={stripeElementOptions}
                  id="card-expiry" />
              </CustomInput>
            </div>
            <div className="payment-radio__input payment-radio__input_50">
              <CustomInput showIconQuestion type="text" placeholder="Security Code (CVC)">
                <CardCvcElement
                  className='stripe-element'
                  options={stripeElementOptions}
                  id="card-cvv" />
              </CustomInput></div>
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
                requied
              />
            </div>

            <div className="payment-radio__input payment-radio__input_33">
              <DropdownList
                handler={state => dispatch(setDifferentState(state))}
                value={differentState}
                topLabel="State"
                placeholder="State"
                requied
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
                handler={e => dispatch(setDifferentPhone(e.target.value))}
                value={differentPhone}
                type="text" placeholder="Phone" />
            </div>
          </div>}
        />

        <div className="payment-payment__action-buttons">
          <button
            disabled={!stripe || !elements}
            id="submit"
            type="submit"
            className="payment__btn payment-payment__action-btn">
            <span id="button-text">Pay now</span>
          </button>
          <Link href="/payment">
            <a className="payment__btn payment__btn_transparent payment-payment__action-btn">Return to shipping</a>
          </Link>
        </div>

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
