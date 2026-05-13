    "use client";

    import { useState } from "react";
    import Link from "next/link";
    import {
    Search,
    ShoppingBag,
    User,
    Menu,
    X,
    } from "lucide-react";

    export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
        {/* Header */}
        <header className="fixed top-0 left-0 z-50 w-full bg-[#f5f1eb]">
            <div className="mx-auto flex h-[65px] max-w-[1400px] items-center justify-between px-5 lg:px-12">
            
            {/* Logo */}
            <div className="flex flex-col">
            

                <Link
                href="/"
                className="text-[35px] leading-none text-black sm:text-[46px] lg:text-[48px]"
                style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                }}
                >
                Lilac
                </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden items-center gap-12 lg:flex">
                <Link
                href="/"
                className="text-[11px] font-medium uppercase tracking-[3px] text-[#c9804d] transition duration-300 hover:opacity-70"
                style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                }}
                >
                HOME
                </Link>

                <Link
                href="/about"
                className="text-[11px] font-medium uppercase tracking-[3px] text-black transition duration-300 hover:text-[#c9804d]"
                style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                }}
                >
                ABOUT
                </Link>

                <Link
                href="/shop"
                className="text-[11px] font-medium uppercase tracking-[3px] text-black transition duration-300 hover:text-[#c9804d]"
                style={{
                    fontFamily: "'Helvetica Neue', sans-serif",
                }}
                >
                SHOP
                </Link>

            

            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-5">
                
                {/* Desktop Icons */}
                <div className="hidden items-center gap-5 md:flex">
                <button className="transition duration-300 hover:scale-110">
                    <User
                    size={18}
                    strokeWidth={1.8}
                    className="text-black"
                    />
                </button>

                <button className="transition duration-300 hover:scale-110">
                    <ShoppingBag
                    size={18}
                    strokeWidth={1.8}
                    className="text-black"
                    />
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
            
            <Link
                href="/"
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-4 text-[12px] font-medium uppercase tracking-[3px] text-[#c9804d]"
            >
                HOME
            </Link>

            <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-4 text-[12px] font-medium uppercase tracking-[3px] text-black"
            >
                ABOUT
            </Link>

            <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-4 text-[12px] font-medium uppercase tracking-[3px] text-black"
            >
                SHOP
            </Link>

            <Link
                href="/blog"
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-4 text-[12px] font-medium uppercase tracking-[3px] text-black"
            >
                BLOG
            </Link>

            <Link
                href="/gallery"
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-4 text-[12px] font-medium uppercase tracking-[3px] text-black"
            >
                GALLERY
            </Link>

            <Link
                href="/pages"
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-4 text-[12px] font-medium uppercase tracking-[3px] text-black"
            >
                PAGES
            </Link>

            {/* Mobile Icons */}
            <div className="mt-8 flex items-center gap-5">
                <User
                size={18}
                strokeWidth={1.8}
                className="text-black"
                />

                <ShoppingBag
                size={18}
                strokeWidth={1.8}
                className="text-black"
                />

                <div className="relative">
                <Search
                    size={18}
                    strokeWidth={1.8}
                    className="text-black"
                />

                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#c9804d] text-[8px] font-bold text-white">
                    0
                </span>
                </div>
            </div>
            </div>
        </div>
        </>
    );
    }