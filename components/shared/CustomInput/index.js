import styles from './input.module.scss';
import {useState} from 'react';
import classNames from 'classnames';

export default function CustomInput({customClass, placeholder = 'Insert value', type = 'text'}) {
  const [value, setValue] = useState();
  const handleChange = (val) => setValue(val);
  
  return (
    <div className={classNames(styles.group, classNames(customClass))}>
      <input onChange={e=>handleChange(e.target.value)} placeholder={placeholder} type={type} className={styles.input} />
      <span className={styles.info}>?</span>
    </div>
  );
}
