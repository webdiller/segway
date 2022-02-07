import Image from 'next/image';
import FormWithWarrancy from '@/blocks/FormWithWarrancy';
import PaymentsMethods from '@/blocks/PaymentsMethods';
import SegwayProtectMobile from '@/blocks/SegwayProtectMobile';

export default function SegwayNinebot({customClass, titleDesktop, titleMobile, item, lastWord, mainImage}) {
  return (
    <div className={customClass ? `segway-ninebot segway-ninebot_${customClass}` : 'segway-ninebot'}>
      <div className="container segway-ninebot__container">
        {/* area name: stock */}
        <div className="segway-ninebot__stock-wrapper">
          <p className="segway-ninebot__stock">In stock</p>
        </div>

        {/* area name: title */}
        <div className="segway-ninebot__title-wrapper">
          <p className="title segway-ninebot__title">
            <span data-last-text={lastWord} className="hide-576">{titleDesktop}</span>
            <span data-last-text={lastWord} className="show-block-576">
              {titleMobile}
            </span>
          </p>
        </div>

        {/* area name: bgimage */}
        <div className="segway-ninebot__bg-wrapper">
          <Image src={mainImage} alt={titleDesktop} layout="fill" quality={100} objectFit="contain" />
        </div>

        {/* area name: protect */}
        <SegwayProtectMobile customClass="segway-ninebot__protect-wrapper" />

        {/* area name: form */}
        <div className="segway-ninebot__form-wrapper">
          <FormWithWarrancy item={item} customClass="segway-ninebot__form" />
        </div>

        {/* area name: payments */}
        <PaymentsMethods customClass="segway-ninebot__payments-wrapper" />
      </div>
    </div>
  );
}
