import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

import youtubeicon from '@/base/icon-youtube-alt.svg';

import ReactPlayer from 'react-player'
import classNames from 'classnames';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useMediaQuery } from '@/hooks/useMediaQuery';

const videosArray = [
  {
    videoSrc: 'https://www.youtube.com/watch?v=YZHyo01Dvfc',
  },
  {
    videoSrc: 'https://www.youtube.com/watch?v=9Q30G7JxCAg',
  },
  {
    videoSrc: 'https://www.youtube.com/watch?v=M-N4lGuuU8k',
  },
  {
    videoSrc: 'https://www.youtube.com/watch?v=8L32WAh5hao',
  }
]

export default function Videos({ customClassNames, title = "Videos" }) {

  let mediaQuery = useMediaQuery('(max-width: 768px)');

  const PlayIcon = ({ alt }) => {
    return (
      <button className='videos__btn-action'><Image alt={alt} src={youtubeicon} /></button>
    )
  }

  return (
    <div className={classNames('videos', classNames(customClassNames))}>
      <div className="container videos__container">
        <p className='title videos__title'>{title}</p>
        <Swiper
          className="videos__swiper"
          modules={[FreeMode, Pagination]}
          slidesPerView="auto"
          freeMode={true}
          loop={false}
          centeredSlides={false}
          allowTouchMove={true}
          pagination={{
            clickable: true,
            el: '.videos__pagination'
          }}
        >
          {videosArray.map((video, indx) => {
            return (
              <SwiperSlide
                key={indx}
                className="videos__item">
                <ReactPlayer
                  controls={true}
                  width={!mediaQuery ? 472 : 345}
                  height={!mediaQuery ? 278 : 203}
                  light={true}
                  playIcon={<PlayIcon alt={`Tap to play the video number ${indx}`} />}
                  url={video.videoSrc}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className="videos__pagination"></div>
      </div>
    </div>
  )
}
