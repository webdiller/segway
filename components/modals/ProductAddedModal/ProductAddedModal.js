/* eslint-disable @next/next/no-img-element */
import { BsCheckCircle } from "react-icons/bs";
import { VscClose } from "react-icons/vsc";
import useToggle from "../../hooks/useToggle";

export default function ProductAddedModal() {
  
  const {active: activeModal, setActiveHandler: setActiveModal} = useToggle(true);
  const {active: activeAlert, setActiveHandler: setActiveAlert} = useToggle(true);

  return (
    <div className={activeModal ? "product-added-modal active" : "product-added-modal"}>
      <div className="product-added-modal__wrapper">
        <button onClick={setActiveModal}
          className="product-added-modal__close-btn"
        >
          <img
            className="product-added-modal__close-btn-icon"
            src="./icon-close-white.svg"
            alt="icon-close"
            width="34"
            height="34"
            loading="lazy"
          />
        </button>

        <div className={activeAlert ? "product-added-modal__top active" : "product-added-modal__top"}>
          <BsCheckCircle className="product-added-modal__top-icon-check" />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, libero?
          <VscClose onClick={setActiveAlert} className="product-added-modal__top-icon-close" />
        </div>

        <div className="product-added-modal__img-with-content">
          <img
            className="product-added-modal__img"
            src="./example-item-1.png"
            alt="Lorem ipsum dolor sit amet."
            loading="lazy"
          />

          <div className="product-added-modal__content">
            <p className="product-added-modal__content-name">
              Lorem ipsum dolor sit amet.
            </p>

            <p className="product-added-modal__content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing <b>elit.</b>
            </p>

            <div className="product-added-modal__content-buttons">
              <buttom className="product-added-modal__content-button active">
                <span className="product-added-modal__content-button-year">
                  1 year
                </span>
                <span className="product-added-modal__content-button-price">
                  $139
                </span>
              </buttom>
              <buttom className="product-added-modal__content-button">
                <span className="product-added-modal__content-button-year">
                  2 year
                </span>
                <span className="product-added-modal__content-button-price">
                  $209
                </span>
              </buttom>
              <buttom className="product-added-modal__content-button">
                <span className="product-added-modal__content-button-year">
                  3 year
                </span>
                <span className="product-added-modal__content-button-price">
                  $279
                </span>
              </buttom>
            </div>

            <div className="product-added-modal__total">
              <p className="product-added-modal__total-item">
                1 x <b>$949</b>
              </p>
              <p className="product-added-modal__total-item">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="product-added-modal__total-item">
                Total item: <b>949$</b>
              </p>
            </div>
          </div>
        </div>

        <div className="product-added-modal__actions">
          <button onClick={setActiveModal} className="ui-btn ui-btn_fill-grey product-added-modal__action">
            <span>CONTINUE</span>
          </button>
          <button onClick={setActiveModal} className="ui-btn product-added-modal__action">
            <span>CHECK OUT</span>
          </button>
        </div>
      </div>
    </div>
  );
}
