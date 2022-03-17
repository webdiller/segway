/* eslint-disable @next/next/no-img-element */
import {useEffect, useState} from 'react';
import Image from 'next/image';
import bgImage from '@/base/remain-time-modal-img.png';
import Swipe from 'react-easy-swipe';
import noScroll from 'no-scroll';

export default function RemainTimeModalTimer() {
  const [activeModal, setActiveModal] = useState(true);
  const setActiveModalHandler = () => {
    setActiveModal((prev) => !prev);
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
  }, []);

  return (
    <div className={activeModal ? 'remain-time-modal active' : 'remain-time-modal'}>
      <Swipe onSwipeUp={onSwipeUp} onSwipeDown={onSwipeDown}>
        <div className="remain-time-modal__wrapper">
          <button onClick={setActiveModalHandler} className="remain-time-modal__close-btn">
            <img className="remain-time-modal__close-btn-icon remain-time-modal__close-btn-icon_desktop" src="/icon-close-white.svg" alt="icon-close" width="34" height="34" loading="lazy" />
            <img className="remain-time-modal__close-btn-icon remain-time-modal__close-btn-icon_mobile" src="/icon-close-black.svg" alt="icon-close" width="34" height="34" loading="lazy" />
          </button>
          <div className="remain-time-modal__bg-wrapper">
            <Image src={bgImage} alt="Segway protective gear set as a gift" />
          </div>
          <div className="remain-time-modal__content">
            <p className="title remain-time-modal__title">Segway protective gear set as a gift</p>
            <p className="text remain-time-modal__description">Only until December 12</p>
          </div>
          <div className="remain-time-modal__timer">
            <div className="remain-time-modal__timer-item">
              <p className="remain-time-modal__timer-title">00</p>
              <p className="remain-time-modal__timer-description">days</p>
            </div>
            <div className="remain-time-modal__timer-item">
              <p className="remain-time-modal__timer-title">02</p>
              <p className="remain-time-modal__timer-description">hours</p>
            </div>
            <div className="remain-time-modal__timer-item">
              <p className="remain-time-modal__timer-title">00</p>
              <p className="remain-time-modal__timer-description">min</p>
            </div>
            <div className="remain-time-modal__timer-item">
              <p className="remain-time-modal__timer-title">00</p>
              <p className="remain-time-modal__timer-description">sec</p>
            </div>
          </div>
          <button className="ui-btn remain-time-modal__btn">
            <span>Order now</span>
          </button>
        </div>
      </Swipe>
    </div>
  );
}
