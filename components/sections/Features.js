import Image from "next/image";

export default function Features() {
  return (
    <div className="features">
      <div className="features__main-img-wrapper">
        <Image
          objectFit="contain"
          className="features__main-img"
          src="/features__main-img-desktop.jpg"
          alt="feature"
          width={1376}
          height={724}
          quality={50}
          layout="responsive"
        />
      </div>

      <div className="container features__container">
        <p className="title features__title">IMPRESSIVE FEATURES</p>

        <div className="features__items">
          {/* 1 */}
          <div className="features__item features__item_tires">
            <div className="features__item-img-wrapper">
              <Image
                objectFit="contain"
                className="features__item-img"
                src="/feature-1.png"
                alt="feature"
                layout="fill"
              />
            </div>
            <p className="features__item-title">10</p>
            <p className="features__item-description">Pneumatic Tires</p>
          </div>

          {/* 2 */}
          <div className="features__item features__item_led">
            <div className="features__item-img-wrapper">
              <Image
                objectFit="contain"
                className="features__item-img"
                src="/feature-2.png"
                alt="feature"
                layout="fill"
              />
            </div>
            <p className="features__item-title">LED</p>
            <p className="features__item-description">Front LED Lights</p>
          </div>

          {/* 3 */}
          <div className="features__item features__item_speed">
            <div className="features__item-img-wrapper">
              <Image
                objectFit="contain"
                className="features__item-img"
                src="/feature-3.png"
                alt="feature"
                layout="fill"
              />
            </div>
            <p className="features__item-title">18.6 mph</p>
            <p className="features__item-description">Max Speed</p>
          </div>

          {/* 4 */}
          <div className="features__item features__item_range">
            <div className="features__item-img-wrapper">
              <Image
                objectFit="contain"
                className="features__item-img"
                src="/feature-4.png"
                alt="feature"
                layout="fill"
              />
            </div>
            <p className="features__item-title">40.4 Miles</p>
            <p className="features__item-description">Max Range</p>
          </div>

          {/* 5 */}
          <div className="features__item features__item_grade">
            <div className="features__item-img-wrapper">
              <Image
                objectFit="contain"
                className="features__item-img"
                src="/feature-5.png"
                alt="feature"
                layout="fill"
              />
            </div>
            <p className="features__item-title">20%</p>
            <p className="features__item-description">Hill Grade</p>
          </div>

          {/* 6 */}
          <div className="features__item features__item_water">
            <div className="features__item-img-wrapper">
              <Image
                objectFit="contain"
                className="features__item-img"
                src="/feature-6.png"
                alt="feature"
                layout="fill"
              />
            </div>
            <p className="features__item-title">IPX5</p>
            <p className="features__item-description">Water-Resistant</p>
          </div>

          {/* 7 */}
          <div className="features__item features__item_charge">
            <div className="features__item-img-wrapper">
              <Image
                objectFit="contain"
                className="features__item-img"
                src="/feature-7.png"
                alt="feature"
                layout="fill"
              />
            </div>
            <p className="features__item-title">6H</p>
            <p className="features__item-description">Fast Charging</p>
          </div>

          {/* 8 */}
          <div className="features__item features__item_battery">
            <div className="features__item-img-wrapper">
              <Image
                objectFit="contain"
                className="features__item-img"
                src="/feature-8.png"
                alt="feature"
                layout="fill"
              />
            </div>
            <p className="features__item-title">551Wh</p>
            <p className="features__item-description">Battery</p>
          </div>
        </div>
      </div>
    </div>
  );
}
