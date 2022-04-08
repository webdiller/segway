import Image from 'next/image';
import classNames from 'classnames';
import styles from './Model.module.scss';
import { Feature, Price } from '@/sections/CompareModels';

export default function Model({ hideIcons, width, height, model, customClass }) {

  const { imgForCompare, name, characteristics, price } = model;
  
  return (
    <div className={classNames(styles.item, classNames(customClass))}>
      <div className={styles.img}>
        <Image width={width} height={height} objectFit="contain" src={imgForCompare} alt={name} />
      </div>
      <p className={styles.title}>{name}</p>
      <div data-type="characteristic-list" className={styles.features}>
        {characteristics &&
          characteristics.map(({ title, slug, value, iconSrc }) => {
            return <Feature iconSrc={iconSrc} slug={slug} key={slug} title={title} value={value} />;
          })}
      </div>
      <div className={styles.prices}>
        <Price model={model} price={price} />
      </div>
    </div>
  );
}
