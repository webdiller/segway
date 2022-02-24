
import classNames from 'classnames';
import styles from './item.module.scss';

export default function RadioList({customClass, children}) {
  return (
    <div className={classNames(styles.radioList, classNames(customClass))}>
      {children}
    </div>
  );
}
