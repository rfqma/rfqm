import { useState } from "react";

const useHome = () => {
  const [colored, setColored] = useState<boolean>(false);

  return {
    states: {
      colored,
    },
    handlers: {
      setColored,
    },
  };
};

export default useHome;
