"use client";

import { useEffect, useState } from "react";
import { Flame, TestTubeDiagonal, Droplets } from "lucide-react";

export default function BeautySection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <Flame size={30} strokeWidth={1.2} />,
      title: "Lightweight Formula",
      desc: "Duis eleifend ipsum a justo vehicula, ut vestibulum sem volutpat. Donec at aliquam purus. Mauris.",
    },
    {
      icon: <TestTubeDiagonal size={30} strokeWidth={1.2} />,
      title: "Hygienically Manufactured",
      desc: "Auis eleifend ipsum a justo vehicula, ut vestibulum sem volutpat. Donec at aliquam purus. Mauris.",
    },
    {
      icon: <Droplets size={30} strokeWidth={1.2} />,
      title: "In-house Quality Control",
      desc: "Fois eleifend ipsum a justo vehicula, ut vestibulum sem volutpat. Donec at aliquam purus. Mauris.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap');

        /* ── Fade up ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-fade {
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* ── Text clip reveal ── */
        @keyframes revealText {
          from { clip-path: inset(0 0 100% 0); opacity: 0; transform: translateY(16px); }
          to   { clip-path: inset(0 0 0% 0);   opacity: 1; transform: translateY(0); }
        }
        .anim-reveal {
          opacity: 0;
          animation: revealText 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* ── Heading shimmer sweep ── */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .heading-shimmer {
          background: linear-gradient(90deg, #000 35%, #c9804d 50%, #000 65%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear 1.2s 1 forwards;
        }
        .heading-shimmer-accent {
          background: linear-gradient(90deg, #c9804d 35%, #f0b97a 50%, #c9804d 65%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear 1.4s 1 forwards;
        }

        /* ── Icon flip on hover ── */
        .icon-wrap {
          perspective: 500px;
          display: inline-flex;
          color: #c9804d;
        }
        .icon-inner {
          display: inline-flex;
          transition: transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-style: preserve-3d;
        }
        .feature-row:hover .icon-inner {
          transform: rotateY(180deg) scale(1.2);
        }

        /* ── Feature title underline on hover ── */
        .feature-title {
          position: relative;
          display: inline-block;
        }
        .feature-title::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c9804d;
          transition: width 0.4s ease;
        }
        .feature-row:hover .feature-title::after { width: 100%; }

        /* ── Button ── */
        .btn-hover-fill {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.2);
          background: #f4e4be;
          padding: 12px 28px;
          color: #000;
          transition: color 0.5s;
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 2px;
          cursor: pointer;
        }
        .btn-hover-fill:hover { color: #fff; }
        .btn-hover-fill .fill-bg {
          position: absolute;
          inset: 0;
          background: #000;
          transform: translateY(100%);
          transition: transform 0.5s;
        }
        .btn-hover-fill:hover .fill-bg { transform: translateY(0); }
        .btn-hover-fill span.label { position: relative; z-index: 1; font-style: italic; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .beauty-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .beauty-left {
            max-width: 100% !important;
          }
          .beauty-image-col {
            min-height: 400px !important;
            max-width: 100% !important;
            align-self: auto !important;
          }
        }
        @media (max-width: 600px) {
          .beauty-section {
            padding: 48px 0 !important;
          }
          .beauty-wrapper {
            padding: 0 20px !important;
          }
          .beauty-image-col {
            min-height: 300px !important;
          }
        }
      `}</style>

      <section
        className="beauty-section"
        style={{
          background: "#f5f1eb",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="beauty-wrapper"
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 48px",
          }}
        >
          <div
            className="beauty-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "center",
              gap: 64,
            }}
          >
            {/* ── LEFT CONTENT ── */}
            <div className="beauty-left" style={{ maxWidth: 560 }}>

              {/* Small label */}
              <span
                className={mounted ? "anim-reveal" : ""}
                style={{
                  display: "block",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 12,
                  letterSpacing: 4,
                  color: "rgba(0,0,0,0.55)",
                  marginBottom: 12,
                  animationDelay: "0.1s",
                  opacity: mounted ? undefined : 0,
                }}
              >
                DISCOVER BEAUTY
              </span>

             {/* Heading */}
              <h2
                className="leading-[1.05] text-black text-[34px] sm:text-[46px] lg:text-[58px]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontWeight: 500,
                }}
              >
                <span
                  className={`block ${
                    mounted
                      ? "anim-fade"
                      : "opacity-0"
                  }`}
                  style={{
                    animationDelay: "0.25s",
                  }}
                >
                  Daily Essentials
                </span>

                <span
                  className={`block italic text-[#c9804d] ${
                    mounted
                      ? "anim-fade"
                      : "opacity-0"
                  }`}
                  style={{
                    animationDelay: "0.4s",
                  }}
                >
                  Makeup Range
                </span>
              </h2>
              {/* Description */}
              <p
                className={mounted ? "anim-reveal" : ""}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 15,
                  lineHeight: 2,
                  color: "rgba(0,0,0,0.55)",
                  maxWidth: 500,
                  marginTop: 20,
                  animationDelay: "0.55s",
                  opacity: mounted ? undefined : 0,
                }}
              >
                Nullam euismod purus quis blandit eleifend. Nullam egestas,
                diam ut ornare ultrices, nibh metus feugiat ante, id
                scelerisque augue est.
              </p>

              {/* Features */}
              <div style={{ marginTop: 48 }}>
                {features.map((item, i) => (
                  <div
                    key={i}
                    className={`feature-row ${mounted ? "anim-fade" : ""}`}
                    style={{
                      display: "flex",
                      gap: 20,
                      marginBottom: i < features.length - 1 ? 40 : 0,
                      animationDelay: `${0.7 + i * 0.15}s`,
                      opacity: mounted ? undefined : 0,
                      cursor: "default",
                    }}
                  >
                    {/* Icon with Y-flip */}
                    <div className="icon-wrap" style={{ marginTop: 4, flexShrink: 0 }}>
                      <div className="icon-inner">
                        {item.icon}
                      </div>
                    </div>

                    {/* Text */}
                    <div>
                      <h3
                        className="feature-title"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 500,
                          fontSize: 22,
                          color: "#000",
                          margin: 0,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 15,
                          lineHeight: 1.9,
                          color: "rgba(0,0,0,0.55)",
                          maxWidth: 430,
                          marginTop: 8,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div
                className={mounted ? "anim-fade" : ""}
                style={{
                  marginTop: 48,
                  animationDelay: "1.2s",
                  opacity: mounted ? undefined : 0,
                }}
              >
                <button className="btn-hover-fill">
                  <span className="fill-bg" />
                  <span className="label">Read More</span>
                </button>
              </div>
            </div>

            {/* ── RIGHT IMAGE ── */}
            <div
              className={`beauty-image-col ${mounted ? "anim-fade" : ""}`}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 620,
                margin: "0 auto",
                alignSelf: "stretch",
                animationDelay: "0.5s",
                opacity: mounted ? undefined : 0,
              }}
            >
              {/* Decorative border frame — full height */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "88%",
                  height: "100%",
                  border: "14px solid #ead8b8",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Image — height 90%, offset from top 10% */}
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "12%",
                  right: 0,
                  height: "90%",
                  overflow: "hidden",
                  zIndex: 1,
                }}
              >
                <img
                  src="https://i.pinimg.com/1200x/c4/af/4f/c4af4f16170b0809afc033bd0077344a.jpg"
                  alt="Beauty Treatment"
                  style={{
                    width: "100%",
                    height: "90%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}