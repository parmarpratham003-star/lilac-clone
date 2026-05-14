"use client";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ee] py-10 lg:py-14">
      
      {/* Texture Background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.05]">
        
        {/* Grid Texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Glow */}
        <div className="absolute left-[-10%] top-[-20%] h-[350px] w-[350px] rounded-full bg-[#f4e4be] blur-3xl" />

        <div className="absolute bottom-[-30%] right-[-10%] h-[380px] w-[380px] rounded-full bg-[#ead8b5] blur-3xl" />

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.3) 0.5px, transparent 0.5px)",
            backgroundSize: "12px 12px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-12">
        
        {/* Main Box */}
        <div className="relative overflow-hidden border border-black/5 bg-[#f4e4be] px-6 py-10 sm:px-10 lg:px-16 lg:py-12">
          
          {/* Soft Blur */}
          <div className="absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full bg-white/20 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            
            {/* Left Side */}
            <div>
              
              {/* Top Text */}
              <span
                className="mb-4 block italic tracking-[4px] text-black/45"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "12px",
                }}
              >
                PREMIUM SKINCARE EXPERIENCE
              </span>

              {/* Heading */}
              <h2
                className="max-w-[620px] text-[34px] leading-[0.98] text-black sm:text-[48px] lg:text-[64px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                }}
              >
                Discover beauty
                <br />

                that{" "}
                <span className="italic text-[#c9804d]">
                  glows naturally
                </span>
              </h2>

              {/* Description */}
              <p
                className="mt-5 max-w-[560px] text-[15px] leading-7 text-black/60 sm:text-[16px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Experience luxurious skincare crafted with
                premium ingredients and timeless elegance.
                Designed to nourish your skin while enhancing
                your natural beauty.
              </p>

              {/* Bottom Text */}
              <div className="mt-7 flex items-center gap-4">
                
                <span className="h-[1px] w-12 bg-black/20" />

                <p
                  className="italic text-black/45"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "14px",
                  }}
                >
                  Luxury crafted for every skin tone
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center lg:justify-end">
              
              <div className="w-full max-w-[480px] border border-black/10 bg-white/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:p-7">
                
                {/* Title */}
                <h3
                  className="text-[28px] leading-none text-black sm:text-[34px]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                  }}
                >
                  Join our newsletter
                </h3>

                {/* Description */}
                <p
                  className="mt-4 text-[15px] leading-7 text-black/55"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Subscribe and receive beauty tips,
                  skincare insights, and exclusive offers.
                </p>

                {/* Input */}
                <div className="mt-6">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="
                      h-[56px] w-full
                      border border-black/10
                      bg-transparent px-5
                      text-[15px] text-black
                      outline-none
                      placeholder:text-black/30
                    "
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  />
                </div>

                <button
  className="
    group relative mt-5 w-full overflow-hidden
    border border-black/10
    bg-[#f4e4be]
    py-4 text-black
  "
  style={{
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "15px",
    fontWeight: 500,
    letterSpacing: "2px",
    fontStyle: "italic",
  }}
>
  <span className="relative z-10 transition duration-500 group-hover:text-white">
    Subscribe Now
  </span>

  <span
    className="
      absolute inset-0
      translate-y-full
      bg-black
      transition-transform
      duration-500
      group-hover:translate-y-0
    "
  />
</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}