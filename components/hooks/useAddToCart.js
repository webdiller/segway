import {useState} from 'react';

export default function useAddToCart() {
  const [added, setAdded] = useState(false);
  const setAddedHandler = () => {
    setAdded((prev) => !prev);
    setTimeout(() => {
      setAdded((prev) => !prev);
    }, 3000);
  };
  return {added, setAddedHandler};
}
