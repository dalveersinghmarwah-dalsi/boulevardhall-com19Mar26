import { Button } from "@/components/ui/button";
import { Check, Music, Crown, Wifi, ParkingCircle, Table2, Users } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Royal Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden min-h-96" style={{
        backgroundImage: `url('https://nebula.wsimg.com/cf0a163a96908cab699fd1d1980b9094?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 opacity-70" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg" style={{ color: "#d79696" }}>Transparent Pricing</h1>
            <p className="text-xl text-white leading-relaxed drop-shadow-lg">
              Competitive rates with no hidden fees. Choose the package that works best for your event.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Weekday */}
            <div className="card-elegant p-8 animate-slideInLeft">
              <h2 className="text-3xl font-bold mb-2">Monday - Thursday</h2>
              <p className="text-muted-foreground mb-8">Excludes holidays</p>

              <div className="space-y-6 mb-8">
                <div className="pb-6 border-b border-border">
                  <h3 className="text-xl font-semibold mb-2">5-Hour Rental</h3>
                  <p className="text-muted-foreground text-sm mb-3">Until 11 PM</p>
                  <div className="text-4xl font-bold text-primary">$349</div>
                </div>

                <div className="pb-6 border-b border-border">
                  <h3 className="text-xl font-semibold mb-2">All-Day Rental</h3>
                  <p className="text-muted-foreground text-sm mb-3">11 AM - 11 PM</p>
                  <div className="text-4xl font-bold text-primary">$399</div>
                </div>

                <div className="pb-6">
                  <h3 className="text-xl font-semibold mb-2">Security Deposit</h3>
                  <p className="text-muted-foreground text-sm mb-3">Refundable within 24 hours</p>
                  <div className="text-2xl font-bold">$100</div>
                </div>
              </div>

              <a href="/contact" className="btn-primary inline-block w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 text-center">
                Book Weekday
              </a>
            </div>

            {/* Weekend */}
            <div className="card-elegant p-8 border-2 border-primary animate-slideInRight">
              <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Most Popular
              </div>
              <h2 className="text-3xl font-bold mb-2">Friday - Sunday</h2>
              <p className="text-muted-foreground mb-8">Premium weekend rates</p>

              <div className="space-y-6 mb-8">
                <div className="pb-6 border-b border-border">
                  <h3 className="text-xl font-semibold mb-2">5-Hour Rental</h3>
                  <p className="text-muted-foreground text-sm mb-3">Until 11 PM</p>
                  <div className="text-4xl font-bold text-primary">$549</div>
                </div>

                <div className="pb-6 border-b border-border">
                  <h3 className="text-xl font-semibold mb-2">All-Day Rental</h3>
                  <p className="text-muted-foreground text-sm mb-3">11 AM - 11 PM</p>
                  <div className="text-4xl font-bold text-primary">$599</div>
                </div>

                <div className="pb-6">
                  <h3 className="text-xl font-semibold mb-2">Security Deposit</h3>
                  <p className="text-muted-foreground text-sm mb-3">Refundable within 24 hours</p>
                  <div className="text-2xl font-bold">$100</div>
                </div>
              </div>

              <a href="/contact" className="btn-primary inline-block w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 text-center">
                Book Weekend
              </a>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-muted/30 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Up to 110 Guests", desc: "Spacious halls for all event sizes" },
                { icon: Wifi, title: "Free Wi-Fi", desc: "High-speed internet for all guests" },
                { icon: ParkingCircle, title: "Free Parking", desc: "Ample parking at all locations" },
                { icon: Table2, title: "Tables & Chairs", desc: "10 round (72\") + 2 long (8\') tables" },
                { icon: Check, title: "BYOB Policy", desc: "Bring your own food and drinks" },
                { icon: Check, title: "No Hidden Fees", desc: "Transparent pricing, always" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <item.icon size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Premium Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="card-elegant p-8 text-center">
              <Music size={48} className="mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">DJ Speaker Rental</h3>
              <p className="text-muted-foreground mb-6">
                Powerful speaker system perfect for music and entertainment
              </p>
              <div className="text-4xl font-bold text-primary mb-2">$79</div>
              <p className="text-sm text-muted-foreground mb-6">
                ✓ Free Delivery<br />
                ✓ No Security Deposit
              </p>
              <Button className="btn-primary w-full">Add to Booking</Button>
            </div>

            <div className="card-elegant p-8 text-center">
              <Crown size={48} className="mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Throne Chair Rental</h3>
              <p className="text-muted-foreground mb-6">
                Elegant 6-foot throne chairs in multiple colors
              </p>
              <div className="text-4xl font-bold text-primary mb-2">$129</div>
              <p className="text-sm text-muted-foreground mb-6">
                ✓ Free Delivery<br />
                ✓ No Security Deposit
              </p>
              <Button className="btn-primary w-full">Add to Booking</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Deposit Details */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Security Deposit Details</h2>
          <div className="space-y-6">
            <div className="card-elegant p-6">
              <h3 className="font-semibold mb-2">Deposit Amount</h3>
              <p className="text-muted-foreground">$100 per booking</p>
            </div>

            <div className="card-elegant p-6">
              <h3 className="font-semibold mb-2">Refund Timeline</h3>
              <p className="text-muted-foreground">Refunded within 24 hours of event completion</p>
            </div>

            <div className="card-elegant p-6">
              <h3 className="font-semibold mb-2">Deductions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Transaction Fee: -$3.98</li>
                <li>• Trash Removal Fee: -$9.98</li>
                <li>• Damage Assessment: Additional charges if applicable</li>
              </ul>
            </div>

            <div className="card-elegant p-6">
              <h3 className="font-semibold mb-2">Hall Requirements</h3>
              <p className="text-muted-foreground mb-3">
                To receive your full refund, the hall must be:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Vacant by 11 PM (no exceptions)</li>
                <li>✓ Left in proper order and condition</li>
                <li>✓ Cleaned and trash removed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Pricing */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Holiday Rates</h2>
          <p className="text-muted-foreground mb-6">
            Holiday dates are charged at weekend rates regardless of the day of the week:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "New Year's Day/Eve",
              "Presidents Day",
              "Memorial Day",
              "Juneteenth",
              "Independence Day",
              "Labor Day",
              "Columbus Day",
              "Veterans Day",
              "Thanksgiving",
              "Christmas Eve/Day"
            ].map((holiday, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <Check size={20} className="text-primary flex-shrink-0" />
                <span>{holiday}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agreement Forms */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Agreement & Documentation</h2>
          <p className="text-muted-foreground mb-8">
            Please review and agree to our rental agreement before booking your event. All guests must comply with venue policies.
          </p>
          <div className="space-y-6">
            <div className="card-elegant p-6 border-l-4" style={{ borderLeftColor: "#d79696" }}>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">📋</span>
                Venue Rental Agreement
              </h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive rental agreement covering all terms, conditions, and policies for your event.
              </p>
              <a href="#" className="inline-block px-4 py-2 rounded-lg font-medium transition-all" style={{ backgroundColor: "#d79696", color: "white" }}>
                View & Download PDF
              </a>
            </div>

            <div className="card-elegant p-6 border-l-4" style={{ borderLeftColor: "#d79696" }}>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">✓</span>
                House Rules & Policies
              </h3>
              <p className="text-muted-foreground mb-4">
                Important guidelines to ensure a smooth and enjoyable event for all guests.
              </p>
              <a href="#" className="inline-block px-4 py-2 rounded-lg font-medium transition-all" style={{ backgroundColor: "#d79696", color: "white" }}>
                View & Download PDF
              </a>
            </div>

            <div className="card-elegant p-6 border-l-4" style={{ borderLeftColor: "#d79696" }}>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">⚖️</span>
                Liability Waiver
              </h3>
              <p className="text-muted-foreground mb-4">
                Standard liability waiver required for all event bookings at Boulevard Banquet Hall.
              </p>
              <a href="#" className="inline-block px-4 py-2 rounded-lg font-medium transition-all" style={{ backgroundColor: "#d79696", color: "white" }}>
                View & Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Payment Information</h2>
          <div className="max-w-2xl mx-auto space-y-4 mb-8">
            <p className="text-lg text-muted-foreground">
              Full payment is due in cash when keys are given to the hall.
            </p>
            <p className="text-muted-foreground">
              ID is required for all bookings.
            </p>
          </div>
          <a href="/contact" className="btn-primary inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-primary text-primary-foreground hover:bg-primary/90">
            Reserve Your Date
          </a>
        </div>
      </section>
    </div>
  );
}
