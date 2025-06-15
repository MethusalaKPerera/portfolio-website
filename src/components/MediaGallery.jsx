import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const MediaGallery = ({ gallery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!gallery || gallery.length === 0) return null;

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const currentMedia = gallery[currentIndex];

  // Check if current media is a mobile screenshot
  const isMobileContent = currentMedia.alt && (
    currentMedia.alt.toLowerCase().includes('screen') ||
    currentMedia.alt.toLowerCase().includes('app') ||
    currentMedia.alt.toLowerCase().includes('login') ||
    currentMedia.alt.toLowerCase().includes('gameplay') ||
    currentMedia.alt.toLowerCase().includes('note') ||
    currentMedia.alt.toLowerCase().includes('profile') ||
    currentMedia.alt.toLowerCase().includes('splash') ||
    currentMedia.alt.toLowerCase().includes('onboard')
  );

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4">Project Gallery</h3>

      {/* Main Media Display */}
      <div className={`relative rounded-xl overflow-hidden mb-4 ${
        isMobileContent 
          ? 'aspect-[4/5] max-w-md mx-auto bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center' 
          : 'aspect-video bg-slate-900'
      }`}>
        {currentMedia.type === 'image' ? (
          <img
            src={currentMedia.src} // Directly use the path from `gallery.src`
            alt={currentMedia.alt}
            className={`${
              isMobileContent 
                ? 'h-full w-auto object-contain cursor-pointer' 
                : 'w-full h-full object-cover cursor-pointer'
            }`}
            onClick={() => setIsFullscreen(true)}
          />
        ) : (
          <video
            controls
            className={`${
              isMobileContent 
                ? 'h-full w-auto object-contain' 
                : 'w-full h-full object-cover'
            }`}
            poster={currentMedia.poster}
          >
            <source src={currentMedia.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Navigation Arrows */}
        {gallery.length > 1 && (
          <>
            <button
              onClick={prevMedia}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextMedia}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Media Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {gallery.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {gallery.map((media, index) => (
          <div
            key={index}
            className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden cursor-pointer border-2 transition-colors ${
              index === currentIndex ? 'border-purple-400' : 'border-transparent'
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            {media.type === 'image' ? (
              <img
                src={media.src} // Directly use the path from `gallery.src`
                alt={media.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                <Play size={16} className="text-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && currentMedia.type === 'image' && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60]">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={currentMedia.src} // Directly use the path from `gallery.src`
              alt={currentMedia.alt}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;