import React, { useState, useRef, useEffect } from 'react';
import { ProjectVideo } from '../types';

interface ContinuousVideoPlayerProps {
  videos: ProjectVideo[];
  fallbackImage?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  objectFit?: 'cover' | 'contain';
}

export const ContinuousVideoPlayer: React.FC<ContinuousVideoPlayerProps> = ({
  videos,
  fallbackImage,
  className = '',
  autoPlay = true,
  muted = true,
  controls = false,
  playsInline = true,
  objectFit = 'cover',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasValidVideo, setHasValidVideo] = useState(false);
  const [failedCount, setFailedCount] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const currentVideo = videoRefs.current[activeIndex];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      if (autoPlay) {
        currentVideo.play().catch(() => {
          // Autoplay policy handled silently
        });
      }
    }
  }, [activeIndex, autoPlay]);

  if (!videos || videos.length === 0) {
    if (fallbackImage) {
      return (
        <div className={`relative overflow-hidden bg-[#1E232A] ${className}`}>
          <img src={fallbackImage} alt="Cover" className="w-full h-full object-cover" />
        </div>
      );
    }
    return null;
  }

  const handleVideoEnded = (index: number) => {
    if (index === activeIndex) {
      const nextIndex = (activeIndex + 1) % videos.length;
      setActiveIndex(nextIndex);
    }
  };

  const handleVideoError = (index: number) => {
    setFailedCount((prev) => {
      const updated = prev + 1;
      return updated;
    });
    if (index === activeIndex) {
      const nextIndex = (activeIndex + 1) % videos.length;
      setActiveIndex(nextIndex);
    }
  };

  const handleCanPlay = () => {
    setHasValidVideo(true);
  };

  // If all videos failed to load, show fallback image
  if (failedCount >= videos.length && fallbackImage) {
    return (
      <div className={`relative overflow-hidden bg-[#1E232A] ${className}`}>
        <img src={fallbackImage} alt="Cover" className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      {/* Background fallback while loading */}
      {fallbackImage && !hasValidVideo && (
        <img
          src={fallbackImage}
          alt="Preview"
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-90"
        />
      )}

      {videos.map((vid, idx) => {
        const isActive = idx === activeIndex;
        return (
          <video
            key={vid.url}
            ref={(el) => {
              videoRefs.current[idx] = el;
            }}
            src={vid.url}
            autoPlay={autoPlay && isActive}
            muted={muted}
            playsInline={playsInline}
            controls={controls && isActive}
            preload="auto"
            onCanPlay={handleCanPlay}
            onEnded={() => handleVideoEnded(idx)}
            onError={() => handleVideoError(idx)}
            className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
              objectFit === 'contain' ? 'object-contain' : 'object-cover'
            } ${isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
          />
        );
      })}
    </div>
  );
};
