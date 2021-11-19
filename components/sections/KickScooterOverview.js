import Image from "next/image";

export default function KickScooterOverview({ isMobile }) {
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

        {isMobile ? (
          <div className="kick-scooter-overview__img-wrapper">
            <Image
              className="kick-scooter-overview__img"
              src="/kick-scooter-overview-desktop.jpg"
              alt="KickScooter overview SEGWAY Ninebot Kickscooter MAX"
              width={958}
              height={672}
              quality={50}
              objectFit="contain"
            />
          </div>
        ) : (
          <div className="kick-scooter-overview__img-wrapper">
            <Image
              className="kick-scooter-overview__img"
              src="/kick-scooter-overview-mobile.jpg"
              alt="KickScooter overview SEGWAY Ninebot Kickscooter MAX"
              width={450}
              height={480}
              quality={50}
              objectFit="contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}
