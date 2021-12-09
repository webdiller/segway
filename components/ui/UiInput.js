import React from 'react';
import InputMask from 'react-input-mask';

export default function UiInput({placeholder = '+1 (___) ___-__-__', customClass, forForm = false, ...props}) {
  if (forForm) {
    return <InputMask onClick={(e) => e.target.focus()} onTouchStart={(e) => e.target.focus()} placeholder="+1 (___) ___-__-__" className={customClass ? `ui-input ${customClass}` : 'ui-input'} {...props} mask="+1\ 999 999 99 99" maskChar="_" alwaysShowMask={true} type="text" />;
  } else {
    return <InputMask placeholder="+1 (___) ___-__-__" className={customClass ? `ui-input ${customClass}` : 'ui-input'} {...props} mask="+1\ 999 999 99 99" maskChar="" alwaysShowMask={true} type="text" />;
  }
}
