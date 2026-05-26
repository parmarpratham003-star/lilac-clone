"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useStore } from "@/app/context/StoreContext";

const products = [
  { name: "Luxury Facial Kit", price: "₹1,850", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1200&auto=format&fit=crop" },
  { name: "Glow Cream", price: "₹2,350", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" },
  { name: "Face Serum", price: "₹1,499", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1200&auto=format&fit=crop" },
  { name: "Beauty Soap", price: "₹1,150", image: "https://i.pinimg.com/736x/20/ec/2e/20ec2e4296a636e586c24f7ded016bdb.jpg", hoverImage: "https://i.pinimg.com/736x/28/8b/be/288bbe392119f2d578e5f64b9871b078.jpg" },
  { name: "Hydrating Mist", price: "₹1,650", image: "https://i.pinimg.com/1200x/71/00/ff/7100ff3ee87c6218102607ab5f7102ff.jpg", hoverImage: "https://i.pinimg.com/1200x/54/c7/54/54c754c5e414432b4f12c2e9280ee4cf.jpg" },
  { name: "Rose Toner", price: "₹1,299", image: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=1200&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1200&auto=format&fit=crop" },
  { name: "Eye Repair Gel", price: "₹2,650", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop", hoverImage: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=1200&auto=format&fit=crop" },
  { name: "Vitamin C Mask", price: "₹1,999", image: "https://i.pinimg.com/736x/82/07/9d/82079d0dc80ecaaebfdfb9323eaa4cc9.jpg", hoverImage: "https://i.pinimg.com/736x/6d/a0/25/6da02556cbd137c2959a8f91758cd1f1.jpg" },
  { name: "Lip Nourish Balm", price: "₹999", image: "https://i.pinimg.com/736x/bc/0f/12/bc0f12ee5cba921d1e3bf24af019da22.jpg", hoverImage: "https://i.pinimg.com/736x/72/29/fe/7229feccaf5c7632c850d95e24447644.jpg " },
  { name: "Body Glow Oil", price: "₹2,150", image: "https://i.pinimg.com/736x/c7/74/7a/c7747ae3c170a975d9550ec5db7e27ed.jpg", hoverImage: "https://i.pinimg.com/736x/65/3e/5a/653e5ad79f21150270b24114b91a7c64.jpg" },
  { name: "Night Recovery", price: "₹2,999", image: "https://i.pinimg.com/1200x/e2/ee/f9/e2eef93e31ecdeae67785193460f7be0.jpg ", hoverImage: "https://i.pinimg.com/736x/3a/a4/8e/3aa48ec231bfa10622841e9a0fc53a84.jpg" },
  { name: "Collagen Booster", price: "₹3,499", image: "https://i.pinimg.com/1200x/7d/a1/da/7da1dad904241997764b7b888143f7ad.jpg", hoverImage: "https://i.pinimg.com/736x/da/22/5d/da225ddb75ae8fda40445c123b1d6856.jpg" },
];

export default function ProductSection() {
  const [mounted, setMounted] = useState(false);
  const [toast, setToast] = useState("");
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const { addToCart, addToWishlist, cart, wishlist } = useStore();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2400);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const handler = () => setActiveCard(null);
    document.addEventListener("touchstart", handler);
    return () => document.removeEventListener("touchstart", handler);
  }, []);

  const isInCart = (name: string) => cart.some((i) => i.name === name);
  const isInWishlist = (name: string) => wishlist.some((i) => i.name === name);

  const handleAddToCart = (item: (typeof products)[number]) => {
    addToCart(item);
    setToast(`${item.name} added to cart`);
  };

  const handleAddToWishlist = (item: (typeof products)[number]) => {
    addToWishlist(item);
    setToast(`${item.name} added to wishlist`);
  };

  const handleCardTap = (e: React.TouchEvent, index: number) => {
    e.stopPropagation();
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-title { opacity: 0; animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
        .anim-card  { opacity: 0; animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }

        /* ─── images ─── */
        .pc-img-def { transition: transform 0.7s ease, opacity 0.7s ease; }
        .pc-img-hov {
          position: absolute; inset: 0;
          transform: scale(0.92); opacity: 0;
          transition: transform 0.7s ease, opacity 0.7s ease;
          width: 100%; object-fit: cover;
        }

        /* ─── cart wrap: hidden by default ─── */
        .pc-cart-wrap {
          opacity: 0;
          transition: transform 0.45s ease, opacity 0.45s ease;
        }

        /* ─── wishlist btn: hidden by default ─── */
        .pc-wishlist {
          opacity: 0;
          transition: opacity 0.5s ease;
          position: absolute; top: 12px; right: 12px;
          z-index: 20;
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.10);
          background: #f4e4be;
        }
        /* wishlist hover — black fill slides up */
        .pc-wishlist .pc-w-fill {
          position: absolute; inset: 0;
          background: #000;
          transform: translateY(100%);
          transition: transform 0.45s ease;
          z-index: 1;
        }
        .pc-wishlist .pc-w-icon { position: relative; z-index: 10; transition: color 0.3s ease, fill 0.3s ease; }
        .pc-wishlist:hover .pc-w-fill  { transform: translateY(0); }
        .pc-wishlist:hover .pc-w-icon  { color: #fff !important; fill: transparent !important; }

        /* ─── cart button ─── */
        .pc-cart-btn {
          position: relative;
          overflow: hidden;
          width: 100%;
          padding: 12px 0;
          background: #f4e4be;
          border: 1px solid rgba(0,0,0,0.10);
          cursor: pointer;
          display: block;
        }
        .pc-cart-btn:disabled { cursor: default; opacity: 0.75; }
        /* label always on top */
        .pc-cart-btn .pc-label {
          position: relative; z-index: 10;
          color: black;
          transition: color 0.45s ease;
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px; letter-spacing: 2px; font-weight: 500;
        }
        /* black fill slides up */
        .pc-cart-btn .pc-fill {
          position: absolute; inset: 0;
          background: #000;
          transform: translateY(100%);
          transition: transform 0.45s ease;
          z-index: 1;
        }
        /* hover on cart button itself */
        .pc-cart-btn:hover .pc-fill  { transform: translateY(0); }
        .pc-cart-btn:hover .pc-label { color: #fff; }

        /* ─── CARD hover / tap: show everything ─── */
        @media (hover: hover) and (pointer: fine) {
          .product-card:hover .pc-img-def   { transform: scale(1.12); opacity: 0; }
          .product-card:hover .pc-img-hov   { transform: scale(1); opacity: 1; }
          .product-card:hover .pc-wishlist  { opacity: 1; }
          .product-card:hover .pc-cart-wrap {
            transform: translateX(-50%) translateY(0) !important;
            opacity: 1 !important;
          }
        }
        .product-card.is-active .pc-img-def   { transform: scale(1.12); opacity: 0; }
        .product-card.is-active .pc-img-hov   { transform: scale(1); opacity: 1; }
        .product-card.is-active .pc-wishlist  { opacity: 1; }
        .product-card.is-active .pc-cart-wrap {
          transform: translateX(-50%) translateY(0) !important;
          opacity: 1 !important;
        }
      `}</style>

      <section className="bg-[#f7f3ee] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">

          {/* Heading */}
          <div className="mb-10 text-center sm:mb-14">
            <span
              className={`mb-3 block italic tracking-[3px] text-black/50 ${mounted ? "anim-title" : "opacity-0"}`}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "12px" }}
            >
              LUXURY COLLECTION
            </span>
            <h2
              className={`text-black text-[34px] sm:text-[46px] lg:text-[58px] ${mounted ? "anim-title" : "opacity-0"}`}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              Our Products
            </h2>
            {toast && (
              <p className="mx-auto mt-4 max-w-md text-sm text-black/70" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
                {toast}
              </p>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-7">
            {products.map((item, index) => (
              <div
                key={index}
                className={`product-card${activeCard === index ? " is-active" : ""} group ${mounted ? "anim-card" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onTouchStart={(e) => handleCardTap(e, index)}
              >
                {/* Image wrapper */}
                <div className="relative overflow-hidden bg-white">

                  {/* Wishlist */}
                  <button
                    type="button"
                    aria-pressed={isInWishlist(item.name)}
                    onClick={(e) => { e.stopPropagation(); handleAddToWishlist(item); }}
                    className="pc-wishlist"
                  >
                    <Heart
                      size={16}
                      className={`pc-w-icon transition duration-300 ${
                        isInWishlist(item.name) ? "fill-[#c9804d] text-[#c9804d]" : "text-black"
                      }`}
                    />
                    <span className="pc-w-fill" />
                  </button>

                  {/* Default Image */}
                  <img src={item.image} alt={item.name} className="pc-img-def h-[220px] w-full object-cover sm:h-[260px] lg:h-[290px]" />

                  {/* Hover Image */}
                  <img src={item.hoverImage} alt={item.name} className="pc-img-hov h-[220px] sm:h-[260px] lg:h-[290px]" />

                  {/* Add To Cart */}
                  <div
                    className="pc-cart-wrap absolute bottom-4 left-1/2 z-20 w-[85%]"
                    style={{ transform: "translateX(-50%) translateY(32px)" }}
                  >
                    <button
                      type="button"
                      disabled={isInCart(item.name)}
                      onClick={(e) => { e.stopPropagation(); handleAddToCart(item); }}
                      className="pc-cart-btn"
                    >
                      <span className="pc-label">
                        {isInCart(item.name) ? "ADDED TO CART" : "ADD TO CART"}
                      </span>
                      <span className="pc-fill" />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="pt-5 text-center">
                  <h3 className="text-black text-[18px]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                    {item.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-center gap-[2px] text-[#c9804d]">
                    ★ ★ ★ ★ ☆
                  </div>
                  <p className="mt-2 text-black/55" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "15px" }}>
                    {item.price}
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