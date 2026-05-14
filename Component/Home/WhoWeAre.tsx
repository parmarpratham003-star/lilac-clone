"use client";

import Image from "next/image";
import { Leaf, FlaskConical, Sparkles } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Premium Natural Ingredients",
    desc: "Morbi pellentesque sem ac nulla molestie euismod.",
    delay: "delay-[700ms]",
    iconDelay: "delay-[800ms]",
  },
  {
    icon: FlaskConical,
    title: "High-quality Raw Materials",
    desc: "Gorbi pellentesque sem ac nulla molestie euismod.",
    delay: "delay-[880ms]",
    iconDelay: "delay-[980ms]",
  },
  {
    icon: Sparkles,
    title: "End-to-end Beauty Solution",
    desc: "Duis eleifend ipsum a justo vehicula, ut vestibulum sem volutpat. Donec at aliquam purus. Mauris.",
    delay: "delay-[1060ms]",
    iconDelay: "delay-[1160ms]",
  },
];

export default function WhoWeAre() {
  return (
    <section className="bg-[#f7f3ee] py-16 sm:py-20 lg:py-20    overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-stretch">

          {/* ── Left Content ── */}
          <div className="flex flex-col justify-between py-0 lg:py-8">

            {/* Top block */}
            <div>
              {/* Eyebrow */}
              <span
                className="mb-3 block italic tracking-[3px] text-black/50 animate-fade-up"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  animationDelay: "50ms",
                  animationFillMode: "both",
                }}
              >
                WHO WE ARE
              </span>

              {/* Heading */}
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                className="text-[36px] leading-[1.05] text-black sm:text-[48px] lg:text-[58px]"
              >
                <span
                  className="block animate-fade-up"
                  style={{ animationDelay: "180ms", animationFillMode: "both" }}
                >
                  Best Selling
                </span>
                <span
                  className="block italic text-[#c9804d] animate-fade-up"
                  style={{ animationDelay: "300ms", animationFillMode: "both" }}
                >
                  Aesthetician
                </span>
                <span
                  className="block animate-fade-up"
                  style={{ animationDelay: "420ms", animationFillMode: "both" }}
                >
                  Skincare Brands
                </span>
              </h2>

              {/* Description */}
              <p
                className="mt-5 max-w-[500px] leading-7 text-black/55 animate-fade-up"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  animationDelay: "560ms",
                  animationFillMode: "both",
                }}
              >
                Nullam euismod purus quis blandit eleifend. Nullam egestas, diam
                ut ornare ultrices, nibh metus feugiat ante, id scelerisque augue
                est.
              </p>
            </div>

            {/* Features */}
            <div className="mt-10 space-y-7">
              {features.map(({ icon: Icon, title, desc, delay, iconDelay }) => (
                <div
                  key={title}
                  className={`flex gap-5 items-start animate-slide-left ${delay}`}
                  style={{ animationFillMode: "both" }}
                >
                  {/* Flip Icon Wrapper */}
                  <div className="group flex-shrink-0 [perspective:400px]">
                    <div
                      className="
                        relative w-14 h-14
                        transition-transform duration-700 ease-in-out
                        [transform-style:preserve-3d]
                        group-hover:[transform:rotateY(180deg)]
                      "
                    >
                      {/* Front face */}
                      <div
                        className="
                          absolute inset-0 flex items-center justify-center
                          rounded-full bg-[#f4e4be] text-[#c9804d]
                          [backface-visibility:hidden]
                        "
                      >
                        <Icon size={26} strokeWidth={1.8} />
                      </div>

                      {/* Back face */}
                      <div
                        className="
                          absolute inset-0 flex items-center justify-center
                          rounded-full bg-[#c9804d] text-[#f4e4be]
                          [backface-visibility:hidden]
                          [transform:rotateY(180deg)]
                        "
                      >
                        <Icon size={26} strokeWidth={1.8} />
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3
                      className="text-[22px] sm:text-[24px] text-black"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 500,
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      className="mt-1 text-black/55 max-w-[420px]"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "15px",
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div
              className="mt-10 animate-fade-up"
              style={{ animationDelay: "1200ms", animationFillMode: "both" }}
            >
              <button
                className="
                  group relative overflow-hidden
                  border border-black/20 bg-[#f4e4be]
                  px-7 py-3 text-black
                  transition-colors duration-500 hover:text-white
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                }}
              >
                <span className="relative z-10 italic">Explore Now</span>
                <span className="absolute inset-0 translate-y-full bg-black transition-transform duration-500 group-hover:translate-y-0" />
              </button>
            </div>
          </div>

          {/* ── Right Image ── */}
          <div
            className="
              w-full overflow-hidden
              h-[300px] sm:h-[400px]  lg:min-h-[750px]
              animate-scale-in
            "
            style={{ animationDelay: "200ms", animationFillMode: "both" }}
          >
            <Image
              src="/Who.png"
              alt="Beauty Girl"
              width={500}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>

        </div>
      </div>

      {/* ── Custom animation keyframes via <style> tag ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(1.05); }
          to   { opacity: 1; transform: scale(1); }
        }

        .animate-fade-up   { animation: fadeUp   0.7s ease both; }
        .animate-slide-left{ animation: slideLeft 0.65s ease both; }
        .animate-scale-in  { animation: scaleIn  1.1s ease both; }
      `}</style>
    </section>
  );
}