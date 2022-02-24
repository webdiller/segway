import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));
import Image from 'next/image';

export default function ProductCards({products}) {
  return (
    <div className="product-cards">
      <div className="container product-cards__container">
        <p className="title product-cards__title">KICKSCOOTER</p>

        <div className="product-cards__items">
          {products.adultSegways.map(({id, shortName, pageLinkName }) => {
            return (
              <div key={id} className="product-cards__item">
                <div className="product-cards__item-background-img-wrapper"></div>
                <div className="product-cards__item-product-img-wrapper"></div>
                <div className="product-cards__item-content">
                  <p className="product-cards__item-name">
                    {shortName}
                  </p>
                  <p className="product-cards__item-price">$999.99</p>
                  <Link href={pageLinkName ? `/kickscooters/${pageLinkName}` : '/'}>
                    <a className="ui-glass-link product-cards__item-link">SEE DETAILS</a>
                  </Link>
                </div>
              </div>
            );
          })}
          {products.kidsSegways.map(({id, shortName, pageLinkName}) => {
            return (
              <div key={id} className="product-cards__item">
                <div className="product-cards__item-background-img-wrapper"></div>
                <div className="product-cards__item-product-img-wrapper"></div>
                <div className="product-cards__item-content">
                  <p className="product-cards__item-name">
                    {shortName}
                  </p>
                  <p className="product-cards__item-price">$999.99</p>
                  <Link href={pageLinkName ? `/${pageLinkName}` : '/'}>
                    <a className="ui-glass-link product-cards__item-link">SEE DETAILS</a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="product-cards__bottom">
          <Link href="#">
            <a className="ui-btn product-cards__bottom-link">
              <span>See more</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
