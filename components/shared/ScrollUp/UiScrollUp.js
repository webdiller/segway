import Image from 'next/image';
import logoBlack from '@/base/icon-arrow-top.svg';
import {useEffect, useState} from 'react';

export default function UiSrollUp() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScrollEvent = (e) => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', onScrollEvent);
    return () => {
      window.removeEventListener('scroll', onScrollEvent);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0
    });
  };

  return (
    <button onClick={handleClick} className={offset > 600 ? 'ui-scroll-up' : 'ui-scroll-up ui-scroll-up_disabled'}>
      <div className="ui-scroll-up__img-wrapper">
        <Image src={logoBlack} alt="scroll up" objectFit="contain" layout="responsive" />
      </div>
    </button>
  );
}
