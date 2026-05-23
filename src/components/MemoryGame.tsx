'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className="max-w-lg mx-auto">
      {/* Stats bar */}
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card border border-white/5">
            <span className="text-[var(--text-muted)] font-mono text-xs">{t.game.moves}</span>
            <span className="font-bold text-magenta font-mono">{moves}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card border border-white/5">
            <span className="text-[var(--text-muted)] font-mono text-xs">⏱</span>
            <span className="font-bold font-mono text-[var(--text-main)]">{formatTime(timer)}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card border border-white/5">
            <span className="text-[var(--text-muted)] font-mono text-xs">{t.game.pairs}</span>
            <span className="font-bold text-cyan-neon font-mono">{matches}/{EMOJIS.length}</span>
          </div>
        </div>
        <button
          onClick={resetGame}
          className="px-3 py-1.5 text-sm font-medium rounded-lg glass-card hover:scale-105 transition-all text-[var(--text-muted)] hover:text-cyan-neon border border-white/5 hover:border-cyan-neon/30 font-mono"
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
          <motion.button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            disabled={card.isMatched}
            className={`aspect-square rounded-xl text-3xl md:text-4xl font-bold transition-all duration-300 border ${
              card.isFlipped || card.isMatched
                ? 'glass-card border-cyan-neon/40'
                : 'bg-gradient-to-br from-magenta to-purple-neon hover:shadow-[0_0_24px_rgba(255,45,120,0.4)] cursor-pointer border-transparent'
            } ${card.isMatched ? 'opacity-60' : ''}`}
            whileHover={!card.isFlipped && !card.isMatched ? { scale: 1.05 } : {}}
            whileTap={!card.isFlipped && !card.isMatched ? { scale: 0.95 } : {}}
            animate={card.isMatched ? { scale: [1, 1.15, 1], rotate: [0, -3, 3, 0] } : {}}
            transition={{ duration: 0.3 }}
            style={{ perspective: '600px' }}
          >
            <AnimatePresence mode="wait">
              {card.isFlipped || card.isMatched ? (
                <motion.span
                  key="emoji"
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {card.emoji}
                </motion.span>
              ) : (
                <motion.span
                  key="question"
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block text-white/40 text-lg font-mono"
                >
                  ?
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>

      {/* Win screen */}
      <AnimatePresence>
        {gameWon && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="mt-6 text-center p-6 rounded-2xl border border-magenta/30"
            style={{
              background: 'linear-gradient(135deg, rgba(255,45,120,0.1), rgba(155,48,255,0.1), rgba(0,245,255,0.1))',
            }}
          >
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-1 font-display tracking-wide">{t.game.youWon}</h3>
            <p className="text-[var(--text-muted)] mb-4 font-light">
              {t.game.completedIn} <span className="font-bold text-magenta">{moves} {t.game.bestMoves}</span> {t.game.and} <span className="font-bold text-cyan-neon">{formatTime(timer)}</span>
            </p>
            <CyberButton variant="primary" onClick={resetGame}>
              {t.game.playAgain}
            </CyberButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Inline CyberButton for MemoryGame win screen
function CyberButton({ variant, onClick, children }: { variant: 'primary' | 'ghost'; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] px-6 py-3 transition-all duration-300 ${
        variant === 'primary'
          ? 'bg-gradient-to-r from-magenta to-purple-neon text-white shadow-[0_0_24px_rgba(255,45,120,0.5)] hover:shadow-[0_0_36px_rgba(255,45,120,0.7)] hover:-translate-y-0.5'
          : 'bg-transparent text-[var(--text-main)] border border-cyan-neon/40 hover:border-cyan-neon hover:shadow-[inset_0_0_20px_rgba(0,245,255,0.15)]'
      }`}
    >
      {children}
    </button>
  );
}
