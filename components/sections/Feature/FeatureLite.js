import Image from 'next/image';
export default function FeatureLite({title, text, customClass, image}) {
  return (
    <div className={customClass ? `feature-lite feature-lite_${customClass}` : 'feature-lite'}>
      <div className="container feature-lite__container">
        <p className="title title_fz-20 feature-lite__title">{title}</p>
        <p className="text text_300-on-mobile feature-lite__text">{text}</p>

        <div className="feature-lite__img-wrapper">
          <Image quality={100} className="feature-lite__img" src={image} alt={title} layout="responsive" />
        </div>
      </div>
    </div>
  )
}
