import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center group">
        <div className="relative w-16 h-20 md:w-32 md:h-36 flex items-center justify-center bg-white/5 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden">
            {/* Subtle Glass Shine */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

            <span className="text-2xl md:text-6xl font-mono font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                {value.toString().padStart(2, '0')}
            </span>
        </div>
        <span className="mt-2 md:mt-5 text-[8px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] text-white/70 uppercase">
            {label}
        </span>
    </div>
);

const Separator = () => (
    <div className="flex flex-col items-center justify-center h-20 md:h-36 pt-0 px-0.5 md:px-2">
        <div className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.6)] mb-4 md:mb-8" />
        <div className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
    </div>
);

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('March 13, 2026 00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="mt-20 mb-12 w-full max-w-5xl mx-auto px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
        >
            <div className="flex flex-col items-center">
                <h3 className="text-center text-[10px] md:text-xs font-bold tracking-[0.6em] text-white uppercase mb-12 relative">
                    <span className="relative z-10">Innovation Launch Countdown</span>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </h3>

                <div className="flex justify-center items-center gap-2 md:gap-10">
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <Separator />
                    <TimeUnit value={timeLeft.hours} label="Hrs" />
                    <Separator />
                    <TimeUnit value={timeLeft.minutes} label="Min" />
                    <Separator />
                    <TimeUnit value={timeLeft.seconds} label="Sec" />
                </div>
            </div>
        </motion.div>
    );
};

export default Countdown;
