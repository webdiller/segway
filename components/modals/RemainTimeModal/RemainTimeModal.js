/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import bgImage from "../../../public/remain-time-modal-img.png";

export default function RemainTimeModal() {
  const [activeModal, setActiveModal] = useState(false);
  const setActiveModalHandler = () => setActiveModal((prev) => !prev);

  return (
    <div
      className={activeModal ? "remain-time-modal active" : "remain-time-modal"}
    >
      <div className="remain-time-modal__wrapper">
        <button
          onClick={setActiveModalHandler}
          className="remain-time-modal__close-btn"
        >
          <img
            className="remain-time-modal__close-btn-icon remain-time-modal__close-btn-icon_desktop"
            src="./icon-close-white.svg"
            alt="icon-close"
            width="34"
            height="34"
            loading="lazy"
          />
          <img
            className="remain-time-modal__close-btn-icon remain-time-modal__close-btn-icon_mobile"
            src="./icon-close.svg"
            alt="icon-close"
            width="34"
            height="34"
            loading="lazy"
          />
        </button>
        <div className="remain-time-modal__bg-wrapper">
          <Image src={bgImage} alt="Segway protective gear set as a gift" />
        </div>
        <div className="remain-time-modal__content">
          <p className="title remain-time-modal__title">
            Segway protective gear set as a gift
          </p>
          <p className="text remain-time-modal__description">
            Only until December 12
          </p>
        </div>
        <button className="ui-btn remain-time-modal__btn">
          <span>Order now</span>
        </button>
      </div>
    </div>
  );
}
