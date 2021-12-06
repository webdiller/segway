import React from 'react';
import InputMask from 'react-input-mask';

export default function UiInput({placeholder = '+7 (___) ___-__-__', customClass, ...props}) {
  return (
    // <input
    //   placeholder={placeholder}
    //   type="text"
    //   className={customClass ? `ui-input ${customClass}` : "ui-input"}
    // />
    <InputMask placeholder="+7 (___) ___-__-__" className={customClass ? `ui-input ${customClass}` : 'ui-input'} {...props} mask="+7\ 999 999 99 99" maskChar="_" alwaysShowMask={true} type="text" />
  );
}
