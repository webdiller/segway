import Image from "next/image";

export default function BuildInFront() {
  return (
    <div className="build-in-front">
      <div className="build-in-front__circle-img-wrapper">
        <Image
          className="build-in-front__circle-img"
          src="/shine-circle.png"
          alt="shine-circle"
          width={479}
          height={547}
        />
      </div>
      <div className="build-in-front__img-wrapper">
        <Image
          className="build-in-front__img"
          src="/build-in-front.png"
          alt="Smart battery Management system (Smart-BMS)"
          width={720}
          height={547}
        />
      </div>

      <div className="container build-in-front__container">
        <div className="build-in-front__content">
          <p className="title title_white build-in-front__title">
            Built-In Front LED Light
          </p>
          <p className="text text_white build-in-front__text">
            Front-facing lights are designed with 2.5w high-brightness LED light
            to illuminate the path ahead of you and increase your visibility to
            others around you.
          </p>

          <p className="text text_grey build-in-front__text">
            *Disclaimer: for your safety, please try not to ride at night
          </p>
        </div>
      </div>
    </div>
  );
}
