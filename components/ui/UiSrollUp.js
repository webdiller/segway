import Link from 'next/link';
import Image from 'next/image';
import logoBlack from '@/base/icon-arrow-top.svg';

export default function UiSrollUp() {
  return (
    <Link href="#__next">
      <a className="ui-scroll-up">
        <div className="ui-scroll-up__img-wrapper">
          <Image src={logoBlack} alt="scroll up" objectFit="contain" layout="responsive" />
        </div>
      </a>
    </Link>
  );
}
