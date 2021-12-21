import {useEffect} from 'react';

export default function UseToggleScroll() {
  /** false - убрать, true - добавить, toggle - toggle */
  const setDisabledHandle = (updateClass = false) => {
    try {
      if (updateClass === false) {
        document.querySelector('html').classList.remove('disabled');
      } else if (updateClass === true) {
        document.querySelector('html').classList.add('disabled');
      } else if (updateClass === 'toggle') {
        document.querySelector('html').classList.toggle('disabled');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    setDisabledHandle
  };
}
