"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function NewArrivals() {
  const categories = [
    {
      name: "Body Essentials",
      products: [
        { name: "Beauty Bar", price: "$22.00", rating: 5, image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=200&h=200&fit=crop&auto=format", hoverImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=200&h=200&fit=crop&auto=format" },
        { name: "Face Mist", price: "$22.00", rating: 3.5, image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=200&fit=crop&auto=format", hoverImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop&auto=format" },
        { name: "Nourishing Skin Cream", price: "$22.00", rating: 5, image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop&auto=format", hoverImage: "https://images.unsplash.com/photo-1617897903246-719242758050?w=200&h=200&fit=crop&auto=format" },
      ],
    },
    {
      name: "Fragrance",
      products: [
        { name: "Liquid Foundation", price: "$22.00", rating: 2.5, image: "https://i.pinimg.com/1200x/29/47/37/294737098cbe8a098d50b883f59dfc89.jpg", hoverImage: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=200&h=200&fit=crop&auto=format" },
        { name: "Face Toner", price: "$22.00", rating: 3.5, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop&auto=format", hoverImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop&auto=format" },
        { name: "Brightening Cream", price: "$22.00", rating: 3.5, image: "https://i.pinimg.com/1200x/7d/a6/ed/7da6ed308596701eb365745b025cabf0.jpg", hoverImage: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=200&h=200&fit=crop&auto=format" },
      ],
    },
    {
      name: "Hair Care",
      products: [
        { name: "3 In 1 Facial Kit", price: "$22.00", rating: 4.5, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&auto=format", hoverImage: "https://images.unsplash.com/photo-1526758097130-bab247274f58?w=200&h=200&fit=crop&auto=format" },
        { name: "Festive Combo", price: "$22.00", rating: 3.5, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop&auto=format", hoverImage: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=200&h=200&fit=crop&auto=format" },
        { name: "Beauty Bar", price: "$22.00", rating: 5, image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=200&h=200&fit=crop&auto=format", hoverImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=200&h=200&fit=crop&auto=format" },
      ],
    },
    {
      name: "Moisturizer",
      products: [
        { name: "Beauty Bar", price: "$22.00", rating: 5, image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=200&h=200&fit=crop&auto=format", hoverImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=200&h=200&fit=crop&auto=format" },
        { name: "Face Mist", price: "$22.00", rating: 3.5, image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=200&fit=crop&auto=format", hoverImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop&auto=format" },
        { name: "Nourishing Skin Cream", price: "$22.00", rating: 5, image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop&auto=format", hoverImage: "https://images.unsplash.com/photo-1617897903246-719242758050?w=200&h=200&fit=crop&auto=format" },
      ],
    },
  ];

  const renderStars = (rating) => (
    <div className="flex items-center gap-[2px]">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        return (
          <span key={star} className="relative inline-block w-[15px] h-[15px]">
            <Star size={15} strokeWidth={1.5} className="text-[#d4a843] absolute inset-0" fill="none" />
            {(filled || half) && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: half ? "50%" : "100%" }}>
                <Star size={15} strokeWidth={1.5} className="text-[#d4a843]" fill="#d4a843" />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
  return (
    <section className="bg-[#f7f3ee] pt-14 sm:pt-18 lg:pt-20 pb-8 sm:pb-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span
            className="mb-3 block italic tracking-[3px] text-black/50 anim-fade-up"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "12px",
              animationDelay: "50ms",
            }}
          >
            BRANDED COSMETICS
          </span>
          <h2
            className="text-[32px] sm:text-[44px] lg:text-[54px] leading-[1.05] text-black anim-fade-up"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              animationDelay: "180ms",
            }}
          >
            New Arrivals on Store
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, ci) => (
            <div
              key={cat.name}
              className="bg-[#f4e4be] rounded-sm p-5 sm:p-6 anim-fade-up"
              style={{ animationDelay: `${280 + ci * 120}ms` }}
            >   
            
              {/* Category Name */}
              <h3
                className="mb-5 text-[19px] sm:text-[21px] text-black anim-fade-up"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  animationDelay: `${320 + ci * 120}ms`,
                }}
              >
                {cat.name}
              </h3>

              {/* Products */}
              <div className="flex flex-col gap-4">
                {cat.products.map((product, pi) => (
                  <div
                    key={pi}
                    className="bg-white rounded-sm p-4 flex items-center gap-4 cursor-pointer group transition-shadow duration-300 hover:shadow-lg anim-fade-up"
                    style={{ animationDelay: `${400 + ci * 120 + pi * 80}ms` }}
                  >
                    {/* Product Image — pure crossfade, no zoom */}
                    <div className="relative flex-shrink-0 w-[88px] h-[88px] overflow-hidden rounded-sm bg-[#f7f3ee]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={88}
                        height={88}
                        priority
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                      />
                      <Image
                        src={product.hoverImage}
                        alt={`${product.name} alternate`}
                        width={88}
                        height={88}
                        priority
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                      />
                    </div>

                    {/* Product Info — text slides up on hover */}
                    <div className="flex flex-col gap-1">
                      <p
                        className="text-[15px] sm:text-[16px] text-black leading-tight transition-transform duration-300 group-hover:-translate-y-[2px]"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 500,
                        }}
                      >
                        {product.name}
                      </p>
                      <div className="transition-transform duration-300 group-hover:-translate-y-[2px]">
                        {renderStars(product.rating)}
                      </div>
                      <p
                        className="text-[13px] sm:text-[14px] text-black/65 transition-transform duration-300 group-hover:-translate-y-[2px]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-fade-up {
          animation: fadeUp 0.65s ease both;
        }
      `}</style>
    </section>
  );
}