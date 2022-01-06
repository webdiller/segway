import Link from 'next/link';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';
import logoBlack from '@/base/logo-black.svg';
import iconCartWhite from '@/base/icon-cart-white.svg';
import iconCartBlack from '@/base/icon-cart-black.svg';
import iconPhoneBlack from '@/base/icon-phone-black.svg';
import {useSelector} from 'react-redux';

/** Верхняя навигация */
export default function TopNavigation() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const handleSetIsActiveMenu = () => {
    setIsActiveMenu((prev) => !prev);
  };

  const {totalUniqueItems: totalCount} = useSelector((state) => state.productCart);

  const elementRef = useRef(null);

  useEffect(() => {
    const closeElementIfClickOutside = (event) => {
      (isActiveMenu && elementRef.current && !elementRef.current.contains(event.target)) && setIsActiveMenu(false);
    };

    document.addEventListener('mousedown', closeElementIfClickOutside);
    return () => {
      document.removeEventListener('mousedown', closeElementIfClickOutside);
    };
  }, []);

  return (
    <div ref={elementRef} className="top-nav">
      <div className="container top-nav__container">
        <button onClick={handleSetIsActiveMenu} className={isActiveMenu ? 'top-nav__btn-menu active' : 'top-nav__btn-menu'}>
          {!isActiveMenu ? <img width="25" height="19" src="./icon-bar.svg" alt="icon close menu" loading="lazy" className="top-nav__btn-icon" /> : <img width="20" height="20" src="./icon-close-white.svg" alt="icon close menu" loading="lazy" className="top-nav__btn-icon" />}
        </button>

        <nav className={isActiveMenu ? 'top-nav__items active' : 'top-nav__items'}>
          <Link href="#">
            <a className="top-nav__item">REVIEWS</a>
          </Link>
          <Link href="#">
            <a className="top-nav__item">SHIPPING AND PAYMENT</a>
          </Link>
          <Link href="#">
            <a className="top-nav__item">WHOLESALE</a>
          </Link>
          <Link href="#">
            <a className="top-nav__item">BLOG</a>
          </Link>
          <Link href="#">
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
          <Link href="/user-cart">
            <a className="top-nav__action top-nav__action_cart">
              <div className="top-nav__action-icon-wrapper">
                <Image src={iconCartWhite} alt="icon" />
              </div>
              <span className="top-nav__action-counter">{totalCount}</span>
            </a>
          </Link>
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
          <Link href="/user-cart">
            <a className="top-nav__action top-nav__action_cart">
              <div className="top-nav__action-icon-wrapper">
                <Image src={iconCartBlack} alt="icon" />
              </div>
              <span className="top-nav__action-counter">{totalCount}</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
