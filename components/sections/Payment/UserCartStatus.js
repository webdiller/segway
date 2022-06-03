import CustomInput from '@/shared/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { setDiscountCode } from 'store/slices/profileSlice';
import { discountCode } from 'store/slices/profileSlice';

export default function UserCartStatus() {

  const dispatch = useDispatch();

  const { discountCode } = useSelector(state => state.profile);
  const { totalPrice } = useSelector((state) => state.products);
  const couponHandler = (e) => {
    e.preventDefault();
    console.log(discountCode);
  }

  return (
    <div className="user-cart-status">
      <form onSubmit={couponHandler} className="user-cart-status__input-with-btn">
        <CustomInput handler={(e) => dispatch(setDiscountCode(e.target.value))} value={discountCode} customClass="user-cart-status__input" placeholder="Discount code" />
        <button type="submit" className="user-cart-status__btn">
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
          <p className="user-cart-status__text">${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <div className="user-cart-status__row-wrapper">
        <div className="user-cart-status__row">
          <p className="user-cart-status__title">Total</p>
          <div>
            <span className="user-cart-status__text-uppercase">usd</span>
            <span className="user-cart-status__price">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
