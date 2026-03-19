import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Users, Wifi, ParkingCircle, Table2, Phone } from "lucide-react";

const locations = [
  {
    name: "Armistice Boulevard",
    address: "510 Armistice Boulevard",
    city: "Pawtucket, RI 02861",
    phone: "(401) 527-0017",
    image: "Armistice Location"
  },
  {
    name: "Central Avenue",
    address: "520 Central Avenue",
    city: "Pawtucket, RI 02861",
    phone: "(401) 527-0017",
    image: "Central Avenue Location"
  },
  {
    name: "Main Street",
    address: "222 Main Street",
    city: "Pawtucket, RI 02860",
    phone: "(401) 527-0017",
    image: "Main Street Location"
  }
];

const amenities = [
  {
    icon: Users,
    title: "Capacity",
    description: "Up to 110 guests per location"
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "High-speed internet for all guests"
  },
  {
    icon: ParkingCircle,
    title: "Free Parking",
    description: "Ample parking available at all venues"
  },
  {
    icon: Table2,
    title: "Tables & Chairs",
    description: "10 round tables (72\") + 2 long tables (8\') included"
  }
];

export default function TheVenue() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background to-accent/5">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Venues</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Three elegant locations across Rhode Island, each offering the same premium amenities and exceptional service
          </p>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Premium Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="card-elegant p-6 text-center">
                <amenity.icon size={40} className="mx-auto text-primary mb-4" />
                <h3 className="font-bold mb-2">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Three Convenient Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, idx) => (
              <div
                key={idx}
                className="card-elegant overflow-hidden animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-b border-border">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto text-primary/50 mb-2" />
                    <p className="text-muted-foreground text-sm">{location.image}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{location.name}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">{location.address}</p>
                        <p className="text-muted-foreground">{location.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-primary flex-shrink-0" />
                      <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Capacity:</strong> Up to 110 guests
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      <strong>Features:</strong> Free Wi-Fi, Free Parking, Tables & Chairs Included
                    </p>
                    <a href="/contact" className="btn-primary inline-block w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 text-center">
                      Book This Location
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BYOB */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Unique BYOB Policy</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Boulevard Banquet Hall is the only venue in Rhode Island that allows you to bring your own food and drinks to your event. This unique policy helps you save thousands of dollars while maintaining complete control over your menu and beverage selection.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-background flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <span>Bring your own food and catering</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-background flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <span>Alcohol beverages allowed</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-background flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <span>Choose your own menu and drinks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-background flex items-center justify-center flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <span>Significant cost savings</span>
                </li>
              </ul>
              <a href="/contact" className="btn-primary inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-primary text-primary-foreground hover:bg-primary/90">
                Reserve Your Venue Today
              </a>
            </div>
            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border-2 border-primary/30 hidden md:flex">
              <div className="text-center">
                <Users size={64} className="mx-auto text-primary/50 mb-4" />
                <p className="text-muted-foreground">BYOB Celebration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Serving the Entire Region</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
            We proudly serve customers from all of Rhode Island and Massachusetts, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Pawtucket", "Providence", "East Providence", "Lincoln",
              "Warwick", "Cranston", "Cumberland", "Johnston",
              "Central Falls", "Attleboro", "North Attleboro", "Norton",
              "Taunton", "Plainville"
            ].map((city, idx) => (
              <div key={idx} className="text-center p-4 bg-muted rounded-lg">
                <p className="font-medium">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
