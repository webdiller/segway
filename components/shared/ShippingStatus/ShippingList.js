import styles from './ShippingList.module.scss';
import classNames from 'classnames';

export default function ShippingList({customClass, children}) {
  return (
    <div className={classNames(styles.list, classNames(customClass))}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}
