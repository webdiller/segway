import Image from 'next/image';

import feature_1 from '@/base/feature-1.svg';
import feature_2 from '@/base/feature-2.svg';
import feature_3 from '@/base/feature-3.svg';
import feature_4 from '@/base/feature-4.svg';
import feature_5 from '@/base/feature-5.svg';
import feature_6 from '@/base/feature-6.svg';
import feature_7 from '@/base/feature-7.svg';
import feature_8 from '@/base/feature-8.svg';

export default function Features({title, customClass}) {
  return (
    <div className={customClass ? `features features_${customClass}` : 'features'}>
      <div className="container features__container">
        <p className="title features__title">{title}</p>

        <div className="features__items">
          {/* 1 */}
          <div className="features__item features__item_tires">
            <div className="features__item-img-wrapper">
              <Image objectFit="contain" className="features__item-img" src={feature_1} alt="feature" layout="fill" />
            </div>
            <p className="features__item-title">10</p>
            <p className="features__item-description">Pneumatic Tires</p>
          </div>

          {/* 2 */}
          <div className="features__item features__item_led">
            <div className="features__item-img-wrapper">
              <Image objectFit="contain" className="features__item-img" src={feature_2} alt="feature" layout="fill" />
            </div>
            <p className="features__item-title">LED</p>
            <p className="features__item-description">Front LED Lights</p>
          </div>

          {/* 3 */}
          <div className="features__item features__item_speed">
            <div className="features__item-img-wrapper">
              <Image objectFit="contain" className="features__item-img" src={feature_3} alt="feature" layout="fill" />
            </div>
            <p className="features__item-title">18.6 mph</p>
            <p className="features__item-description">Max Speed</p>
          </div>

          {/* 4 */}
          <div className="features__item features__item_range">
            <div className="features__item-img-wrapper">
              <Image objectFit="contain" className="features__item-img" src={feature_4} alt="feature" layout="fill" />
            </div>
            <p className="features__item-title">40.4 Miles</p>
            <p className="features__item-description">Max Range</p>
          </div>

          {/* 5 */}
          <div className="features__item features__item_grade">
            <div className="features__item-img-wrapper">
              <Image objectFit="contain" className="features__item-img" src={feature_5} alt="feature" layout="fill" />
            </div>
            <p className="features__item-title">20%</p>
            <p className="features__item-description">Hill Grade</p>
          </div>

          {/* 6 */}
          <div className="features__item features__item_water">
            <div className="features__item-img-wrapper">
              <Image objectFit="contain" className="features__item-img" src={feature_6} alt="feature" layout="fill" />
            </div>
            <p className="features__item-title">IPX5</p>
            <p className="features__item-description">Water-Resistant</p>
          </div>

          {/* 7 */}
          <div className="features__item features__item_charge">
            <div className="features__item-img-wrapper">
              <Image objectFit="contain" className="features__item-img" src={feature_7} alt="feature" layout="fill" />
            </div>
            <p className="features__item-title">6H</p>
            <p className="features__item-description">Fast Charging</p>
          </div>

          {/* 8 */}
          <div className="features__item features__item_battery">
            <div className="features__item-img-wrapper">
              <Image objectFit="contain" className="features__item-img" src={feature_8} alt="feature" layout="fill" />
            </div>
            <p className="features__item-title">551Wh</p>
            <p className="features__item-description">Battery</p>
          </div>
        </div>
      </div>
    </div>
  );
}
