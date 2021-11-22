import Image from "next/image";

export default function Regenerative() {
  return (
    <div className="regenerative">
      <div className="container regenerative__container">
        <div className="regenerative__img-wrapper">
          <Image
            className="regenerative__img"
            src="/regenerative-desktop.png"
            alt="Regenerative Brake for Power Recycle"
            placeholder="blur"
            blurDataURL="/regenerative-desktop.png"
            layout="responsive"
            width="895"
            height="547"
            objectFit="contain"
          />
        </div>

        <div className="regenerative__content">
          <p className="title title_white regenerative__title">
            Regenerative Brake for Power Recycle
          </p>
          <p className="text text_white regenerative__text">
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
