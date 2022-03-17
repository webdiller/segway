import Image from 'next/image';
import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));
import { useMediaQuery } from '@/hooks/useMediaQuery';

import styles from './index.module.scss';

export default function MainPageItem({ name, href = '/', hrefLabel = 'SEE MORE', mainImg, hoverImg }) {
  let mediaQuery = useMediaQuery(`(min-width: 991px)`);

  return (
    <div className={styles.categories__item}>
      <div className={styles.categories__content}>
        <p className={styles.categories__name}>{name}</p>
        <Link shallow={false} href={href}><a className={styles.categories__link}>{hrefLabel}</a></Link>
      </div>

      <div className={styles.categories__mainImg}>
        <Image placeholder="blur" position="relative" objectFit={mediaQuery ? 'cover' : 'cover'} src={mainImg} alt={`Background image for ${name}`} />
      </div>
      <div className={styles.categories__hoverImg}>
        <Image placeholder="blur" position="relative" objectFit={mediaQuery ? 'cover' : 'cover'} src={hoverImg} alt={`Background image for ${name}`} />
      </div>
    </div>
  );
}
