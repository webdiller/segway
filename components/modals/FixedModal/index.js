import {useRouter} from 'next/dist/client/router';
import {useCart} from 'react-use-cart';
import {useSelector} from 'react-redux';

export default function FixedModal() {
  const {currentPrice, currentSegway} = useSelector((state) => state.fixedModalReducer);

  const router = useRouter();
  const {addItem} = useCart();

  const addItemToCartAndShowModal = (productItem) => () => {
    addItem({...productItem, id: `${productItem.id}?warrancy=oneYear`, selectedWarranty: 'oneYear'});
    router.push(`/?productModal=true&productId=${productItem.id}`, null, {scroll: false});
  };
  return (
    <div onClick={addItemToCartAndShowModal(currentSegway)} className="fixed-modal">
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
