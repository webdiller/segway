import Image from "next/image";
import { useRef, useState } from "react";

export default function PackingList() {
  const [videoSrc, setVideoSrc] = useState("");
  const [overlay, setOverlay] = useState(true);
  const videoRef = useRef(null);

  const removeOverlayForVideo = () => {
    if (overlay) {
      setVideoSrc("/example-video.mp4");
      videoRef.current.load();
      setTimeout(() => {
        setOverlay((prev) => !prev);
      }, 1000);
    }
  };
  
  return (
    <div className="packing-list">
      <div className="container packing-list__container">
        <p className="title packing-list__title packing-list__title_mobile">
          Packing List
        </p>

        <div className="packing-list__media">
          <p className="title packing-list__title packing-list__title_desktop">
            Packing List
          </p>
          <div
            onClick={removeOverlayForVideo}
            className={
              overlay
                ? "packing-list__video-wrapper"
                : "packing-list__video-wrapper disabled"
            }
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              className="packing-list__video"
              controls
              preload="none"
              poster="example-video-placeholder.png"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
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
