import Image from 'next/image';
import circlePlaceholder from '@/base/circle-placeholder.svg';
import TitleWithDescription from '@/blocks/TitleWithDescription';
import { useDispatch } from 'react-redux';
import { pushProduct } from 'store/slices/productCartSlice';
import { productModalActiveSet } from 'store/slices/productModalSlice';

export default function AccessoriesBlock({ items }) {
  const dispatch = useDispatch();

  const onClickHandler = (item, e) => {
    dispatch(pushProduct(item));
    e.target.classList.add('ui-btn_added');
    e.target.focus();
    dispatch(productModalActiveSet(true));
    setTimeout(() => {
      e.target.classList.remove('ui-btn_added');
      e.target.blur();
    }, 3000);
  };

  return (
    <div className="accessories-block">
      <div className="container accessories-block__container">
        <TitleWithDescription titleText={<>Accessories</>} descriptionText={<>Cо стильными оригинальными аксессуарами Xiaomi и Ninebot вы получите еще больше положительных эмоций от своих поездок.</>} />
        <div className="accessories-block__items">
          {items.map((item) => {
            const { id, type, name, nameWrap, description, price, imgPath } = item;
            return (
              <div key={id} className="swiper-slide accessories-block__item">
                <div className="accessories-block__item-wrapper">
                  <div className="accessories-block__img-wrapper">
                    <Image objectFit="contain" className="accessories-block__img" src={imgPath} alt="NineboT Engine Speaker" layout="fill" placeholder="blur" blurDataURL={circlePlaceholder} />
                  </div>
                  <p className="text text_25 accessories-block__name">{nameWrap}</p>
                  <p className="text text_13 text_grey2 accessories-block__description">{description}</p>
                  {type === 'accessory' ? (
                    <div className="accessories-block__prices">
                      <p className="accessories-block__price-current">${price}</p>
                    </div>
                  ) : (
                    <div className="accessories-block__prices">
                      <p className="accessories-block__price-current">${price}</p>
                      <span className='accessories-block__price-separator'>or</span>
                      <div className="accessories-block__price-period">
                        <p className="accessories-block__price-period-key">$7</p>
                        <p className="accessories-block__price-period-value">/ month</p>
                      </div>
                    </div>)
                  }
                  <button onClick={(e) => onClickHandler(item, e)} className="ui-btn accessories-block__add-cart">
                    <span>ADD TO CART</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
