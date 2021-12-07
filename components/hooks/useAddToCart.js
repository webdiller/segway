import React from 'react';

export default function useAddToCart() {
  const [added, setAdded] = useState(false);
  const setAddedHandler = () => {
    setTimeout(() => {
      setAdded((prev) => !prev);
    }, 3000);
  };
  return <div></div>;
}
