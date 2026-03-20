import { MapPin, Users, Wifi, ParkingCircle, Table2, Phone, Star } from "lucide-react";

const locations = [
  {
    name: "Armistice Boulevard",
    address: "510 Armistice Boulevard",
    city: "Pawtucket, RI 02861",
    phone: "(401) 527-0017",
    image: "https://nebula.wsimg.com/0acf053a927e6e173f2b4c91be8fb7d9?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1"
  },
  {
    name: "Central Avenue",
    address: "520 Central Avenue",
    city: "Pawtucket, RI 02861",
    phone: "(401) 527-0017",
    image: "https://nebula.wsimg.com/cf0a163a96908cab699fd1d1980b9094?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1"
  },
  {
    name: "Main Street",
    address: "222 Main Street",
    city: "Pawtucket, RI 02860",
    phone: "(401) 527-0017",
    image: "https://nebula.wsimg.com/b780ea7def9b1f5d471ef8c9006c0786?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1"
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
      {/* Royal Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden min-h-96" style={{
        backgroundImage: `url('https://nebula.wsimg.com/7997923d9d16c08ec08f0357ad876f56?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 opacity-70" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg" style={{ color: "#d79696" }}>
              Our Elegant Venues
            </h1>
            <p className="text-xl text-white leading-relaxed drop-shadow-lg">
              Discover three stunning locations across Rhode Island, each meticulously designed to provide the perfect backdrop for your unforgettable celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Premium Amenities - Royal Style */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ color: "#d79696" }}>Premium Amenities</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#d79696" }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border-2 transition-all duration-300 text-center bg-gradient-to-br from-background to-muted/20"
                style={{ borderColor: "rgba(215, 150, 150, 0.3)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#d79696";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(215, 150, 150, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(215, 150, 150, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <amenity.icon size={48} style={{ color: "#d79696" }} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{amenity.title}</h3>
                <p className="text-muted-foreground">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Locations - Royal Cards */}
      <section className="section-padding" style={{ backgroundColor: "rgba(215, 150, 150, 0.05)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ color: "#d79696" }}>Three Convenient Locations</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#d79696" }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-background border-2 transition-all duration-300 hover:shadow-2xl"
                style={{ borderColor: "rgba(215, 150, 150, 0.3)" }}
              >
                {/* Location Image */}
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold shadow-sm" style={{ color: "#d79696" }}>
                    Available
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: "#d79696" }}>{location.name}</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin size={24} style={{ color: "#d79696" }} className="flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">{location.address}</p>
                        <p className="text-muted-foreground">{location.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone size={24} style={{ color: "#d79696" }} className="flex-shrink-0" />
                      <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="hover:underline" style={{ color: "#d79696" }}>
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <Star size={18} style={{ color: "#d79696" }} fill="#d79696" />
                      <span className="text-sm font-semibold">Premium Venue</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      <strong>Capacity:</strong> Up to 110 guests
                    </p>
                    <a href="/contact" className="w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center text-white hover:shadow-lg inline-block" style={{ backgroundColor: "#d79696" }}>
                      Book This Location
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Tour Videos */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ color: "#d79696" }}>Virtual Venue Tours</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#d79696" }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-border hover:shadow-2xl transition-all duration-300" style={{ borderColor: "rgba(215, 150, 150, 0.3)" }}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/4uh1QBIzp0A"
                title="Boulevard Banquet Hall - Venue Tour 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-border hover:shadow-2xl transition-all duration-300" style={{ borderColor: "rgba(215, 150, 150, 0.3)" }}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/2NohrcbWbQk"
                title="Boulevard Banquet Hall - Venue Tour 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* BYOB Policy - Royal Section */}
      <section className="section-padding" style={{ backgroundColor: "rgba(215, 150, 150, 0.08)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6" style={{ color: "#d79696" }}>Our Unique BYOB Policy</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Boulevard Banquet Hall is the only venue in Rhode Island that allows you to bring your own food and drinks to your event. This unique policy helps you save thousands of dollars while maintaining complete control over your menu and beverage selection.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white" style={{ backgroundColor: "#d79696" }}>
                    ✓
                  </div>
                  <span className="text-muted-foreground">Bring any food and beverages you choose</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white" style={{ backgroundColor: "#d79696" }}>
                    ✓
                  </div>
                  <span className="text-muted-foreground">Save thousands on catering costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white" style={{ backgroundColor: "#d79696" }}>
                    ✓
                  </div>
                  <span className="text-muted-foreground">Complete control over your menu</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white" style={{ backgroundColor: "#d79696" }}>
                    ✓
                  </div>
                  <span className="text-muted-foreground">Professional venue setup included</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="p-8 rounded-2xl border-2 text-center" style={{ backgroundColor: "rgba(215, 150, 150, 0.1)", borderColor: "#d79696" }}>
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-3xl font-bold mb-3" style={{ color: "#d79696" }}>Save Big</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Enjoy premium venue amenities without premium catering costs
                </p>
                <a href="/contact" className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: "#d79696" }}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
