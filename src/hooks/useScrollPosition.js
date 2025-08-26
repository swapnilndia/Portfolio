import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollY: 0,
    isScrollingUp: false,
    headerVisible: true,
  });

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const updateScrollPosition = () => {
      const scrollY = window.scrollY;
      const isScrollingUp = scrollY < lastScrollY;
      const headerVisible = scrollY < 100 || isScrollingUp;

      setScrollPosition({
        scrollY,
        isScrollingUp,
        headerVisible,
      });

      lastScrollY = scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    // Only add event listener on client side
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Set initial position
      updateScrollPosition();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
