import { useDispatch, useSelector } from 'react-redux';
import { productModalActiveSet } from 'store/slices/productModalSlice';
import { pushProduct } from 'store/slices/productCartSlice';
import ModalWrapper from '../ModalWrapper';
import { initProduct } from 'store/slices/productCartSlice';
import { useEffect } from 'react';

export default function FixedModal({ segwayItem }) {

  const dispatch = useDispatch()

  const { preparedProduct, currentPrice, preparedProtectionAccessory } = useSelector(state => state.products)

  const addItemToCartAndShowModal = () => {
    dispatch(pushProduct(preparedProduct))
    dispatch(productModalActiveSet(true))
  }

  useEffect(() => {
    dispatch(initProduct({ product: segwayItem, currentPrice: segwayItem.price }))
  }, [dispatch, segwayItem])

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
