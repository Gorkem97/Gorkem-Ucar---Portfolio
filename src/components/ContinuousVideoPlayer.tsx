import React, { useState, useRef, useEffect } from 'react';
import { ProjectVideo } from '../types';
import { getAssetUrl } from '../utils/assets';

interface ContinuousVideoPlayerProps {
  videos: ProjectVideo[];
  fallbackImage?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  objectFit?: 'cover' | 'contain';
  activeClipIndex?: number;
  onClipChange?: (index: number) => void;
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
  activeClipIndex,
  onClipChange,
}) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = activeClipIndex !== undefined ? activeClipIndex : internalIndex;
  const [hasValidVideo, setHasValidVideo] = useState(false);
  const [failedCount, setFailedCount] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleIndexChange = (newIdx: number) => {
    setInternalIndex(newIdx);
    onClipChange?.(newIdx);
  };

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      video.muted = muted;
      video.defaultMuted = muted;
      if (idx === activeIndex) {
        video.currentTime = 0;
        if (autoPlay) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Autoplay policy handled silently
            });
          }
        }
      } else {
        video.pause();
      }
    });
  }, [activeIndex, autoPlay, muted]);

  if (!videos || videos.length === 0) {
    if (fallbackImage) {
      return (
        <div className={`relative overflow-hidden bg-[#1E232A] ${className}`}>
          <img src={getAssetUrl(fallbackImage)} alt="Cover" className="w-full h-full object-cover" />
        </div>
      );
    }
    return null;
  }

  const handleVideoEnded = (index: number) => {
    if (videos.length === 1) {
      const currentVideo = videoRefs.current[0];
      if (currentVideo) {
        currentVideo.currentTime = 0;
        currentVideo.play().catch(() => {});
      }
      return;
    }
    if (index === activeIndex) {
      const nextIndex = (activeIndex + 1) % videos.length;
      handleIndexChange(nextIndex);
    }
  };

  const handleVideoError = (index: number) => {
    setFailedCount((prev) => prev + 1);
    if (index === activeIndex && videos.length > 1) {
      const nextIndex = (activeIndex + 1) % videos.length;
      handleIndexChange(nextIndex);
    }
  };

  const handleCanPlay = () => {
    setHasValidVideo(true);
  };

  // If all videos failed to load, show fallback image
  if (failedCount >= videos.length && fallbackImage) {
    return (
      <div className={`relative overflow-hidden bg-[#1E232A] ${className}`}>
        <img src={getAssetUrl(fallbackImage)} alt="Cover" className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      {/* Background fallback while loading */}
      {fallbackImage && !hasValidVideo && (
        <img
          src={getAssetUrl(fallbackImage)}
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
              if (el) {
                el.muted = muted;
                el.defaultMuted = muted;
              }
            }}
            src={getAssetUrl(vid.url)}
            autoPlay={autoPlay && isActive}
            muted={muted}
            playsInline={playsInline}
            controls={controls && isActive}
            preload="auto"
            loop={videos.length === 1}
            onCanPlay={handleCanPlay}
            onEnded={() => handleVideoEnded(idx)}
            onError={() => handleVideoError(idx)}
            className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
              objectFit === 'contain' ? 'object-contain' : 'object-cover'
            } ${isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
          />
        );
      })}

      {/* Multiple videos indicator dots */}
      {videos.length > 1 && hasValidVideo && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/40 backdrop-blur-xs pointer-events-none">
          {videos.map((_, dotIdx) => (
            <div
              key={dotIdx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === activeIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
