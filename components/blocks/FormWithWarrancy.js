import Image from "next/image";
import { useRef, useState } from "react";
import segwayProtect from "@/base/segway-protect.png";

export default function FormWithWarrancy({
  customClass = "form-with-warrancy",
}) {
  const [tabs, setTabs] = useState({
    tab1: false,
    tab2: false,
    tab3: false,
  });

  const setActiveTabHandled = (name) => {
    setTabs({
      tab1: false,
      tab2: false,
      tab3: false,
      [name]: tabs[name] === true ? false : true,
    });
  };

  const { tab1, tab2, tab3 } = tabs;
  const tabWrapper = useRef(null);

  return (
    <div
      className={
        customClass ? `form-with-warrancy ${customClass}` : "form-with-warrancy"
      }
    >
      <div ref={tabWrapper} className="form-with-warrancy__wrapper">
        <p className="form-with-warrancy__form-title">
          Add an extended warranty from <span>Extend</span>
        </p>
        <div className="form-with-warrancy__form-buttons">
          <button
            onClick={() => setActiveTabHandled("tab1")}
            className={
              tab1
                ? "form-with-warrancy__form-button active"
                : "form-with-warrancy__form-button"
            }
          >
            1 Year
            <span className="form-with-warrancy__form-button-separator">-</span>
            <span className="form-with-warrancy__form-button-price">$139</span>
          </button>
          <button
            onClick={() => setActiveTabHandled("tab2")}
            className={
              tab2
                ? "form-with-warrancy__form-button active"
                : "form-with-warrancy__form-button"
            }
          >
            2 Year
            <span className="form-with-warrancy__form-button-separator">-</span>
            <span className="form-with-warrancy__form-button-price">$209</span>
          </button>
          <button
            onClick={() => setActiveTabHandled("tab3")}
            className={
              tab3
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
            {tab1 ? (
              <>
                <p className="form-with-warrancy__form-price-old">$1188</p>
                <p className="form-with-warrancy__form-price-new">$1088</p>
              </>
            ) : tab2 ? (
              <>
                <p className="form-with-warrancy__form-price-old">$1258</p>
                <p className="form-with-warrancy__form-price-new">$1158</p>
              </>
            ) : tab3 ? (
              <>
                <p className="form-with-warrancy__form-price-old">$1328</p>
                <p className="form-with-warrancy__form-price-new">$1437</p>
              </>
            ) : (
              <>
                <p className="form-with-warrancy__form-price-old">$1049</p>
                <p className="form-with-warrancy__form-price-new">$949</p>
              </>
            )}
          </div>
          <p className="form-with-warrancy__form-subtitle">
            Segway Protective Gear Set as a gift
          </p>
          <div className="form-with-warrancy__form-img-wrapper">
            <Image
              className="form-with-warrancy__form-img"
              src={segwayProtect}
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
          <button
            className="ui-btn ui-btn_lg form-with-warrancy__form-action"
          >
            <span> ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  );
}
