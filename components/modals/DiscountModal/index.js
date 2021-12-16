/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useRef, useState} from 'react';
import useToggleScroll from '@/hooks/useToggleScroll';
import TinderCard from 'react-tinder-card';
import {useRouter} from 'next/dist/client/router';

export default function DiscountModal() {
  const router = useRouter();
  const elRef = useRef(null);
  const [activeModal, setActiveModal] = useState(false);
  const [lsFirstVisit, setLsFirstVisit] = useState();
  const {setDisabledHandle} = useToggleScroll();

  const setActiveModalHandler = () => {
    setActiveModal((prev) => !prev);
    setDisabledHandle(false);
  };

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction);
    setActiveModal((prev) => !prev);
    setDisabledHandle(false);
  };

  const onClickWrapper = (e) => {
    if (e.target === elRef.current) {
      setActiveModal((prev) => !prev);
      setDisabledHandle(false);
    }
  };

  useEffect(() => {
    const firstInterval = null;
    const secondInterval = null;

    firstInterval = setInterval(() => {
      if (window.localStorage.isFirstVisit == undefined && !window.location.href.toLocaleLowerCase().includes('modal')) {
        console.log('first interval');

        secondInterval = setInterval(() => {
          if (window.localStorage.isFirstVisit == undefined && !window.location.href.toLocaleLowerCase().includes('modal')) {
            setActiveModal(true);
            window.localStorage.setItem('isFirstVisit', 'false');
            clearInterval(firstInterval)
            clearInterval(secondInterval)
          }
        }, 5000);
      }
    }, 5000);
  }, []);

  // Запускаем интервал в 3 секунды
  //    Проверяем, пустой ли роут и первый ли визит
  //    Если да, то показываем модалку, записываем первый визит и очищаем интервал

  return (
    <div onClick={(e) => onClickWrapper(e)} ref={elRef} className={activeModal ? 'discount-modal active' : 'discount-modal'}>
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
          <button className="ui-btn discount-modal__btn">
            <span>Get a discount</span>
          </button>
        </div>
      </TinderCard>
    </div>
  );
}
