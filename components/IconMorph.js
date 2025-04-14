import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function IconMorph() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("monitor");
    };
    sequence();
  }, [controls]);

  return (
    <svg
      viewBox="0 0 100 100"
      width={200}
      height={200}
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto block"
    >
      {/* Screen Frame */}
      <motion.rect
  x="0" // center it upfront
  y="20"
  rx="4"
  ry="4"
  width="60" // match width to x so center is correct
  height="90"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  variants={{
    phone: { x: 30, width: 40, height: 55, rx: 4, ry: 4 },
    monitor: { x: 20, width: 60, height: 40, rx: 4, ry: 4 },
  }}
  initial="phone"
  animate={controls}
  transition={{ duration: 0.6, ease: "easeInOut", delay: 1.5 }}
/>

      {/* Dot → Neck */}
<motion.rect
width="2"
height="6"
rx="1"
ry="1"
fill="currentColor"
variants={{
  phone: { x: 49, y: 65, height: 2 },
  monitor: { x: 49, y: 60, height: 12 },
}}
initial="phone"
animate={controls}
transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
/>

      {/* Base Stand Line */}
      <motion.line
        x1="40"
        x2="60"
        y1="73"
        y2="73"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      />
    </svg>
  );
}
