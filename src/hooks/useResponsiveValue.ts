import { useEffect, useState } from "react";

const useResponsiveValue = (disable : boolean) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window?.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isTablet = disable ? false : (width <= 991 && width > 767) ;
  const isMobile = disable ? false : width <= 767;
  const isDesktop = disable ? false : width > 991;

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useResponsiveValue;
