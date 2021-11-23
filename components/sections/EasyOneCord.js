/* eslint-disable @next/next/no-img-element */
export default function EasyOneCord() {
  return (
    <div className="easy-one-cord">
      <div className="container easy-one-cord__container">
        <picture className="easy-one-cord__picture">
          <source
            srcSet="/easy-one-cord-desktop.webp"
            media="(min-width: 576px)"
          />
          <source
            srcSet="/easy-one-cord-desktop.png"
            media="(min-width: 576px)"
          />
          <source srcSet="/easy-one-cord-mobile.webp" />
          <img
            width="720"
            height="547"
            className="easy-one-cord__img"
            src="/easy-one-cord-mobile.png"
            alt="Easy One Cord Fast Charging"
            loading="lazy"
          />
        </picture>

        <div className="easy-one-cord__content">
          <p className="title title_fz-20 easy-one-cord__title">
            Easy One Cord Fast Charging
          </p>
          <p className="text easy-one-cord__text">
            The built-in charger lets riders recharge it easily when on the go
            without having to carry along a bulky charging adapter. 3A fast
            charge will give Ninebot KickScooter MAX a full charge in 6 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
