import React from "react";

export default function UiInput({placeholder="+7 (___) ___-__-__", customClass}) {
  return (
    <input
      placeholder={placeholder}
      type="text"
      className={customClass ? `ui-input ${customClass}` : "ui-input"}
    />
  );
}
