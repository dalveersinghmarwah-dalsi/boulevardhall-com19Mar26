import { Mail, Phone, MapPin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-16 md:mt-24">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Boulevard Banquet Hall</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Premier banquet hall with 3 convenient locations in Rhode Island. Perfect for weddings, parties, and special events.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:401-527-0017" className="hover:underline">
                  (401) 527-0017
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5" />
                <a href="mailto:armistice@boulevardhall.com" className="hover:underline break-all">
                  armistice@boulevardhall.com
                </a>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4">Our Locations</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>510 Armistice Blvd, Pawtucket, RI</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>520 Central Ave, Pawtucket, RI</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>222 Main St, Pawtucket, RI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-background/70 mb-4 md:mb-0">
            &copy; 2026 Boulevard Banquet Hall. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
