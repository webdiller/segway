import Image from "next/image";

export default function OneStep() {
  return (
    <div className="one-step">
      <div className="container one-step__container">
        <p className="title title_fz-20 one-step__title">One-step Folding Mechanism</p>
        <p className="text text_300-on-mobile one-step__text">
          Ninebot KickScooter MAX can be easily folded and carried around in 3
          seconds.
        </p>

        <div className="one-step__img-wrapper">
          <Image
            className="one-step__img"
            src="/one-step.png"
            alt="One-step Folding Mechanism"
            width={840}
            height={388}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
