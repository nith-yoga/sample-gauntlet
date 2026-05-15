import Fuse from 'fuse.js';
import { TrackData } from './dataset';

export const validateGuess = (userGuess: string, track: TrackData): boolean => {
  // 1. Prepare the targets for fuzzy matching
  // We check against Artist - Song, just Song, and any alternates
  const targets = [
    { text: `${track.flip.artist} - ${track.flip.track}` },
    { text: track.flip.track },
    ...track.flip.alternates.map(alt => ({ text: alt }))
  ];

  // 2. Configure Fuse
  const fuse = new Fuse(targets, {
    keys: ['text'],
    threshold: 0.35, // 0.0 is perfect match, 1.0 is everything. 0.35 allows for typos.
    distance: 100,
    ignoreLocation: true
  });

  // 3. Search and return true if any match is found
  const result = fuse.search(userGuess);
  return result.length > 0;
};