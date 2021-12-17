import {useRouter} from 'next/dist/client/router';
import {useCart} from 'react-use-cart';

export default function FixedModal({segwayItem}) {
  const router = useRouter();
  const {addItem} = useCart();
  const price = Number(Math.round(segwayItem.price));
  const priceDiscount = Math.round(segwayItem.warranty.oneYear.price);

  const addItemToCartAndShowModal = (productItem) => () => {
    addItem({...productItem, id: `${productItem.id}?warrancy=oneYear`, selectedWarranty: 'oneYear'});
    router.push(`/?productModal=true&productId=${productItem.id}`, null, {scroll: false});
  };
  return (
    <div className="fixed-modal">
      <button onClick={addItemToCartAndShowModal(segwayItem)} className="fixed-modal__wrapper">
        <span className="fixed-modal__title">
          <span className="fixed-modal__title-name">Add to cart</span>
          <span className="fixed-modal__title-price">${price + priceDiscount}</span>
        </span>
        <span className="fixed-modal__description">Free 1 day shipping within California</span>
      </button>
    </div>
  );
}
