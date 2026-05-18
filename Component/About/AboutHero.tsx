"use client";

import { useEffect, useState } from "react";

export default function AboutHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .anim-eyebrow {
          opacity: 0;
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)
            0.1s forwards;
        }

        .anim-heading-1 {
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1)
            0.3s forwards;
        }

        .anim-heading-2 {
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1)
            0.48s forwards;
        }

        .anim-body {
          opacity: 0;
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)
            0.65s forwards;
        }

        .anim-button {
          opacity: 0;
          animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1)
            0.82s forwards;
        }
      `}</style>

      <section
        className="relative overflow-hidden"
        style={{
        backgroundColor: "#f4e4be",
          backgroundImage: "url('AH2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-5 py-28 sm:px-6 md:px-8 h-[95vh] lg:px-12">
          
          {/* Left Content */}
          <div className="w-full max-w-[560px]">
            
            {/* Eyebrow */}
            <span
              className={`mb-3 block italic tracking-[3px] text-black/50 ${
                mounted
                  ? "anim-eyebrow"
                  : "opacity-0"
              }`}
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: "12px",
              }}
            >
              ABOUT LILAC BEAUTY
            </span>

            {/* Heading */}
            <h1
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
              className="leading-[1.05] text-black text-[36px] sm:text-[46px] md:text-[52px] lg:text-[58px]"
            >
              <span
                className={`block ${
                  mounted
                    ? "anim-heading-1"
                    : "opacity-0"
                }`}
              >
                Elevate your
              </span>

              <span
                className={`block italic text-[#c9804d] ${
                  mounted
                    ? "anim-heading-2"
                    : "opacity-0"
                }`}
              >
                skincare ritual
              </span>
            </h1>

            {/* Body */}
            <p
              className={`mt-4 max-w-[420px] leading-7 text-black/55 sm:leading-8 ${
                mounted
                  ? "anim-body"
                  : "opacity-0"
              }`}
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              Discover luxurious skincare essentials
              crafted with premium ingredients,
              timeless elegance, and nourishing
              formulas designed to bring glow,
              softness, and confidence into your
              daily beauty ritual.
            </p>

            {/* Button */}
            <div
              className={`mt-7 ${
                mounted
                  ? "anim-button"
                  : "opacity-0"
              }`}
            >
              <button
                className="group relative overflow-hidden border border-black/20 bg-[#f4e4be] px-6 py-3 text-black transition duration-500 hover:text-white sm:px-7"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                }}
              >
                <span className="relative z-10 italic">
                  Discover More
                </span>

                <span className="absolute inset-0 translate-y-full bg-black transition duration-500 group-hover:translate-y-0" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}