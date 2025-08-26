import React, { useState, useEffect } from 'react';

const AnimatedStatsFlip = ({ stats }: { stats: string[] }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % stats.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [stats.length]);

    const parsedStats = stats.map((s: string) => {
        const lastSpaceIndex = s.lastIndexOf(' ');
        if (lastSpaceIndex === -1) {
            return { value: s, label: '' };
        }
        const value = s.substring(0, lastSpaceIndex);
        const label = s.substring(lastSpaceIndex + 1);
        return { value, label };
    });

    return (
        <div className="relative h-48 sm:h-72 lg:h-96 flex items-center justify-center bg-transparent rounded-2xl  overflow-hidden p-4">
            <div className="text-center text-white perspective-1000">
                <div key={index} className="animate-flip-in">
                    <p className="text-4xl md:text-8xl font-bold tracking-tight">{parsedStats[index].value}</p>
                    {parsedStats[index].label && (
                        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mt-2">{parsedStats[index].label}</p>
                    )}
                </div>
            </div>
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                @keyframes flip-in {
                    0% {
                        opacity: 0;
                        transform: rotateX(-90deg);
                    }
                    50% {
                        opacity: 1;
                        transform: rotateX(0deg);
                    }
                    100% {
                        opacity: 1;
                        transform: rotateX(0deg);
                    }
                }
                .animate-flip-in {
                    animation: flip-in 1.5s ease-out forwards;
                    backface-visibility: hidden;
                }
            `}</style>
        </div>
    );
};

export function AnimatedStats() {
    const statsData = [
        '1000+ Deliveries', 
        '25+ Countries', 
        '130+ Clients', 
        'And More...'
    ];

    return (
        <div>
            <div className="w-full max-w-lg">
                    <AnimatedStatsFlip stats={statsData} />
            </div>
        </div>
    );
}
