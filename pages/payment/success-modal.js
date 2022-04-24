import Image from "next/image";
import iconStatus from '@/base/icons/succes-payment.svg';
import Link from "next/link";

export default function SuccessModal({ handler }) {
  return (
    <div className='success-modal'>
      <div className="success-modal__wrapper">
        <div onClick={handler} type='button' className="success-modal__close-btn">
          <div className='success-modal__close-btn-icon success-modal__close-btn-icon_desktop'>
            <Image src="/icon-close-white.svg" alt="icon-close" width="34" height="34" loading="eager" />
          </div>
          <div className='success-modal__close-btn-icon success-modal__close-btn-icon_mobile'>
            <Image src="/icon-close-black.svg" alt="icon-close" width="34" height="34" loading="eager" />
          </div>
        </div>
        <div className='success-modal__status-icon'>
          <Image src={iconStatus} alt="Thank for your order" />
        </div>
        <p className="title success-modal__title">Thank for <br /> your order!</p>
        <Link href="/">
          <a className="ui-btn success-modal__btn" onClick={handler}>
            <span>RETURN TO THE PRODUCT</span>
          </a>
        </Link>
      </div>
    </div>
  )
}
