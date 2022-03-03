import classNames from 'classnames';
import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));
import styles from './Price.module.scss';

export default function Price({price, link}) {
  return (
    <div className={styles.item}>
      <p className={classNames(styles.price, classNames('text text_25'))}>${price}</p>
      <button className={classNames(styles.button, classNames('ui-btn'))}>
        <span>ADD TO CART</span>
      </button>
      <Link href={link || '#'}>
        <a className={styles.link}>See details</a>
      </Link>
    </div>
  );
}
