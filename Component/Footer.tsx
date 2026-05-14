"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f4e4be] text-black overflow-hidden">
      
      {/* Top */}
      <div className="mx-auto max-w-[1400px] px-5 py-10 lg:px-12">
        
        <div className="grid gap-10 border-t border-black/10 pt-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo */}
          <div>
            <h2
              className="animate-[fadeUp_1s_ease] text-[40px] leading-none text-black sm:text-[44px] lg:text-[48px]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
              Lilac
            </h2>

            <p className="mt-4 max-w-[280px] text-sm leading-6 text-[#6f6f6f]">
              Modern education platform with creative learning,
              expert mentors, and premium online courses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3
              className="mb-4 text-[11px] font-medium uppercase tracking-[3px] text-black"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
              }}
            >
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="w-fit text-sm text-[#6f6f6f] transition duration-300 hover:text-[#c9804d]"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="w-fit text-sm text-[#6f6f6f] transition duration-300 hover:text-[#c9804d]"
              >
                About
              </Link>

              <Link
                href="/courses"
                className="w-fit text-sm text-[#6f6f6f] transition duration-300 hover:text-[#c9804d]"
              >
                Shop
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="mb-4 text-[11px] font-medium uppercase tracking-[3px] text-black"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
              }}
            >
              Contact
            </h3>

            <div className="space-y-3 text-sm text-[#6f6f6f]">
              <p>
                27 Division St, New York,
                <br />
                NY 10002, USA
              </p>

              <p>+1 234 567 890</p>

              <p>support@lilac.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="mb-4 text-[11px] font-medium uppercase tracking-[3px] text-black"
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
              }}
            >
              Newsletter
            </h3>

            <p className="mb-4 text-sm leading-6 text-[#6f6f6f]">
              Subscribe to receive updates, access to exclusive
              deals, and more.
            </p>

            <div className="flex overflow-hidden rounded-[3px] border border-black/10 bg-white">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full bg-transparent px-5 text-sm text-black outline-none placeholder:text-[#9c9c9c]"
              />

              <button className="flex h-12 w-14 items-center justify-center bg-white border-l border-black/10 text-[#c9804d] transition duration-300 hover:bg-[#f4e4be]">
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-black/10">
        <div className="mx-auto max-w-[1400px] px-5 py-4 text-center lg:px-12">
          <p className="text-[11px] tracking-[2px] text-[#6f6f6f]">
            © 2026 LILAC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
}