import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { id: 1, title: "Elegant Venue Entrance", category: "Venue", image: "https://nebula.wsimg.com/0acf053a927e6e173f2b4c91be8fb7d9?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 2, title: "Beautiful Decorated Hall", category: "Decoration", image: "https://nebula.wsimg.com/7997923d9d16c08ec08f0357ad876f56?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 3, title: "Grand Event Space", category: "Venue", image: "https://nebula.wsimg.com/cf0a163a96908cab699fd1d1980b9094?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 4, title: "Elegant Table Setup", category: "Setup", image: "https://nebula.wsimg.com/d3faca7b9c0cee6aacd9abf14fbf0eba?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 5, title: "Premium Venue Setup", category: "Setup", image: "https://nebula.wsimg.com/2dc8676e04cc7709aa26e26124afef26?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 6, title: "Decorated Event Space", category: "Decoration", image: "https://nebula.wsimg.com/57af97f425f4a6b20cb0c5ac664d1217?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 7, title: "Intimate Celebration", category: "Event", image: "https://nebula.wsimg.com/222fbd0859a1760d85a0dbc9301527f8?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 8, title: "Full Venue View", category: "Venue", image: "https://nebula.wsimg.com/210143e745800d1fab9b96605c8f33c4?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 9, title: "Elegant Interior", category: "Venue", image: "https://nebula.wsimg.com/d875bac63cc02443dee53c8e352f3b32?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 10, title: "Table Arrangement", category: "Setup", image: "https://nebula.wsimg.com/892b26f588b92fc168f03f84d787d43e?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 11, title: "Event Decoration", category: "Decoration", image: "https://nebula.wsimg.com/678dbe04d7eb486b8ddc73ba9517dbd5?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 12, title: "Venue Exterior", category: "Venue", image: "https://nebula.wsimg.com/b780ea7def9b1f5d471ef8c9006c0786?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 13, title: "Spacious Hall", category: "Venue", image: "https://nebula.wsimg.com/23153f434fa70f509b40d1d5d7bd8fe7?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 14, title: "Celebration Setup", category: "Event", image: "https://nebula.wsimg.com/39dbf0962f956e459f7bb4ecc37714ee?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 15, title: "Modern Lighting", category: "Decoration", image: "https://nebula.wsimg.com/53252e4abf519e162d89d415ed5abc91?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 16, title: "Venue View 2", category: "Venue", image: "https://nebula.wsimg.com/213a7cb88383ed21d5ab77a84fc46b32?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 17, title: "Table Detail", category: "Setup", image: "https://nebula.wsimg.com/1253b8e0c97b0c2fc0f5961e71ded943?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 18, title: "Event Space", category: "Event", image: "https://nebula.wsimg.com/0379f8080bf615ef40955074515e7e18?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 19, title: "Decorated Hall", category: "Decoration", image: "https://nebula.wsimg.com/93f05de6a075966947767f45e7b2d8a1?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
  { id: 20, title: "Venue Interior 3", category: "Venue", image: "https://nebula.wsimg.com/7cdf443a5041de0b046907ab25b26b12?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1" },
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
      {/* Royal Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden min-h-96" style={{
        backgroundImage: `url('https://nebula.wsimg.com/cf0a163a96908cab699fd1d1980b9094?AccessKeyId=F08E3691FA4C6D5F2578&disposition=0&alloworigin=1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 opacity-70" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">Our Gallery</h1>
            <p className="text-xl text-white leading-relaxed drop-shadow-lg">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map(image => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image.id)}
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <p className="text-white text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>

            <div className="relative bg-black rounded-lg overflow-hidden">
              <img
                src={galleryImages.find(img => img.id === selectedImage)?.image}
                alt="Lightbox"
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity">
                <button
                  onClick={handlePrevious}
                  className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            <div className="text-center mt-4 text-white">
              <p className="text-lg font-semibold">
                {galleryImages.find(img => img.id === selectedImage)?.title}
              </p>
              <p className="text-sm text-gray-300 mt-2">
                {filteredImages.findIndex(img => img.id === selectedImage) + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
