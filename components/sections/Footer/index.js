import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));
import Image from 'next/image';
import footerLogo from '@/base/logo-black-footer.svg';
import {Fragment} from 'react';
import UiSrollUp from 'components/shared/ScrollUp/UiScrollUp';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <Fragment>
      <UiSrollUp />
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <Link href="/">
            <a className={styles.footer__logoLink}>
              <Image className={styles.footer__logoImg} src={footerLogo} alt="segway" width={174} height={50} />
            </a>
          </Link>
          <div className={styles.footer__items}>
            <Link href="tel:+1 (888) 777-77-77">
              <a className={`${styles.footer__item} ${styles.footer__item_phone}`}>+1 (888) 777-77-77</a>
            </Link>
            <p className={styles.footer__item}>2637 Fairfax Ave Culver City, CA 90232</p>
            <p className={`${styles.footer__item} ${styles.footer__item_copyright}`}>Segway California © 2017</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
