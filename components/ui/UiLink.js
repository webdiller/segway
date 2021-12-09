import Link from 'next/link';
import {useRef} from 'react';

export default function UiLink({download = 'false', href = '#', target = '_self', classNameLink, icon, innerText = 'Custom link', unfocusOnClick} = {}) {
  const refElement = useRef(null);
  const clickHandler = () => {
    setTimeout(() => {
      refElement.current.blur();
    }, 500);
  };

  return (
    <Link href={href}>
      <a ref={refElement} onClick={unfocusOnClick && clickHandler} target={target} download={download} className={`ui-btn ${classNameLink}`}>
        <span>
          {innerText} {icon}
        </span>
      </a>
    </Link>
  );
}
