import Image from "next/image";
import NinebotSMaxBundle from '@/base/ninebot-s-max-bundle.png'
import NinebotSBundle from '@/base/ninebot-s-bundle.png'

export default function Bundles() {
  return (
    <div className="bundle-toggler">
      <div className="bundle-toggler__container">
        <p className="text bundle-toggler__title">Bundle:</p>
        <div className="bundle-toggler__items">
          <div className="bundle-toggler__item">
            <div className="bundle-toggler__img">
              <Image width={62} height={76}  src={NinebotSMaxBundle} alt="bundel" />
            </div>
            <div className="bundle-toggler__name-with-price">
              <p className="bundle-toggler__name">Ninebot S MAX</p>
              <p className="bundle-toggler__price">$1,099.99</p>
            </div>
          </div>
          <div className="bundle-toggler__item">
            <div className="bundle-toggler__img">
              <Image width={62} height={76}  src={NinebotSBundle} alt="bundel" />
            </div>
            <div className="bundle-toggler__name-with-price">
              <p className="bundle-toggler__name">Ninebot S</p>
              <p className="bundle-toggler__price">$1,099.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
