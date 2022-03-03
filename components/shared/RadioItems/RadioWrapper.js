import useToggle from '@/hooks/useToggle';
import classNames from 'classnames';
import styles from './RadioWrapper.module.scss';

export default function RadioWrapper({ customClass, id, radioName, firstChildren, secondChildren, dropdownChildren, hideSecondChildOnBlur }) {
  const { active, setInactiveHandler, setActiveHandler } = useToggle(false)
  return (
    <div className={classNames(styles.mainWrapper, classNames(customClass))}>
      <div className={styles.topWrapper}>
        <div className={styles.inputWithLabel}>
          <input onClick={e => e.target.checked && setActiveHandler()} onBlur={setInactiveHandler} className={styles.input} type="radio" name={radioName} id={id} />
          <label className={styles.label} htmlFor={id}></label>
        </div>
        {firstChildren && <div className={styles.firstChildren}>{firstChildren}</div>}
        {secondChildren && <div className={active ? classNames(styles.secondChildren) : classNames(styles.secondChildren, styles.inactive)}>{secondChildren}</div>}
      </div>
      {dropdownChildren && <div className={styles.bottomWrapper}>{dropdownChildren}</div>}
    </div>
  );
}
