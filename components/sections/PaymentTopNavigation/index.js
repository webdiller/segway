import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));
import Image from 'next/image';
import logo from '@/base/logo-black.svg';

export default function PaymentTopNavigation() {
  return (
    <div className="payment-top-navigation">
      <div className="container payment-top-navigation__container">
        <Link href="/">
          <a className="payment-top-navigation__link">
            <Image src={logo} alt="Logo site image" />
          </a>
        </Link>
      </div>
    </div>
  );
}
