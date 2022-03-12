import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';
import logoBlack from '@/base/logo-black.svg';
import iconCartWhite from '@/base/icon-cart-white.svg';
import iconCartBlack from '@/base/icon-cart-black.svg';
import iconPhoneBlack from '@/base/icon-phone-black.svg';
import {useDispatch, useSelector} from 'react-redux';
import {setProductModal} from '@/actions/productModal';
import iconCloseBlack from '@/base/icon-bar.svg';
import iconCloseWhite from '@/base/icon-close-white.svg';

const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

/** Верхняя навигация */
export default function TopNavigation() {
  const dispatch = useDispatch();
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const handleSetIsActiveMenu = () => {
    setIsActiveMenu((prev) => !prev);
  };

  const {totalUniqueItems: totalCount} = useSelector((state) => state.productCart);

  const elementRef = useRef(null);

  useEffect(() => {
    const closeElementIfClickOutside = (event) => {
      if (event.target.tagName) setIsActiveMenu(false);
      
      if (isActiveMenu && elementRef.current && !elementRef.current.contains(event.target)) {
        setIsActiveMenu(false);
      }
    };
    if (isTouchDevice) {
      document.addEventListener('touchend', closeElementIfClickOutside);
    } else {
      document.addEventListener('mousedown', closeElementIfClickOutside);
    }

    if (isTouchDevice) {
      return () => document.removeEventListener('touchend', closeElementIfClickOutside);
    } else {
      return () => document.removeEventListener('mousedown', closeElementIfClickOutside);
    }
  }, [isActiveMenu]);

  return (
    <>
      <div ref={elementRef} className="top-nav">
        <div className="container top-nav__container">
          <button onClick={handleSetIsActiveMenu} className={isActiveMenu ? 'top-nav__btn-menu active' : 'top-nav__btn-menu'}>
            {!isActiveMenu ? <Image width={25} height={19} src={iconCloseBlack} alt="icon close menu" /> : <Image width={20} height={20} src={iconCloseWhite} alt="icon close menu" />}
          </button>

          <nav className={isActiveMenu ? 'top-nav__items active' : 'top-nav__items'}>
            <Link href="/reviews">
              <a className="top-nav__item">REVIEWS</a>
            </Link>
            <Link href="/shipping-and-payment">
              <a className="top-nav__item">SHIPPING AND PAYMENT</a>
            </Link>
            <Link href="/wholesale">
              <a className="top-nav__item">WHOLESALE</a>
            </Link>
            <Link href="/blog">
              <a className="top-nav__item">BLOG</a>
            </Link>
            <Link href="/contacts">
              <a className="top-nav__item">CONTACTS</a>
            </Link>
            <Link href="#">
              <a className="top-nav__item top-nav__item_mobile">CATALOG</a>
            </Link>
          </nav>

          <Link href="/">
            <a className="top-nav__logo-link">
              <Image src={logoBlack} alt="segway" width={94} height={28} />
            </a>
          </Link>

          <div className="top-nav__actions top-nav__actions_desktop">
            <button onClick={() => dispatch(setProductModal(true))} className="top-nav__action top-nav__action_cart">
              <div className="top-nav__action-icon-wrapper">
                <Image src={iconCartWhite} alt="icon" />
              </div>
              <span className="top-nav__action-counter">{totalCount}</span>
            </button>
            <Link href="tel:+18888888888">
              <a className="top-nav__action top-nav__action_phone">+1 (888) 888-88-88</a>
            </Link>
          </div>

          <div className="top-nav__actions top-nav__actions_mobile">
            <Link href="#">
              <a className="top-nav__action">
                <div className="top-nav__action-icon-wrapper">
                  <Image src={iconPhoneBlack} alt="icon" />
                </div>
              </a>
            </Link>
            <button onClick={() => dispatch(setProductModal(true))} className="top-nav__action top-nav__action_cart">
              <div className="top-nav__action-icon-wrapper">
                <Image src={iconCartBlack} alt="icon" />
              </div>
              <span className="top-nav__action-counter">{totalCount}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="top-nav-separator"></div>
    </>
  );
}
