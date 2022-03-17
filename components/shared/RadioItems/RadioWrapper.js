import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import styles from './RadioWrapper.module.scss';

export default function RadioWrapper({
  customClass,
  id,
  value,
  currentValue,
  radioName,
  firstChildren,
  secondChildren,
  dropdownChildren,
  hideSecondChildOnBlur,
  handler,
  checked }) {

  const dispatch = useDispatch()

  return (
    <div className={classNames(styles.mainWrapper, classNames(customClass))}>
      <div className={styles.topWrapper}>
        <div className={styles.inputWithLabel}>
          <input
            defaultChecked={value === currentValue}
            onClick={e => e.target.checked && dispatch(handler(value))}
            type="radio"
            name={radioName}
            id={id}
            value={value}
            className={styles.input} />
          <label
            htmlFor={id}
            className={styles.label}></label>
        </div>
        {firstChildren && <div className={styles.firstChildren}>{firstChildren}</div>}
        {secondChildren && <div className={id ? classNames(styles.secondChildren) : classNames(styles.secondChildren, styles.inactive)}>{secondChildren}</div>}
      </div>
      {dropdownChildren && <div className={styles.bottomWrapper}>{dropdownChildren}</div>}
    </div>
  );
}
