import styles from './index.module.scss';
import { IoMdArrowDropdown } from 'react-icons/io';

// Список
// import useToggle from '@/hooks/useToggle';

import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

export default function DropdownList({
  customClass,
  topLabel,
  placeholder,
  handler,
  value,
  route,
  readOnly
}) {

  // Список
  // const { active, setActiveHandler, setInactiveHandler } = useToggle(false);
  // const [fetchData, fetchDataSet] = useState([])

  const inputRef = useRef();

  // Отображаем список
  // const setCurrentValueHandler = (item) => {
  //   handler(item)
  //   inputValueSet(item)
  //   setInactiveHandler()
  // };

  const setFocusHandler = () => inputRef.current.focus();

  // Отображаем список
  // const onChangeHandler = (event) => inputValueSet(event.target.value);

  const onChangeHandler = (event) => handler(event.target.value);

  // Отображаем список
  // useEffect(() => {
  //   const onEventHandler = (event) => {
  //     if (event.keyCode === 27) {
  //       inputRef.current.blur();
  //       setInactiveHandler();
  //     }
  //   };
  //   document.addEventListener('keydown', onEventHandler);
  //   return () => {
  //     document.removeEventListener('keydown', onEventHandler);
  //   };
  // });

  // Отображаем список
  // useEffect(() => {
  //   fetch(route)
  //     .then(data => data.json())
  //     .then(data => {
  //       fetchDataSet(data)
  //       console.log(data);
  //     })
  // }, [route])

  return (
    <div className={classNames(styles.group, classNames(customClass))}>

      {/* Отображаем список */}
      {/* <div className={active ? `${styles.overlay} ${styles.active}` : styles.overlay}>
        <nav className={styles.list}>
          {
            fetchData.filter(item => item.toLowerCase().includes(inputValue.toLowerCase()))
              .map((item, indx) => {
                return (
                  <button
                    key={indx}
                    onFocus={setActiveHandler}
                    onBlur={setInactiveHandler}
                    type="button"
                    onClick={() => setCurrentValueHandler(item)}
                    className={styles.listItem}>
                    {item}
                  </button>
                )
              })
          }
        </nav>
      </div> */}

      <div className={styles.main}>
        <input
          readOnly={readOnly}
          defaultValue={value}
          placeholder={placeholder}

          // Список
          // onFocus={setActiveHandler}
          // onBlur={setInactiveHandler}

          onChange={onChangeHandler}
          className={styles.input}
          type="text" />

        {/* Отображаем список */}
        <span className={styles.topLabel}>{topLabel}</span>
        {/* <IoMdArrowDropdown onClick={setFocusHandler} className={styles.icon} /> */}
      </div>
    </div>
  );
}
