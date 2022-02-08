import Image from 'next/image';

export default function Features({features, title, customClass}) {
  return (
    <div className={customClass ? `features features_${customClass}` : 'features'}>
      <div className="container features__container">
        <p className="title features__title">{title}</p>

        <div className="features__items">
          {features.map(({icon, title, description}) => {
            return (
              <div key={title} className="features__item">
                <div className="features__item-img-wrapper">
                  <Image objectFit="contain" className="features__item-img" src={icon} alt={`icon for ${title}`} layout="fill" />
                </div>
                <p className="features__item-title">{title}</p>
                <p className="features__item-description">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
