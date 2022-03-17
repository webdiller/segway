import styles from './index.module.scss';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

export default function CustomCheckbox({ value, handler, customClass, type, text }) {
  const dispatch = useDispatch();

  return (
    <div className={classNames(styles.group, classNames(customClass))}>
      <label className={styles.label}>
        <input onClick={() => dispatch(handler())} className={styles.input} type={type} />
        <div className={styles.iconWrapper}>{value ? <MdCheckBox className={styles.icon} /> : <MdCheckBoxOutlineBlank className={styles.icon} />}</div>
        <span className={styles.text}>{text}</span>
      </label>
    </div>
  );
}
