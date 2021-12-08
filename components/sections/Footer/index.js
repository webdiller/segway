import Link from "next/link";
import Image from "next/image";

import footerLogo from "@/base/logo-black-footer.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Link href="/">
          <a className="footer__logo-link">
            <Image
              className="footer__logo-img"
              src={footerLogo}
              alt="segway"
              width={174}
              height={50}
            />
          </a>
        </Link>
        <div className="footer__items">
          <Link href="tel:+1 (888) 777-77-77">
            <a className="footer__item footer__item_phone">
              +1 (888) 777-77-77
            </a>
          </Link>
          <p className="footer__item">2637 Fairfax Ave Culver City, CA 90232</p>
          <p className="footer__item footer__item_copyright">Segway California © 2017</p>
        </div>
      </div>
    </footer>
  );
}
