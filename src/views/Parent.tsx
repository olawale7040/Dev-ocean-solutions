import { useCallback, useEffect, useState } from "react";

const init = () => {
  console.log("Initial data");
};

import Child from "./Child";
const Parent = () => {
  const [initLoad, setInitLoad] = useState(false);

  if (!initLoad) {
    init();
  }

  const handleClick = useCallback(() => {}, []);

  useEffect(() => {
    setInitLoad(true);
  }, []);

  return (
    <div>
      <Child handleClick={handleClick} />
    </div>
  );
};

export default Parent;
