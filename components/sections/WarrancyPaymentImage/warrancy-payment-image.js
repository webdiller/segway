import FormWithWarrancy from '@/blocks/FormWithWarrancy';
import PaymentsMethods from '@/blocks/PaymentsMethods';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function WarrancyPaymentImage({ widthDesktop, heightDesktop, widthMobile, heightMobile, titleDesktop, titleMobile, imgDesktop, imgMobile, customClass, item }) {
  let mediaQuery = useMediaQuery('(min-width: 900px)');
  const { status } = item;

  const CurrentStatus = (status) => {
    switch (status) {
      case 'in-stock':
        return (<p className="form-warrancy__stock">In stock</p>)
      case 'out-of-stock':
        return (<p className="form-warrancy__stock form-warrancy__stock_out-of-stock">Out of stock</p>)
      case 'preorder':
        return (<p className="form-warrancy__stock form-warrancy__stock_preorder">Pre order</p>)
      default:
        return (<p className="form-warrancy__stock">In stock</p>)
    }
  }

  return (
    <div className={customClass ? `form-warrancy form-warrancy_${customClass}` : "form-warrancy"}>
      <div className="container form-warrancy__container">
        <div className="form-warrancy__top">
          {CurrentStatus(status)}
          <p className="form-warrancy__title">
            <span className="hide-900">{titleDesktop}</span>
            <span className="show-block-900">{titleMobile}</span>
          </p>
        </div>

        <div className="form-warrancy__content">
          <div className="form-warrancy__left">
            <div className="form-warrancy__form">
              <FormWithWarrancy product={item} customClass="segway-ninebot__form" />
            </div>
            {status !== 'out-of-stock' && (
              <div className="form-warrancy__payment">
                <PaymentsMethods customClass="form-warrancy__payments-wrapper" />
              </div>
            )}
          </div>
          <div className="form-warrancy__right">
            {mediaQuery ? (
              <div style={{ width: `${widthDesktop}px`, height: `${heightDesktop}px` }} className="form-warrancy__img-wrapper">
                <Image placeholder="blur" width={widthDesktop} height={heightDesktop} objectFit="contain" layout="fill" src={imgDesktop} alt={titleDesktop} className="form-warrancy__img" quality={100} />
              </div>
            ) : (
              <div className="form-warrancy__img-wrapper">
                <Image placeholder="blur" width={widthMobile} height={heightMobile} objectFit="contain" layout="responsive" src={imgMobile} alt={titleDesktop} className="form-warrancy__img" quality={100} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
