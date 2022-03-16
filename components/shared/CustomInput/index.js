import styles from './CustomInput.module.scss';
import classNames from 'classnames';

import iconLock from '@/base/icon-lock.svg'
import iconQuestion from '@/base/icon-quesion-small.svg'
import Image from 'next/image';
import { useDispatch } from 'react-redux';

export default function CustomInput({ value, handler, customClass, placeholder = 'Insert value', type = 'text', showIconLock, showIconQuestion }) {
  const dispatch = useDispatch();

  return (
    <div className={classNames(styles.group, classNames(customClass))}>
      <input value={value} onChange={e => dispatch(handler(e.target.value))} placeholder={placeholder} type={type} className={styles.input} />
      {/* <span className={styles.info}>?</span> */}
      {showIconLock && <span className={styles.icon}><Image src={iconLock} alt="Icon" /></span>}
      {showIconQuestion && <span className={styles.icon}><Image src={iconQuestion} alt="Icon" /></span>}
    </div>
  );
}
