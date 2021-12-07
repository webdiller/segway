/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useState} from 'react';
import Swipe from 'react-easy-swipe';
import noScroll from 'no-scroll';

export default function DiscountModal() {
  const [activeModal, setActiveModal] = useState(true);
  const setActiveModalHandler = () => {
    setActiveModal((prev) => !prev)
    noScroll.toggle();
  };

  const onSwipeUp = () => {
    setActiveModal(false);
    noScroll.off();
  };

  const onSwipeDown = () => {
    setActiveModal(false);
    noScroll.off();
  };  

  useEffect(() => {
    noScroll.on();
  }, [])

  return (
    <div className={activeModal ? 'discount-modal active' : 'discount-modal'}>
      <div className="discount-modal__wrapper">
        <Swipe onSwipeUp={onSwipeUp} onSwipeDown={onSwipeDown}>
          <button onClick={setActiveModalHandler} className="discount-modal__close-btn">
            <img className="discount-modal__close-btn-icon discount-modal__close-btn-icon_desktop" src="./icon-close-white.svg" alt="icon-close" width="34" height="34" loading="lazy" />
            <img className="discount-modal__close-btn-icon discount-modal__close-btn-icon_mobile" src="./icon-close-black.svg" alt="icon-close" width="34" height="34" loading="lazy" />
          </button>
          <p className="discount-modal__title">5%</p>
          <div className="discount-modal__content">
            <p className="title discount-modal__subtitle">discount</p>
            <p className="text discount-modal__description">Enter your phone number and our manager will call your back in 15 seconds</p>
          </div>
          <button className="ui-btn discount-modal__btn">
            <span>Get a discount</span>
          </button>
        </Swipe>
      </div>
    </div>
  );
}