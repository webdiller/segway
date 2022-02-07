import TitleWithDescription from '@/blocks/TitleWithDescription';
import Image from 'next/image';
import Link from 'next/link';
import exampleImageUser from '@/base/reviews-block-example-image.jpg';
import exampleImageSegway from '@/base/example-item-1.png';

export default function ReviewsBlock() {
  return (
    <div className="reviews-block">
      <div className="container reviews-block__container">
        <TitleWithDescription customClassMain="reviews-block__title-with-description" titleText="REVIEWS" descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis tortor eget nulla cursus sit. Aliquet nibh phasellus arcu in. A amet volutpat cursus hac nunc porttitor tristique id. " />

        <div className="reviews-block__items">
          <div className="reviews-block__item">
            <div className="reviews-block__main-img-wrapper">
              <Image objectFit="contain" src={exampleImageUser} alt="EVA image" quality={50} />
            </div>

            <div className="reviews-block__content">
              <p className="reviews-block__content-title">EVA</p>
              <p className="reviews-block__subtitle">Los Angeles, CA</p>
              <p className="text reviews-block__content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus egestas nibh elit lectus. Tortor elementum velit turpis amet cursus. Dui orci, diam ipsum elit egestas cursus at. Id vitae vestibulum, eget ipsum neque cras sociis. Phasellus aliquet duis etiam bibendum egestas dolor duis nisl nisl.
              </p>
            </div>

            <div className="reviews-block__segway-card">
              <div className="reviews-block__segway-img-wrapper">
                <Image src={exampleImageSegway} alt="KS MAX" quality={50} />
              </div>
              <div className="reviews-block__title-and-link">
                <p className="text text_25 reviews-block__segway-title">
                  <span className="hide-991">Ks max</span>
                  <span className="show-block-991">
                    KICKSCOOTER <br /> MAX
                  </span>
                </p>
                <Link passHref href="#">
                  <a className="text reviews-block__segway-link">Look this</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="reviews-block__item">
            <div className="reviews-block__main-img-wrapper">
              <Image bjectFit="contain" src={exampleImageUser} alt="EVA image" quality={50} />
            </div>

            <div className="reviews-block__content">
              <p className="reviews-block__content-title">EVA</p>
              <p className="reviews-block__subtitle">Los Angeles, CA</p>
              <p className="text reviews-block__content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus egestas nibh elit lectus. Tortor elementum velit turpis amet cursus. Dui orci, diam ipsum elit egestas cursus at. Id vitae vestibulum, eget ipsum neque cras sociis. Phasellus aliquet duis etiam bibendum egestas dolor duis nisl nisl.
              </p>
            </div>

            <div className="reviews-block__segway-card">
              <div className="reviews-block__segway-img-wrapper">
                <Image src={exampleImageSegway} alt="KS MAX" quality={50} />
              </div>
              <div className="reviews-block__title-and-link">
                <p className="text text_25 reviews-block__segway-title">
                  <span className="hide-991">Ks max</span>
                  <span className="show-block-991">
                    KICKSCOOTER <br /> MAX
                  </span>
                </p>
                <Link passHref href="#">
                  <a className="text reviews-block__segway-link">Look this</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="reviews-block__item">
            <div className="reviews-block__main-img-wrapper">
              <Image bjectFit="contain" src={exampleImageUser} alt="EVA image" quality={50} />
            </div>

            <div className="reviews-block__content">
              <p className="reviews-block__content-title">EVA</p>
              <p className="reviews-block__subtitle">Los Angeles, CA</p>
              <p className="text reviews-block__content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus egestas nibh elit lectus. Tortor elementum velit turpis amet cursus. Dui orci, diam ipsum elit egestas cursus at. Id vitae vestibulum, eget ipsum neque cras sociis. Phasellus aliquet duis etiam bibendum egestas dolor duis nisl nisl.
              </p>
            </div>

            <div className="reviews-block__segway-card">
              <div className="reviews-block__segway-img-wrapper">
                <Image src={exampleImageSegway} alt="KS MAX" quality={50} />
              </div>
              <div className="reviews-block__title-and-link">
                <p className="text text_25 reviews-block__segway-title">
                  <span className="hide-991">Ks max</span>
                  <span className="show-block-991">
                    KICKSCOOTER <br /> MAX
                  </span>
                </p>
                <Link passHref href="#">
                  <a className="text reviews-block__segway-link">Look this</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-block__bottom">
          <Link passHref href="#">
            <a className="ui-btn reviews-block__bottom-link">
              <span>See more</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
