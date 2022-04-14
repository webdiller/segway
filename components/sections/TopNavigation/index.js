import Link from 'next/link';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import logoBlack from '@/base/logo-black.svg';
import iconCartWhite from '@/base/icon-cart-white.svg';
import iconCartBlack from '@/base/icon-cart-black.svg';
import iconPhoneBlack from '@/base/icon-phone-black.svg';
import { useDispatch, useSelector } from 'react-redux';
import iconCloseBlack from '@/base/icon-bar.svg';
import iconCloseWhite from '@/base/icon-close-white.svg';
import { productModalActiveSet } from 'store/slices/productModalSlice';
import { useRouter } from 'next/router';

export default function TopNavigation() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [matchCatalog, matchCatalogSet] = useState(null)
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const { products } = useSelector(state => state.products);
  const [count, countSet] = useState(0)

  const handleSetIsActiveMenu = () => {
    setIsActiveMenu((prev) => !prev);
  };

  useEffect(() => {
    if (router.asPath.includes('kickscooters') || router.asPath.includes('gokarts')) {
      const matchedCatalog = router.asPath.split('/')[1];
      matchCatalogSet(matchedCatalog)
    }
  }, [router])

  useEffect(() => {
    const closeElementIfClickOutside = (event) => {
      if (event.target.tagName === 'A') setIsActiveMenu(false)
      if (event.target.tagName !== 'button' && isActiveMenu) setIsActiveMenu(false)
    };

    document.addEventListener('click', closeElementIfClickOutside);
    return () => document.removeEventListener('click', closeElementIfClickOutside);

  }, [isActiveMenu]);

  useEffect(() => {
    countSet(products.length)
  }, [products])

  const openModalHandler = () => dispatch(productModalActiveSet(true))

  return (
    <>
      <div className="top-nav">
        <div className="container top-nav__container">
          <button onClick={handleSetIsActiveMenu} className={isActiveMenu ? 'top-nav__btn-menu active' : 'top-nav__btn-menu'}>
            {!isActiveMenu ? <Image width={25} height={19} src={iconCloseBlack} alt="icon close menu" /> : <Image width={20} height={20} src={iconCloseWhite} alt="icon close menu" />}
          </button>

          <nav className={isActiveMenu ? 'top-nav__items active' : 'top-nav__items'}>
            <Link href="/">
              <a className="top-nav__item top-nav__item_mobile">Catalog</a>
            </Link>
            <Link href="/shipping-and-payment">
              <a className="top-nav__item">Shipping and payment</a>
            </Link>
            <Link href="/wholesale">
              <a className="top-nav__item">Wholesale</a>
            </Link>
            <Link href="/contacts">
              <a className="top-nav__item">Contacts</a>
            </Link>
          </nav>

          <Link href="/">
            <a className="top-nav__logo-link">
              <Image src={logoBlack} alt="segway" width={94} height={28} />
            </a>
          </Link>

          <div className="top-nav__actions top-nav__actions_desktop">

            <button onClick={openModalHandler} className="top-nav__action top-nav__action_cart">
              <div className="top-nav__action-icon-wrapper">
                <Image src={iconCartWhite} alt="icon" />
              </div>
              <span className="top-nav__action-counter">{count}</span>
            </button>

            <Link href="tel:+18888888888">
              <a className="top-nav__action top-nav__action_phone">+1 (888) 888-88-88</a>
            </Link>
          </div>

          <div className="top-nav__actions top-nav__actions_mobile">
            <Link href="/">
              <a className="top-nav__action">
                <div className="top-nav__action-icon-wrapper">
                  <Image src={iconPhoneBlack} alt="icon" />
                </div>
              </a>
            </Link>

            <button onClick={openModalHandler} className="top-nav__action top-nav__action_cart">
              <div className="top-nav__action-icon-wrapper">
                <Image src={iconCartBlack} alt="icon" />
              </div>

              <span className="top-nav__action-counter">{count}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="top-nav-separator"></div>
    </>
  );
}
