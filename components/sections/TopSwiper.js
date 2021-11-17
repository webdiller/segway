import Link from "next/link";

/** Свайпер в шапке с самокатами */
export default function TopSwiper() {
  return (
    <div className="top-slider">
      <div className="container top-slider__container">
        <div className="top-slider__items">
          <Link href="#">
            <a className="top-slider__item">
              <img src="" alt="" className="top-slider__img" />
              <p className="top-slider__name">E22</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
