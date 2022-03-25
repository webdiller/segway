import Image from "next/image";
import NinebotSMaxBundle from '@/base/ninebot-s-max-bundle.png'
import NinebotSBundle from '@/base/ninebot-s-bundle.png'

export default function Bundles({ bundles }) {
  return (
    <div className="bundle-toggler">
      <div className="bundle-toggler__container">
        <p className="text bundle-toggler__title">Bundle:</p>
        <div className="bundle-toggler__items">
          {bundles.map(({ id, name, price, imgPath }) => {
            return (
              <div key={id} className="bundle-toggler__item">
                <div className="bundle-toggler__img">
                  <Image width={62} height={76} src={imgPath} alt={`Bundle ${name}`} />
                </div>
                <div className="bundle-toggler__name-with-price">
                  <p className="bundle-toggler__name">{name}</p>
                  <p className="bundle-toggler__price">${price}</p>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}
