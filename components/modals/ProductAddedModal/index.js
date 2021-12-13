/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/dist/client/router';
import useToggle from '@/hooks/useToggle';
import useMultipleToggle from '@/hooks/useMultipleToggle';
import iconClose from '@/base/icon-close-white.svg';
import {useEffect, useState, useRef} from 'react';
import Swipe from 'react-easy-swipe';
import useToggleScroll from '@/hooks/useToggleScroll';

export default function ProductAddedModal({prices = {main: 949, oneYear: 139, twoYear: 209, threeYear: 279}, warrancyPrice = 279, items} = {}) {
  const router = useRouter();
  const modalRef = useRef(null)
  const [currentItem, setCurrentItem] = useState('');
  const {active: activeModal, setActiveHandler: setActiveModal} = useToggle(false);
  const {
    tabs: {tab1, tab2, tab3},
    setTabsHandler
  } = useMultipleToggle({tab1: false, tab2: false, tab3: false});

  const {setDisabledHandle} = useToggleScroll();

  const onSwipeUp = () => {
    setActiveModal(false);
  };

  const onSwipeDown = () => {
    setActiveModal(false);
  };

  const toggleModal = () => {
    setActiveModal(true);
  };

  useEffect(() => {
    const {id, buyItNow, buyItNowFromFixedModal} = router.query;
    if (buyItNowFromFixedModal == 'true') {
      const filtered = items.filter((item) => item.id === id);
      toggleModal();
      setCurrentItem(...filtered);
    } else if (buyItNowFromFixedModal !== 'true' && buyItNow == 'true') {
      const filtered = items.filter((item) => item.id === id);
      toggleModal();
      setCurrentItem(...filtered);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, setCurrentItem]);

  const removeOnTapWrap = (e) => {
    if (modalRef.current === e.target) {
      setActiveModal(false);
      setDisabledHandle(false);
      router.replace('/', undefined, {shallow: true});
    }
  }

  return (
    <div ref={modalRef} onClick={e=>removeOnTapWrap(e)} className={activeModal ? 'product-added-modal active' : 'product-added-modal'}>
      <div className="product-added-modal__wrapper">
        <Swipe onSwipeUp={onSwipeUp} onSwipeDown={onSwipeDown}>
          <button
            onClick={() => {
              setActiveModal(false);
              setDisabledHandle(false);
              router.replace('/', undefined, {shallow: true});
            }}
            className="product-added-modal__close-btn">
            <div className="product-added-modal__close-btn-icon">
              <Image className="top-nav__logo-img" src={iconClose} alt="icon close" />
            </div>
          </button>

          <p className="product-added-modal__content-name product-added-modal__content-name_mobile">{currentItem?.name}</p>

          <div className="product-added-modal__img-with-content">
            <img className="product-added-modal__img" src={`..${currentItem?.imgPath}`} alt="Lorem ipsum dolor sit amet." loading="lazy" />

            <div className="product-added-modal__content">
              <p className="product-added-modal__content-name product-added-modal__content-name_desktop">{currentItem?.name}</p>

              <p className="product-added-modal__content-description">
                Add an extended warranty from Extend <b>Extend</b>
              </p>

              <div className="product-added-modal__content-buttons">
                <button onClick={() => setTabsHandler('tab1')} className={tab1 ? 'product-added-modal__content-button active' : 'product-added-modal__content-button'}>
                  <span className="product-added-modal__content-button-year">1 year</span>
                  <span className="product-added-modal__content-button-price">${prices.oneYear}</span>
                </button>
                <button onClick={() => setTabsHandler('tab2')} className={tab2 ? 'product-added-modal__content-button active' : 'product-added-modal__content-button'}>
                  <span className="product-added-modal__content-button-year">2 year</span>
                  <span className="product-added-modal__content-button-price">${prices.twoYear}</span>
                </button>
                <button onClick={() => setTabsHandler('tab3')} className={tab3 ? 'product-added-modal__content-button active' : 'product-added-modal__content-button'}>
                  <span className="product-added-modal__content-button-year">3 year</span>
                  <span className="product-added-modal__content-button-price">${prices.threeYear}</span>
                </button>
              </div>

              <div className="product-added-modal__total">
                <p className="product-added-modal__total-item">
                  {tab1 ? (
                    <>
                      1 x <b>$1088</b>
                    </>
                  ) : tab2 ? (
                    <>
                      2 x <b>$1158</b>
                    </>
                  ) : tab3 ? (
                    <>
                      3 x <b>$1228</b>
                    </>
                  ) : (
                    <>
                      1 x <b>$949</b>
                    </>
                  )}
                </p>
                <p className="product-added-modal__total-item">
                  extended warranty x <b>$279.00</b>
                </p>
                <p className="product-added-modal__total-item">
                  Total item: <b className="super-accent">{tab1 ? <>$1367</> : tab2 ? <>$1437</> : tab3 ? <>$1507</> : <>$1228</>}</b>
                </p>
              </div>
            </div>
          </div>

          <div className="product-added-modal__actions">
            <button
              onClick={() => {
                setActiveModal(false);
                setDisabledHandle(false);
                router.replace('/', undefined, {shallow: true, scroll: false});
              }}
              className="ui-btn ui-btn_fill-grey product-added-modal__action">
              <span>CONTINUE</span>
            </button>
            <Link href="/user-cart">
              <a onClick={() => setDisabledHandle(false)} className="ui-btn product-added-modal__action">
                <span>CHECK OUT</span>
              </a>
            </Link>
          </div>
        </Swipe>
      </div>
    </div>
  );
}
