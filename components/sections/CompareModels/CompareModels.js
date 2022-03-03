import useResize from '@/hooks/useResize';
import {useEffect, useRef} from 'react';
import styles from './CompareModels.module.scss';

export default function CompareModels({title = 'compare specifications', description = 'Add model to compare', children}) {
  const containerRef = useRef();
  const {width, setRef} = useResize();
  useEffect(() => {
    setRef(containerRef.current)
  }, [setRef])
  
  return (
    <div className={styles.item}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.top}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.items}>{children}</div>
      </div>
    </div>
  );
}
