import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));
import classNames from 'classnames';
import styles from './item.module.scss';

export default function ShippingItem({customClass, title, value, link}) {
  return (
    <div className={classNames(styles.item, classNames(customClass))}>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>{value}</p>
      <Link href={link || '/payment'}>
        <a className={styles.link}>Change</a>
      </Link>
    </div>
  );
}
