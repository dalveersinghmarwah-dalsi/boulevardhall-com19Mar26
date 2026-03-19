import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { id: 1, title: "Elegant Venue Setup", category: "Venue", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663221776678/TcM4jjBH3gYQhAkue9gaQy/venue-1_c7171108.jpg" },
  { id: 2, title: "Beautiful Decorated Hall", category: "Decoration", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663221776678/TcM4jjBH3gYQhAkue9gaQy/venue-2_fd05b865.jpg" },
  { id: 3, title: "Intimate Event Space", category: "Venue", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663221776678/TcM4jjBH3gYQhAkue9gaQy/venue-3_14e95b61.jpg" },
  { id: 4, title: "Elegant Table Arrangement", category: "Setup", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663221776678/TcM4jjBH3gYQhAkue9gaQy/venue-4_845f447e.jpg" },
  { id: 5, title: "Grand Hall View", category: "Venue", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663221776678/TcM4jjBH3gYQhAkue9gaQy/venue-5_d303253c.jpg" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Setup", "Decoration", "Venue", "Event"];
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const handlePrevious = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1].id);
    }
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
            <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ color: "#d79696" }}>Our Gallery</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore beautiful moments from our previous events and see the elegance of our venues
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? "text-white"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
                style={{
                  backgroundColor: filter === category ? "#d79696" : undefined
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, idx) => (
              <div
                key={image.id}
                className="group cursor-pointer animate-scaleIn"
                style={{ animationDelay: `${idx * 0.05}s` }}
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative h-64 rounded-lg overflow-hidden border-2 border-border group-hover:border-primary transition-all">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white font-semibold text-sm">{image.title}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {image.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden border-2 border-primary h-96 md:h-[500px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl opacity-50">📷</div>
                <p className="text-muted-foreground mt-4">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handlePrevious}
                disabled={filteredImages[0].id === selectedImage}
                className="text-white hover:text-primary disabled:opacity-50 transition-colors"
              >
                <ChevronLeft size={32} />
              </button>

              <span className="text-white text-sm">
                {filteredImages.findIndex(img => img.id === selectedImage) + 1} / {filteredImages.length}
              </span>

              <button
                onClick={handleNext}
                disabled={filteredImages[filteredImages.length - 1].id === selectedImage}
                className="text-white hover:text-primary disabled:opacity-50 transition-colors"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
              {filteredImages.map(image => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image.id)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 transition-all ${
                    selectedImage === image.id
                      ? "border-primary"
                      : "border-white/30 hover:border-white/60"
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                    📷
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
