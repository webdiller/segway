import {useState, useEffect} from 'react';

export default function useResize() {
  const [width, setWidth] = useState();
  const [ref, setRef] = useState();

  useEffect(() => {
    const detectWidth = (e) => {
      const rows = ref.querySelectorAll('[data-type=characteristic-item]');
      console.log(rows);
    };
    window.addEventListener('resize', detectWidth);
    return () => {
      window.removeEventListener('resize', detectWidth);
    };
  }, [ref]);

  return {width, setRef};
}
