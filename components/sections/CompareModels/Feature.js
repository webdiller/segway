import Image from 'next/image';
import React from 'react';
import styles from './Feature.module.scss';

export default function Feature({title, value, slug, iconSrc}) {
  return (
    <div data-type="characteristic-item" data-id={slug} className={styles.item}>
      <div className={styles.row}>
        <div className={styles.icon}>
          <Image width={16} height={16} src={iconSrc} alt={`${title} - ${value}`} layout="responsive"/>
        </div>
        <p className={styles.key}>{title}</p>
      </div>
      <div className={styles.row}>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
}
