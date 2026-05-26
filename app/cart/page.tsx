"use client";

import { useStore } from "@/app/context/StoreContext";
import { ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useStore();
  const [ordered, setOrdered] = useState(false);

  const total = cart
    .reduce((sum, item) => {
      const price = parseFloat(item.price.replace("₹", "").replace(/,/g, ""));
      return sum + price;
    }, 0)
    .toFixed(0);

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    setOrdered(true);
    clearCart();
  };

  return (
    <section className="min-h-screen bg-[#f7f3ee] px-4 pb-24 pt-[90px] sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[900px]">

        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <span
            className="mb-2 block italic tracking-[3px] text-black/40"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "12px" }}
          >
            YOUR ORDER
          </span>
          <h1
            className="text-black"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: "clamp(36px, 6vw, 58px)",
            }}
          >
            Cart
            {cart.length > 0 && !ordered && (
              <span
                className="ml-3 text-[#c9804d]"
                style={{ fontSize: "clamp(20px, 3vw, 32px)" }}
              >
                ({cart.length})
              </span>
            )}
          </h1>
        </div>

        {/* Order success state */}
        {ordered ? (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <div
              className="mb-5 flex h-16 w-16 items-center justify-center border border-[#c9804d] text-2xl text-[#c9804d]"
            >
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
              Order Placed!
            </p>
            <p
              className="mt-3 text-black/40"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px" }}
            >
              Thank you for your purchase.
            </p>
          </div>

        /* Empty state */
        ) : cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <ShoppingBag size={44} strokeWidth={1.2} className="mb-6 text-black/20" />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "22px",
                color: "rgba(0,0,0,0.35)",
              }}
            >
              Your cart is empty.
            </p>
          </div>

        ) : (
          <>
            {/* Cart Items */}
            <div className="flex flex-col gap-4">
              {cart.map((item, index) => (
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
                      onClick={() => removeFromCart(item.name)}
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

            {/* Summary + Place Order */}
            <div className="mt-6 border border-black/8 bg-white p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-black/8 pb-4">
                <span
                  className="text-black/50"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    fontWeight: 500,
                  }}
                >
                  SUBTOTAL
                </span>
                <span
                  className="text-black"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "20px",
                    fontWeight: 500,
                  }}
                >
                  ₹{total}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span
                  className="text-black/50"
                  style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    fontWeight: 500,
                  }}
                >
                  SHIPPING
                </span>
                <span
                  className="text-black/40"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "15px",
                    fontStyle: "italic",
                  }}
                >
                  Calculated at checkout
                </span>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                className="group relative mt-6 w-full overflow-hidden bg-black py-4 text-white transition duration-500"
                style={{
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  fontWeight: 500,
                }}
              >
                <span className="relative z-10 transition duration-300 group-hover:text-black">
                  PLACE ORDER
                </span>
                <span className="absolute inset-0 translate-y-full bg-[#f4e4be] transition duration-500 group-hover:translate-y-0" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}