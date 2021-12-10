import Link from 'next/link';
import Image from 'next/image';
import logoBlack from '@/base/icon-arrow-top.svg';
import React, {useEffect, useState} from 'react';

export default function UiSrollUp() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
      console.log(offset);
    };
  }, []);

  console.log(offset);
  return (
    <Link href="#__next">
      <a className={offset > 600 ? "ui-scroll-up" : "ui-scroll-up ui-scroll-up_disabled"}>
        <div className="ui-scroll-up__img-wrapper">
          <Image src={logoBlack} alt="scroll up" objectFit="contain" layout="responsive" />
        </div>
      </a>
    </Link>
  );
}
