import { Heart, Leaf, Globe, Users, Award, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F9] dark:bg-[#1A1414]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#E8A0BF]/30 via-[#BA90C6]/20 to-[#C0DBEA]/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-[#E8A0BF] mx-auto mb-6" fill="#E8A0BF" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D1F1F] dark:text-white mb-4">
            Our Story
          </h1>
          <p className="text-xl text-[#2D1F1F]/70 dark:text-white/70 max-w-2xl mx-auto">
            Discover the passion behind Tara&apos;s Secret
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2D1F1F] dark:text-white mb-6">
                Made with Love in Nigeria
              </h2>
              <div className="space-y-4 text-[#2D1F1F]/70 dark:text-white/70">
                <p>
                  Tara&apos;s Secret began with a simple belief: everyone deserves beautiful, 
                  healthy lips. Founded in Nigeria, our brand combines the rich heritage 
                  of African beauty traditions with modern skincare innovation.
                </p>
                <p>
                  Our founder, inspired by generations of natural beauty wisdom passed 
                  down through her family, set out to create lip care products that 
                  truly nourish and protect. Every formula is carefully crafted using 
                  premium ingredients sourced both locally and globally.
                </p>
                <p>
                  What started as a small passion project has grown into a beloved brand, 
                  now serving customers across Africa, Europe, North America, and Asia. 
                  We&apos;re proud to be a fully remote business, connecting with beauty 
                  enthusiasts around the world.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#E8A0BF]/30 via-[#BA90C6]/20 to-[#C0DBEA]/30 rounded-3xl p-12 flex items-center justify-center">
              <div className="text-center">
                <Heart className="h-32 w-32 text-[#B76E79] mx-auto mb-6" fill="#E8A0BF" />
                <p className="text-2xl font-bold text-[#2D1F1F] dark:text-white">
                  Est. Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white dark:bg-[#2D1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#2D1F1F] dark:text-white mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-[#FFF9F9] dark:bg-[#1A1414]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E8A0BF]/20 mb-4">
                <Leaf className="h-8 w-8 text-[#B76E79]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#2D1F1F] dark:text-white">
                Natural Ingredients
              </h3>
              <p className="text-[#2D1F1F]/70 dark:text-white/70">
                We believe in the power of nature. Our products feature carefully 
                selected natural ingredients that nourish and protect your lips.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-[#FFF9F9] dark:bg-[#1A1414]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#BA90C6]/20 mb-4">
                <Award className="h-8 w-8 text-[#BA90C6]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#2D1F1F] dark:text-white">
                Quality First
              </h3>
              <p className="text-[#2D1F1F]/70 dark:text-white/70">
                Every product undergoes rigorous quality testing. We never compromise 
                on the quality and safety of our formulations.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-[#FFF9F9] dark:bg-[#1A1414]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C0DBEA]/30 mb-4">
                <Globe className="h-8 w-8 text-[#2D1F1F] dark:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#2D1F1F] dark:text-white">
                Global Community
              </h3>
              <p className="text-[#2D1F1F]/70 dark:text-white/70">
                We&apos;re proud to serve customers worldwide, sharing African beauty 
                secrets with beauty lovers across four continents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#2D1F1F] dark:text-white mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-[#B76E79] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#2D1F1F] dark:text-white mb-2">
                  African Beauty Heritage
                </h3>
                <p className="text-[#2D1F1F]/70 dark:text-white/70">
                  Our formulas are inspired by traditional African beauty secrets 
                  passed down through generations.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-[#B76E79] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#2D1F1F] dark:text-white mb-2">
                  Cruelty-Free
                </h3>
                <p className="text-[#2D1F1F]/70 dark:text-white/70">
                  We never test on animals. All our products are 100% cruelty-free.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-[#B76E79] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#2D1F1F] dark:text-white mb-2">
                  Sustainable Packaging
                </h3>
                <p className="text-[#2D1F1F]/70 dark:text-white/70">
                  We&apos;re committed to reducing our environmental impact with 
                  eco-friendly packaging options.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-[#B76E79] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#2D1F1F] dark:text-white mb-2">
                  Customer-Centered
                </h3>
                <p className="text-[#2D1F1F]/70 dark:text-white/70">
                  Your satisfaction is our priority. We listen to our customers 
                  and continuously improve our products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white dark:bg-[#2D1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E8A0BF]/20 mb-6">
            <Users className="h-10 w-10 text-[#B76E79]" />
          </div>
          <h2 className="text-3xl font-bold text-[#2D1F1F] dark:text-white mb-4">
            A Remote-First Team
          </h2>
          <p className="text-lg text-[#2D1F1F]/70 dark:text-white/70 max-w-2xl mx-auto">
            As a fully remote business, our team members work from various locations 
            across Nigeria and beyond. This allows us to bring diverse perspectives 
            and talents together while maintaining the flexibility to serve our 
            global customer base effectively.
          </p>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#2D1F1F] dark:text-white mb-12">
            Where We Ship
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white dark:bg-[#2D1F1F] rounded-2xl shadow-lg">
              <span className="text-4xl mb-4 block">🌍</span>
              <h3 className="font-semibold text-[#2D1F1F] dark:text-white">Africa</h3>
              <p className="text-sm text-[#2D1F1F]/70 dark:text-white/70">Our Home</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-[#2D1F1F] rounded-2xl shadow-lg">
              <span className="text-4xl mb-4 block">🇪🇺</span>
              <h3 className="font-semibold text-[#2D1F1F] dark:text-white">Europe</h3>
              <p className="text-sm text-[#2D1F1F]/70 dark:text-white/70">All Countries</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-[#2D1F1F] rounded-2xl shadow-lg">
              <span className="text-4xl mb-4 block">🌎</span>
              <h3 className="font-semibold text-[#2D1F1F] dark:text-white">North America</h3>
              <p className="text-sm text-[#2D1F1F]/70 dark:text-white/70">USA & Canada</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-[#2D1F1F] rounded-2xl shadow-lg">
              <span className="text-4xl mb-4 block">🌏</span>
              <h3 className="font-semibold text-[#2D1F1F] dark:text-white">Asia</h3>
              <p className="text-sm text-[#2D1F1F]/70 dark:text-white/70">Selected Countries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
