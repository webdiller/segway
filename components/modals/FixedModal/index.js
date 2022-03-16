import { useDispatch, useSelector } from 'react-redux';
import { productModalActiveSet } from 'store/slices/modalsSlice';
import { pushProduct } from 'store/slices/productCartSlice';
import ModalWrapper from '../ModalWrapper';
export default function FixedModal() {

  const dispatch = useDispatch()

  const { preparedProduct, currentPrice } = useSelector(state => state.preparedProduct)

  const addItemToCartAndShowModal = () => {
    dispatch(pushProduct(preparedProduct))
    dispatch(productModalActiveSet(true))
  }

  return (
    <ModalWrapper mounted={true}>
      <div onClick={addItemToCartAndShowModal} className="fixed-modal">
        <button className="fixed-modal__wrapper">
          <span className="fixed-modal__title">
            <span className="fixed-modal__title-name">Add to cart</span>
            <span className="fixed-modal__title-price">${currentPrice}</span>
          </span>
          <span className="fixed-modal__description">Free 1 day shipping within California</span>
        </button>
      </div>
    </ModalWrapper>
  );
}
