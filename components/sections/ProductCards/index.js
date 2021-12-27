import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCards() {
  return (
    <div className="product-cards">
      <div className="container product-cards__container">
        <p className="title product-cards__title">KICKSCOOTER</p>

        <div className="product-cards__items">
          <div className="product-cards__item">
            <div className="product-cards__item-background-img-wrapper"></div>
            <div className="product-cards__item-product-img-wrapper"></div>
            <div className="product-cards__item-content">
              <p className="product-cards__item-name">
                Ninebot <br /> kickscooter
                <br />
                MAX
              </p>
              <p className="product-cards__item-price">$999.99</p>
              <Link href="#">
                <a className="ui-glass-link product-cards__item-link">SEE DETAILS</a>
              </Link>
            </div>
          </div>

          <div className="product-cards__item">
            <div className="product-cards__item-background-img-wrapper"></div>
            <div className="product-cards__item-product-img-wrapper"></div>
            <div className="product-cards__item-content">
              <p className="product-cards__item-name">
                Ninebot <br /> kickscooter
                <br />
                MAX
              </p>
              <p className="product-cards__item-price">$999.99</p>
              <Link href="#">
                <a className="ui-glass-link product-cards__item-link">SEE DETAILS</a>
              </Link>
            </div>
          </div>

          <div className="product-cards__item">
            <div className="product-cards__item-background-img-wrapper"></div>
            <div className="product-cards__item-product-img-wrapper"></div>
            <div className="product-cards__item-content">
              <p className="product-cards__item-name">
                Ninebot <br /> kickscooter
                <br />
                MAX
              </p>
              <p className="product-cards__item-price">$999.99</p>
              <Link href="#">
                <a className="ui-glass-link product-cards__item-link">SEE DETAILS</a>
              </Link>
            </div>
          </div>

          <div className="product-cards__item">
            <div className="product-cards__item-background-img-wrapper"></div>
            <div className="product-cards__item-product-img-wrapper"></div>
            <div className="product-cards__item-content">
              <p className="product-cards__item-name">
                Ninebot <br /> kickscooter
                <br />
                MAX
              </p>
              <p className="product-cards__item-price">$999.99</p>
              <Link href="#">
                <a className="ui-glass-link product-cards__item-link">SEE DETAILS</a>
              </Link>
            </div>
          </div>

          <div className="product-cards__item">
            <div className="product-cards__item-background-img-wrapper"></div>
            <div className="product-cards__item-product-img-wrapper"></div>
            <div className="product-cards__item-content">
              <p className="product-cards__item-name">
                Ninebot <br /> kickscooter
                <br />
                MAX
              </p>
              <p className="product-cards__item-price">$999.99</p>
              <Link href="#">
                <a className="ui-glass-link product-cards__item-link">SEE DETAILS</a>
              </Link>
            </div>
          </div>

          <div className="product-cards__item">
            <div className="product-cards__item-background-img-wrapper"></div>
            <div className="product-cards__item-product-img-wrapper"></div>
            <div className="product-cards__item-content">
              <p className="product-cards__item-name">
                Ninebot <br /> kickscooter
                <br />
                MAX
              </p>
              <p className="product-cards__item-price">$999.99</p>
              <Link href="#">
                <a className="ui-glass-link product-cards__item-link">SEE DETAILS</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="product-cards__bottom">
          <Link href="#">
            <a className="ui-btn product-cards__bottom-link"><span>See more</span></a>
          </Link>
        </div>
      </div>
    </div>
  );
}
