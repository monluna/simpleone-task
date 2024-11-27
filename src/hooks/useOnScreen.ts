import { useState, useEffect } from "react";

const useOnScreen = (
  ref: React.MutableRefObject<null>,
  rootMargin: string = "0px"
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    const currentElement = ref?.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  });

  return isVisible;
};

export default useOnScreen;
