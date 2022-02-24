import classNames from 'classnames';
import styles from './item.module.scss';

export default function RadioItem({children}) {
  return (
    <div className={classNames(styles.item, classNames(customClass))}>
      <label className={styles.label}>
        <input type="radio" className={styles.input} />
        {children}
      </label>
    </div>
  );
}
