import {createPortal} from 'react-dom';

export default function ModalWrapper({children, selector="#modal-root", mounted}) {
  return mounted ? createPortal(children, document.querySelector(selector)) : null;
}
