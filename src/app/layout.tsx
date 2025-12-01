import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tara's Secret - Premium Lip Care",
  description: "Discover the secret to beautiful, healthy lips. Premium lip care products crafted with love in Nigeria, delivered worldwide to Africa, Europe, North America, and Asia.",
  keywords: ["lip care", "lip balm", "lip gloss", "beauty", "skincare", "Nigeria", "Africa", "cosmetics"],
  authors: [{ name: "Tara's Secret" }],
  openGraph: {
    title: "Tara's Secret - Premium Lip Care",
    description: "Discover the secret to beautiful, healthy lips.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
