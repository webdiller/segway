import React from 'react';

export default function FixedModal() {
  return (
    <div className="fixed-modal">
      <button className="fixed-modal__wrapper">
        <span className="fixed-modal__title">
          <span className="fixed-modal__title-name">Add to cart</span>
          <span className="fixed-modal__title-price">$1181</span>
        </span>
        <span className="fixed-modal__description">Free 1 day shipping within California</span>
      </button>
    </div>
  );
}
