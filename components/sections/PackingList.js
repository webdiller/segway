import Image from "next/image";
import { useRef, useState } from "react";
import packingList from "../../public/packing-list.png";

export default function PackingList() {
  const [overlay, setOverlay] = useState(true);
  const videoRef = useRef(null);

  const removeOverlayForVideo = () => {
    if (overlay) {
      setOverlay(false);
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
                ? "packing-list__video-wrapper disabled"
                : "packing-list__video-wrapper"
            }
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              className="packing-list__video"
              controls
            >
              <source src="/example-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="packing-list__img-wrapper">
          <Image
            objectFit="contain"
            src={packingList}
            alt="Packing List"
          />
        </div>
      </div>
    </div>
  );
}
