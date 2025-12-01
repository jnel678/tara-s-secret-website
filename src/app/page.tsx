import Link from "next/link";
import { Heart, Truck, Shield, Globe, Sparkles, Star } from "lucide-react";
import { getFeaturedProducts } from "@/lib/data";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E8A0BF]/30 via-[#BA90C6]/20 to-[#C0DBEA]/30 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Heart className="h-16 w-16 text-[#E8A0BF]" fill="#E8A0BF" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D1F1F] dark:text-white mb-6">
              Discover the Secret to
              <span className="block text-[#B76E79]">Beautiful Lips</span>
            </h1>
            <p className="text-xl text-[#2D1F1F]/70 dark:text-white/70 max-w-2xl mx-auto mb-8">
              Premium lip care products crafted with love in Nigeria. 
              Nourish, protect, and beautify your lips with our natural formulas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-primary text-lg">
                Shop Now
              </Link>
              <Link href="/about" className="btn-secondary text-lg">
                Our Story
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-20">
          <Sparkles className="h-12 w-12 text-[#E8A0BF]" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Star className="h-12 w-12 text-[#BA90C6]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-[#1A1414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E8A0BF]/20 mb-4">
                <Globe className="h-8 w-8 text-[#B76E79]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#2D1F1F] dark:text-white">
                Worldwide Shipping
              </h3>
              <p className="text-[#2D1F1F]/70 dark:text-white/70">
                We deliver to Africa, Europe, North America, and Asia.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#BA90C6]/20 mb-4">
                <Shield className="h-8 w-8 text-[#BA90C6]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#2D1F1F] dark:text-white">
                Secure Payments
              </h3>
              <p className="text-[#2D1F1F]/70 dark:text-white/70">
                Safe and encrypted transactions with trusted payment providers.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C0DBEA]/30 mb-4">
                <Truck className="h-8 w-8 text-[#2D1F1F] dark:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#2D1F1F] dark:text-white">
                Fast Delivery
              </h3>
              <p className="text-[#2D1F1F]/70 dark:text-white/70">
                Quick and reliable shipping to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-[#FFF9F9] dark:bg-[#2D1F1F]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D1F1F] dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-[#2D1F1F]/70 dark:text-white/70">
              Discover our best-selling lip care essentials
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-[#1A1414] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-[#E8A0BF]/20 to-[#BA90C6]/20 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-[#E8A0BF]" />
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
                    <button className="px-4 py-2 bg-[#E8A0BF] hover:bg-[#D4789C] text-[#2D1F1F] rounded-full text-sm font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white dark:bg-[#1A1414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D1F1F] dark:text-white mb-6">
                Made with Love in Nigeria
              </h2>
              <p className="text-lg text-[#2D1F1F]/70 dark:text-white/70 mb-4">
                Tara&apos;s Secret was born from a passion for natural beauty and a desire 
                to share Africa&apos;s best-kept lip care secrets with the world.
              </p>
              <p className="text-lg text-[#2D1F1F]/70 dark:text-white/70 mb-6">
                Our products are carefully crafted using premium ingredients, 
                combining traditional African beauty wisdom with modern skincare science.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#E8A0BF]/30 via-[#BA90C6]/20 to-[#C0DBEA]/30 rounded-3xl p-12 flex items-center justify-center">
              <div className="text-center">
                <Heart className="h-24 w-24 text-[#B76E79] mx-auto mb-4" fill="#E8A0BF" />
                <p className="text-2xl font-bold text-[#2D1F1F] dark:text-white">
                  100% Natural
                </p>
                <p className="text-[#2D1F1F]/70 dark:text-white/70">
                  Premium Ingredients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#E8A0BF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2D1F1F] dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-[#2D1F1F]/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, beauty tips, and new product launches.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border border-[#E8A0BF] focus:outline-none focus:ring-2 focus:ring-[#B76E79] bg-white dark:bg-[#1A1414]"
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
