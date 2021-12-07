/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import bgImageDark from '@/base/didnt-find-img-dark.png';
import UiInput from '@/ui/UiInput';
import noScroll from 'no-scroll';
import TinderCard from 'react-tinder-card';

export default function DidntFindModal({isWhiteMode = true}) {
  const [activeModal, setActiveModal] = useState(true);
  const [whiteModeState, setWhiteModeState] = useState(isWhiteMode);

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
    if (typeof window !== 'undefined') {
      noScroll.on();
    }
  }, []);

  return (
    <div className={activeModal && !whiteModeState ? 'didnt-find-modal active' : activeModal && whiteModeState ? 'didnt-find-modal didnt-find-modal_white-mode active' : !activeModal && whiteModeState ? 'didnt-find-modal didnt-find-modal_white-mode' : 'didnt-find-modal'}>
      <TinderCard swipeThreshold={300} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
        <div className="didnt-find-modal__wrapper">
          <button onTouchStart={setActiveModalHandler} className="didnt-find-modal__close-btn">
            <img className="didnt-find-modal__close-btn-icon didnt-find-modal__close-btn-icon_desktop" src="./icon-close-white.svg" alt="icon-close" width="34" height="34" loading="lazy" />
            <img className="didnt-find-modal__close-btn-icon didnt-find-modal__close-btn-icon_mobile" src={whiteModeState ? './icon-close-black.svg' : './icon-close-grey.svg'} alt="icon-close" width="34" height="34" loading="lazy" />
          </button>
          <div className="didnt-find-modal__bg-wrapper">
            {/* TODO: Выгрузить картинку из макета и поменять путь до картинки */}
            <Image src={whiteModeState ? bgImageDark : bgImageDark} alt="Didn’t find a model?" />
          </div>
          <img className="didnt-find-modal__question-icon" src="./icon-question.svg" alt="icon-question" width="178" height="266" loading="lazy" />
          <div className="didnt-find-modal__content">
            <p className="title didnt-find-modal__title">Didn’t find a model?</p>
            <p className="text didnt-find-modal__description">Enter your phone number and our manager will call your back in 15 seconds</p>
            <UiInput customClass="didnt-find-modal__input" />
          </div>
          <button className="ui-btn didnt-find-modal__btn">
            <span>SEND</span>
          </button>
        </div>
      </TinderCard>
    </div>
  );
}