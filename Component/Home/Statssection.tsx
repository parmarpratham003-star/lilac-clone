"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 4300, sup: "K", label: "Products Sold", decimals: 0 },
  { end: 99.99, sup: "%", label: "Satisfaction Guaranteed", decimals: 2 },
  { end: 42, sup: "K", label: "Customers Satisfied", decimals: 0 },
  { end: 0.01, sup: "%", label: "Defective Returns", decimals: 2 },
];

function useCountUp(
  end: number,
  decimals = 0,
  duration = 2000,
  start = false
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(
        parseFloat((eased * end).toFixed(decimals))
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    requestAnimationFrame(step);
  }, [start, end, decimals, duration]);

  return value;
}

function StatItem({
  end,
  sup,
  label,
  decimals,
  started,
  delay,
}: {
  end: number;
  sup: string;
  label: string;
  decimals: number;
  started: boolean;
  delay: string;
}) {
  const count = useCountUp(
    end,
    decimals,
    2000,
    started
  );

  return (
    <div
      className="relative text-center animate-fade-up"
      style={{
        animationDelay: delay,
        animationFillMode: "both",
      }}
    >
      <h3
        className="text-[48px] leading-none text-black sm:text-[58px]"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
        }}
      >
        {decimals > 0
          ? count.toFixed(decimals)
          : count}

        <span className="align-top text-[26px]">
          {sup}
        </span>
      </h3>

      <p
        className="mt-4 text-[16px] text-black/70"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        {label}
      </p>

      {/* Divider */}
      <span className="absolute right-0 top-1/2 hidden h-[1px] w-14 bg-black/20 lg:block" />
    </div>
  );
}

export default function Statssection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
      style={{
        backgroundImage: "url('/stats.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#f4e9d4]/30" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        
        {/* Heading */}
        <div className="text-center">
          
          <span
            className="mb-3 block italic tracking-[3px] text-black/50 animate-fade-up"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "12px",
              animationDelay: "80ms",
              animationFillMode: "both",
            }}
          >
            BEST IN MARKET
          </span>

          <h2
            className="animate-fade-up text-[36px] leading-none text-black sm:text-[48px] lg:text-[64px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              animationDelay: "220ms",
              animationFillMode: "both",
            }}
          >
            Healthiest Cosmetics
          </h2>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-y-10 text-center sm:mt-16 lg:grid-cols-4">
          
          {stats.map(
            (
              { end, sup, label, decimals },
              i
            ) => (
              <StatItem
                key={label}
                end={end}
                sup={sup}
                label={label}
                decimals={decimals}
                started={started}
                delay={`${400 + i * 150}ms`}
              />
            )
          )}
        </div>

        {/* Bottom Text */}
        <p
          className="animate-fade-up mx-auto mt-10 max-w-[560px] text-center text-[15px] leading-7 text-black/55 sm:mt-14 sm:max-w-[700px] sm:text-[16px] sm:leading-8"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            animationDelay: "1000ms",
            animationFillMode: "both",
          }}
        >
          Fusce id aliquet justo. Etiam aliquet
          elit eleifend quam commodo sagittis.
          Quisque dapibus nulla in blandit
          dictum. Quisque dapibus nulla in
          blandit dictum.
        </p>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(26px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.7s ease both;
        }
      `}</style>
    </section>
  );
}