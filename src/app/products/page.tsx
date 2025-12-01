"use client";

import { useState } from "react";
import { Heart, Filter, X } from "lucide-react";
import { getAllProducts, getAllCategories } from "@/lib/data";

export default function ProductsPage() {
  const allProducts = getAllProducts();
  const categories = getAllCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  return (
    <div className="min-h-screen bg-[#FFF9F9] dark:bg-[#1A1414]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#E8A0BF]/30 via-[#BA90C6]/20 to-[#C0DBEA]/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D1F1F] dark:text-white mb-4">
            Our Products
          </h1>
          <p className="text-lg text-[#2D1F1F]/70 dark:text-white/70 max-w-2xl mx-auto">
            Explore our complete collection of premium lip care products
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#2D1F1F] rounded-lg shadow"
          >
            <Filter className="h-5 w-5 text-[#B76E79]" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`lg:w-64 ${
              showFilters ? "block" : "hidden lg:block"
            } bg-white dark:bg-[#2D1F1F] rounded-2xl p-6 h-fit sticky top-24`}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-[#2D1F1F] dark:text-white">
                Categories
              </h2>
              <button
                onClick={() => setShowFilters(false)}
                className="lg:hidden"
              >
                <X className="h-5 w-5 text-[#B76E79]" />
              </button>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === null
                    ? "bg-[#E8A0BF] text-[#2D1F1F]"
                    : "hover:bg-[#E8A0BF]/20 text-[#2D1F1F] dark:text-white"
                }`}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowFilters(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? "bg-[#E8A0BF] text-[#2D1F1F]"
                      : "hover:bg-[#E8A0BF]/20 text-[#2D1F1F] dark:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Shipping Info */}
            <div className="mt-8 p-4 bg-[#E8A0BF]/10 rounded-xl">
              <p className="text-sm text-[#2D1F1F] dark:text-white font-medium mb-2">
                🌍 We Ship Worldwide
              </p>
              <p className="text-xs text-[#2D1F1F]/70 dark:text-white/70">
                Africa • Europe • North America • Asia
              </p>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-[#2D1F1F]/70 dark:text-white/70">
                {filteredProducts.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-[#2D1F1F] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="h-48 bg-gradient-to-br from-[#E8A0BF]/20 to-[#BA90C6]/20 flex items-center justify-center relative">
                    <Heart className="h-16 w-16 text-[#E8A0BF]" />
                    {product.featured && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-[#B76E79] text-white text-xs rounded-full">
                        Featured
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-gray-500 text-white text-xs rounded-full">
                        Out of Stock
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-[#BA90C6] font-medium">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-semibold text-[#2D1F1F] dark:text-white mt-1 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#2D1F1F]/70 dark:text-white/70 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-[#B76E79]">
                        ${product.price.toFixed(2)}
                      </span>
                      <button
                        disabled={!product.inStock}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          product.inStock
                            ? "bg-[#E8A0BF] hover:bg-[#D4789C] text-[#2D1F1F]"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        {product.inStock ? "Add to Cart" : "Sold Out"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Trust Banner */}
      <section className="py-12 bg-white dark:bg-[#2D1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-[#2D1F1F]/70 dark:text-white/70 mb-4">
            Secure payments powered by trusted third-party providers
          </p>
          <div className="flex justify-center gap-8 opacity-60">
            <span className="text-lg font-bold">Paystack</span>
            <span className="text-lg font-bold">Stripe</span>
            <span className="text-lg font-bold">Flutterwave</span>
          </div>
        </div>
      </section>
    </div>
  );
}
