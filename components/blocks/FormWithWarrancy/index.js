import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import segwayProtect from '@/base/segway-protect.png';
import { setProperties, setCurrentPrice, pushProduct } from 'store/slices/productCartSlice';
import { productModalActiveSet } from 'store/slices/productModalSlice';
import Colors from './Colors';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Bundles from './Bundles';

export default function FormWithWarrancy({ customClass = 'form-with-warrancy', product, showBundles=false }) {
  const dispatch = useDispatch();

  let mediaQuery = useMediaQuery('(min-width: 768px)');

  const [currentWarranty, currentWarrantySet] = useState(null)
  const [currentColor, currentColorSet] = useState(null)

  const tabWrapper = useRef(null);
  const { preparedProduct } = useSelector(state => state.products)

  useEffect(() => {
    if (currentWarranty) {
      dispatch(setCurrentPrice(Number(product.price) + Number(product.warranty[currentWarranty - 1].price)))
    } else {
      dispatch(setCurrentPrice(Number(product.price)))
    }
  }, [currentWarranty, product, dispatch])

  useEffect(() => {
    const idParams = new URLSearchParams(preparedProduct ? preparedProduct.id : product.id);
    const warranty = idParams.get('warranty').toString()
    const color = idParams.get('color').toString()

    warranty === 'null' ? currentWarrantySet(null) : currentWarrantySet(Number(warranty))
    color === 'null' ? currentColorSet(null) : currentColorSet(color)

  }, [preparedProduct, product])

  const onChangeWarrantyHandler = (e, selectedWarranty) => {
    if (!e.target.classList.contains('active')) {
      dispatch(setProperties({ selectedWarranty, selectedColor: currentColor }))
    } else {
      dispatch(setProperties({ selectedWarranty: null, selectedColor: currentColor }))
    }
  }

  const addItemToCartAndShowModal = () => {
    dispatch(pushProduct(preparedProduct))
    dispatch(productModalActiveSet(true))
  }

  return (
    <>

      {!mediaQuery && product.colors && (
        <Colors productName={product.shortName} colors={product.colors} />
      )}

      <div className={customClass ? `form-with-warrancy ${customClass}` : 'form-with-warrancy'}>
        <div ref={tabWrapper} className="form-with-warrancy__wrapper">

          {showBundles && <Bundles />}

          <div className="form-with-warrancy__top">

            {mediaQuery && product.colors && (
              <Colors colors={product.colors} />
            )}

            <div className="form-with-warrancy__title-with-buttons">
              <p className="form-with-warrancy__form-title">
                Add an extended warranty from <span>Extend</span>
              </p>
              <div className="form-with-warrancy__form-buttons">
                {product.warranty.map(({ durationYear, price }) => {
                  return (
                    <button
                      onClick={(e) => { onChangeWarrantyHandler(e, durationYear) }}
                      key={`${product.id}-${durationYear}`}
                      className={currentWarranty == durationYear ? "form-with-warrancy__form-button active" : "form-with-warrancy__form-button"}>
                      <span className="form-with-warrancy__form-button-year">{durationYear} Year</span>
                      <span className="form-with-warrancy__form-button-separator">-</span>
                      <span className="form-with-warrancy__form-button-price">${price}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="form-with-warrancy__form-prices-subtitle-image">
            {/* PRICES */}
            <div className="form-with-warrancy__form-prices">
              <p className="form-with-warrancy__form-price-old">$
                {currentWarranty !== null
                  ? Number(product.warranty[currentWarranty - 1].oldPrice)
                  : product.oldPrice
                }
              </p>
              <p className="form-with-warrancy__form-price-new">$
                {currentWarranty !== null
                  ? Number(product.price) + Number(product.warranty[currentWarranty - 1].price)
                  : product.price
                }
              </p>
            </div>
            <div className="form-with-warrancy__title-with-image">
              <div className="form-with-warrancy__form-img-wrapper">
                <Image className="form-with-warrancy__form-img" src={segwayProtect} alt="Segway Protective Gear Set as a gift" layout="fill" objectFit="contain" />
              </div>
              {/* TITLE */}
              <div className="form-with-warrancy__form-subtitle">
                <p className="hide-991">
                  Segway Protective Gear Set <span>as a gift</span>
                </p>
                <p className="show-block-991">
                  Segway <br /> Protective <br /> Gear Set <span>as a gift</span>
                </p>
              </div>
            </div>
          </div>

          <div className="form-with-warrancy__form-actions">
            <Link href={`/order-product?productId=006`}>
              <a className="ui-btn ui-btn_lg form-with-warrancy__form-action">
                <span>BUY IT Now</span>
              </a>
            </Link>
            <button onClick={addItemToCartAndShowModal} className='ui-btn ui-btn_lg form-with-warrancy__form-action'>
              <span> ADD TO CART </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
