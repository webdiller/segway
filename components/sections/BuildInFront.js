/* eslint-disable @next/next/no-img-element */
export default function BuildInFront() {
  return (
    <div className="build-in-front">
      <img
        width="455"
        height="455"
        className="build-in-front__shine-left"
        src="/build-in-front-shine.png"
        alt="build-in-front-shine"
        loading="lazy"
      />

      <picture className="build-in-front__picture">
        <source
          srcSet="/build-in-front-desktop.png"
          media="(min-width: 768px)"
        />
        <img
          width="762"
          height="465"
          className="build-in-front__img"
          src="/build-in-front-mobile.png"
          alt="DOWNLOAD manual"
          loading="lazy"
        />
      </picture>
      <div className="container build-in-front__container">
        <div className="build-in-front__content">
          <p className="title title_fz-20 title_white build-in-front__title">
            Built-In Front LED Light
          </p>
          <p className="text text_300-on-mobile text_white build-in-front__text">
            Front-facing lights are designed with 2.5w high-brightness LED light
            to illuminate the path ahead of you and increase your visibility to
            others around you.
          </p>

          <p className="text text_300-on-mobile text_grey build-in-front__text build-in-front__text_last">
            *Disclaimer: for your safety, please try not to ride at night
          </p>
        </div>
      </div>
    </div>
  );
}
