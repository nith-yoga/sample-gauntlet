'use client';
import { useState } from 'react';
import YouTube from 'react-youtube';
import { gameData, type TrackData } from '../lib/dataset';
import { validateGuess } from '../lib/game-logic';

const shuffle = (array: TrackData[]): TrackData[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const generateDeck = () => {
  const tiers = [1, 2, 3, 4, 5];
  return tiers.flatMap(tier => 
    shuffle(gameData.filter(t => t.tier === tier)).slice(0, 4)
  );
};

export default function GameBoard() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'reveal' | 'ended'>('start');  const [roundIndex, setRoundIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [playlist, setPlaylist] = useState<TrackData[]>(generateDeck);
  const [showRules, setShowRules] = useState(false);
  const ATTRACT_MODE_VIDEOS = [
  "GF8aaTu2kg0",
  "Np21rH7Ldto",
  "C217vygclrk",
  "Q4VK9_CfOLQ",
  "QWaWsgBbFsA",
  "dKJfJMMsqX4",
  "phaJXp_zMYM",
  "QZXc39hT8t4"
  ];

  const [menuVideoId] = useState(() => {
  const randomIndex = Math.floor(Math.random() * ATTRACT_MODE_VIDEOS.length);
  return ATTRACT_MODE_VIDEOS[randomIndex];
  });

  const currentTrack = playlist[roundIndex];

  const restartGame = () => {
    setPlaylist(generateDeck());
    setRoundIndex(0);
    setLives(3);
    setGameState('playing');
    setGuess("");
    setMessage("");
  };

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    if (gameState !== 'playing' || !guess) return;

    const isCorrect = validateGuess(guess, currentTrack);

    if (isCorrect) {
      setMessage(`🔥 Correct!`);
      setGameState('reveal');
    } else {
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives <= 0) {
        setGameState('ended');
      } else {
        setMessage(`Incorrect!`);
        setGuess("");
      }
    }
  };

  const nextRound = () => {
    if (roundIndex + 1 < playlist.length) {
      setRoundIndex(prev => prev + 1);
      setGameState('playing');
      setGuess("");
      setMessage("");
    } else {
      setGameState('ended');
    }
  };

  if (!currentTrack) return null;

  if (gameState === 'start') {
    return (
      <main className="h-screen w-full flex flex-col items-center justify-center bg-black p-4 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <YouTube 
            videoId={menuVideoId}
            opts={{
              width: '100%',
              height: '100%',
              playerVars: { 
                autoplay: 1, 
                controls: 0, 
                mute: 1, 
                loop: 1, 
                start: 0,
                modestbranding: 1,
              }
            }}
        className="absolute inset-0 w-full h-full"
        iframeClassName="w-full h-full object-cover scale-150 grayscale"          />
        </div>

        <div className="z-10 text-center space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="space-y-2">
            <h1 className="text-8xl font-black italic tracking-tighter uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Sample <span className="text-blue-500">Gauntlet</span>
            </h1>
            <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-sm">The Crate Digger Challenge</p>
          </div>

          <button 
            onClick={() => setGameState('playing')}
            className="group relative px-12 py-5 bg-blue-600 hover:bg-white text-white hover:text-black font-black uppercase italic text-2xl transition-all rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.5)] cursor-pointer"
          >
            Start
            <div className="absolute -inset-1 bg-blue-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen w-full flex flex-col overflow-hidden bg-black p-4 relative text-white">
      
    {/* HEADER SECTION */}
    <header className="flex justify-between items-center mb-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 flex-none">

      {/* LEFT SIDE: Progress & Tier */}
      <div className="space-y-1">
        <h2 className="text-xl font-bold tracking-tight">
          Round {roundIndex + 1} <span className="text-zinc-500 text-sm">/ {playlist.length}</span>
        </h2>
        <div className="flex gap-1.5 items-center">
          {[1, 2, 3, 4, 5].map((t) => (
            <div 
              key={t}
              className={`h-1.5 w-6 rounded-full transition-all duration-500 ${currentTrack.tier >= t ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'bg-zinc-800'}`}
            />
          ))}
          <span className="text-[10px] uppercase font-bold text-blue-400 ml-1 tracking-widest">
            Tier {currentTrack.tier}
          </span>
        </div>
      </div>
        
      {/* RIGHT SIDE: Rules & Lives */}
      <div className="flex items-center gap-6">
        <button 
          onClick={() => setShowRules(true)}
          className="text-zinc-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 border border-zinc-800 px-3 py-1.5 rounded-full bg-black/20"
        >
          <span className="w-4 h-4 rounded-full border border-zinc-500 flex items-center justify-center text-[8px]">?</span>
          Rules
        </button>
        
        {/* Lives Container */}
        <div className="flex items-center gap-3 bg-black/40 px-3 py-2 rounded-lg border border-zinc-800/50">
          <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-tighter">Lives</span>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <svg 
                key={i} 
                viewBox="0 0 24 24" 
                className={`w-5 h-5 transition-all duration-300 ${i < lives ? 'fill-red-500 drop-shadow-[0_0_3px_rgba(239,68,68,0.5)]' : 'fill-zinc-900 stroke-zinc-800 stroke-1'}`}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </header>

      {/* 5. The Video Player Area */}
      <div className="flex-1 flex items-center justify-center min-h-0 p-4">
        <div className="w-full max-w-4xl aspect-video bg-zinc-900 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-zinc-800 relative">
          <YouTube 
            key={`${currentTrack.id}-${gameState}`}
            videoId={gameState === 'playing' ? currentTrack.sample.videoId : currentTrack.flip.videoId}
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 1, 
                start: gameState === 'playing' ? currentTrack.sample.startSeconds : currentTrack.flip.startSeconds,
                modestbranding: 1,
                controls: 0,
              }
            }}
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>

      {/* 6. Controls Area - Now with a fixed height container */}
      <div className="h-32 flex-none relative">
        {gameState === 'playing' ? (
          <div className="max-w-4xl mx-auto h-full flex flex-col justify-center relative animate-in fade-in">
            <form onSubmit={handleGuess} className="flex gap-2">
              <input 
                className="flex-1 p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-lg outline-none focus:border-blue-500"
                placeholder="Artist - Track Title"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                autoComplete='off'
              />
              <button type="submit" className="bg-blue-600 text-white px-10 py-4 rounded-lg font-black hover:bg-blue-500 transition-all uppercase italic">
                Guess
              </button>
            </form>
          </div>
        ) : gameState === 'reveal' ? (
          <div className="max-w-4xl mx-auto h-full flex items-center">
            <div className="w-full bg-blue-600 p-5 rounded-xl border-b-4 border-blue-800 animate-in slide-in-from-bottom-6 duration-500 flex justify-between items-center gap-6">
              <div className="min-w-0">
                <h2 className="text-xl font-black italic uppercase tracking-tighter text-blue-100 leading-none mb-1">{message}</h2>
                <p className="text-xl font-black uppercase tracking-tight truncate border-l-4 border-white pl-3">
                  {currentTrack.flip.artist} - {currentTrack.flip.track}
                </p>
              </div>
              <button 
                onClick={nextRound} 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-black text-lg hover:bg-zinc-100 transition-transform active:scale-95 uppercase italic whitespace-nowrap"
              >
                Next Round →
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {/* END GAME OVERLAY */}
      {gameState === 'ended' && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-6 text-center animate-in fade-in duration-500">
          <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-2">
            {lives > 0 ? <span className="text-yellow-400">Gauntlet Cleared</span> : <span className="text-red-600">Game Over</span>}
          </h2>
          <p className="text-zinc-500 uppercase tracking-widest mb-8">Final Score: {lives > 0 ? playlist.length : roundIndex} / {playlist.length}</p>
          <p className="text-zinc-500 text-sm italic">
            {lives > 0 && roundIndex === playlist.length - 1 
              ? "PERFECT RUN! You're a crate-digging legend." 
              : lives > 0 
                ? "You've got the ears of a master producer." 
                : "The crates were too deep this time."}
          </p>
          <button
            onClick={restartGame}
            className="mt-8 px-12 py-4 bg-white text-black font-black uppercase italic hover:bg-yellow-400 transition-colors text-xl"
          >
            Play Again
          </button>
        </div>
      )}

      {showRules && (
        <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-6 animate-in fade-in duration-200">
          <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-blue-500">How to Play</h3>
              <button onClick={() => setShowRules(false)} className="text-zinc-500 hover:text-white text-2xl">&times;</button>
            </div>

            <ul className="space-y-4 text-sm text-zinc-300">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">01</span>
                <span>Identify the **original artist** of the sampled track playing in the video.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">02</span>
                <span>Use the format: <strong className="text-white font-mono text-xs">Artist - Song Name</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">03</span>
                <span><strong>Use full names for best results.</strong> For example, the game may not recognize &quot;Carti&quot; in place of &quot;Playboi Carti&quot;.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">04</span>
                <span>You have 3 lives. Clearing a tier unlocks the next level of difficulty.</span>
              </li>
            </ul>

            <button 
              onClick={() => setShowRules(false)}
              className="w-full py-4 bg-white text-black font-black uppercase italic hover:bg-blue-500 transition-colors rounded-xl"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </main>
  );
}