import { useState } from "react";

/**
 * 
 * @param {object} data 
 * @returns tabs, settabsHandler
 */
function useToggle(data = { tab1: false, tab2: false, tab3: false }) {
  const [tabs, setTabs] = useState(data);

  const setTabsHandler = (name) => {
    setTabs({
      ...data,
      [name]: tabs[name] === true ? false : true,
    });
  };

  return { tabs, setTabsHandler };
}
export default useToggle;
