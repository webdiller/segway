import dynamic from 'next/dynamic';
import CustomHead from '@/basic/CustomHead';
import CustomCheckbox from '@/shared/CustomCheckbox';
import CustomInput from '@/shared/CustomInput';
import DropdownList from '@/shared/DropdownList';
const Link = dynamic(() => import('next/link'));

export default function PaymentMainPage() {
  return (
    <>
      <CustomHead title="Payment main information" />
      <div className="payment-info">
        <div className="payment-info__contact-area">
          <p className="payment__title payment-info__title">Contact information</p>
          <CustomInput customClass="payment-info__email" type="text" placeholder="Email" />
          <CustomCheckbox customClass="payment-info__checkbox" text="Email me with news and offers" />
        </div>
        <div className="payment-info__shipping-address">
          <p className="payment__title payment-info__title">Shipping address</p>
          <form className="payment-info__form-items">
            <div className="payment-info__form-item payment-info__form-item_50">
              <CustomInput type="text" placeholder="First name" />
            </div>
            <div className="payment-info__form-item payment-info__form-item_50">
              <CustomInput type="text" placeholder="Last name" />
            </div>
            <div className="payment-info__form-item">
              <CustomInput type="text" placeholder="Address" />
            </div>
            <div className="payment-info__form-item">
              <CustomInput type="text" placeholder="Apartment, suite, tc. (optional)" />
            </div>
            <div className="payment-info__form-item">
              <CustomInput type="text" placeholder="City" />
            </div>
            <div className="payment-info__form-item payment-info__form-item_33">
              <DropdownList placeholder="Country / region"/>
            </div>
            <div className="payment-info__form-item payment-info__form-item_33">
            <DropdownList placeholder="State"/>
            </div>
            <div className="payment-info__form-item payment-info__form-item_33">
              <CustomInput type="text" placeholder="ZIP code" />
            </div>
            <div className="payment-info__form-item">
              <CustomInput type="text" placeholder="Phone" />
            </div>
            <div className="payment-info__form-item">
              <CustomCheckbox text="Save this information for next time" />
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