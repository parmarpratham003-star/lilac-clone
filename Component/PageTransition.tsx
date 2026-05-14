"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const active = document.body.classList.contains(
      "page-transition-active"
    );

    if (active) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);

        document.body.classList.remove(
          "page-transition-active"
        );
      }, 2200);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <div
      className={`
        fixed inset-0 z-[99999]
        pointer-events-none overflow-hidden
        ${
          loading
            ? "opacity-100"
            : "opacity-0"
        }
        transition-opacity duration-500
      `}
    >
      {/* Expanding Circle */}
      <div
        className={`
          absolute left-1/2 top-1/2
          h-[240vmax] w-[240vmax]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-[#f4e4be]
          transition-all duration-[2200ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            loading
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }
        `}
      />

      {/* Content */}
      <div
        className={`
          absolute inset-0
          flex items-center justify-center
          px-5 text-center
          transition-opacity duration-1000
          ${
            loading
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">

          {/* Small Text */}
          <p
            className={`
              mb-4 tracking-[6px]
              text-black/35
              transition-all duration-[1400ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              sm:mb-5 sm:tracking-[10px]
              ${
                loading
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-14 opacity-0"
              }
            `}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "10px",
            }}
          >
            LUXURY BEAUTY CARE
          </p>

          {/* Main Logo */}
          <div className="relative overflow-hidden">

            {/* Stroke Text */}
            <h1
              className={`
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                text-[52px] leading-none
                text-transparent
                transition-all duration-[1800ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                [-webkit-text-stroke:1px_rgba(0,0,0,0.25)]
                sm:text-[75px]
                lg:text-[100px]
                ${
                  loading
                    ? "scale-100 opacity-100 tracking-[6px]"
                    : "scale-[1.6] opacity-0 tracking-[24px]"
                }
              `}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
              Lilac
            </h1>

            {/* Fill Text */}
            <h1
              className={`
                relative z-10
                text-[52px] leading-none text-black
                transition-all duration-[1800ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                sm:text-[75px]
                lg:text-[100px]
                ${
                  loading
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[120px] opacity-0"
                }
              `}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
              Lilac
            </h1>
          </div>

          {/* Bottom Line */}
          <div
            className={`
              mx-auto mt-6 h-[1px]
              bg-[#c9804d]
              transition-all duration-[2000ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              sm:mt-8
              ${
                loading
                  ? "w-[120px] opacity-100 sm:w-[180px]"
                  : "w-0 opacity-0"
              }
            `}
          />
        </div>
      </div>
    </div>
  );
}