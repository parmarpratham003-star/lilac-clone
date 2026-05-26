"use client";

import { useEffect, useState } from "react";

export default function ContactHero() {
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

        @keyframes imageZoom {
          from {
            transform: scale(1.08);
          }

          to {
            transform: scale(1);
          }
        }

        .anim-image {
          animation: imageZoom 2s
            cubic-bezier(0.22,1,0.36,1)
            forwards;
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
      `}</style>

      <section className="relative overflow-hidden bg-[#f4e4be]">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="contact.png"
            alt="Luxury Contact"
            className="anim-image h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto flex h-[600px] max-w-[1400px] items-center px-5 sm:px-6 md:px-8 lg:px-12">

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
              GET IN TOUCH
            </span>

            {/* Heading */}
            <h1
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
              className="leading-[1.05] text-black text-[34px] sm:text-[46px] lg:text-[58px]"
            >
              <span
                className={`block ${
                  mounted
                    ? "anim-heading-1"
                    : "opacity-0"
                }`}
              >
                Let’s create your
              </span>

              <span
                className={`block italic text-[#c9804d] ${
                  mounted
                    ? "anim-heading-2"
                    : "opacity-0"
                }`}
              >
                beauty experience
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
              Connect with us for skincare guidance,
              luxury beauty essentials, and timeless
              self-care experiences crafted to bring
              elegance and confidence into your
              everyday ritual.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}