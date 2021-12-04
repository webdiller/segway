import { useState } from "react";

function useToggle(status = false) {
  const [active, setActive] = useState(status);

  const setActiveHandler = () => setActive((prev) => !prev);

  return { active, setActiveHandler };
}
export default useToggle;
