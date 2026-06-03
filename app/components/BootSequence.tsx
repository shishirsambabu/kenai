"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BootSequenceProps {
  onDone: () => void;
}

const LINES = [
  '<b style="color:#00F0FF">kenai</b> // the way of AI  <span style="color:#7a7f93">v1.0</span>',
  '<span style="color:#7a7f93">> mounting knowledge core...</span> <span style="color:#FF2E97">ok</span>',
  '<span style="color:#7a7f93">> loading neon dusk theme...</span> <span style="color:#FF2E97">ok</span>',
  '<span style="color:#7a7f93">> arming learn-by-doing engine...</span> <span style="color:#FF2E97">ok</span>',
  '<b style="color:#E5E7EB">> ready_</b>',
];

export default function BootSequence({ onDone }: BootSequenceProps) {
  const [visible, setVisible] = useState(true);
  const [lines, setLines] = useState<string[]>([]);
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setVisible(false);
    setTimeout(onDone, 600);
  };

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    const next = () => {
      if (i < LINES.length) {
        const idx = i;
        i++;
        setLines((prev) => [...prev, LINES[idx]]);
        timer = setTimeout(next, 360);
      } else {
        timer = setTimeout(finish, 520);
      }
    };

    timer = setTimeout(next, 300);

    const skip = () => finish();
    window.addEventListener("click", skip);
    window.addEventListener("wheel", skip, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", skip);
      window.removeEventListener("wheel", skip);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100000,
            background: "#0A0A12",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          <div style={{ width: "min(560px,86vw)", fontSize: 13, lineHeight: 2 }}>
            <div style={{ color: "#7a7f93", whiteSpace: "pre-wrap" }}>
              {lines.map((l, i) => (
                <div key={i} dangerouslySetInnerHTML={{ __html: l }} />
              ))}
            </div>
            <div
              style={{
                height: 2,
                background: "rgba(255,255,255,0.08)",
                marginTop: 18,
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.9, ease: "easeInOut" }}
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg,#00F0FF,#FF2E97)",
                  boxShadow: "0 0 12px #00F0FF",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
