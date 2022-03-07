import { useEffect, useState } from "react";

// get window screen size / inner width
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleSet = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    handleSet();
    window.addEventListener("resize", handleSet);

    return () => window.removeEventListener("resize", handleSet);
  }, []);

  return screenSize;
};

export default useScreenSize;
