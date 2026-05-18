"use client";

import { useEffect, useState } from "react";

const posts = [
  {
    date: "Jun · 04 · 2025",
    title: "Premium feather-light, comfortable lipstick",
    body: "Distinctively reconceptualize resource maximizing methodologies for enterprise strategic theme areas. Energistically revolutionize high…",
    image: "https://i.pinimg.com/736x/b3/8b/89/b38b891c932dc86e5071722af1a72e22.jpg",
  },
  {
    date: "Jun · 12 · 2023",
    title: "Long-lasting & quick dry nail polish set",
    body: "Distinctively reconceptualize resource maximizing methodologies for enterprise strategic theme areas. Energistically revolutionize high…",
    image: "Blog2.png",
  },
  {
    date: "Jun · 12 · 2023",
    title: "Wrinkles & acne free best night serum",
    body: "Distinctively reconceptualize resource maximizing methodologies for enterprise strategic theme areas. Energistically revolutionize high…",
    image: "Blog3.png",
  },
];

export default function NewsBlogsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .nb-anim-eyebrow       { opacity:0; animation: fadeUp  0.8s cubic-bezier(0.22,1,0.36,1) 0.10s forwards; }
        .nb-anim-title         { opacity:0; animation: fadeUp  0.9s cubic-bezier(0.22,1,0.36,1) 0.28s forwards; }

        .nb-anim-card-0        { opacity:0; animation: fadeUp  0.8s cubic-bezier(0.22,1,0.36,1) 0.45s forwards; }
        .nb-anim-card-1        { opacity:0; animation: fadeUp  0.8s cubic-bezier(0.22,1,0.36,1) 0.60s forwards; }
        .nb-anim-card-2        { opacity:0; animation: fadeUp  0.8s cubic-bezier(0.22,1,0.36,1) 0.75s forwards; }

        .nb-anim-card-title-0  { opacity:0; animation: fadeUp  0.7s cubic-bezier(0.22,1,0.36,1) 0.55s forwards; }
        .nb-anim-card-title-1  { opacity:0; animation: fadeUp  0.7s cubic-bezier(0.22,1,0.36,1) 0.70s forwards; }
        .nb-anim-card-title-2  { opacity:0; animation: fadeUp  0.7s cubic-bezier(0.22,1,0.36,1) 0.85s forwards; }

        .nb-anim-card-body-0   { opacity:0; animation: fadeIn  0.7s cubic-bezier(0.22,1,0.36,1) 0.65s forwards; }
        .nb-anim-card-body-1   { opacity:0; animation: fadeIn  0.7s cubic-bezier(0.22,1,0.36,1) 0.80s forwards; }
        .nb-anim-card-body-2   { opacity:0; animation: fadeIn  0.7s cubic-bezier(0.22,1,0.36,1) 0.95s forwards; }

        .nb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>

      <section
        className="bg-white py-20 sm:py-24 lg:py-20 px-5 sm:px-8 lg:px-12 "
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        <div className="mx-auto max-w-[1400px]">

          {/* ── Header ── */}
          <div className="text-center mb-14 sm:mb-16 lg:mb-10">
            <span
              className={mounted ? "nb-anim-eyebrow" : "opacity-0"}
              style={{
                display: "block",
                fontStyle: "italic",
                letterSpacing: "3px",
                color: "rgba(0,0,0,0.4)",
                fontSize: "14px",
                fontWeight: 400,
                marginBottom: "0.5rem",
              }}
            >
              Latest
            </span>
            <h2
              className={mounted ? "nb-anim-title" : "opacity-0"}
              style={{
                fontSize: "clamp(30px, 4vw, 64px)",
                fontWeight: 500,
                color: "#1a1208",
                lineHeight: 1.05,
              }}
            >
              News &amp;{" "}
              <em style={{ fontStyle: "italic", color: "#c9804d" }}>Blogs</em>
            </h2>
          </div>

          {/* ── Cards Grid ── */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-10">
            {posts.map((post, i) => (
              <article
                key={i}
                className={mounted ? `nb-anim-card-${i}` : "opacity-0"}
              >
                {/* Image — no zoom */}
                <div
                  className="relative overflow-hidden mb-5"
                  style={{
                    aspectRatio: "4 / 3",
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: "#f5ede0",
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="nb-img"
                  />

                  {/* Date badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "#ffffff",
                      fontSize: "10px",
                      letterSpacing: "2px",
                      color: "rgba(0,0,0,0.45)",
                      padding: "4px 10px",
                      fontStyle: "italic",
                      fontWeight: 400,
                      border: "1px solid rgba(0,0,0,0.1)",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={mounted ? `nb-anim-card-title-${i}` : "opacity-0"}
                  style={{
                    fontSize: "clamp(18px, 2vw, 22px)",
                    fontWeight: 500,
                    color: "#1a1208",
                    lineHeight: 1.25,
                    marginBottom: "0.6rem",
                  }}
                >
                  {post.title}
                </h3>

                {/* Body */}
                <p
                  className={mounted ? `nb-anim-card-body-${i}` : "opacity-0"}
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.48)",
                    lineHeight: 1.85,
                    fontStyle: "italic",
                  }}
                >
                  {post.body}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}