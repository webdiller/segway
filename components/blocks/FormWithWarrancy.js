import Image from "next/image";
import { useRef, useState } from "react";

export default function FormWithWarrancy({
  customClass = "form-with-warrancy",
}) {
  const [activeTab, setActiveTab] = useState(null);

  const setACtiveTabHandled = (id) => setActiveTab(id);
  const tabWrapper = useRef(null);

  return (
    <div
      className={
        customClass ? `form-with-warrancy ${customClass}` : "form-with-warrancy"
      }
    >
      <div
        ref={tabWrapper}
        onClick={(e) => {
          if (e.target === tabWrapper.current) setActiveTab(null)
        }}
        className="form-with-warrancy__wrapper"
      >
        <p className="form-with-warrancy__form-title">
          Add an extended warranty from <span>Extend</span>
        </p>
        <div className="form-with-warrancy__form-buttons">
          <button
            onClick={() => setACtiveTabHandled(1)}
            className={
              activeTab === 1
                ? "form-with-warrancy__form-button active"
                : "form-with-warrancy__form-button"
            }
          >
            1 Year
            <span className="form-with-warrancy__form-button-separator">-</span>
            <span className="form-with-warrancy__form-button-price">$139</span>
          </button>
          <button
            onClick={() => setACtiveTabHandled(2)}
            className={
              activeTab === 2
                ? "form-with-warrancy__form-button active"
                : "form-with-warrancy__form-button"
            }
          >
            2 Year
            <span className="form-with-warrancy__form-button-separator">-</span>
            <span className="form-with-warrancy__form-button-price">$209</span>
          </button>
          <button
            onClick={() => setACtiveTabHandled(3)}
            className={
              activeTab === 3
                ? "form-with-warrancy__form-button active"
                : "form-with-warrancy__form-button"
            }
          >
            3 Year
            <span className="form-with-warrancy__form-button-separator">-</span>
            <span className="form-with-warrancy__form-button-price">$279</span>
          </button>
        </div>

        <div className="form-with-warrancy__form-prices-subtitle-image">
          <div className="form-with-warrancy__form-prices">
            {activeTab === 1 ? (
              <>
                <p className="form-with-warrancy__form-price-old">$449.99</p>
                <p className="form-with-warrancy__form-price-new">$349.99</p>
              </>
            ) : activeTab === 2 ? (
              <>
                <p className="form-with-warrancy__form-price-old">$649.99</p>
                <p className="form-with-warrancy__form-price-new">$549.99</p>
              </>
            ) : activeTab === 3 ? (
              <>
                <p className="form-with-warrancy__form-price-old">$1049.99</p>
                <p className="form-with-warrancy__form-price-new">$949.99</p>
              </>
            ) : (
              <>
                <p className="form-with-warrancy__form-price-old">$949.99</p>
                <p className="form-with-warrancy__form-price-new">$849.99</p>
              </>
            )}
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
            <span>BUY IT Now</span>
          </button>
          <button className="ui-btn ui-btn_lg form-with-warrancy__form-action">
            <span> ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  );
}
