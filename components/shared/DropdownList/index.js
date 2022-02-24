import React from 'react';
import styles from './index.module.scss';
import {IoMdArrowDropdown} from 'react-icons/io';
import useToggle from '@/hooks/useToggle';
import classNames from 'classnames';
import {useState, useEffect, useRef} from 'react';

export default function DropdownList({customClass, placeholder, data}) {
  const {active, setToggleHandler, setActiveHandler, setInactiveHandler} = useToggle(false);
  const [value, setCurrentValue] = useState();
  const inputRef = useRef()
  const setCurrentValueHandler = (e) => {
    setCurrentValue(e.target.innerText);
  };

  useEffect(() => {
    const onEventHandler = (event) => {
      if (event.keyCode === 27) {
        inputRef.current.blur();
        setInactiveHandler();
      }
    };
    document.addEventListener('keydown', onEventHandler);

    return () => {
      document.removeEventListener('keydown', onEventHandler);
    };
  });

  return (
    <div className={classNames(styles.group, classNames(customClass))}>
      <div className={active ? `${styles.overlay} ${styles.active}` : styles.overlay}>
        <nav className={styles.list}>
          <button onFocus={setActiveHandler} onBlur={setInactiveHandler} type="button" onClick={setCurrentValueHandler} className={styles.listItem}>
            Russia
          </button>
          <button onFocus={setActiveHandler} onBlur={setInactiveHandler} type="button" onClick={setCurrentValueHandler} className={styles.listItem}>
            China
          </button>
          <button onFocus={setActiveHandler} onBlur={setInactiveHandler} type="button" onClick={setCurrentValueHandler} className={styles.listItem}>
            United States
          </button>
          <button onFocus={setActiveHandler} onBlur={setInactiveHandler} type="button" onClick={setCurrentValueHandler} className={styles.listItem}>
            India
          </button>
          <button onFocus={setActiveHandler} onBlur={setInactiveHandler} type="button" onClick={setCurrentValueHandler} className={styles.listItem}>
            Canada
          </button>
          <button onFocus={setActiveHandler} onBlur={setInactiveHandler} type="button" onClick={setCurrentValueHandler} className={styles.listItem}>
            Japan
          </button>
          <button onFocus={setActiveHandler} onBlur={setInactiveHandler} type="button" onClick={setCurrentValueHandler} className={styles.listItem}>
            Vengria
          </button>
        </nav>
      </div>

      <div className={styles.main}>
        <input ref={inputRef} value={value} onFocus={setActiveHandler} onBlur={setInactiveHandler} className={styles.input} type="text" />
        <span className={styles.placeholder}>{placeholder}</span>
        <IoMdArrowDropdown className={styles.icon} />
      </div>
    </div>
  );
}
