import React from 'react';

export default function useToggleScroll() {
  const [disabled, setDisabled] = useState(false);
  const setDisabledHandle = () => setDisabled((prev) => !prev);
  return {
    disabled,
    setDisabledHandle
  };
}
