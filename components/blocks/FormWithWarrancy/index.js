import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import segwayProtect from '@/base/segway-protect.png';
import { setProperties, setCurrentPrice, pushProduct, setPreperedBundle } from 'store/slices/productCartSlice';
import { productModalActiveSet } from 'store/slices/productModalSlice';
import Colors from './Colors';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Bundles from './Bundles';

export default function FormWithWarrancy({ customClass = 'form-with-warrancy', product, bundles }) {
  const dispatch = useDispatch();
  const { status } = product;

  let mediaQuery = useMediaQuery('(min-width: 768px)');

  const [currentWarranty, currentWarrantySet] = useState(null)
  const [currentColor, currentColorSet] = useState(null)

  const tabWrapper = useRef(null);
  const { preparedProduct, preperedBundle, currentPrice } = useSelector(state => state.products)

  const onChangeWarrantyHandler = (e, selectedWarranty) => {
    if (!e.target.classList.contains('active')) {
      dispatch(setProperties({ selectedWarranty, selectedColor: currentColor }))
    } else {
      dispatch(setProperties({ selectedWarranty: null, selectedColor: currentColor }))
    }
  }

  const addItemToCartAndShowModal = () => {
    /** Если есть выбранный банд, то добавялем в корину */
    if (preperedBundle) {
      dispatch(pushProduct(preparedProduct))
      dispatch(pushProduct(preperedBundle))
      dispatch(productModalActiveSet(true))
    } else {
      dispatch(pushProduct(preparedProduct))
      dispatch(productModalActiveSet(true))
    }
  }
  let rootClass = "form-with-warrancy";
  if (customClass && status !== 'out-of-stock') {
    rootClass = `form-with-warrancy ${customClass}`
  } else if (customClass && status == 'out-of-stock') {
    rootClass = `form-with-warrancy ${customClass} form-with-warrancy_preorder`
  } else {
    rootClass = `form-with-warrancy`
  }

  useEffect(() => {
    const idParams = new URLSearchParams(preparedProduct ? preparedProduct.id : product.id);
    const warranty = idParams.get('warranty').toString()
    const color = idParams.get('color').toString()

    warranty === 'null' ? currentWarrantySet(null) : currentWarrantySet(Number(warranty))
    color === 'null' ? currentColorSet(null) : currentColorSet(color)

  }, [preparedProduct, product])

  useEffect(() => {
    if (currentWarranty && !preperedBundle) {
      dispatch(setCurrentPrice(Number(product.price) + Number(product.warranty[currentWarranty - 1].price)))
    } else if (currentWarranty && preperedBundle) {
      dispatch(setCurrentPrice(Number(product.price) + Number(product.warranty[currentWarranty - 1].price) + Number(preperedBundle.price)))
    } else if (!currentWarranty && preperedBundle) {
      dispatch(setCurrentPrice(Number(product.price) + Number(preperedBundle.price)))
    } else {
      dispatch(setCurrentPrice(Number(product.price)))
    }
  }, [currentWarranty, preperedBundle, product, dispatch])


  useEffect(() => {
    if (!bundles) {
      dispatch(setPreperedBundle(null))
    }
  }, [dispatch, bundles])

  return (
    <>
      {!mediaQuery && product.colors && (
        <Colors productName={product.shortName} colors={product.colors} />
      )}

      <div className={rootClass}>
        <div ref={tabWrapper} className="form-with-warrancy__wrapper">

          {bundles && <Bundles bundles={bundles} />}

          {status !== 'preorder' && status !== 'out-of-stock' && (
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
          )}

          <div className="form-with-warrancy__form-prices-subtitle-image">
            <div className="form-with-warrancy__form-prices">
              <p className="form-with-warrancy__form-price-old">${`${(currentPrice * 1.1).toFixed(2)}`}</p>
              <p className="form-with-warrancy__form-price-new">${currentPrice}</p>
            </div>

            {/* FIXME: Заменить изображение */}
            {status !== 'out-of-stock' && (
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
            )}

          </div>

          <div className="form-with-warrancy__form-actions">
            {status == 'in-stock' ?
              (<>
                <Link href={`/payment`}>
                  <a onClick={() => {
                    /** Если есть выбранный банд, то добавялем в корину */
                    if (preperedBundle) {
                      dispatch(pushProduct(preparedProduct))
                      dispatch(pushProduct(preperedBundle))
                    } else {
                      dispatch(pushProduct(preparedProduct))
                    }
                  }} className="ui-btn ui-btn_lg form-with-warrancy__form-action">
                    <span>BUY IT Now</span>
                  </a>
                </Link>
                <button onClick={addItemToCartAndShowModal} className='ui-btn ui-btn_lg form-with-warrancy__form-action'>
                  <span> ADD TO CART </span>
                </button>
              </>)
              : status == 'preorder' ? (
                <>
                  <button onClick={addItemToCartAndShowModal} className='ui-btn ui-btn_lg form-with-warrancy__form-action'>
                    <span> PREORDER NOW </span>
                  </button>
                </>
              )
                : status == 'out-of-stock' ? (<>
                  <button onClick={addItemToCartAndShowModal} className='ui-btn ui-btn_lg form-with-warrancy__form-action'>
                    <span> Request Stock Alert </span>
                  </button>
                </>)
                  : (
                    <>
                      <Link href={`/payment`}>
                        <a onClick={() => {
                          /** Если есть выбранный банд, то добавялем в корину */
                          if (preperedBundle) {
                            dispatch(pushProduct(preparedProduct))
                            dispatch(pushProduct(preperedBundle))
                          } else {
                            dispatch(pushProduct(preparedProduct))
                          }
                        }} className="ui-btn ui-btn_lg form-with-warrancy__form-action">
                          <span>BUY IT Now</span>
                        </a>
                      </Link>
                      <button onClick={addItemToCartAndShowModal} className='ui-btn ui-btn_lg form-with-warrancy__form-action'>
                        <span> ADD TO CART </span>
                      </button>
                    </>)
            }
          </div>
        </div>
      </div>
    </>
  );
}
