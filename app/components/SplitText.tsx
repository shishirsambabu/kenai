// @ts-nocheck

"use client";

import { useRef, CSSProperties } from "react";
import { motion, useInView } from "framer-motion";

interface SplitTextProps {
  text: string;
  style?: CSSProperties;
  className?: string;
  delay?: number;
  tag?: keyof JSX.IntrinsicElements;
  accentWords?: string[];
  accentColor?: string;
}

export default function SplitText({
  text,
  style,
  className,
  delay = 0,
  tag: Tag = "span",
  accentWords = [],
  accentColor = "#00F0FF",
}: SplitTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const words = text.split(" ");

  return (
    <Tag
ref={ref as any} // eslint-disable-line
      className={className}
      style={{ display: "block", ...style }}
    >
      {words.map((word, wi) => {
        const isAccent = accentWords.includes(word.replace(/[.,!?]/g, ""));
        return (
          <span
            key={wi}
            style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em" }}
          >
            <motion.span
              style={{
                display: "inline-block",
                color: isAccent
                  ? accentColor
                  : undefined,
                textShadow: isAccent
                  ? `0 0 22px ${accentColor}88`
                  : undefined,
              }}
              initial={{ y: "110%", opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                delay: delay + wi * 0.05,
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
