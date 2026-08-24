import React, { useState, useRef, useEffect } from 'react';
import { ProjectVideo } from '../types';

interface ContinuousVideoPlayerProps {
  videos: ProjectVideo[];
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  objectFit?: 'cover' | 'contain';
}

export const ContinuousVideoPlayer: React.FC<ContinuousVideoPlayerProps> = ({
  videos,
  className = '',
  autoPlay = true,
  muted = true,
  controls = false,
  playsInline = true,
  objectFit = 'cover',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Ensure the current active video plays
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

  if (!videos || videos.length === 0) return null;

  const handleVideoEnded = (index: number) => {
    if (index === activeIndex) {
      const nextIndex = (activeIndex + 1) % videos.length;
      setActiveIndex(nextIndex);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
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
            onEnded={() => handleVideoEnded(idx)}
            className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
              objectFit === 'contain' ? 'object-contain' : 'object-cover'
            } ${isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
          />
        );
      })}
    </div>
  );
};
