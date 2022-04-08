import classNames from 'classnames';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { pushProduct } from 'store/slices/productCartSlice';
import { productModalActiveSet } from 'store/slices/productModalSlice';
import styles from './Price.module.scss';

export default function Price({model, price, link}) {

  const dispatch = useDispatch()
  
  const addItemToCartAndShowModal = () => {
    dispatch(productModalActiveSet(true));
    dispatch(pushProduct(model));
  };

  return (
    <div className={styles.item}>
      <p className={classNames(styles.price, classNames('text text_25'))}>${price}</p>
      <button onClick={addItemToCartAndShowModal} className={classNames(styles.button, classNames('ui-btn'))}>
        <span>ADD TO CART</span>
      </button>
      <Link href={model.pageLinkNameWithCategory}>
        <a className={styles.link}>See details</a>
      </Link>
    </div>
  );
}
