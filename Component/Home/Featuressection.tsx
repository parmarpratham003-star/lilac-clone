"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Natural Ingredients",
    description:
      "Praesent in nunc vel urna consequat mattis eget vel libero. Phasellus entesque",
    icon: (
      <svg width="90" height="90" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* Bowl */}
        <path d="M18 46 Q18 62 40 62 Q62 62 62 46"/>
        <line x1="14" y1="46" x2="66" y2="46"/>
        {/* Stem */}
        <path d="M40 46 Q40 38 36 30"/>
        {/* Left leaf */}
        <path d="M36 30 C28 20 16 22 16 22 C16 22 20 34 36 30 Z"/>
        <path d="M36 30 C30 28 22 25 16 22"/>
        {/* Right leaf */}
        <path d="M36 30 C44 18 56 20 56 20 C56 20 52 32 36 30 Z"/>
        <path d="M36 30 C44 26 52 22 56 20"/>
        {/* Small top leaf */}
        <path d="M36 30 C34 22 38 16 40 14 C42 16 44 22 40 28"/>
        <path d="M36 30 Q38 22 40 14"/>
      </svg>
    ),
  },
  {
    title: "Fragrance Free",
    description:
      "Ahasellus entesque praesent in nunc vel urna consequat mattis eget vel libero.",
    icon: (
      <svg width="90" height="90" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* Left circle/fruit */}
        <circle cx="30" cy="40" r="14"/>
        {/* Left fruit stem + leaf */}
        <path d="M30 26 Q30 22 34 20"/>
        <path d="M30 26 C26 20 22 20 22 20 C22 20 24 26 30 26"/>
        {/* Right smaller circle */}
        <circle cx="50" cy="32" r="10"/>
        <path d="M50 22 Q50 18 54 16"/>
        <path d="M50 22 C46 16 42 17 42 17 C42 17 44 22 50 22"/>
        {/* Diagonal slash */}
        <line x1="16" y1="16" x2="64" y2="64" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    title: "Allergy Tested",
    description:
      "Nunc vel urna consequat praesent in mattis eget vel libero zhasellus entesque.",
    icon: (
      <svg width="90" height="90" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* Box outline */}
        <rect x="16" y="20" width="48" height="44" rx="2"/>
        {/* Box top flaps */}
        <path d="M16 20 L28 14 L52 14 L64 20"/>
        <path d="M28 14 L28 20"/>
        <path d="M52 14 L52 20"/>
        <line x1="40" y1="14" x2="40" y2="20"/>
        {/* Leaf on box */}
        <path d="M40 54 C40 44 30 38 30 38 C30 38 30 48 40 54 Z"/>
        <path d="M40 54 C40 44 50 38 50 38 C50 38 50 48 40 54 Z"/>
        <line x1="40" y1="54" x2="40" y2="38"/>
        {/* Box middle line */}
        <line x1="16" y1="36" x2="64" y2="36"/>
      </svg>
    ),
  },
  {
    title: "Paraben Free",
    description:
      "Mattis eget vel libero praesent in nunc vel urna consequat ehasellus entesque",
    icon: (
      <svg width="90" height="90" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* Flask body */}
        <path d="M30 16 L30 38 L16 58 Q14 64 20 64 L60 64 Q66 64 64 58 L50 38 L50 16"/>
        {/* Flask mouth */}
        <line x1="26" y1="16" x2="54" y2="16"/>
        {/* Flask liquid fill area */}
        <path d="M22 54 Q30 48 40 52 Q50 56 58 50"/>
        {/* Bubbles */}
        <circle cx="44" cy="57" r="2"/>
        <circle cx="34" cy="60" r="1.5"/>
        <circle cx="50" cy="61" r="1"/>
        {/* Diagonal slash */}
        <line x1="16" y1="16" x2="64" y2="64" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center px-6 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 130}ms`,
      }}
    >
      {/* Icon */}
      <div className="mb-7 text-black/70 transition-transform duration-500 hover:scale-110">
        {feature.icon}
      </div>

      {/* Title */}
      <h3
        className="mb-4 text-[24px] sm:text-[26px] leading-tight text-black"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
        }}
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        className="mb-7 leading-7 text-black/55"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "16px",
          fontWeight: 400,
        }}
      >
        {feature.description}
      </p>

      {/* Read More */}
      <a
        href="#"
        className="group relative pb-1 text-[10px] tracking-[3px] uppercase text-black"
        style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
      >
        Read More
        <span className="absolute bottom-0 left-0 h-px w-full bg-black transition-all duration-300 group-hover:w-0" />
        <span className="absolute bottom-0 right-0 h-px w-0 bg-[#c9804d] transition-all duration-300 group-hover:w-full" />
      </a>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{
        backgroundImage: "url('/floral-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f5f1eb",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-5 lg:px-12">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}