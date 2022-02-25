import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
const Link = dynamic(() => import('next/link'));

export default function Breadcrumbs() {
  const router = useRouter();
  const {asPath} = router;
  const stepNumber = asPath === '/payment' ? 1 : asPath === '/payment/shipping' ? 2 : 3;
  
  return (
    <div className={stepNumber === 1 ? "payment-breadcrumbs payment-breadcrumbs_first-step" : stepNumber === 2 ? "payment-breadcrumbs payment-breadcrumbs_second-step" : "payment-breadcrumbs payment-breadcrumbs_third-step"}>
      <div className="payment-breadcrumbs__container">
        <Link href="/payment"><a className="payment-breadcrumbs__link">Information »</a></Link>
        <Link href="/payment/shipping"><a className="payment-breadcrumbs__link">Shipping »</a></Link>
        <Link href="/payment/payment"><a className="payment-breadcrumbs__link">Payment</a></Link>
      </div>
    </div>
  );
}
