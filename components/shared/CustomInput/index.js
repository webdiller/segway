import styles from './CustomInput.module.scss';
import classNames from 'classnames';

import iconLock from '@/base/icon-lock.svg'
import iconQuestion from '@/base/icon-quesion-small.svg'
import Image from 'next/image';

export default function CustomInput({
  value,
  handler,
  customClass,
  placeholder = 'Insert value',
  type = 'text',
  showIconLock,
  showIconQuestion,
  readOnly,
  requied,
  children
}) {

  return (
    <div className={classNames('custom-input', classNames(customClass))}>
      {!children ?
        (
          <input
            required={requied}
            readOnly={readOnly}
            value={value}
            onChange={handler}
            placeholder={placeholder}
            type={type}
            className="custom-input__input" />
        )
        :
        (children)}
      {/* <span className={styles.info}>?</span> */}
      {showIconLock && <span className="custom-input__icon"><Image src={iconLock} alt="Icon" /></span>}
      {showIconQuestion && <span className="custom-input__icon"><Image src={iconQuestion} alt="Icon" /></span>}
    </div>
  );
}