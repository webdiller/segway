import Image from "next/image";
import { useRef, useState } from "react";
import packingList from "../../public/packing-list.png";

export default function PackingList() {
  const [overlay, setOverlay] = useState(true);

  const removeOverlayForVideo = () => {
    if (overlay) {
      setTimeout(() => {
        setOverlay(false);
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

          <div onClick={removeOverlayForVideo} className={overlay ? "packing-list__video-wrapper disabled" : "packing-list__video-wrapper"}>
            <iframe
            className="packing-list__iframe"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Vq0JCR6_YpA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="packing-list__img-wrapper">
          <Image objectFit="contain" src={packingList} alt="Packing List" />
        </div>
      </div>
    </div>
  );
}
