import { useEffect, useState } from 'react';

function calculateScrollProgress(): number {
  if (typeof window === 'undefined') {
    return 0;
  }

  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  if (scrollableHeight <= 0) {
    return 0;
  }

  const progress = (window.scrollY / scrollableHeight) * 100;
  return Math.min(100, Math.max(0, progress));
}

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setProgress(calculateScrollProgress());
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return Math.round(progress);
}
