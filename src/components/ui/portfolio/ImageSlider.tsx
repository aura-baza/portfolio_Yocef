import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=600&fit=crop&crop=center'
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={testImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />

        ))}
      </div>
    </div>
  );
}