"use client";

import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import Image from "next/image";

interface VideoPlayerProps {
  videoSrc: string;
  thumbnailSrc: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc,
  thumbnailSrc,
  className,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [showOverlayButton, setShowOverlayButton] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowOverlayButton(true);
      } else {
        videoRef.current.play();
        setShowThumbnail(false);
        setShowOverlayButton(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div id="community" className={`relative  rounded-lg overflow-hidden ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => {
          setIsPlaying(false);
          setShowThumbnail(true);
          setShowOverlayButton(true);
        }}
        onPause={() => {
          setIsPlaying(false);
          setShowOverlayButton(true);
        }}
        onPlay={() => {
          setIsPlaying(true);
          setShowOverlayButton(false);
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Thumbnail Overlay */}
      {showThumbnail && (
        <div className="absolute inset-0">
          <Image
            src={thumbnailSrc}
            height={100}
            width={100}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Play Button Overlay - Only show when not playing */}
      {showOverlayButton && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlayPause}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 sm:p-6 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <Play
              className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 ml-1"
              fill="currentColor"
            />
          </button>
        </div>
      )}

      {/* Control Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
        {/* Progress Bar */}
        <div
          className="w-full h-1 bg-white bg-opacity-30 rounded-full cursor-pointer mb-3"
          onClick={handleProgressBarClick}
        >
          <div
            className="h-full bg-white rounded-full transition-all duration-100"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between text-white">
          <button
            onClick={togglePlayPause}
            className="flex items-center justify-center w-8 h-8 rounded cursor-pointer hover:bg-opacity-20 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" fill="currentColor" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
            )}
          </button>

          {/* Time Display */}
          <div className="text-sm opacity-80">
            {Math.floor(currentTime / 60)}:
            {Math.floor(currentTime % 60)
              .toString()
              .padStart(2, "0")}{" "}
            / {Math.floor(duration / 60)}:
            {Math.floor(duration % 60)
              .toString()
              .padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
};

const DualVideoSection: React.FC = () => {
  return (
    <div className="w-full max-w-[1144px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* First Video */}
        <VideoPlayer
          videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          thumbnailSrc="/thumbnail.svg"
          className="aspect-video"
        />

        {/* Second Video */}
        <VideoPlayer
          videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          thumbnailSrc="/thumbnail.svg"
          className="aspect-video"
        />
      </div>
    </div>
  );
};

export default DualVideoSection;
