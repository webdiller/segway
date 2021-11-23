/* eslint-disable @next/next/no-img-element */
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
        <p className="payments-methods__payments-title payments-methods__payments-title_desktop">
          <span className="payments-methods__payments-item payments-methods__payments-item_1">
            Payment Methods:
          </span>
          <span className="payments-methods__payments-item payments-methods__payments-item_2">
            Starting at $55/mo with
            <img
              className="payments-methods__a-icon"
              src="./icon-payment-a.svg"
              alt="payment icon"
            />
            .
          </span>
          <span className="payments-methods__payments-item payments-methods__payments-item_3">
            Prequalify now
          </span>
        </p>
        <div className="payments-methods__payments-methods">
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-amex.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-apple.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-btc.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-btc-alt.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-crypto-d.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-crypto-o.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-discover.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-crypto-d-alt.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-crypto-triangle.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-jcb.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-l.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-mastercard.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-paypel.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-dollar.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-v.svg"
              alt="payment icon"
            />
          </div>
          <div className="payments-methods__payments-method">
            <img
              className="payments-methods__payments-method-icon"
              src="./icon-payment-visa.svg"
              alt="payment icon"
            />
          </div>
        </div>
        <p className="payments-methods__payments-title payments-methods__payments-title_mobile">
          <span className="payments-methods__payments-item payments-methods__payments-item_2">
            Starting at $55/mo with
            <img
              className="payments-methods__a-icon"
              src="./icon-payment-a.svg"
              alt="payment icon"
            />
            .
          </span>
          <span className="payments-methods__payments-item payments-methods__payments-item_3">
            Prequalify now
          </span>
        </p>
      </div>
    </div>
  );
}
