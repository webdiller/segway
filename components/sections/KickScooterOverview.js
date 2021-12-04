/* eslint-disable @next/next/no-img-element */
import kickScooterOverview from "../../public/kick-scooter-overview-mobile.jpg";

export default function KickScooterOverview() {
  return (
    <div className="kick-scooter-overview">
      <div className="container kick-scooter-overview__container">

        <p className="title kick-scooter-overview__title">
          <span className="kick-scooter-overview__desktop">
            KickScooter overview SEGWAY Ninebot Kickscooter MAX
          </span>
          <span className="kick-scooter-overview__mobile">
            KickScooter overview
          </span>
        </p>
        <p className="kick-scooter-overview__subtitle">SEGWAY Ninebot Kickscooter MAX </p>

        <picture className="kick-scooter-overview__picture">
          <source
            srcSet="/kick-scooter-overview-desktop.webp"
            media="(min-width: 768px)"
          />
          <source
            srcSet="/kick-scooter-overview-desktop.jpg"
            media="(min-width: 768px)"
          />
          <source srcSet="/kick-scooter-overview-mobile.webp" />
          <img
            width="1916"
            height="1122"
            className="kick-scooter-overview__img"
            src={kickScooterOverview}
            alt="KickScooter overview SEGWAY Ninebot Kickscooter MAX"
            loading="lazy"
          />
        </picture>

      </div>
    </div>
  );
}
