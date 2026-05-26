"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useStore } from "@/app/context/StoreContext";

import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  Heart,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const { cart, wishlist } = useStore();
  const cartCount = cart.length;
  const wishlistCount = wishlist.length;

  const handleNavigate = (path: string) => {
    if (pathname === path) return;

    document.body.classList.add("page-transition-active");

    setTimeout(() => {
      router.push(path);

      setTimeout(() => {
        document.body.classList.remove("page-transition-active");
      }, 1800);
    }, 700);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full bg-[#f5f1eb]">
        <div className="mx-auto flex h-[65px] max-w-[1400px] items-center justify-between px-5 lg:px-12">

          {/* Logo */}
          <div className="flex flex-col">
            <button
              onClick={() => handleNavigate("/")}
              className="text-[35px] leading-none text-black sm:text-[46px] lg:text-[48px]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
              Lilac
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-12 lg:flex">

            <button
              onClick={() => handleNavigate("/")}
              className={`text-[11px] font-medium uppercase tracking-[3px] transition duration-300 ${
                pathname === "/"
                  ? "text-[#c9804d]"
                  : "text-black hover:text-[#c9804d]"
              }`}
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
              }}
            >
              HOME
            </button>

            <button
              onClick={() => handleNavigate("/about")}
              className={`text-[11px] font-medium uppercase tracking-[3px] transition duration-300 ${
                pathname === "/about"
                  ? "text-[#c9804d]"
                  : "text-black hover:text-[#c9804d]"
              }`}
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
              }}
            >
              ABOUT
            </button>

            <button
              onClick={() => handleNavigate("/shop")}
              className={`text-[11px] font-medium uppercase tracking-[3px] transition duration-300 ${
                pathname === "/shop"
                  ? "text-[#c9804d]"
                  : "text-black hover:text-[#c9804d]"
              }`}
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
              }}
            >
              SHOP
            </button>

            <button
              onClick={() => handleNavigate("/contact")}
              className={`text-[11px] font-medium uppercase tracking-[3px] transition duration-300 ${
                pathname === "/contact"
                  ? "text-[#c9804d]"
                  : "text-black hover:text-[#c9804d]"
              }`}
              style={{
                fontFamily: "'Helvetica Neue', sans-serif",
              }}
            >
              CONTACT
            </button>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-5">

            {/* Desktop Icons */}
            <div className="hidden items-center gap-5 md:flex">

              {/* Wishlist */}
              <button
                onClick={() => handleNavigate("/wishlist")}
                className="relative transition duration-300 hover:scale-110"
              >
                <Heart
                  size={18}
                  strokeWidth={1.8}
                  className={pathname === "/wishlist" ? "text-[#c9804d]" : "text-black"}
                />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#c9804d] text-[9px] font-semibold text-white">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button
                onClick={() => handleNavigate("/cart")}
                className="relative transition duration-300 hover:scale-110"
              >
                <ShoppingBag
                  size={18}
                  strokeWidth={1.8}
                  className={pathname === "/cart" ? "text-[#c9804d]" : "text-black"}
                />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#c9804d] text-[9px] font-semibold text-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center lg:hidden"
            >
              {open ? (
                <X
                  size={24}
                  strokeWidth={1.8}
                  className="text-black"
                />
              ) : (
                <Menu
                  size={24}
                  strokeWidth={1.8}
                  className="text-black"
                />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[72px] left-0 z-40 w-full overflow-hidden bg-[#f5f1eb] transition-all duration-500 lg:hidden ${
          open
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6">

          <button
            onClick={() => {
              setOpen(false);
              handleNavigate("/");
            }}
            className={`border-b border-black/10 py-4 text-left text-[12px] font-medium uppercase tracking-[3px] ${
              pathname === "/"
                ? "text-[#c9804d]"
                : "text-black"
            }`}
          >
            HOME
          </button>

          <button
            onClick={() => {
              setOpen(false);
              handleNavigate("/about");
            }}
            className={`border-b border-black/10 py-4 text-left text-[12px] font-medium uppercase tracking-[3px] ${
              pathname === "/about"
                ? "text-[#c9804d]"
                : "text-black"
            }`}
          >
            ABOUT
          </button>

          <button
            onClick={() => {
              setOpen(false);
              handleNavigate("/shop");
            }}
            className={`border-b border-black/10 py-4 text-left text-[12px] font-medium uppercase tracking-[3px] ${
              pathname === "/shop"
                ? "text-[#c9804d]"
                : "text-black"
            }`}
          >
            SHOP
          </button>

          <button
            onClick={() => {
              setOpen(false);
              handleNavigate("/contact");
            }}
            className={`border-b border-black/10 py-4 text-left text-[12px] font-medium uppercase tracking-[3px] ${
              pathname === "/contact"
                ? "text-[#c9804d]"
                : "text-black"
            }`}
          >
            CONTACT
          </button>

          {/* Mobile Icons */}
          <div className="mt-8 flex items-center gap-5">

            {/* Wishlist */}
            <button
              onClick={() => {
                setOpen(false);
                handleNavigate("/wishlist");
              }}
              className="relative transition duration-300"
            >
              <Heart
                size={18}
                strokeWidth={1.8}
                className={pathname === "/wishlist" ? "text-[#c9804d]" : "text-black"}
              />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#c9804d] text-[9px] font-semibold text-white">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={() => {
                setOpen(false);
                handleNavigate("/cart");
              }}
              className="relative transition duration-300"
            >
              <ShoppingBag
                size={18}
                strokeWidth={1.8}
                className={pathname === "/cart" ? "text-[#c9804d]" : "text-black"}
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#c9804d] text-[9px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>

           
          </div>
        </div>
      </div>
    </>
  );
}