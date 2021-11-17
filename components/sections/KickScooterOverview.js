import Image from "next/image";

export default function KickScooterOverview() {
  return (
    <div className="kick-scooter-overview">
      <div className="container kick-scooter-overview__container">
        <p className="title-1 kick-scooter-overview__title">
          <span className="kick-scooter-overview__desktop">
            KickScooter overview SEGWAY Ninebot Kickscooter MAX
          </span>
          <span className="kick-scooter-overview__mobile">
            KickScooter overview
          </span>
        </p>
        <div className="kick-scooter-overview__img-wrapper">
          <Image
            className="kick-scooter-overview__img"
            src="/kick-scooter-overview.png"
            alt="KickScooter overview SEGWAY Ninebot Kickscooter MAX"
            width={3832}
            height={2244}
          />
        </div>
      </div>
    </div>
  );
}
