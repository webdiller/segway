import { useState, useEffect } from 'react';

export default function useResize() {
  const [width, setWidth] = useState();
  const [ref, setRef] = useState();

  useEffect(() => {
    const calculateHeight = (e) => {
      const rows = ref.querySelectorAll('[data-type=characteristic-item]');
      rows.forEach(row => {
        const elementIdName = row.getAttribute('data-id');
        const elementsWithEqualDataId = ref.querySelectorAll(`[data-id='${elementIdName}']`);

        let heights = [];
        let maxHeight = 0;
        elementsWithEqualDataId.forEach(equalRow => {
          heights.push(equalRow.scrollHeight)
          maxHeight = Math.max(...heights)
        })

        elementsWithEqualDataId.forEach(equalRow => {
          equalRow.style.height = `${maxHeight}px`
        })
      });
    };

    if (ref !== 'undefined' && typeof ref === 'object') {
      calculateHeight()
    }

    window.addEventListener('resize', calculateHeight);
    return () => {
      window.removeEventListener('resize', calculateHeight);
    };
  }, [ref]);

  return { width, setRef };
}

/**
 * Найти список соответствующий полей
 * Найти наибольшую высоту
 * Применить всем полям наибольшую высоту через style
 */