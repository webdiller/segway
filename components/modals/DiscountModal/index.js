import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UiInput from 'components/shared/UiInput/UiInput';
import {motion} from 'framer-motion'
import Image from 'next/image';
import { setActive } from 'store/slices/discountModalSlice';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function DiscountModal() {
  const dispatch = useDispatch()
  const elRef = useRef(null);
  const mediaQuery = useMediaQuery('(max-width: 768px) and (pointer: coarse)');

  const { isActive, userPhone } = useSelector((state) => state.discountModal);
  const { compareModels, productModal } = useSelector((state) => state.modals);
  const {isActive: isActiveDiscount} = useSelector(state => state.fancyModal);

  // const addClassForRootELementIfFocused = (condition) => () => {
  //   condition ? elRef.current.classList.add('focused') : elRef.current.classList.remove('focused');
  // };

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
      if (window.localStorage.isFirstVisit == undefined && !productModal.activeModal && !compareModels.activeModal && !isActiveDiscount) {
        secondInterval = setInterval((_second) => {
          if (window.localStorage.isFirstVisit == undefined && !productModal.activeModal && !compareModels.activeModal && !isActiveDiscount) {
            dispatch(setActive(true))
            window.localStorage.setItem('isFirstVisit', 'false');
            clearInterval(firstInterval);
            clearInterval(secondInterval);
          }
        }, 5000);
      }
    }, 5000);
    return (_first) => {
      clearInterval(firstInterval);
      clearInterval(secondInterval);
    };
  });

  return (
    <>
      <motion.div
        onClick={(e) => onClickWrapper(e)}
        ref={elRef}
        className={isActive ? 'discount-modal active' : 'discount-modal'}>
        <motion.div 
          whileDrag={{ scale: 1.05, cursor: 'grab' }}
          drag={!mediaQuery}
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="discount-modal__wrapper">
          <button onClick={setActiveModalHandler} className="discount-modal__close-btn">
            <div className='discount-modal__close-btn-icon discount-modal__close-btn-icon_desktop'><Image src="/icon-close-white.svg" alt="icon-close" width="34" height="34" loading="lazy" /></div>
            <div className='discount-modal__close-btn-icon discount-modal__close-btn-icon_mobile'><Image src="/icon-close-black.svg" alt="icon-close" width="34" height="34" loading="lazy" /></div>
          </button>
          <p className="discount-modal__title">5%</p>
          <div className="discount-modal__content">
            <p className="title discount-modal__subtitle">discount</p>
            <p className="text discount-modal__description">Enter your phone number and our manager will call your back in 15 seconds</p>
          </div>
          <UiInput forForm={true} customClass="didnt-find-modal__input" />
          <button className="ui-btn discount-modal__btn">
            <span>Get a discount</span>
          </button>
        </motion.div>
      </motion.div>
    </>
  );
}








// .tinder {
//   position: fixed;
//   top: 0;
//   right: 0;
//   left: 0;
//   bottom: 0;
  
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   z-index: 200;
//   &__wrapper {
//     width: 400px;
//     height: 400px;
//     background-color: rgba(0, 0, 0, 1);
//     border-radius: 10px;
//     padding: 40px 20px;
//     text-align: left;
//     color: #fff;
//   }

//   &__title {
//     font-size: 30px;
//     margin-bottom: 20px;&::selection {
//       background-color: transparent;
//     }
//   }

//   &__description {&::selection {
//     background-color: transparent;
//   }
//   }
// }
