export default function TitleWithDescription({customClassMain, customCLassContainer, customClassTitle, customClassDescription, titleText, descriptionText}) {
  return (
    <div className={customClassMain ? `title-with-description ${customClassMain}` : `title-with-description`}>
      <div className={customClassMain ? `title-with-description__container ${customCLassContainer}` : `title-with-description__container`}>
        <p className={customClassTitle ? `title title-with-description__title ${customClassTitle}` : `title title-with-description__title`}>{titleText}</p>
        <p className={customClassDescription ? `text title-with-description__description ${customClassDescription}` : `text title-with-description__description`}>{descriptionText}</p>
      </div>
    </div>
  );
}
