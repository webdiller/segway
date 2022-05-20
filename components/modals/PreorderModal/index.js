import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image';
import { setActive, setUserEmail } from 'store/slices/preorderModalSlice';
import ReactInputMask from 'react-input-mask';
import useForm from '@/hooks/useForm';
import SegwayImageBox from '@/base/segway-image-box.png'

export default function PreorderModal() {
  const dispatch = useDispatch()

  const elRef = useRef(null);
  const btnRef = useRef(null);

  const { isActive, userEmail, productName, productLink } = useSelector((state) => state.preorderModal);

  const { onSubmit, curentRefSet, loading, success } = useForm({ additionFields: { productName, productLink }, fromWhere: "Модального окна preorder", endpoint: "/api/mail/preorder" })

  const setActiveModalHandler = () => {
    dispatch(setActive(false))
  };

  const onClickWrapper = (e) => {
    if (e.target === elRef.current) {
      dispatch(setActive(false))
    }
  };

  useEffect(() => {
    curentRefSet(btnRef)
  }, [btnRef, curentRefSet])

  useEffect(() => {
    success === true && dispatch(setActive(false))
  }, [success, dispatch])

  return (
    <AnimatePresence>
      {isActive && (
        <>
          <motion.div
            initial={false}
            animate={{ zIndex: 1000, backdropFilter: 'blur(5px)' }}
            exit={{ opacity: 0 }}
            onClick={(e) => onClickWrapper(e)}
            ref={elRef}
            className='preorder-modal'>
            <motion.form
              animate={{ top: 0, opacity: 1, scale: 1 }}
              initial={{ top: -20, opacity: 0, scale: .9 }}
              exit={{ top: 20, scale: .9 }}
              onSubmit={onSubmit}
              className="preorder-modal__wrapper">
              <div className="preorder-modal__image-wrapper">
                <Image width={334} height={253} src={SegwayImageBox} alt="preorder product" />
              </div>
              <div type='button' onClick={setActiveModalHandler} className="preorder-modal__close-btn">
                <div className='preorder-modal__close-btn-icon preorder-modal__close-btn-icon_desktop'><Image src="/icon-close-white.svg" alt="icon-close" width="34" height="34" loading="eager" /></div>
                <div className='preorder-modal__close-btn-icon preorder-modal__close-btn-icon_mobile'><Image src="/icon-close-black.svg" alt="icon-close" width="34" height="34" loading="eager" /></div>
              </div>
              <div className="preorder-modal__content">
                <p className="text preorder-modal__title">
                  We&apos;ll let you know <br />
                  when It&apos;s back to stock</p>
              </div>
              <ReactInputMask
                name="userEmail"
                onChange={(e) => dispatch(setUserEmail(e.target.value))}
                value={userEmail}
                placeholder="your email"
                className='ui-input didnt-find-modal__input'
                required
              />
              <button ref={btnRef} type='submit' className="ui-btn preorder-modal__btn">
                <span>SEND</span>
              </button>
            </motion.form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}