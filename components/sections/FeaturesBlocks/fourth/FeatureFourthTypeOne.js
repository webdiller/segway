import Image from 'next/image';

export default function FeatureFourthTypeOne({title, text, customClass, desktopImage}) {
  return (
    <div className={customClass ? `feature-fourth-type-one feature-fourth-type-one_${customClass}` : 'feature-fourth-type-one'}>
      <div className="container feature-fourth-type-one__container">
        <p className="title title_fz-20 feature-fourth-type-one__title">{title}</p>
        <p className="text text_300-on-mobile feature-fourth-type-one__text">{text}</p>

        <div className="feature-fourth-type-one__img-wrapper">
          <Image quality={100} className="feature-fourth-type-one__img" src={desktopImage} alt={title} layout="responsive" />
        </div>
      </div>
    </div>
  );
}
