'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceHeroProps {
    title: string;
    hook: string;
    icon: ReactNode;
    accentColor: string;
}

export default function ServiceHero({ title, hook, icon, accentColor }: ServiceHeroProps) {
    return (
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-start"
                >
                    <div className={`mb-8 p-4 border-4 border-white ${accentColor.replace('text-', 'bg-')}/10`}>
                        {icon}
                    </div>
                    <h1 className="text-[clamp(3rem,12vw,10rem)] leading-[0.8] font-black italic uppercase tracking-tighter mb-8">
                        {title}
                    </h1>
                    <p className={`text-2xl md:text-5xl font-black max-w-5xl leading-[1.1] uppercase ${accentColor}`}>
                        {hook}
                    </p>
                </motion.div>
            </div>

            {/* Background Decor */}
            <div className={`absolute top-0 right-0 w-1/2 h-full ${accentColor.replace('text-', 'bg-')}/5 -skew-x-12 transform origin-top-right pointer-events-none`} />
        </section>
    );
}
