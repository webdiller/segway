import InputMask from 'react-input-mask';

export default function UiInput({placeholder = '+1 (___) ___-__-__', customClass, forForm = false, ...props}) {
 
  if (forForm) {
    return <InputMask onClick={(e) => e.target.focus()} onTouchStart={(e) => e.target.focus()} className={customClass ? `ui-input ${customClass}` : 'ui-input'} alwaysShowMask={true} mask="+1\ 999 999 99 99" maskChar="_" />;
  } else {
    return <InputMask className={customClass ? `ui-input ${customClass}` : 'ui-input'} alwaysShowMask={true} mask="+1\ 999 999 99 99" maskChar="_" />;
  }
}
