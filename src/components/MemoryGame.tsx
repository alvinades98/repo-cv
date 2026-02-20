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
        <div className="max-w-lg mx-auto">
            {/* Header Stats */}
            <div className="flex items-center justify-between mb-6 px-1">
                <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                        <span className="text-gray-500 dark:text-gray-400">{t.game.moves}</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">{moves}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                        <span className="text-gray-500 dark:text-gray-400">⏱</span>
                        <span className="font-bold font-mono text-gray-900 dark:text-white">{formatTime(timer)}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                        <span className="text-gray-500 dark:text-gray-400">{t.game.pairs}</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">{matches}/{EMOJIS.length}</span>
                    </div>
                </div>
                <button
                    onClick={resetGame}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300 transition-all hover:scale-105"
                >
                    {t.game.reset}
                </button>
            </div>

            {/* Best Score */}
            {bestScore !== null && (
                <div className="text-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                    🏆 {t.game.best}: <span className="font-bold text-blue-600 dark:text-blue-400">{bestScore} {t.game.bestMoves}</span>
                </div>
            )}

            {/* Game Grid */}
            <div className="grid grid-cols-4 gap-3">
                {cards.map((card) => (
                    <button
                        key={card.id}
                        onClick={() => handleCardClick(card.id)}
                        disabled={card.isMatched}
                        className={`
              aspect-square rounded-xl text-3xl md:text-4xl font-bold
              transition-all duration-300 transform
              ${card.isFlipped || card.isMatched
                                ? 'bg-white dark:bg-white/10 border-blue-400 dark:border-blue-500/50 scale-95 rotate-0'
                                : 'bg-blue-500 dark:bg-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer'
                            }
              ${card.isMatched ? 'opacity-60 scale-90' : ''}
              border-2 border-gray-200 dark:border-white/10
            `}
                        style={{ perspective: '600px' }}
                    >
                        <span
                            className={`block transition-all duration-300 ${card.isFlipped || card.isMatched
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-50'
                                }`}
                        >
                            {card.isFlipped || card.isMatched ? card.emoji : ''}
                        </span>
                        {!card.isFlipped && !card.isMatched && (
                            <span className="text-white/30 text-lg">?</span>
                        )}
                    </button>
                ))}
            </div>

            {/* Win Overlay */}
            {gameWon && (
                <div className="mt-6 text-center p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                    <div className="text-4xl mb-2">🎉</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {t.game.youWon}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                        {t.game.completedIn} <span className="font-bold text-blue-600 dark:text-blue-400">{moves} {t.game.bestMoves}</span> {t.game.and} <span className="font-bold">{formatTime(timer)}</span>
                    </p>
                    <button
                        onClick={resetGame}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
                    >
                        {t.game.playAgain}
                    </button>
                </div>
            )}
        </div>
    );
}
