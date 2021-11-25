import Image from "next/image";

export default function FormWithWarrancy({
  customClass = "form-with-warrancy",
}) {
  return (
    <div className={customClass ? `form-with-warrancy ${customClass}` : "form-with-warrancy" }>
      <div className="form-with-warrancy__wrapper">
        <p className="form-with-warrancy__form-title">
          Add an extended warranty from <span>Extend</span>
        </p>
        <div className="form-with-warrancy__form-buttons">
          <button className="form-with-warrancy__form-button">
            1 Year
            <span className="form-with-warrancy__form-button-separator">-</span>
            <span className="form-with-warrancy__form-button-price">$139</span>
          </button>
          <button className="form-with-warrancy__form-button">
            2 Year
            <span className="form-with-warrancy__form-button-separator">-</span>
            <span className="form-with-warrancy__form-button-price">$209</span>
          </button>
          <button className="form-with-warrancy__form-button">
            3 Year
            <span className="form-with-warrancy__form-button-separator">-</span>
            <span className="form-with-warrancy__form-button-price">$279</span>
          </button>
        </div>

        <div className="form-with-warrancy__form-prices-subtitle-image">
          <div className="form-with-warrancy__form-prices">
            <p className="form-with-warrancy__form-price-old">$1049.99</p>
            <p className="form-with-warrancy__form-price-new">$949.99</p>
          </div>
          <p className="form-with-warrancy__form-subtitle">
            Segway Protective Gear Set as a gift
          </p>
          <div className="form-with-warrancy__form-img-wrapper">
            <Image
              className="form-with-warrancy__form-img"
              src="/segway-protect.png"
              alt="Segway Protective Gear Set as a gift"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="form-with-warrancy__form-actions">
          <button className="ui-btn ui-btn_lg form-with-warrancy__form-action">
            BUY IT Now
          </button>
          <button className="ui-btn ui-btn_lg form-with-warrancy__form-action">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
