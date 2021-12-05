/* eslint-disable @next/next/no-img-element */


export default function Regenerative() {
  return (
    <div className="regenerative">
      <div className="container regenerative__container">

        <picture className="regenerative__picture">
          <source
            srcSet="/regenerative-desktop.webp"
            media="(min-width: 991px)"
          />
          <source
            srcSet="/regenerative-desktop.png"
            media="(min-width: 991px)"
          />
          <source srcSet="/regenerative-mobile.webp" />
          <img
            width="720"
            height="547"
            className="regenerative__img"
            src="/regenerative-mobile.png"
            alt="Regenerative Brake for Power Recycle"
            loading="lazy"
          />
        </picture>

        <div className="regenerative__content">
          <p className="title title_fz-20 title_white regenerative__title">
            Regenerative Brake for Power Recycle
          </p>
          <p className="text text_300-on-mobile text_white regenerative__text">
            The innovative regenerative brake system turns Ninebot KickScooter
            MAX into an electric vehicle powered by electricity and recycled
            energy from riding. Energy will be collected from regenerative
            braking and distributed when you need a boost.
          </p>
        </div>
      </div>
    </div>
  );
}
