export default function useToggleScroll() {
  const htmlTag = document.querySelector('html');
  const setDisabledHandle = (updateClass = false) => {
    return () => {
      updateClass ? htmlTag.classList.add('disabled') : htmlTag.classList.remove('disabled');
    };
  };
  return {
    setDisabledHandle
  };
}
