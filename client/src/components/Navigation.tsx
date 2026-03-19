import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "The Venue", href: "/venue" },
    { label: "Gallery", href: "/gallery" },
    { label: "Schedule", href: "/schedule" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "Guestbook", href: "/guestbook" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="text-2xl md:text-3xl font-bold text-primary">
            Boulevard
          </div>
          <div className="hidden sm:block text-sm text-muted-foreground">
            Banquet Hall
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="tel:401-527-0017" className="btn-primary inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-primary text-primary-foreground hover:bg-primary/90">
            Call: (401) 527-0017
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border">
              <a href="tel:401-527-0017" className="block btn-primary w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 text-center">
                Call: (401) 527-0017
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
