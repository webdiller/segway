import styles from './index.module.scss';
import {MdCheckBoxOutlineBlank, MdCheckBox} from 'react-icons/md';
import useToggle from '@/hooks/useToggle';
import classNames from 'classnames';
import cuid from 'cuid';

export default function CustomCheckbox({customClass, type, text}) {
  const {active, setToggleHandler} = useToggle();
  const id = cuid();
  return (
    <div className={classNames(styles.group, classNames(customClass))}>
      <label className={styles.label}>
        <input onClick={setToggleHandler} className={styles.input} type={type} />
        <div className={styles.iconWrapper}>{active ? <MdCheckBox className={styles.icon} /> : <MdCheckBoxOutlineBlank className={styles.icon} />}</div>
        <span className={styles.text}>{text}</span>
      </label>
    </div>
  );
}
