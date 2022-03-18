import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import Image from 'next/image';
import { setActive, setUserPhone } from 'store/slices/discountModalSlice';
import ReactInputMask from 'react-input-mask';
import useForm from '@/hooks/useForm';

export default function DiscountModal() {
  const dispatch = useDispatch()

  const elRef = useRef(null);
  const btnRef = useRef(null);

  const { onSubmit, curentRefSet, loading, success } = useForm({ fromWhere: "модального окна" })

  const [readyToInteractiveWithModal, readyToInteractiveWithModalSet] = useState(true)

  const { isActive, userPhone } = useSelector((state) => state.discountModal);
  const { compareModels, productModal } = useSelector((state) => state.modals);
  const { isActive: isActiveDiscount } = useSelector(state => state.discountModal);
  const { isActive: isActiveFancy } = useSelector(state => state.fancyModal);

  const setActiveModalHandler = () => {
    dispatch(setActive(false))
  };

  const onClickWrapper = (e) => {
    if (e.target === elRef.current) {
      dispatch(setActive(false))
    }
  };

  useEffect(() => {
    let firstInterval = null;
    let secondInterval = null;

    firstInterval = setInterval((_first) => {
      if (window.localStorage.isFirstVisit == undefined && !productModal.activeModal && !compareModels.activeModal && !isActiveFancy && !isActiveDiscount) {
        secondInterval = setInterval((_second) => {
          if (window.localStorage.isFirstVisit == undefined && !productModal.activeModal && !compareModels.activeModal && !isActiveFancy && !isActiveDiscount) {
            readyToInteractiveWithModalSet(false)
            dispatch(setActive(true))
            window.localStorage.setItem('isFirstVisit', 'false');
            clearInterval(firstInterval);
            clearInterval(secondInterval);
            setTimeout(() => {
              readyToInteractiveWithModalSet(true)
            }, 1500);
          }
        }, 5000);
      }
    }, 5000);
    return (_first) => {
      clearInterval(firstInterval);
      clearInterval(secondInterval);
    };
  });

  useEffect(() => {
    curentRefSet(btnRef)
  }, [btnRef, curentRefSet])

  useEffect(() => {
    success === true && dispatch(setActive(false))
  }, [success, dispatch])

  return (
    <>
      <motion.div
        animate={{ backdropFilter: blur(10), }}
        initial={{ backdropFilter: blur(0) }}
        onClick={(e) => onClickWrapper(e)}
        ref={elRef}
        className={isActive ? 'discount-modal active' : 'discount-modal'}>
        <motion.form
          whileDrag={{ scale: 0.95 }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          animate={{ top: 0, opacity: 1 }}
          initial={{ top: -100, opacity: 0 }}
          onSubmit={onSubmit}
          className="discount-modal__wrapper">
          <button type='button' onClick={setActiveModalHandler} className="discount-modal__close-btn">
            <div className='discount-modal__close-btn-icon discount-modal__close-btn-icon_desktop'><Image src="/icon-close-white.svg" alt="icon-close" width="34" height="34" loading="lazy" /></div>
            <div className='discount-modal__close-btn-icon discount-modal__close-btn-icon_mobile'><Image src="/icon-close-black.svg" alt="icon-close" width="34" height="34" loading="lazy" /></div>
          </button>
          <p className="discount-modal__title">5%</p>
          <div className="discount-modal__content">
            <p className="title discount-modal__subtitle">discount</p>
            <p className="text discount-modal__description">Enter your phone number and our manager will call your back in 15 seconds</p>
          </div>
          <ReactInputMask
            name="formFromOtherModelsPhone"
            onChange={(e) => dispatch(setUserPhone(e.target.value))}
            value={userPhone}
            placeholder="+1 ___ ___ __ __"
            mask="+1 999 999 99 99"
            className='ui-input didnt-find-modal__input'
            required
          />
          <button ref={btnRef} type='submit' className="ui-btn discount-modal__btn">
            <span>Get a discount</span>
          </button>
        </motion.form>
      </motion.div>
      <div style={{ zIndex: loading || !readyToInteractiveWithModal ? 1000 : -1 }} className="discount-modal-locker"></div>
    </>
  );
}