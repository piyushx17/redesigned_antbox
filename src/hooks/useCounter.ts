import { useEffect, useRef, useState } from 'react';

interface UseCounterOptions {
  target: number;
  duration?: number;
  suffix?: string;
  threshold?: number;
  decimals?: number;
}

function formatCount(value: number, target: number, decimals?: number): number {
  const precision = decimals ?? (target < 10 ? 1 : 0);
  return Number(value.toFixed(precision));
}

export function useCounter<T extends HTMLElement = HTMLSpanElement>({
  target,
  duration = 1500,
  suffix = '',
  threshold = 0.5,
  decimals,
}: UseCounterOptions) {
  const ref = useRef<T | null>(null);
  const hasAnimatedRef = useRef(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        hasAnimatedRef.current = true;

        let startTime: number | null = null;

        const step = (timestamp: number) => {
          if (startTime === null) {
            startTime = timestamp;
          }

          const progress = Math.min((timestamp - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const nextValue = formatCount(eased * target, target, decimals);

          setCount(nextValue);

          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
        observer.unobserve(element);
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [target, duration, threshold, decimals]);

  return {
    ref,
    count,
    displayValue: `${count}${suffix}`,
  };
}
