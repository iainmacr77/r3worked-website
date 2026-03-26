"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type BrowserPreviewFrameProps = {
  title: string;
  url: string;
  children: ReactNode;
  footerOverlay?: ReactNode;
  className?: string;
  browserWidth?: number;
  browserHeight?: number;
  chromeHeight?: number;
};

export function BrowserPreviewFrame({
  title,
  url,
  children,
  footerOverlay,
  className,
  browserWidth = 1680,
  browserHeight = 720,
  chromeHeight = 48,
}: BrowserPreviewFrameProps) {
  const [containerRef, size] = useMeasuredElement<HTMLDivElement>();
  const scale =
    size.width > 0 && size.height > 0
      ? Math.min(size.width / browserWidth, size.height / browserHeight)
      : 1;
  const viewportHeight = browserHeight - chromeHeight;

  return (
    <div className={cn("absolute inset-0", className)}>
      <div ref={containerRef} className="relative h-full w-full overflow-hidden">
        <div
          className="absolute left-1/2 top-0"
          style={{
            width: browserWidth,
            height: browserHeight,
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          <div className="h-full overflow-hidden bg-white">
            <div className="flex h-12 items-center gap-4 border-b border-[#161616]/8 bg-white/95 px-5">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              </div>

              <div className="flex min-w-0 flex-1 items-center justify-center">
                <div className="flex min-w-[36rem] max-w-[48rem] items-center gap-3 rounded-full border border-[#161616]/8 bg-[#F8FAFC] px-4 py-2 text-[13px] text-[#2A2A2A]/60">
                  <span className="truncate font-medium text-[#161616]/70">{title}</span>
                  <span className="text-[#161616]/25">•</span>
                  <span className="truncate">{url}</span>
                </div>
              </div>
            </div>

            <div
              className="relative overflow-hidden bg-white"
              style={{ height: viewportHeight }}
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {children}
              </div>
            </div>
          </div>
        </div>

        {footerOverlay}
      </div>
    </div>
  );
}

function useMeasuredElement<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const updateSize = () => {
      setSize({
        width: element.clientWidth,
        height: element.clientHeight,
      });
    };

    updateSize();

    const observer = new ResizeObserver(() => {
      updateSize();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, size] as const;
}
