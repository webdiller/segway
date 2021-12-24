import Link from 'next/link';
import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';
import segwayProtect from '@/base/segway-protect.png';
import useAddToCart from '@/hooks/useAddToCart';
import {useCart} from 'react-use-cart';
import {useRouter} from 'next/dist/client/router';
import {useDispatch} from 'react-redux';
import {setPrice, setSegway} from 'store/actions/fixedModalAction';

export default function FormWithWarrancy({customClass = 'form-with-warrancy', item}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const {addItem} = useCart();
  const {added, setAddedHandler} = useAddToCart();
  const tabWrapper = useRef(null);
  const [tabs, setTabs] = useState({
    oneYear: false,
    twoYear: false,
    threeYear: false
  });
  const {oneYear, twoYear, threeYear} = tabs;

  useEffect(() => {
    const selectedTab = null;

    for (let element in tabs) {
      if (tabs[element] === true) selectedTab = element;
    }

    if (selectedTab) {
      try {
        dispatch(setPrice(Number(item.price) + Number(item.warranty[selectedTab].price)));
        const selectedWarranty = tabs.oneYear ? 'oneYear' : tabs.twoYear ? 'twoYear' : tabs.threeYear ? 'threeYear' : null;
        const defineProduct = selectedWarranty ? {...item, id: `${item.id}?warrancy=${selectedWarranty}`, selectedWarranty} : item;
        dispatch(setSegway(defineProduct));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        dispatch(setPrice(Number(item.price)));
        const selectedWarranty = tabs.oneYear ? 'oneYear' : tabs.twoYear ? 'twoYear' : tabs.threeYear ? 'threeYear' : null;
        const defineProduct = selectedWarranty ? {...item, id: `${item.id}?warrancy=${selectedWarranty}`, selectedWarranty} : item;
        dispatch(setSegway(defineProduct));
      } catch (error) {
        console.log(error);
      }
    }
  }, [tabs]);

  const setActiveTabHandled = (name) => () => {
    setTabs({
      oneYear: false,
      twoYear: false,
      threeYear: false,
      [name]: tabs[name] === true ? false : true
    });
  };

  // TODO: Сделать DRY
  const addItemToCartAndShowModal = () => () => {
    const selectedWarranty = tabs.oneYear ? 'oneYear' : tabs.twoYear ? 'twoYear' : tabs.threeYear ? 'threeYear' : null;

    // Если выбрали гарантию, то указываем уникальный id с гарантией и поле 'selectedWarranty'. Иначе возвращаем обычный объект
    selectedWarranty ? (item = {...item, id: `${item.id}?warrancy=${selectedWarranty}`, selectedWarranty}) : item;
    setAddedHandler();
    addItem({...item});
    router.push(`/?productModal=true&productId=${item.id}`, null, {scroll: false});
  };

  return (
    <>
      <div className={customClass ? `form-with-warrancy ${customClass}` : 'form-with-warrancy'}>
        <div ref={tabWrapper} className="form-with-warrancy__wrapper">
          <p className="form-with-warrancy__form-title">
            Add an extended warranty from <span>Extend</span>
          </p>
          <div className="form-with-warrancy__form-buttons">
            <button onClick={setActiveTabHandled('oneYear')} className={oneYear ? 'form-with-warrancy__form-button active' : 'form-with-warrancy__form-button'}>
              <span className="form-with-warrancy__form-button-year">1 Year</span>
              <span className="form-with-warrancy__form-button-separator">-</span>
              <span className="form-with-warrancy__form-button-price">$139</span>
            </button>
            <button onClick={setActiveTabHandled('twoYear')} className={twoYear ? 'form-with-warrancy__form-button active' : 'form-with-warrancy__form-button'}>
              <span className="form-with-warrancy__form-button-year">2 Year</span>
              <span className="form-with-warrancy__form-button-separator">-</span>
              <span className="form-with-warrancy__form-button-price">$209</span>
            </button>
            <button onClick={setActiveTabHandled('threeYear')} className={threeYear ? 'form-with-warrancy__form-button active' : 'form-with-warrancy__form-button'}>
              <span className="form-with-warrancy__form-button-year">3 Year</span>
              <span className="form-with-warrancy__form-button-separator">-</span>
              <span className="form-with-warrancy__form-button-price">$279</span>
            </button>
          </div>

          <div className="form-with-warrancy__form-prices-subtitle-image">
            {/* PRICES */}
            <div className="form-with-warrancy__form-prices">
              {oneYear ? (
                <>
                  <p className="form-with-warrancy__form-price-old">$1188</p>
                  <p className="form-with-warrancy__form-price-new">$1088</p>
                </>
              ) : twoYear ? (
                <>
                  <p className="form-with-warrancy__form-price-old">$1258</p>
                  <p className="form-with-warrancy__form-price-new">$1158</p>
                </>
              ) : threeYear ? (
                <>
                  <p className="form-with-warrancy__form-price-old">$1328</p>
                  <p className="form-with-warrancy__form-price-new">$1228</p>
                </>
              ) : (
                <>
                  <p className="form-with-warrancy__form-price-old">$1049</p>
                  <p className="form-with-warrancy__form-price-new">$949</p>
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
