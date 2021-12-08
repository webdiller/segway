/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import {useState} from 'react';
import packingList from '@/base/packing-list.png';

export default function PackingList() {
  const [overlay, setOverlay] = useState(true);
  const removeOverlayForVideo = () => {
    if (overlay) {
      setTimeout(() => {
        setOverlay(false);
      }, 200);
    }
  };

  const YoutubeIframe = () => {
    return <iframe className="packing-list__video-iframe" width="560" height="315" src="https://www.youtube.com/embed/Vq0JCR6_YpA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>;
  };

  return (
    <div className="packing-list">
      <div className="container packing-list__container">
        <p className="title packing-list__title packing-list__title_mobile">Packing List</p>

        <div className="packing-list__media">
          <p className="title packing-list__title packing-list__title_desktop">Packing List</p>

          <div onClick={removeOverlayForVideo} className="packing-list__video-wrapper">
            <img className={overlay ? 'packing-list__video-poster' : 'packing-list__video-poster disabled'} alt="YouTube video player" src="https://i.ytimg.com/vi/Vq0JCR6_YpA/hqdefault.jpg" />
            <div className={overlay ? 'packing-list__video-button' : 'packing-list__video-button disabled'}>
              <svg className="packing-list__video-icon" height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                <path
                  className="packing-list__video-icon-main"
                  d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                  fill="#f00"></path>
                <path className="packing-list__video-icon-shape" d="M 45,24 27,14 27,34" fill="#fff"></path>
              </svg>
            </div>

            {!overlay && <YoutubeIframe />}
          </div>
        </div>
        <div className="packing-list__img-wrapper">
          <Image objectFit="contain" src={packingList} alt="Packing List" />
        </div>
      </div>
    </div>
  );
}
