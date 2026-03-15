"use client";

import { useEffect, useRef, useState } from "react";

type UseNavbarVisibilityOptions = {
  topOffset?: number;
  directionThreshold?: number;
  hideAfter?: number;
  forceVisible?: boolean;
};

export function useNavbarVisibility({
  topOffset = 24,
  directionThreshold = 18,
  hideAfter = 120,
  forceVisible = false,
}: UseNavbarVisibilityOptions = {}) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollYRef = useRef(0);
  const scrollAccumulatorRef = useRef(0);
  const latestVisibleRef = useRef(true);
  const latestAtTopRef = useRef(true);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const syncVisible = (nextVisible: boolean) => {
      if (latestVisibleRef.current !== nextVisible) {
        latestVisibleRef.current = nextVisible;
        setIsVisible(nextVisible);
      }
    };

    const syncAtTop = (nextAtTop: boolean) => {
      if (latestAtTopRef.current !== nextAtTop) {
        latestAtTopRef.current = nextAtTop;
        setIsAtTop(nextAtTop);
      }
    };

    const update = () => {
      const y = window.scrollY;
      const nextAtTop = y <= topOffset;

      syncAtTop(nextAtTop);

      if (forceVisible) {
        lastScrollYRef.current = y;
        scrollAccumulatorRef.current = 0;
        syncVisible(true);
        return;
      }

      if (nextAtTop) {
        lastScrollYRef.current = y;
        scrollAccumulatorRef.current = 0;
        syncVisible(true);
        return;
      }

      const delta = y - lastScrollYRef.current;
      lastScrollYRef.current = y;

      if (Math.abs(delta) < 2) {
        return;
      }

      const accumulator = scrollAccumulatorRef.current;
      const nextAccumulator =
        accumulator === 0 || Math.sign(accumulator) === Math.sign(delta)
          ? accumulator + delta
          : delta;

      scrollAccumulatorRef.current = nextAccumulator;

      if (nextAccumulator > directionThreshold && y > hideAfter) {
        scrollAccumulatorRef.current = 0;
        syncVisible(false);
      } else if (nextAccumulator < -directionThreshold) {
        scrollAccumulatorRef.current = 0;
        syncVisible(true);
      }
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [directionThreshold, forceVisible, hideAfter, topOffset]);

  return { isVisible, isAtTop };
}
