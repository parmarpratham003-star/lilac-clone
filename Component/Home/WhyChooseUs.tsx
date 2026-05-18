"use client";

import { useEffect, useState } from "react";
import {
  Sparkles,
  Leaf,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

export default function WhyChooseUs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <Sparkles size={34} strokeWidth={1.2} />,
      title: "Premium Formulas",
      desc: "Crafted with luxurious ingredients that nourish, protect, and enhance your natural beauty.",
    },
    {
      icon: <Leaf size={34} strokeWidth={1.2} />,
      title: "Natural Ingredients",
      desc: "Thoughtfully selected botanical extracts blended for softness, glow, and timeless care.",
    },
    {
      icon: <ShieldCheck size={34} strokeWidth={1.2} />,
      title: "Dermatologically Tested",
      desc: "Every product is carefully tested to ensure gentle, effective, and trusted skincare results.",
    },
    {
      icon: (
        <HeartHandshake
          size={34}
          strokeWidth={1.2}
        />
      ),
      title: "Loved Worldwide",
      desc: "Trusted by thousands who seek elegance, confidence, and premium skincare experiences.",
    },
  ];

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
          animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1)
            0.1s forwards;
        }

        .anim-heading-1 {
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1)
            0.3s forwards;
        }

        .anim-heading-2 {
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1)
            0.48s forwards;
        }

        .anim-body {
          opacity: 0;
          animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1)
            0.65s forwards;
        }

        .anim-card {
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1)
            forwards;
        }

        .anim-button {
          opacity: 0;
          animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1)
            1.1s forwards;
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
          animation: imageZoom 1.8s
            cubic-bezier(0.22,1,0.36,1)
            forwards;
        }
      `}</style>

      <section className="relative overflow-hidden bg-[#f7f3ee] pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-5">
        
        <div className="mx-auto grid max-w-[1400px] items-stretch gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-12">
          
          {/* Left Image */}
          <div
            className={`relative h-full overflow-visible order-1 lg:order-1 ${
              mounted
                ? "anim-body"
                : "opacity-0"
            }`}
          >
            {/* Floating Frame */}
            <div className="absolute -right-5 -top-5 h-full w-full rounded-[40px] border border-[#ead8b8] sm:-right-7 sm:-top-7" />

            {/* Main Image Wrapper */}
            <div className="relative overflow-hidden rounded-[32px] bg-transparent shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
              
             
              {/* Decorative Circle */}
              <div className="absolute bottom-5 right-5 z-20 h-[70px] w-[70px] rounded-full border border-white/40 bg-[#f4e4be]/50 backdrop-blur-md" />

              {/* Image */}
              <div className="overflow-hidden rounded-[32px]">
                <img
                  src="Why.png"
                  alt="Beauty Products"
                  className="anim-image h-[420px] w-full object-cover sm:h-[560px] lg:h-full lg:min-h-[760px]"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex h-full flex-col justify-between order-2 lg:order-2">
            
            {/* Top Content */}
            <div>
              
              {/* Small Text */}
              <span
                className={`mb-3 block tracking-[4px] text-black/55 ${
                  mounted
                    ? "anim-eyebrow"
                    : "opacity-0"
                }`}
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontSize: "12px",
                }}
              >
                WHY CHOOSE US
              </span>

              {/* Heading */}
              <h2
                className="leading-[1.02] text-black text-[36px] sm:text-[50px] lg:text-[60px]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontWeight: 500,
                }}
              >
                <span
                  className={`block ${
                    mounted
                      ? "anim-heading-1"
                      : "opacity-0"
                  }`}
                >
                  Elevating beauty
                </span>

                <span
                  className={`block italic text-[#c9804d] ${
                    mounted
                      ? "anim-heading-2"
                      : "opacity-0"
                  }`}
                >
                  with timeless care
                </span>
              </h2>

              {/* Description */}
              <p
                className={`mt-5 max-w-[540px] leading-7 text-black/55 sm:leading-8 ${
                  mounted
                    ? "anim-body"
                    : "opacity-0"
                }`}
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontSize: "16px",
                }}
              >
                Discover luxurious skincare crafted
                with elegance, innovation, and
                nourishing ingredients designed to
                bring confidence and radiance into
                your everyday ritual.
              </p>
            </div>

            {/* Cards */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`group border border-[#e7d6b4] bg-[#f4e4be] p-5 transition duration-500 hover:border-black/10 hover:bg-white ${
                    mounted
                      ? "anim-card"
                      : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${
                      0.75 + index * 0.12
                    }s`,
                  }}
                >
                  {/* Icon */}
                  <div className="text-white transition duration-500 group-hover:text-[#c9804d] group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="mt-4 text-[24px] leading-none text-black sm:text-[26px]"
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p
                    className="mt-3 leading-7 text-black/55"
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontSize: "15px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div
              className={`mt-8 ${
                mounted
                  ? "anim-button"
                  : "opacity-0"
              }`}
            >
              <button
                className="group relative overflow-hidden border border-black/20 bg-[#f4e4be] px-7 py-3 text-black transition duration-500 hover:text-white"
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