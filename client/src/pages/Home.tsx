import { Button } from "@/components/ui/button";
import { Calendar, Users, Music, Crown, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Full-Page Hero Section with YouTube Background */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/3NVesSCHqk4?autoplay=1&mute=1&loop=1&playlist=3NVesSCHqk4&controls=0&modestbranding=1"
            title="Boulevard Banquet Hall - Venue Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
            style={{ pointerEvents: 'none' }}
          ></iframe>
        </div>

        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content - Centered Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container text-center px-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight drop-shadow-lg" style={{ color: "#d79696" }}>
              Boulevard Banquet Hall
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light drop-shadow-lg text-white">
              Celebrate Your Special Moments
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="text-white text-center">
            <p className="text-sm mb-2">Scroll to explore</p>
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
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
              <h3 className="text-2xl font-bold mb-6" style={{ color: "#d79696" }}>Monday - Thursday</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">5 hours (until 11 PM)</span>
                  <span className="text-2xl font-bold" style={{ color: "#d79696" }}>$349</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">All day (11 AM - 11 PM)</span>
                  <span className="text-2xl font-bold" style={{ color: "#d79696" }}>$399</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">+ $100 security deposit (refundable)</p>
            </div>

            {/* Weekend Pricing */}
            <div className="card-elegant p-8 border-2 animate-fadeInUp" style={{ animationDelay: "0.2s", borderColor: "#d79696" }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "#d79696" }}>Friday - Sunday</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">5 hours (until 11 PM)</span>
                  <span className="text-2xl font-bold" style={{ color: "#d79696" }}>$549</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">All day (11 AM - 11 PM)</span>
                  <span className="text-2xl font-bold" style={{ color: "#d79696" }}>$599</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">+ $100 security deposit (refundable)</p>
            </div>
          </div>

          {/* Add-ons */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-6 bg-muted rounded-lg">
              <Music size={32} style={{ color: "#d79696" }} className="flex-shrink-0" />
              <div>
                <h4 className="font-semibold">DJ Speaker Rental</h4>
                <p className="text-sm text-muted-foreground">$79 with free delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-muted rounded-lg">
              <Crown size={32} style={{ color: "#d79696" }} className="flex-shrink-0" />
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
                <feature.icon size={48} style={{ color: "#d79696" }} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding border-y border-border" style={{ backgroundColor: "rgba(215, 150, 150, 0.1)" }}>
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Your Event?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to reserve your date and create unforgettable memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-white" style={{ backgroundColor: "#d79696" }}>
              Reserve Your Date
            </a>
            <a href="tel:401-527-0017" className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border-2" style={{ borderColor: "#d79696", color: "#d79696" }}>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
