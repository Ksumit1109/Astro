import { useState, useEffect } from "react";

export const useIsMobile = (threshold: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < threshold : true
  );

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < threshold);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, [threshold]);

  return isMobile;
};
