import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

export default function AnimatedModalWrapper({ isActive, children, handler }) {

  const elRef = useRef(null);

  const onClickWrapper = (e) => {
    if (e.target === elRef.current) {
      handler()
    }
  };

  const setActiveModalHandler = (e) => {
    handler()
  };

  return (
    <AnimatePresence>
      {isActive && (
        <>
          <motion.div
            initial={false}
            animate={{ zIndex: 1000, backdropFilter: 'blur(5px)' }}
            exit={{ opacity: 0 }}
            onClick={(e) => onClickWrapper(e)}
            ref={elRef}
            className='animated-modal'>
            <motion.div
              animate={{ top: 0, opacity: 1, scale: 1 }}
              initial={{ top: -20, opacity: 0, scale: .9 }}
              exit={{ scale: .9 }}>
              {children}
              {/* <>{React.cloneElement(children, { title: "hello" })}</> */}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}