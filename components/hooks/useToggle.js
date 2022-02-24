import { useState } from "react";

function useToggle(status = false) {
  const [active, setActive] = useState(status);

  const setToggleHandler = () => setActive((prev) => !prev);
  const setActiveHandler = () => setActive(true);
  const setInactiveHandler = () => setActive(false);

  return { active, setToggleHandler, setActiveHandler, setInactiveHandler };
}
export default useToggle;
