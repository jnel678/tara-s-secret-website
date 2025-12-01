"use client";

import { useState, FormEvent } from "react";
import { Mail, MapPin, Phone, Globe, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    region: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F9] dark:bg-[#1A1414]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#E8A0BF]/30 via-[#BA90C6]/20 to-[#C0DBEA]/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D1F1F] dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-[#2D1F1F]/70 dark:text-white/70 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#2D1F1F] dark:text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-[#2D1F1F]/70 dark:text-white/70 mb-8">
              Have questions about our products or your order? We&apos;re here to help! 
              Reach out to us through any of the channels below.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8A0BF]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-[#B76E79]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D1F1F] dark:text-white">Location</h3>
                  <p className="text-[#2D1F1F]/70 dark:text-white/70">
                    Nigeria (Remote Business)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8A0BF]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#B76E79]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D1F1F] dark:text-white">Email</h3>
                  <a 
                    href="mailto:hello@tarassecret.com" 
                    className="text-[#B76E79] hover:underline"
                  >
                    hello@tarassecret.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8A0BF]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#B76E79]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D1F1F] dark:text-white">Phone</h3>
                  <p className="text-[#2D1F1F]/70 dark:text-white/70">
                    +234 XXX XXX XXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8A0BF]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-[#B76E79]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D1F1F] dark:text-white">Business Hours</h3>
                  <p className="text-[#2D1F1F]/70 dark:text-white/70">
                    Monday - Friday: 9:00 AM - 6:00 PM (WAT)
                    <br />
                    Saturday: 10:00 AM - 4:00 PM (WAT)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8A0BF]/20 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-[#B76E79]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D1F1F] dark:text-white">We Ship To</h3>
                  <p className="text-[#2D1F1F]/70 dark:text-white/70">
                    Africa • Europe • North America • Asia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-[#2D1F1F] rounded-2xl p-8 shadow-lg">
            {formSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#2D1F1F] dark:text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-[#2D1F1F]/70 dark:text-white/70">
                  Your message has been sent. We&apos;ll get back to you soon!
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "", region: "" });
                  }}
                  className="mt-6 btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[#2D1F1F] dark:text-white mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-[#2D1F1F] dark:text-white mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8A0BF]/50 focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/20 outline-none transition-colors bg-white dark:bg-[#1A1414]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-[#2D1F1F] dark:text-white mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8A0BF]/50 focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/20 outline-none transition-colors bg-white dark:bg-[#1A1414]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="region" 
                      className="block text-sm font-medium text-[#2D1F1F] dark:text-white mb-2"
                    >
                      Your Region
                    </label>
                    <select
                      id="region"
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8A0BF]/50 focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/20 outline-none transition-colors bg-white dark:bg-[#1A1414]"
                    >
                      <option value="">Select your region</option>
                      <option value="Africa">Africa</option>
                      <option value="Europe">Europe</option>
                      <option value="North America">North America</option>
                      <option value="Asia">Asia</option>
                    </select>
                  </div>

                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-sm font-medium text-[#2D1F1F] dark:text-white mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8A0BF]/50 focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/20 outline-none transition-colors bg-white dark:bg-[#1A1414]"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-[#2D1F1F] dark:text-white mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8A0BF]/50 focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/20 outline-none transition-colors bg-white dark:bg-[#1A1414] resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>

                  <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Preview */}
      <section className="py-16 bg-white dark:bg-[#2D1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#2D1F1F] dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-[#FFF9F9] dark:bg-[#1A1414] rounded-xl">
              <h3 className="font-semibold text-[#2D1F1F] dark:text-white mb-2">
                How long does shipping take?
              </h3>
              <p className="text-[#2D1F1F]/70 dark:text-white/70 text-sm">
                Shipping times vary by region: Africa (3-7 days), Europe (7-14 days), 
                North America (10-18 days), Asia (14-21 days).
              </p>
            </div>
            <div className="p-6 bg-[#FFF9F9] dark:bg-[#1A1414] rounded-xl">
              <h3 className="font-semibold text-[#2D1F1F] dark:text-white mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-[#2D1F1F]/70 dark:text-white/70 text-sm">
                We accept payments through Paystack, Stripe, and Flutterwave - 
                all secure third-party payment providers.
              </p>
            </div>
            <div className="p-6 bg-[#FFF9F9] dark:bg-[#1A1414] rounded-xl">
              <h3 className="font-semibold text-[#2D1F1F] dark:text-white mb-2">
                Are your products cruelty-free?
              </h3>
              <p className="text-[#2D1F1F]/70 dark:text-white/70 text-sm">
                Yes! All Tara&apos;s Secret products are 100% cruelty-free. 
                We never test on animals.
              </p>
            </div>
            <div className="p-6 bg-[#FFF9F9] dark:bg-[#1A1414] rounded-xl">
              <h3 className="font-semibold text-[#2D1F1F] dark:text-white mb-2">
                Can I track my order?
              </h3>
              <p className="text-[#2D1F1F]/70 dark:text-white/70 text-sm">
                Yes, once your order is shipped, you&apos;ll receive a tracking number 
                via email to monitor your delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
