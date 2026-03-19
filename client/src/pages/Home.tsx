import { Button } from "@/components/ui/button";
import { Calendar, Users, Music, Crown, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slideInLeft">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Celebrate Your
                <span className="block text-primary">Special Moments</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Boulevard Banquet Hall offers three elegant venues perfect for weddings, parties, and unforgettable celebrations. Bring your own food and drinks with our unique BYOB policy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="/contact" className="btn-primary inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-center">
                  Reserve Now
                </a>
                <a href="tel:401-527-0017" className="btn-secondary inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto text-center flex items-center justify-center gap-2">
                  <Phone size={18} />
                  Call (401) 527-0017
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary">3</div>
                  <p className="text-sm text-muted-foreground">Locations</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">110</div>
                  <p className="text-sm text-muted-foreground">Max Capacity</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">BYOB</div>
                  <p className="text-sm text-muted-foreground">Policy</p>
                </div>
              </div>
            </div>

            {/* Right Video Embed */}
            <div className="animate-slideInRight hidden md:block">
              <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3NVesSCHqk4?autoplay=1&mute=1&loop=1&playlist=3NVesSCHqk4"
                  title="Boulevard Banquet Hall - Venue Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Highlights */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Affordable Elegance</h2>
            <div className="divider-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Competitive pricing for all your event needs with no hidden fees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Weekday Pricing */}
            <div className="card-elegant p-8 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl font-bold mb-6 text-primary">Monday - Thursday</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">5 hours (until 11 PM)</span>
                  <span className="text-2xl font-bold text-primary">$349</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">All day (11 AM - 11 PM)</span>
                  <span className="text-2xl font-bold text-primary">$399</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">+ $100 security deposit (refundable)</p>
            </div>

            {/* Weekend Pricing */}
            <div className="card-elegant p-8 border-2 border-primary animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-6 text-primary">Friday - Sunday</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">5 hours (until 11 PM)</span>
                  <span className="text-2xl font-bold text-primary">$549</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">All day (11 AM - 11 PM)</span>
                  <span className="text-2xl font-bold text-primary">$599</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">+ $100 security deposit (refundable)</p>
            </div>
          </div>

          {/* Add-ons */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-6 bg-muted rounded-lg">
              <Music size={32} className="text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold">DJ Speaker Rental</h4>
                <p className="text-sm text-muted-foreground">$79 with free delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-muted rounded-lg">
              <Crown size={32} className="text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Throne Chair Rental</h4>
                <p className="text-sm text-muted-foreground">$129 with free delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Boulevard?</h2>
            <div className="divider-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Up to 110 Guests",
                description: "Spacious halls perfect for intimate gatherings or large celebrations"
              },
              {
                icon: MapPin,
                title: "3 Convenient Locations",
                description: "Choose the venue that works best for your event and guests"
              },
              {
                icon: Calendar,
                title: "BYOB Policy",
                description: "Bring your own food and drinks - save thousands on catering costs"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="card-elegant p-8 text-center animate-scaleIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <feature.icon size={48} className="mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Your Event?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to reserve your date and create unforgettable memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-primary text-primary-foreground hover:bg-primary/90">
              Reserve Your Date
            </a>
            <a href="tel:401-527-0017" className="btn-secondary inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
