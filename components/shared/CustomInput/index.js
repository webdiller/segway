import styles from './CustomInput.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

import iconLock from '@/base/icon-lock.svg'
import iconQuestion from '@/base/icon-quesion-small.svg'
import Image from 'next/image';

export default function CustomInput({ customClass, placeholder = 'Insert value', type = 'text', showIconLock, showIconQuestion }) {
  const [value, setValue] = useState();
  const handleChange = (val) => setValue(val);

  return (
    <div className={classNames(styles.group, classNames(customClass))}>
      <input onChange={e => handleChange(e.target.value)} placeholder={placeholder} type={type} className={styles.input} />
      {/* <span className={styles.info}>?</span> */}
      {showIconLock && <span className={styles.icon}><Image src={iconLock} alt="Icon" /></span>}
      {showIconQuestion && <span className={styles.icon}><Image src={iconQuestion} alt="Icon" /></span>}
    </div>
  );
}
