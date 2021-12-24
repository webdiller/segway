import Link from 'next/link';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';
import segwayProtect from '@/base/segway-protect.png';
import useAddToCart from '@/hooks/useAddToCart';
import {useCart} from 'react-use-cart';
import {useRouter} from 'next/dist/client/router';
import {useDispatch, useSelector} from 'react-redux';
import {setPrice, setSegway} from 'store/actions/fixedModalAction';
import {setWarranty} from 'store/actions/selectedWarrantyTabAction';

export default function FormWithWarrancy({customClass = 'form-with-warrancy', item}) {
  const router = useRouter();

  const dispatch = useDispatch();
  const {selectedTab} = useSelector((state) => state.selectedWarrantyTabReducer);
  const {currentSegway} = useSelector((state) => state.fixedModalReducer);

  const {addItem} = useCart();
  const {added, setAddedHandler} = useAddToCart();

  const [preparedProduct, setPreparedProduct] = useState(item);

  const tabWrapper = useRef(null);

  const pricesWithWarranty = {
    defaultPrice: Number(item.price),
    oneYear: Number(item.warranty.oneYear.price) + Number(item.price),
    twoYear: Number(item.warranty.twoYear.price) + Number(item.price),
    threeYear: Number(item.warranty.threeYear.price) + Number(item.price)
  };

  const selectProductHandler = (event, selectedTabName) => {
    if (!event.target.classList.contains('active')) {
      event.target.classList.add('active');
      const defineProduct = {...item, id: `${item.id}?warrancy=${selectedTabName}`, selectedWarranty: selectedTabName};

      dispatch(setWarranty(selectedTabName));
      dispatch(setPrice(pricesWithWarranty[selectedTabName]));
      setPreparedProduct(defineProduct);
      dispatch(setSegway(defineProduct));
    } else {
      event.target.classList.remove('active');
      setPreparedProduct(item);

      dispatch(setWarranty(null));
      dispatch(setPrice(item.price));
      dispatch(setSegway(item));
    }
  };

  const addItemToCartAndShowModal = () => () => {
    setAddedHandler();
    addItem(currentSegway);
    router.push(`/?productModal=true&productId=${currentSegway.id}`, null, {scroll: false});
  };

  return (
    <>
      <div className={customClass ? `form-with-warrancy ${customClass}` : 'form-with-warrancy'}>
        <div ref={tabWrapper} className="form-with-warrancy__wrapper">
          <p className="form-with-warrancy__form-title">
            Add an extended warranty from <span>Extend</span>
          </p>
          <div className="form-with-warrancy__form-buttons">
            <button
              onClick={(event) => {
                selectProductHandler(event, 'oneYear');
              }}
              className={selectedTab === 'oneYear' ? 'form-with-warrancy__form-button active' : 'form-with-warrancy__form-button'}>
              <span className="form-with-warrancy__form-button-year">1 Year</span>
              <span className="form-with-warrancy__form-button-separator">-</span>
              <span className="form-with-warrancy__form-button-price">${item.warranty.oneYear.price}</span>
            </button>
            <button
              onClick={(event) => {
                selectProductHandler(event, 'twoYear');
              }}
              className={selectedTab === 'twoYear' ? 'form-with-warrancy__form-button active' : 'form-with-warrancy__form-button'}>
              <span className="form-with-warrancy__form-button-year">2 Year</span>
              <span className="form-with-warrancy__form-button-separator">-</span>
              <span className="form-with-warrancy__form-button-price">${item.warranty.twoYear.price}</span>
            </button>
            <button
              onClick={(event) => {
                selectProductHandler(event, 'threeYear');
              }}
              className={selectedTab === 'threeYear' ? 'form-with-warrancy__form-button active' : 'form-with-warrancy__form-button'}>
              <span className="form-with-warrancy__form-button-year">3 Year</span>
              <span className="form-with-warrancy__form-button-separator">-</span>
              <span className="form-with-warrancy__form-button-price">${item.warranty.threeYear.price}</span>
            </button>
          </div>

          <div className="form-with-warrancy__form-prices-subtitle-image">
            {/* PRICES */}
            <div className="form-with-warrancy__form-prices">
              {selectedTab === 'oneYear' ? (
                <>
                  <p className="form-with-warrancy__form-price-old">$1188</p>
                  <p className="form-with-warrancy__form-price-new">${pricesWithWarranty.oneYear}</p>
                </>
              ) : selectedTab === 'twoYear' ? (
                <>
                  <p className="form-with-warrancy__form-price-old">$1258</p>
                  <p className="form-with-warrancy__form-price-new">${pricesWithWarranty.twoYear}</p>
                </>
              ) : selectedTab === 'threeYear' ? (
                <>
                  <p className="form-with-warrancy__form-price-old">$1328</p>
                  <p className="form-with-warrancy__form-price-new">${pricesWithWarranty.threeYear}</p>
                </>
              ) : (
                <>
                  <p className="form-with-warrancy__form-price-old">$1049</p>
                  <p className="form-with-warrancy__form-price-new">${pricesWithWarranty.defaultPrice}</p>
                </>
              )}
            </div>
            <div className="form-with-warrancy__title-with-image">
              {/* IMAGE */}
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
            <button onClick={addItemToCartAndShowModal()} className={added ? 'ui-btn ui-btn_lg ui-btn_added form-with-warrancy__form-action' : 'ui-btn ui-btn_lg form-with-warrancy__form-action'}>
              <span> ADD TO CART </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
