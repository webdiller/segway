import CustomInput from '@/shared/CustomInput';
import { useSelector } from 'react-redux';
import { setDiscountCode } from 'store/slices/profileSlice';

export default function UserCartStatus() {
  const { discountCode } = useSelector(state => state.profile);

  return (
    <div className="user-cart-status">
      <form className="user-cart-status__input-with-btn">
        <CustomInput handler={setDiscountCode} value={discountCode} customClass="user-cart-status__input" placeholder="Discount code" />
        <button type="button" className="user-cart-status__btn">
          Apply
        </button>
      </form>

      <div className="user-cart-status__row-wrapper">
        <div className="user-cart-status__row">
          <p className="user-cart-status__title">Subtotal</p>
          <p className="user-cart-status__title">Calculated at next step</p>
        </div>
        <div className="user-cart-status__row">
          <p className="user-cart-status__title">Shipping</p>
          <p className="user-cart-status__text">$949.99</p>
        </div>
      </div>

      <div className="user-cart-status__row-wrapper">
        <div className="user-cart-status__row">
          <p className="user-cart-status__title">Total</p>
          <div>
            <span className="user-cart-status__text-uppercase">usd</span>
            <span className="user-cart-status__price">$949.99</span>
          </div>
        </div>
      </div>
    </div>
  );
}
