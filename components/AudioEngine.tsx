'use client';
import { useState, useRef } from 'react';
import YouTube, { YouTubeEvent, YouTubePlayer } from 'react-youtube';

interface AudioEngineProps {
  videoId: string;
  startSeconds: number;
}

export default function AudioEngine({ videoId, startSeconds }: AudioEngineProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  
  // 1. Explicitly type the Ref as YouTubePlayer or null
  const playerRef = useRef<YouTubePlayer | null>(null);

  // 2. Explicitly type the Event as a YouTubePlayer event
  const onReady = (event: YouTubeEvent<YouTubePlayer>) => {
    playerRef.current = event.target;
    setIsReady(true);
  };

  const togglePlay = () => {
    if (!isReady || !playerRef.current) return;
    
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Custom UI Button */}
      <button 
        onClick={togglePlay}
        disabled={!isReady}
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg disabled:opacity-50 hover:bg-blue-700 transition"
      >
        {!isReady ? 'Loading Audio...' : isPlaying ? 'Pause Sample' : 'Play Sample'}
      </button>

      {/* Hidden YouTube Player */}
      <div className="absolute top-0 left-0 w-0 h-0 overflow-hidden opacity-0 pointer-events-none">
        <YouTube 
          videoId={videoId} 
          opts={{
            playerVars: {
              autoplay: 0,
              controls: 0,
              start: startSeconds,
            },
          }} 
          onReady={onReady} 
        />
      </div>
    </div>
  );
}