import { useDispatch, useSelector } from 'react-redux';
import { productModalActiveSet } from 'store/slices/productModalSlice';
import { pushProduct, setPreparedProtectionAccessory } from 'store/slices/productCartSlice';
import ModalWrapper from '../ModalWrapper';
import { initProduct } from 'store/slices/productCartSlice';
import { useEffect } from 'react';

export default function FixedModal({ product, preparedProtection }) {

  const dispatch = useDispatch()

  const { preparedProduct, currentPrice, preperedBundle } = useSelector(state => state.products)

  const addItemToCartAndShowModal = () => {
    /** Если есть выбранный банд, то добавялем в корину */
    if (preperedBundle) {
      dispatch(pushProduct(preparedProduct))
      dispatch(pushProduct(preperedBundle))
      dispatch(productModalActiveSet(true))
    } else {
      dispatch(pushProduct(preparedProduct))
      dispatch(productModalActiveSet(true))
    }
  }

  useEffect(() => {
    if (product && preparedProtection) {
      dispatch(initProduct({ product, currentPrice: product.price }))
      dispatch(setPreparedProtectionAccessory(preparedProtection))
    }
  }, [dispatch, product, preparedProtection])

  return (
    <ModalWrapper mounted={true}>
      {product && preparedProtection && (
        <div onClick={addItemToCartAndShowModal} className="fixed-modal">
          <button className="fixed-modal__wrapper">
            <p className="fixed-modal__title">
              <span className="fixed-modal__title-name">Add to cart</span>
              <span className="fixed-modal__title-price">${currentPrice}</span>
            </p>
            <p className="fixed-modal__description">Free 1 day shipping within California</p>
          </button>
        </div>
      )}
    </ModalWrapper>
  );
}
