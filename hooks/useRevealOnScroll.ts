"use client";

import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveals elements matching [data-reveal] within the container with a
 * smooth staggered rise, fade, and de-blur as they enter the viewport.
 */
export function useRevealOnScroll<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);

  useGSAP(
    () => {
      const targets = containerRef.current?.querySelectorAll("[data-reveal]");
      if (!targets?.length) return;

      gsap.from(targets, {
        opacity: 0,
        y: 24,
        filter: "blur(8px)",
        duration: 1.1,
        ease: "expo.out", // long deceleration tail — much smoother stop
        stagger: 0.1,
        force3D: true, // keep transforms on the GPU
        clearProps: "filter", // drop the blur filter once done
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: containerRef },
  );

  return containerRef as RefObject<T | null>;
}
