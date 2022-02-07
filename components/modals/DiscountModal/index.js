/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useRef, useState} from 'react';
import TinderCard from 'react-tinder-card';
import disableScroll from 'disable-scroll';
import {useSelector} from 'react-redux';
import UiInput from '@/ui/UiInput';

export default function DiscountModal() {
  const elRef = useRef(null);
  const [activeModal, setActiveModal] = useState(false);
  const {active: activeModalProduct} = useSelector((state) => state.productModal);
  const {active: isActiveCompareModal} = useSelector((state) => state.compareModal);

  const addClassForRootELementIfFocused = (condition) => () => {
    condition ? elRef.current.classList.add('focused') : elRef.current.classList.remove('focused')
  }

  const setActiveModalHandler = () => {
    setActiveModal((prev) => !prev);
    disableScroll.off();
  };

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction);
    setActiveModal((prev) => !prev);
    disableScroll.off();
  };

  const onClickWrapper = (e) => {
    if (e.target === elRef.current) {
      setActiveModal((prev) => !prev);
      disableScroll.off();
    }
  };

  useEffect(() => {
    let firstInterval = null;
    let secondInterval = null;

    firstInterval = setInterval((_first) => {
      if (window.localStorage.isFirstVisit == undefined && activeModalProduct === false && isActiveCompareModal === false) {
        secondInterval = setInterval((_second) => {
          if (window.localStorage.isFirstVisit == undefined && activeModalProduct === false && isActiveCompareModal === false) {
            setActiveModal(true);
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

  useEffect(() => {
    if (activeModal) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [activeModal]);

  return (
    <div onFocus={addClassForRootELementIfFocused(true)} onBlur={addClassForRootELementIfFocused(false)} onClick={(e) => onClickWrapper(e)} ref={elRef} className={activeModal ? 'discount-modal active' : 'discount-modal'}>
      <TinderCard swipeThreshold={300} onSwipe={onSwipe} preventSwipe={['right', 'left']}>
        <div className="discount-modal__wrapper">
          <button onClick={setActiveModalHandler} onTouchStart={setActiveModalHandler} className="discount-modal__close-btn">
            <img className="discount-modal__close-btn-icon discount-modal__close-btn-icon_desktop" src="./icon-close-white.svg" alt="icon-close" width="34" height="34" loading="lazy" />
            <img className="discount-modal__close-btn-icon discount-modal__close-btn-icon_mobile" src="./icon-close-black.svg" alt="icon-close" width="34" height="34" loading="lazy" />
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
        </div>
      </TinderCard>
    </div>
  );
}
