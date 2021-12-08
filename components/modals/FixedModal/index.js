import Link from 'next/link';

export default function FixedModal({anchor = 'buyItNow'}) {
  return (
    <div className="fixed-modal">
      <Link passHref href={anchor} scroll={false}>
        <a className="fixed-modal__wrapper">
          <span className="fixed-modal__title">
            <span className="fixed-modal__title-name">Add to cart</span>
            <span className="fixed-modal__title-price">$1181</span>
          </span>
          <span className="fixed-modal__description">Free 1 day shipping within California</span>
        </a>
      </Link>
    </div>
  );
}
