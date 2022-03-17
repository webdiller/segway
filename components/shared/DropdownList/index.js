import styles from './index.module.scss';
import { IoMdArrowDropdown } from 'react-icons/io';
import useToggle from '@/hooks/useToggle';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

export default function DropdownList({ customClass, placeholder, data, handler, value }) {

  const dispatch = useDispatch();

  const { active, setToggleHandler, setActiveHandler, setInactiveHandler } = useToggle(false);
  const inputRef = useRef()

  const setCurrentValueHandler = (e) => {
    const value = e.target.innerText;
    dispatch(handler(value))
    setInactiveHandler()
  };

  const setFocusHandler = () => inputRef.current.focus();

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
        <input
          ref={inputRef}
          defaultValue={value}
          onFocus={setActiveHandler}
          onBlur={setInactiveHandler}
          className={styles.input}
          type="text" />
        <span className={styles.placeholder}>{placeholder}</span>
        <IoMdArrowDropdown onClick={setFocusHandler} className={styles.icon} />
      </div>
    </div>
  );
}