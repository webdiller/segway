import Link from "next/link";
import Image from "next/image";
import { BsCart2, BsTelephone } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import logoBlack from "../../public/logo-black.svg";

/** Верхняя навигация */
export default function TopNavigation() {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const handleSetIsActiveMenu = () => {
    setIsActiveMenu((prev) => !prev);
  };
  return (
    <div className="top-nav">
      <div className="container top-nav__container">
        <button onClick={handleSetIsActiveMenu} className={isActiveMenu ? 'top-nav__btn-menu active' : 'top-nav__btn-menu'}>
          {isActiveMenu ? (
            <IoIosCloseCircleOutline className="top-nav__btn-icon" />
          ) : (
            <AiOutlineMenu className="top-nav__btn-icon" />
          )}
        </button>

        <nav className={isActiveMenu ? "top-nav__items active" : "top-nav__items"}>
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
        </nav>

        <Link href="#">
          <a className="top-nav__logo-link">
            <Image
              className="top-nav__logo-img"
              src={logoBlack}
              alt="segway"
              width={94}
              height={28}
            />
          </a>
        </Link>

        <div className="top-nav__actions top-nav__actions_desktop">
          <Link href="#">
            <a className="top-nav__action top-nav__action_cart">
              <BsCart2 />
              <span className="top-nav__action-counter">1</span>
            </a>
          </Link>
          <Link href="tel:+18888888888">
            <a className="top-nav__action top-nav__action_phone">
              +1 (888) 888-88-88
            </a>
          </Link>
        </div>

        <div className="top-nav__actions top-nav__actions_mobile">
          <Link href="#">
            <a className="top-nav__action">
              <BsTelephone />
            </a>
          </Link>
          <Link href="#">
            <a className="top-nav__action top-nav__action_cart">
              <BsCart2 /> <span className="top-nav__action-counter">1</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
