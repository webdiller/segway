/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useState} from 'react';
import noScroll from 'no-scroll';
import TinderCard from 'react-tinder-card';

export default function DiscountModal() {
  const [activeModal, setActiveModal] = useState(false);
  const setActiveModalHandler = () => {
    setActiveModal((prev) => !prev);
    noScroll.toggle();
  };
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction);
    setActiveModal((prev) => !prev);
    noScroll.toggle();
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen');
  };

  useEffect(() => {
    if (window.localStorage.isFirstVisit) {
     
    } else {
      setTimeout(() => {
        setActiveModal(true);
        noScroll.on();
      }, 5000);
      window.localStorage.setItem('isFirstVisit', 'false');
    }
  }, []);

  return (
    <div className={activeModal ? 'discount-modal active' : 'discount-modal'}>
      <TinderCard swipeThreshold={300} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
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
          <button className="ui-btn discount-modal__btn">
            <span>Get a discount</span>
          </button>
        </div>
      </TinderCard>
    </div>
  );
}
