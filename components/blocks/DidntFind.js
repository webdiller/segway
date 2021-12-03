/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import bgImage from "../../public/didnt-find-img.png";
import UiInput from "../ui/UiInput";

export default function DidntFind() {
  const [activeModal, setActiveModal] = useState(false);
  const setActiveModalHandler = () => setActiveModal((prev) => !prev);
  return (
    <div className={activeModal ? "didnt-find active" : "didnt-find"}>
      <div className="didnt-find__wrapper">
        <button onClick={setActiveModalHandler} className="didnt-find__close-btn">
          <img
            className="didnt-find__close-btn-icon"
            src="./icon-close-white.svg"
            alt="icon-close"
            width="34"
            height="34"
          />
        </button>
        <div className="didnt-find__bg-wrapper">
          <Image src={bgImage} alt="Не шашли, что искали?" />
        </div>
        <img
          className="didnt-find__question-icon"
          src="./icon-question.svg"
          alt="icon-question"
          width="178"
          height="266"
        />
        <div className="didnt-find__content">
          <p className="title didnt-find__title">Не шашли, что искали?</p>
          <p className="text didnt-find__description">
            оставьте номер телефона, и наш менеджер перезвонит вам через 15
            секунд
          </p>
          <UiInput customClass="didnt-find__input" />
        </div>
        <button className="ui-btn didnt-find__btn">
          <span>ОТПРАВИТЬ</span>
        </button>
      </div>
    </div>
  );
}
