import Image from "next/image";

import iconPayment_a from "../../public/icon-payment-a.svg";
import iconPayment_amex from "../../public/icon-payment-amex.svg";
import iconPayment_apple from "../../public/icon-payment-apple.svg";
import iconPayment_btc from "../../public/icon-payment-btc.svg";
import iconPayment_btc_alt from "../../public/icon-payment-btc-alt.svg";
import iconPayment_crypto_d from "../../public/icon-payment-crypto-d.svg";
import iconPayment_crypto_o from "../../public/icon-payment-crypto-o.svg";
import iconPayment_discover from "../../public/icon-payment-discover.svg";
import iconPayment_crypto_d_alt from "../../public/icon-payment-crypto-d-alt.svg";
import iconPayment_crypto_triangle from "../../public/icon-payment-crypto-triangle.svg";
import iconPayment_jcb from "../../public/icon-payment-jcb.svg";
import iconPayment_l from "../../public/icon-payment-l.svg";
import iconPayment_mastercard from "../../public/icon-payment-mastercard.svg";
import iconPayment_paypel from "../../public/icon-payment-paypel.svg";
import iconPayment_dollar from "../../public/icon-payment-dollar.svg";
import iconPayment_v from "../../public/icon-payment-v.svg";
import iconPayment_visa from "../../public/icon-payment-visa.svg";

export default function PaymentsMethods({
  customClass = "form-with-warrancy",
}) {
  return (
    <div
      className={
        customClass ? `payments-methods ${customClass}` : "payments-methods"
      }
    >
      <div className="payments-methods__payments">
        <div className="payments-methods__payments-title payments-methods__payments-title_desktop">
          <div className="payments-methods__payments-item payments-methods__payments-item_1">
            Payment Methods:
          </div>
          <div className="payments-methods__payments-item payments-methods__payments-item_2">
            Starting at $55/mo with
            <div className="payments-methods__a-icon-wrapper">
              <Image
                src={iconPayment_a}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            .
          </div>
          <span className="payments-methods__payments-item payments-methods__payments-item_3">
            Prequalify now
          </span>
        </div>
        <div className="payments-methods__payments-methods">
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_amex}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_apple}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_btc}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_btc_alt}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_crypto_d}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_crypto_o}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_discover}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_crypto_d_alt}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_crypto_triangle}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_jcb}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_l}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_mastercard}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_paypel}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_dollar}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_v}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="payments-methods__payments-method">
            <div className="payments-methods__payments-method-icon-wrapper">
              <Image
                src={iconPayment_visa}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="payments-methods__payments-title payments-methods__payments-title_mobile">
          <div className="payments-methods__payments-item payments-methods__payments-item_2">
            Starting at $55/mo with
            <div className="payments-methods__a-icon-wrapper">
              <Image
                src={iconPayment_a}
                alt="payment icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            .
          </div>
          <span className="payments-methods__payments-item payments-methods__payments-item_3">
            Prequalify now
          </span>
        </div>
      </div>
    </div>
  );
}
