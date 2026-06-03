"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = 0, y = 0, rx = 0, ry = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.left = x + "px";
      dot.style.top = y + "px";
    };

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      rafId = requestAnimationFrame(loop);
    };

    const addHover = () => document.body.classList.add("hovering");
    const removeHover = () => document.body.classList.remove("hovering");

    document.addEventListener("mousemove", onMove);
    loop();

    const targets = document.querySelectorAll("a,button,input,textarea,select");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: "var(--magenta)",
          borderRadius: 1,
          zIndex: 99999,
          pointerEvents: "none",
          transform: "translate(-50%,-50%)",
          boxShadow: "0 0 10px var(--magenta)",
          transition: "width .2s,height .2s",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 30,
          height: 30,
          zIndex: 99998,
          pointerEvents: "none",
          transform: "translate(-50%,-50%)",
          border: "1px solid var(--cyan)",
          clipPath: "polygon(0 0,62% 0,0 62%)",
          filter: "drop-shadow(0 0 6px var(--cyan))",
          transition: "width .25s,height .25s,opacity .25s",
        }}
      />
      <style>{`
        body.hovering .cursor { width: 4px !important; height: 4px !important; }
        body.hovering .cursor-ring { width: 46px !important; height: 46px !important; opacity: 0.9 !important; }
      `}</style>
    </>
  );
}
