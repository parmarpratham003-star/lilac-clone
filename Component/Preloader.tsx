"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  const text = "Lilac";

  return (
    <div
      className={`
        fixed inset-0 z-[99999]
        flex items-center justify-center
        bg-[#f5f1eb]
        transition-all duration-1000
        ${hide ? "pointer-events-none opacity-0" : "opacity-100"}
      `}
    >
      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('/Hero1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        
        {/* Small Text */}
        <p
          className="animate-fade-up mb-5 tracking-[6px] text-black/45"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "12px",
          }}
        >
          PREMIUM BEAUTY CARE
        </p>

        {/* Animated Logo */}
        <h1
          className="flex items-center justify-center overflow-hidden"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
          }}
        >
          {text.split("").map((letter, index) => (
            <span
              key={index}
              className="animate-letter inline-block text-[70px] leading-none text-black sm:text-[90px]"
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Loading Line */}
        <div className="mx-auto mt-8 h-[1px] w-[160px] overflow-hidden bg-black/10">
          <div className="animate-line h-full bg-[#c9804d]" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes letterReveal {
          0% {
            opacity: 0;
            transform: translateY(120px) rotate(8deg);
            filter: blur(10px);
          }

          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
            filter: blur(0px);
          }
        }

        @keyframes lineLoad {
          from {
            width: 0%;
          }

          to {
            width: 100%;
          }
        }

        .animate-fade-up {
          animation: fadeUp 1s ease forwards;
        }

        .animate-letter {
          opacity: 0;
          animation: letterReveal 1s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .animate-line {
          width: 0%;
          animation: lineLoad 2.2s ease forwards;
        }
      `}</style>
    </div>
  );
}