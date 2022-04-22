import styles from './CustomInput.module.scss';
import classNames from 'classnames';
import ReactInputMask from 'react-input-mask';
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
  mask,
  children
}) {

  return (
    <div className={classNames('custom-input', classNames(customClass))}>
      {!children ?
        (<ReactInputMask type={type} readOnly={readOnly} required={requied} onChange={handler} value={value} placeholder={placeholder} mask={mask} className="custom-input__input" />)
        :
        (children)}
      {/* <span className={styles.info}>?</span> */}
      {showIconLock && <span className="custom-input__icon"><Image src={iconLock} alt="Icon" /></span>}
      {showIconQuestion && <span className="custom-input__icon"><Image src={iconQuestion} alt="Icon" /></span>}
    </div>
  );
}