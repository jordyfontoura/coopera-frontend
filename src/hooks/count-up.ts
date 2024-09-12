import { useCallback, useEffect, useRef, useState } from "react";

const easeOutExpo = (t: number) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const useScrollTriggeredCountUp = (
  ref: React.RefObject<HTMLElement>,
  end: number,
  duration = 2000,
  maxTimes = Infinity
) => {
  const [count, setCount] = useState(end);
  const isCounting = useRef(false);
  const frameRequestId = useRef<number | null>(null);
  const times = useRef(0);
  const beginAt = useRef(0);

  const frameCallback = useCallback(
    function frame() {
      const elapsed = performance.now() - beginAt.current;

      if (elapsed >= duration) {
        setCount(end);
        isCounting.current = false;
        if (frameRequestId.current)
          cancelAnimationFrame(frameRequestId.current);
        return;
      }

      const progress = easeOutExpo(elapsed / duration);
      setCount(Math.round(end * progress));

      frameRequestId.current = requestAnimationFrame(frameCallback);
    },
    [end, duration]
  );

  const handleScroll = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (
        entry.isIntersecting &&
        !isCounting.current &&
        times.current < maxTimes
      ) {
        isCounting.current = true;
        times.current++;
        beginAt.current = performance.now();

        frameCallback();
      } else {
        if (frameRequestId.current) {
          cancelAnimationFrame(frameRequestId.current);
        }

        isCounting.current = false;
        setCount(end);
      }
    },
    [end, maxTimes, frameCallback]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [handleScroll, ref]);

  return count;
};

export default useScrollTriggeredCountUp;
