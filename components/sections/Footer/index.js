import Link from 'next/link';
import Image from 'next/image';
import footerLogo from '@/base/logo-black-footer.svg';
import UiSrollUp from 'components/shared/ScrollUp/UiScrollUp';

const socials = [
  {
    id: 0,
    alt: "instagram",
    src: "/icon-instagram.svg"
  },
  {
    id: 1,
    alt: "twitter",
    src: "/icon-twitter.svg"
  },
  {
    id: 2,
    alt: "youtube",
    src: "/icon-youtube.svg"
  },
  {
    id: 3,
    alt: "facebook",
    src: "/icon-facebook.svg"
  },
]

export default function Footer({withPaddings}) {
  return (
    <>
      <UiSrollUp />
      <footer className={!withPaddings ? "footer" : "footer footer_with-paddings"}>
        <div className="container footer__container">

          <div className="footer__columns">

            <div className="footer__columns-item">
              <p className="footer__columns-item-title">Social media</p>
              <nav className="footer__socials">
                {socials.map(({ id, alt, src }) => (
                  <Link key={id} href="/">
                    <a className="footer__socials-link">
                      <Image width={38} height={38} src={src} alt={alt} />
                    </a>
                  </Link>
                ))}
              </nav>
              <div className="footer__logo-block footer__logo-block_lg">
                <Link href="/">
                  <a className="footer__logo-link">
                    <Image
                      className="footer__logo-img"
                      src={footerLogo}
                      alt="segway"
                      width={174}
                      height={50} />
                  </a>
                </Link>
              </div>

            </div>

            <div className="footer__columns-item">
              <p className="footer__columns-item-title">About us</p>
              <nav className="footer__website-links">
                <Link href="/"><a className="footer__website-links-item">CATALOG</a></Link>
                <Link href="/shipping-and-payment"><a className="footer__website-links-item">SHIPPING AND PAYMENT</a></Link>
                <Link href="/wholesale"><a className="footer__website-links-item">WHOLESALE</a></Link>
                <Link href="/contacts"><a className="footer__website-links-item">CONTACTS</a></Link>
                <Link href="/terms-and-conditions"><a className="footer__website-links-item">Terms and conditions</a></Link>
                <Link href="/privacy-policy"><a className="footer__website-links-item">Privacy policy</a></Link>
              </nav>
            </div>

            <div className="footer__columns-item">
              <p className="footer__columns-item-title">Contact us</p>
              <nav className="footer__actions">
                <Link href="tel:+18885902694" ><a className="ui-btn footer__actions-item"><span>Call</span></a></Link>
                <Link href="https://api.whatsapp.com/send?phone=15852135977" ><a className="ui-btn footer__actions-item"><span>Chat</span></a></Link>
              </nav>
              <p className="footer__description">8605 Santa Monica Boulevard #58391 <br /> West Hollywood, CA 90069-4109</p>
              <div className="footer__logo-block footer__logo-block_sm">
                <Link href="/">
                  <a className="footer__logo-link">
                    <Image
                      className="footer__logo-img"
                      src={footerLogo}
                      alt="segway"
                      width={174}
                      height={50} />
                  </a>
                </Link>
              </div>
              <p className="footer__copyright">Segway Ninebot. Cherry Wheel LLC © 2022</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
