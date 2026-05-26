"use client";

import { useStore } from "@/app/context/StoreContext";
import { Heart, Trash2 } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useStore();

  return (
    <section className="min-h-screen bg-[#f7f3ee] px-4 pb-24 pt-[90px] sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[900px]">

        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <span
            className="mb-2 block italic tracking-[3px] text-black/40"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "12px" }}
          >
            YOUR FAVOURITES
          </span>
          <h1
            className="text-black"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: "clamp(36px, 6vw, 58px)",
            }}
          >
            Wishlist
            {wishlist.length > 0 && (
              <span
                className="ml-3 text-[#c9804d]"
                style={{ fontSize: "clamp(20px, 3vw, 32px)" }}
              >
                ({wishlist.length})
              </span>
            )}
          </h1>
        </div>

        {/* Empty State */}
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <Heart size={44} strokeWidth={1.2} className="mb-6 text-black/20" />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "22px",
                color: "rgba(0,0,0,0.35)",
              }}
            >
              Your wishlist is empty.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {wishlist.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border border-black/8 bg-white p-4 sm:gap-6 sm:p-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[80px] w-[80px] flex-shrink-0 object-cover sm:h-[100px] sm:w-[100px]"
                />

                <div className="flex flex-1 items-center justify-between gap-3">
                  <div>
                    <h2
                      className="leading-tight text-black"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 500,
                        fontSize: "clamp(18px, 3vw, 24px)",
                      }}
                    >
                      {item.name}
                    </h2>
                    <p
                      className="mt-1 text-[#c9804d]"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(14px, 2vw, 17px)",
                      }}
                    >
                      {item.price}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromWishlist(item.name)}
                    className="group flex flex-shrink-0 items-center gap-2 border border-black/15 px-3 py-2 text-black/50 transition duration-300 hover:border-black hover:text-black sm:px-4 sm:py-2.5"
                  >
                    <Trash2 size={14} strokeWidth={1.6} className="transition duration-300 group-hover:text-[#c9804d]" />
                    <span
                      className="hidden text-[11px] tracking-[2px] sm:inline"
                      style={{ fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 500 }}
                    >
                      REMOVE
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}