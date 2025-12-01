import Link from "next/link";
import { Heart, Mail, MapPin, Phone, Globe, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D1F1F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-[#E8A0BF]" fill="#E8A0BF" />
              <span className="text-xl font-bold text-[#E8A0BF]">
                Tara&apos;s Secret
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Discover the secret to beautiful, healthy lips. Our premium lip care 
              products are crafted with love in Nigeria and delivered worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#E8A0BF] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#E8A0BF] transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#E8A0BF] transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E8A0BF]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-[#E8A0BF] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#E8A0BF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#E8A0BF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E8A0BF]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-5 w-5 text-[#E8A0BF]" />
                <span>Nigeria (Remote Business)</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-5 w-5 text-[#E8A0BF]" />
                <a href="mailto:hello@tarassecret.com" className="hover:text-[#E8A0BF] transition-colors">
                  hello@tarassecret.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-5 w-5 text-[#E8A0BF]" />
                <span>+234 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Globe className="h-5 w-5 text-[#E8A0BF]" />
                <span>Shipping to Africa, Europe, N. America, Asia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tara&apos;s Secret. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Secure payments powered by trusted third-party providers.
          </p>
        </div>
      </div>
    </footer>
  );
}
