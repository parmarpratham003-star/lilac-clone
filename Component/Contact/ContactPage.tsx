"use client";

import { useState, useEffect, useRef } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    address: "",
    message: "",
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .anim-eyebrow  { opacity: 0; }
        .anim-heading1 { opacity: 0; }
        .anim-heading2 { opacity: 0; }
        .anim-row1     { opacity: 0; }
        .anim-row2     { opacity: 0; }
        .anim-row3     { opacity: 0; }
        .anim-btn      { opacity: 0; }
        .anim-footer   { opacity: 0; }

        .in-view .anim-eyebrow  { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.05s  forwards; }
        .in-view .anim-heading1 { animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.22s  forwards; }
        .in-view .anim-heading2 { animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.38s  forwards; }
        .in-view .anim-row1     { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.52s  forwards; }
        .in-view .anim-row2     { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.64s  forwards; }
        .in-view .anim-row3     { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.76s  forwards; }
        .in-view .anim-btn      { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.90s  forwards; }
        .in-view .anim-footer   { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 1.05s  forwards; }

        /* Texture overlay */
        .texture-bg {
          position: relative;
        }
        .texture-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          background-repeat: repeat;
          pointer-events: none;
          z-index: 0;
        }
        .texture-bg > * { position: relative; z-index: 1; }

        .c-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(0,0,0,0.15);
          outline: none;
          padding: 10px 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          letter-spacing: 1px;
          color: #000;
          transition: border-color 0.3s ease;
        }
        .c-input::placeholder {
          color: rgba(0,0,0,0.30);
          text-transform: uppercase;
          letter-spacing: 2.5px;
          font-size: 10px;
          font-family: 'Helvetica Neue', sans-serif;
        }
        .c-input:focus { border-bottom-color: #c9804d; }

        textarea.c-input {
          resize: none;
          height: 90px;
        }

        .send-btn {
          position: relative;
          overflow: hidden;
          background: #f4e4be;
          border: 1px solid rgba(0,0,0,0.12);
          cursor: pointer;
          padding: 14px 56px;
        }
        .send-btn .s-label {
          position: relative;
          z-index: 10;
          font-family: 'Helvetica Neue', sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          color: #000;
          font-weight: 500;
          transition: color 0.4s ease;
        }
        .send-btn .s-fill {
          position: absolute;
          inset: 0;
          background: #000;
          transform: translateY(100%);
          transition: transform 0.45s ease;
          z-index: 1;
        }
        .send-btn:hover .s-fill { transform: translateY(0); }
        .send-btn:hover .s-label { color: #fff; }

        .footer-line {
          width: 1px;
          height: 36px;
          background: rgba(0,0,0,0.12);
        }
      `}</style>

      <section className="texture-bg min-h-screen bg-[#f7f3ee] px-4 pb-0 pt-[90px] sm:px-6 lg:px-12">
        <div
          ref={sectionRef}
          className={`mx-auto max-w-[860px] ${visible ? "in-view" : ""}`}
        >

          {/* White Card */}
          <div className="bg-white px-6 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20">

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center border border-[#c9804d] text-xl text-[#c9804d]">
                  ✓
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(22px, 4vw, 32px)",
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.75)",
                  }}
                >
                  Message Sent!
                </p>
                <p
                  className="mt-3 italic text-black/40"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px" }}
                >
                  We'll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                {/* Heading */}
                <div className="mb-12 text-center">
                  <span
                    className="anim-eyebrow mb-3 block tracking-[4px] text-black/40"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "12px" }}
                  >
                    REACH OUT TO US
                  </span>

                  <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                    <span
                      className="anim-heading1 block leading-tight text-black"
                      style={{ fontSize: "clamp(28px, 5vw, 48px)", letterSpacing: "8px", textTransform: "uppercase" }}
                    >
                      Get In Touch
                    </span>
                    <span
                      className="anim-heading2 mt-2 block italic text-[#c9804d]"
                      style={{ fontSize: "clamp(14px, 2vw, 17px)", letterSpacing: "1px" }}
                    >
                      Alleneum phasellum tempesten neem
                    </span>
                  </h1>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-9">

                  {/* Row 1 */}
                  <div className="anim-row1 grid grid-cols-1 gap-9 sm:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                      className="c-input"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="E-Mail"
                      value={form.email}
                      onChange={handleChange}
                      className="c-input"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="anim-row2 grid grid-cols-1 gap-9 sm:grid-cols-2">
                    <input
                      type="text"
                      name="date"
                      placeholder="Wedding Date"
                      value={form.date}
                      onChange={handleChange}
                      className="c-input"
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Wedding Address"
                      value={form.address}
                      onChange={handleChange}
                      className="c-input"
                    />
                  </div>

                  {/* Textarea */}
                  <div className="anim-row3">
                    <textarea
                      name="message"
                      placeholder="Tell Us More"
                      value={form.message}
                      onChange={handleChange}
                      className="c-input"
                    />
                  </div>

                  {/* Send Button */}
                  <div className="anim-btn flex justify-center pt-1">
                    <button type="submit" className="send-btn">
                      <span className="s-label">SEND</span>
                      <span className="s-fill" />
                    </button>
                  </div>

                </form>
              </>
            )}
          </div>

          {/* Footer Info Bar */}
          <div className="anim-footer">
            <div className="flex flex-wrap items-start justify-center gap-8 px-4 py-10 sm:flex-nowrap sm:items-center sm:justify-between sm:gap-0 sm:px-12 lg:px-16">

              <div className="text-center">
                <p
                  className="text-black/40"
                  style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "10px", letterSpacing: "3px", fontWeight: 500 }}
                >
                  EMAIL
                </p>
                <p
                  className="mt-1 text-black/55"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px" }}
                >
                  Lilac@laliccosmetics.com
                </p>
              </div>

              <div className="footer-line hidden sm:block" />

              <div className="text-center">
                <p
                  className="text-black/40"
                  style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "10px", letterSpacing: "3px", fontWeight: 500 }}
                >
                  ADDRESS
                </p>
                <p
                  className="mt-1 text-black/55"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px" }}
                >
                  Miami, Florida
                </p>
              </div>

              <div className="footer-line hidden sm:block" />

              <div className="text-center">
                <p
                  className="text-black/40"
                  style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "10px", letterSpacing: "3px", fontWeight: 500 }}
                >
                  CALL ME
                </p>
                <p
                  className="mt-1 text-black/55"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px" }}
                >
                  +123 456 · 7890 · 456 · 78
                </p>
              </div>

              <div className="footer-line hidden sm:block" />

              <div className="text-center">
                <p
                  className="text-black/40"
                  style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: "10px", letterSpacing: "3px", fontWeight: 500 }}
                >
                  FOLLOW
                </p>
                <p
                  className="mt-1 text-black/55"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px" }}
                >
                  @LalicCosmetics
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}