"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  User,
} from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isVisible, setIsVisible] = useState(false);

  // Subtle fade-in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      // Sending the email via EmailJS
      await emailjs.sendForm(
        "service_4532u28",   // Your Service ID
        "template_f22qbyl",  // TODO: Replace with your Template ID
        formRef.current!,
        "UYqOnSKj1tR9L8oqi"    // TODO: Replace with your Public Key
      );
      
      setStatus("success");
      formRef.current?.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("FAILED...", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#071827] px-4 py-20 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div 
        className={`relative z-10 w-full max-w-2xl transform transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Contact <span className="text-sky-300">Me</span>
          </h2>
          <p className="mx-auto max-w-lg text-lg text-slate-400">
            Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
          </p>
        </div>

        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="professional-panel animate-soft-pop rounded-lg p-8"
        >
          <div className="space-y-6">
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-500 transition-colors group-focus-within:text-sky-300" />
              </div>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full rounded-md border border-slate-700 bg-slate-950/50 py-3 pl-12 pr-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-500 transition-colors group-focus-within:text-sky-300" />
              </div>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full rounded-md border border-slate-700 bg-slate-950/50 py-3 pl-12 pr-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
              />
            </div>

            <div className="relative group">
              <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                <MessageSquare className="h-5 w-5 text-slate-500 transition-colors group-focus-within:text-sky-300" />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="w-full resize-none rounded-md border border-slate-700 bg-slate-950/50 py-3 pl-12 pr-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="shine-button flex w-full items-center justify-center gap-2 rounded-md bg-sky-500 px-6 py-3.5 font-medium text-white shadow-lg shadow-sky-950/35 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 text-sky-400 bg-sky-400/10 p-3 rounded-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
                <CheckCircle2 className="h-5 w-5" />
                <p className="text-sm font-medium">Message sent successfully! I'll be in touch.</p>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 text-rose-400 bg-rose-400/10 p-3 rounded-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
                <AlertCircle className="h-5 w-5" />
                <p className="text-sm font-medium">Something went wrong. Please try again.</p>
              </div>
            )}

          </div>
        </form>
      </div>
    </section>
  );
}

