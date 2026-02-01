'use client';

import { motion } from 'framer-motion';

interface ServiceConflictProps {
    title: string;
    problem: string;
    points: string[];
}

export default function ServiceConflict({ title, problem, points }: ServiceConflictProps) {
    return (
        <section className="py-24 px-6 bg-black border-y-8 border-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/2">
                    <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-[0.9] mb-8">
                        {title}
                    </h2>
                    <p className="text-2xl font-bold text-white/60 mb-12 italic">
                        {problem}
                    </p>
                </div>
                <div className="lg:w-1/2 space-y-6">
                    {points.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 border-4 border-white/10 hover:border-neon-pink/50 transition-all bg-white/5"
                        >
                            <p className="text-xl font-black uppercase tracking-tight">{point}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
