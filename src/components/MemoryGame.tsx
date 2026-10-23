'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from './LanguageProvider';

const EMOJIS = ['🚀', '⚡', '🎨', '💻', '🎯', '🔥', '🌟', '🎮'];

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function createCards(): Card[] {
  const pairs = [...EMOJIS, ...EMOJIS];
  return shuffleArray(pairs).map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false,
  }));
}

export default function MemoryGame() {
  const { t } = useLanguage();
  const [cards, setCards] = useState<Card[]>(createCards);
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('memory-best');
    if (stored) setBestScore(parseInt(stored));
  }, []);

  useEffect(() => {
    if (!isPlaying || gameWon) return;
    const interval = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [isPlaying, gameWon]);

  useEffect(() => {
    if (flippedIds.length !== 2) return;
    setIsLocked(true);
    const [first, second] = flippedIds;
    const firstCard = cards.find((c) => c.id === first)!;
    const secondCard = cards.find((c) => c.id === second)!;

    if (firstCard.emoji === secondCard.emoji) {
      setTimeout(() => {
        setCards((prev) =>
          prev.map((c) =>
            c.id === first || c.id === second ? { ...c, isMatched: true } : c
          )
        );
        setMatches((m) => m + 1);
        setFlippedIds([]);
        setIsLocked(false);
      }, 500);
    } else {
      setTimeout(() => {
        setCards((prev) =>
          prev.map((c) =>
            c.id === first || c.id === second ? { ...c, isFlipped: false } : c
          )
        );
        setFlippedIds([]);
        setIsLocked(false);
      }, 800);
    }
  }, [flippedIds, cards]);

  useEffect(() => {
    if (matches === EMOJIS.length && matches > 0) {
      setGameWon(true);
      if (bestScore === null || moves < bestScore) {
        setBestScore(moves);
        localStorage.setItem('memory-best', moves.toString());
      }
    }
  }, [matches, moves, bestScore]);

  const handleCardClick = useCallback(
    (id: number) => {
      if (isLocked) return;
      const card = cards.find((c) => c.id === id);
      if (!card || card.isFlipped || card.isMatched) return;
      if (flippedIds.length >= 2) return;
      if (!isPlaying) setIsPlaying(true);

      setCards((prev) =>
        prev.map((c) => (c.id === id ? { ...c, isFlipped: true } : c))
      );
      setFlippedIds((prev) => [...prev, id]);
      if (flippedIds.length === 1) {
        setMoves((m) => m + 1);
      }
    },
    [isLocked, cards, flippedIds, isPlaying]
  );

  const resetGame = () => {
    setCards(createCards());
    setFlippedIds([]);
    setMoves(0);
    setMatches(0);
    setIsLocked(false);
    setGameWon(false);
    setTimer(0);
    setIsPlaying(false);
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="memory-game max-w-lg mx-auto">
      {/* Stats bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 px-1 gap-3">
        <div className="flex flex-wrap gap-2 sm:gap-4 text-sm w-full sm:w-auto">
          <div className="neo-game-stat flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card">
            <span className="text-[var(--text-muted)] font-mono text-xs">{t.game.moves}</span>
            <span className="font-bold text-magenta font-mono">{moves}</span>
          </div>
          <div className="neo-game-stat flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card">
            <span className="text-[var(--text-muted)] font-mono text-xs">⏱</span>
            <span className="font-bold font-mono text-[var(--text-main)]">{formatTime(timer)}</span>
          </div>
          <div className="neo-game-stat flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card">
            <span className="text-[var(--text-muted)] font-mono text-xs">{t.game.pairs}</span>
            <span className="font-bold text-cyan-neon font-mono">{matches}/{EMOJIS.length}</span>
          </div>
        </div>
        <button
          onClick={resetGame}
          className="neo-button neo-button--secondary game-reset px-3 py-1.5 text-sm font-medium font-mono shrink-0"
        >
          {t.game.reset}
        </button>
      </div>

      {bestScore !== null && (
        <div className="text-center mb-4 text-sm text-[var(--text-muted)] font-mono">
          🏆 {t.game.best}: <span className="font-bold text-magenta">{bestScore} {t.game.bestMoves}</span>
        </div>
      )}

      {/* Game grid */}
      <div className="grid grid-cols-4 gap-3">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            disabled={card.isMatched}
            className={`neo-game-card aspect-square rounded-xl text-3xl md:text-4xl font-bold ${
              card.isFlipped || card.isMatched ? 'is-revealed' : ''
            } ${card.isMatched ? 'is-matched' : ''}`}
          >
            {/* Face swap remounts the span, which replays the CSS flip-in */}
            {card.isFlipped || card.isMatched ? (
              <span key="emoji" className="neo-game-face block">
                {card.emoji}
              </span>
            ) : (
              <span key="question" className="neo-game-face block text-lg font-mono">
                ?
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Win screen */}
      {gameWon && (
          <div className="neo-card game-win mt-6 text-center p-6">
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-1 font-display tracking-wide">{t.game.youWon}</h3>
            <p className="text-[var(--text-muted)] mb-4 font-light">
              {t.game.completedIn} <span className="font-bold text-magenta">{moves} {t.game.bestMoves}</span> {t.game.and} <span className="font-bold text-cyan-neon">{formatTime(timer)}</span>
            </p>
            <button className="neo-button" onClick={resetGame}>
              {t.game.playAgain}
            </button>
          </div>
      )}
    </div>
  );
}
