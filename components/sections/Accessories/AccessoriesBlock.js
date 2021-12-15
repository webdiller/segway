import {useCart} from 'react-use-cart';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import circlePlaceholder from '@/base/circle-placeholder.svg';
import TitleWithDescription from '@/blocks/TitleWithDescription';

export default function AccessoriesBlock({items}) {
  const {addItem} = useCart();
  const router = useRouter();

  const onClickHandler = (id, e) => {
    addItem(id);
    e.target.classList.add('ui-btn_added');
    e.target.focus();
    router.push(`/?productModal=true&productId=${id}&selectedWarranty=null`, null, {scroll: false});
    setTimeout(() => {
      e.target.classList.remove('ui-btn_added');
      e.target.blur();
    }, 3000);
  };

  return (
    <div className="accessories-block">
      <div className="container accessories-block__container">
        <TitleWithDescription titleText="Accessories" descriptionText="Cо стильными оригинальными аксессуарами Xiaomi и Ninebot вы получите еще больше положительных эмоций от своих поездок." />
        <div className="accessories-block__items">
          {items.map((item) => {
            const {id, name, nameWrap, description, price, imgPath} = item;
            return (
              <div key={id} className="swiper-slide accessories-block__item">
                <div className="accessories-block__item-wrapper">
                  <div className="accessories-block__img-wrapper">
                    <Image objectFit="contain" className="accessories-block__img" src={imgPath} alt="NineboT Engine Speaker" layout="fill" placeholder="blur" blurDataURL={circlePlaceholder} />
                  </div>
                  <p className="text text_25 accessories-block__name">{name}</p>
                  <p className="text text_13 text_grey2 accessories-block__description">{description}</p>
                  <div className="accessories-block__price">
                    <p className="text text_16 accessories-block__price-key">Price:</p>
                    <p className="text text_uppercase accessories-block__price-value">${price}</p>
                  </div>
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
