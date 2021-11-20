import Image from "next/image";

export default function PackingList() {
  return (
    <div className="packing-list">
      <div className="container packing-list__container">
        <p className="title packing-list__title packing-list__title_mobile">
          Packing List
        </p>

        <div className="packing-list__video-wrapper">
          <p className="title packing-list__title packing-list__title_desktop">
            Packing List
          </p>
          <video
            autoPlay
            muted
            className="packing-list__video"
            controls
            preload="none"
            poster="example-video-placeholder.png"
          >
            <source src="example-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="packing-list__img-wrapper">
          <Image
            objectFit="contain"
            className="packing-list__img"
            src="/packing-list.png"
            alt="Packing List"
            width={453}
            height={453}
            quality={100}
            layout="responsive"
            placeholder="blur"
            blurDataURL="packing-list-placeholder.png"
          />
        </div>
      </div>
    </div>
  );
}
