import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { id: 1, title: "Elegant Setup", category: "Setup" },
  { id: 2, title: "Decorated Hall", category: "Decoration" },
  { id: 3, title: "Main Entrance", category: "Venue" },
  { id: 4, title: "Pink Themed Event", category: "Event" },
  { id: 5, title: "Table Arrangement", category: "Setup" },
  { id: 6, title: "Full Hall View", category: "Venue" },
  { id: 7, title: "Lighting Setup", category: "Setup" },
  { id: 8, title: "Celebration", category: "Event" },
  { id: 9, title: "Dining Area", category: "Venue" },
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
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background to-accent/5">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore beautiful moments from our previous events and see the elegance of our venues
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
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
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden border-2 border-border group-hover:border-primary transition-all">
                  <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="text-center">
                      <div className="text-4xl opacity-50 group-hover:opacity-100 transition-opacity">📷</div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors mt-2 text-sm font-medium">
                        {image.title}
                      </p>
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
