import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPreperedBundle } from "store/slices/productCartSlice";

export default function Bundles({ bundles }) {

  const dispatch = useDispatch()
  const [productId, productIdSet] = useState(null)
  const { preperedBundle } = useSelector(state => state.products)

  useEffect(() => {
    if (preperedBundle) {
      productIdSet(preperedBundle.id)
    } else {
      productIdSet(null)
    }
  }, [preperedBundle])

  const toggler = (e, product) => {
    if (e.target.classList.contains('active')) {
      dispatch(setPreperedBundle(null))
    } else {
      dispatch(setPreperedBundle(product))
    }
  }

  return (
    <div className="bundle-toggler">
      <div className="bundle-toggler__container">
        <p className="text bundle-toggler__title">Bundle:</p>
        <div className="bundle-toggler__items">
          {bundles.map((product) => {
            const { id, name, price, imgPath } = product;
            const currentClass = id === productId ? "bundle-toggler__item active" : "bundle-toggler__item";
            return (
              <div onClick={e => toggler(e, product)} key={id} className={currentClass}>
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
