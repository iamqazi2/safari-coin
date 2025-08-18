"use client";

import { useEffect, useState, CSSProperties } from "react";

interface Star {
  id: number;
  size: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
  randX: number;
  randY: number;
}

export default function Starfield() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars: Star[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2px - 6px
      top: Math.random() * 100, // %
      left: Math.random() * 100, // %
      duration: Math.random() * 1 + 1, // 2s - 5s
      delay: Math.random() * 0.1, // 0 - 3s
      randX: Math.random(),
      randY: Math.random(),
    }));
    setStars(newStars);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(to top, #3EB9CF -20%, black 40%)",
        backdropFilter: "blur(20px)",
      }}
      className="absolute inset-0 overflow-hidden"
    >
      <style jsx>{`
        @keyframes twinkle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(
                calc(-5px + 10px * var(--rand-x)),
                calc(-5px + 10px * var(--rand-y))
              )
              scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
        }
      `}</style>

      {stars.map((star) => {
        const style: CSSProperties = {
          width: star.size,
          height: star.size,
          top: `${star.top}%`,
          left: `${star.left}%`,
          background: "radial-gradient(circle, #3EB9CF, #1B4B63)",
          boxShadow: "0 0 8px 3px rgba(62, 185, 207, 0.9)",
          opacity: 0.9,
          animation: `twinkle ${star.duration}s ease-in-out infinite`,
          animationDelay: `${star.delay}s`,
          ["--rand-x" as unknown as string]: star.randX.toString(),
          ["--rand-y" as unknown as string]: star.randY.toString(),
        };
        return (
          <span key={star.id} className="absolute rounded-full" style={style} />
        );
      })}
    </div>
  );
}
