import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle } from "lucide-react";

const sampleTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    event: "Wedding Reception",
    rating: 5,
    message: "Boulevard Banquet Hall was the perfect venue for our wedding! The staff was incredibly helpful, and the BYOB policy saved us thousands. Highly recommended!",
    date: "2025-12-15"
  },
  {
    id: 2,
    name: "Michael Chen",
    event: "Corporate Event",
    rating: 5,
    message: "Professional, clean, and spacious. The free Wi-Fi was a lifesaver for our presentation. Will definitely book again!",
    date: "2025-11-20"
  },
  {
    id: 3,
    name: "Patricia Martinez",
    event: "Birthday Party",
    rating: 5,
    message: "Amazing venue! The tables and chairs were included, and the parking was so convenient. Our guests loved it!",
    date: "2025-10-10"
  },
  {
    id: 4,
    name: "David Thompson",
    event: "Anniversary Celebration",
    rating: 5,
    message: "Elegant setting, affordable pricing, and the staff went above and beyond. Thank you for making our anniversary special!",
    date: "2025-09-05"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    event: "Graduation Party",
    rating: 5,
    message: "The venue is beautiful and the BYOB policy is fantastic. We saved so much money and had complete control over the menu!",
    date: "2025-08-22"
  }
];

export default function Guestbook() {
  const [testimonials, setTestimonials] = useState(sampleTestimonials);
  const [formData, setFormData] = useState({
    name: "",
    event: "",
    rating: 5,
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value === "rating" ? parseInt(value) : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTestimonial = {
      id: testimonials.length + 1,
      ...formData,
      rating: parseInt(formData.rating.toString()),
      date: new Date().toISOString().split('T')[0]
    };
    setTestimonials(prev => [newTestimonial, ...prev]);
    setSubmitted(true);
    setFormData({ name: "", event: "", rating: 5, message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

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
            <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ color: "#d79696" }}>Guest Reviews</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Read what our satisfied customers have to say about their events at Boulevard Banquet Hall
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">{testimonials.length}</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">{averageRating} / 5.0 Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Recommended</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="card-elegant p-8 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.message}"
                </p>
                <p className="text-xs text-muted-foreground">
                  {new Date(testimonial.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Share Your Experience</h2>

          <div className="card-elegant p-8">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                Thank you for your review! We appreciate your feedback.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name *</label>
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
                  <label className="block text-sm font-medium mb-2">Event Type *</label>
                  <select
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select event type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Rating *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(rating => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, rating }))}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        size={32}
                        className={formData.rating >= rating ? "fill-primary text-primary" : "text-muted-foreground"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Review *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={5}
                  placeholder="Tell us about your experience at Boulevard Banquet Hall..."
                />
              </div>

              <Button type="submit" className="btn-primary w-full">
                <MessageCircle size={18} className="mr-2" />
                Submit Review
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Own Memories?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of satisfied customers who have celebrated at Boulevard Banquet Hall
          </p>
          <a href="tel:401-527-0017">
            <Button className="btn-primary">
              Book Your Event Today
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
