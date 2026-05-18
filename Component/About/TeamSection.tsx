"use client";

import { useEffect, useState } from "react";

export default function TeamSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const team = [
    {
      name: "Shannon",
      role: "Senior Stylist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Nathalie",
      role: "Senior Stylist",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Jenny",
      role: "Make-up Artist",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Madelyn",
      role: "Senior Stylist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .anim-fade {
          opacity: 0;
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }
      `}</style>

      <section className="relative overflow-hidden bg-[#f5f1eb] py-16 sm:py-20 lg:py-15 " >
        
        {/* Texture */}
        <div className="absolute left-0 top-0 opacity-25">
          <img
            src="/CTA.png"
            alt="Texture"
            className="w-[120px] sm:w-[160px]"
          />
        </div>

        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          
          {/* Heading */}
          <div className="text-center">
            
            <span
              className={`mb-3 block tracking-[4px] text-black/55 ${
                mounted
                  ? "anim-fade"
                  : "opacity-0"
              }`}
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontSize: "12px",
                animationDelay: "0.1s",
              }}
            >
              OUR TEAM
            </span>

            <h2
              className={`text-black text-[38px] leading-none sm:text-[52px] lg:text-[64px] ${
                mounted
                  ? "anim-fade"
                  : "opacity-0"
              }`}
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontWeight: 500,
                animationDelay: "0.3s",
              }}
            >
              Experienced {" "}
              <em style={{ fontStyle: "italic", color: "#c9804d" }}>Stylists</em>
            </h2>
          </div>

          {/* Team Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className={`group ${
                  mounted
                    ? "anim-fade"
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: `${
                    0.45 + index * 0.15
                  }s`,
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-[#ead8b8]">
                  
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-[200px] w-full object-cover transition duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:rotate-1 sm:h-[380px]"
                  />

                  {/* Social Bar */}
                  <div className="absolute bottom-4 left-1/2 flex w-[84%] -translate-x-1/2 items-center justify-center gap-10 bg-[#f4e4be] py-3 opacity-0 transition duration-500 group-hover:bottom-5 group-hover:opacity-100">
                    
                    {/* Instagram */}
                    <button className="text-black transition duration-300 hover:text-[#c9804d]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37a4 4 0 1 1-7.75 1.06 4 4 0 0 1 7.75-1.06z" />
                        <line
                          x1="17.5"
                          y1="6.5"
                          x2="17.51"
                          y2="6.5"
                        />
                      </svg>
                    </button>

                    {/* Linkedin */}
                    <button className="text-black transition duration-300 hover:text-[#c9804d]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect
                          x="2"
                          y="9"
                          width="4"
                          height="12"
                        />
                        <circle
                          cx="4"
                          cy="4"
                          r="2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-5 text-center">
                  
                  <h3
                    className="text-[30px] leading-none text-black"
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontWeight: 500,
                    }}
                  >
                    {member.name}
                  </h3>

                  <p
                    className="mt-2 text-[15px] text-black/55"
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}