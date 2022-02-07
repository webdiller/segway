import {useCart} from 'react-use-cart';
import {useDispatch, useSelector} from 'react-redux';
import {setProductModal} from '@/actions/productModal';
export default function FixedModal() {
  const {currentPrice, currentSegway} = useSelector((state) => state.fixedModal);
  const {addItem} = useCart();
  const dispatch = useDispatch();

  const addItemToCartAndShowModal = () => () => {
    addItem(currentSegway);
    dispatch(setProductModal(true));
  };

  return (
    <div onClick={addItemToCartAndShowModal()} className="fixed-modal">
      <button className="fixed-modal__wrapper">
        <span className="fixed-modal__title">
          <span className="fixed-modal__title-name">Add to cart</span>
          <span className="fixed-modal__title-price">${currentPrice}</span>
        </span>
        <span className="fixed-modal__description">Free 1 day shipping within California</span>
      </button>
    </div>
  );
}
