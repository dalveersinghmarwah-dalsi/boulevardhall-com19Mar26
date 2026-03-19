import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    location: "Armistice",
    eventType: "Wedding",
    guests: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        location: "Armistice",
        eventType: "Wedding",
        guests: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Royal Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "rgba(215, 150, 150, 0.15)" }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: "#d79696" }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: "#d79696" }}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ color: "#d79696" }}>Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to book your event? Contact us today to reserve your preferred date and location.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card-elegant p-6">
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <a href="tel:401-527-0017" className="text-primary hover:underline">
                      (401) 527-0017
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available 7 days a week
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-elegant p-6">
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href="mailto:armistice@boulevardhall.com" className="text-primary hover:underline break-all">
                      armistice@boulevardhall.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-elegant p-6">
                <div className="flex items-start gap-4">
                  <Calendar size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Available for consultations<br />
                      7 days a week
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div className="lg:col-span-2">
              <div className="card-elegant p-8">
                <h2 className="text-2xl font-bold mb-6">Reserve Your Event</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                    Thank you! We'll contact you shortly to confirm your reservation.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(401) 555-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Event Date *</label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Location *</label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="Armistice">510 Armistice Boulevard</option>
                        <option value="Central">520 Central Avenue</option>
                        <option value="Main">222 Main Street</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Event Type *</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="Wedding">Wedding</option>
                        <option value="Birthday">Birthday Party</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Corporate">Corporate Event</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Guests</label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Up to 110"
                      max="110"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Additional Information</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      rows={4}
                      placeholder="Tell us about your event..."
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full">
                    Request Reservation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Armistice Boulevard",
                address: "510 Armistice Boulevard",
                city: "Pawtucket, RI 02861"
              },
              {
                name: "Central Avenue",
                address: "520 Central Avenue",
                city: "Pawtucket, RI 02861"
              },
              {
                name: "Main Street",
                address: "222 Main Street",
                city: "Pawtucket, RI 02860"
              }
            ].map((location, idx) => (
              <div key={idx} className="card-elegant p-6 text-center">
                <MapPin size={32} className="mx-auto text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <p className="text-muted-foreground text-sm mb-1">{location.address}</p>
                <p className="text-muted-foreground text-sm">{location.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Need to Reach Us Quickly?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Call or text us anytime - we're available 7 days a week
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:401-527-0017">
              <Button className="btn-primary">
                <Phone size={18} className="mr-2" />
                Call (401) 527-0017
              </Button>
            </a>
            <a href="sms:401-527-0017">
              <Button className="btn-secondary">
                Text Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
