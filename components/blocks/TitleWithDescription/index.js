import classNames from 'classnames';
export default function TitleWithDescription({titleDesktop, titleMobile, textDesktop, textMobile, customClass}) {
  return (
    <div className={classNames('title-with-description', classNames(customClass))}>
      <div className="title-with-description__container">
        <p className="title title-with-description__title">
          <span className='hide-991'>{titleDesktop}</span>
          <span className='show-block-991'>{titleMobile}</span>
        </p>
        <p className="text title-with-description__description">
          <span className='hide-991'>{textDesktop}</span>
          <span className='show-block-991'>{textMobile}</span>
        </p>
      </div>
    </div>
  );
}
