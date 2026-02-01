'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-start justify-center px-6 pt-20 overflow-hidden">
            <div className="max-w-7xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 pt-10 pb-20"
                >
                    <h1 className="text-[clamp(2.5rem,12vw,8rem)] leading-[0.85] font-black italic uppercase tracking-tighter">
                        ¿VAS A <span className="text-neon-lime">CONTRAATACAR</span> O A MIRAR?
                    </h1>
                    <p className="mt-8 text-xl md:text-3xl lg:text-4xl max-w-5xl font-black tracking-tight text-white leading-[1.1] uppercase">
                        Tu competencia ya está usando IA para <span className="text-neon-pink underline">robarte cuota de mercado</span>.
                    </p>
                    <p className="mt-6 text-base md:text-2xl max-w-3xl font-bold text-white/50 leading-relaxed italic">
                        No somos una "agencia de marketing". Somos tu unidad de contraataque táctico. Implementamos sistemas deterministas que cierran ventas mientras tú duermes.
                    </p>
                    <div className="mt-12 flex flex-wrap gap-6">
                        <Link href="/contacto" className="brutalist-button text-xl px-12 py-6 inline-block">
                            Operar Ahora (Lead Filter)
                        </Link>
                        <Link href="/contacto?ref=roi" className="px-10 py-5 border-4 border-white font-black uppercase hover:bg-neon-lime hover:text-black hover:border-neon-lime transition-all tracking-widest text-lg flex items-center">
                            Auditoría ROI
                        </Link>
                    </div>
                </motion.div>

                {/* Floating Decals */}
                <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="text-[20rem] font-black leading-none select-none text-neon-pink rotate-90">
                        SYSTEM
                    </div>
                </motion.div>

                <div className="absolute bottom-10 left-6 text-sm font-mono tracking-widest text-white/40 uppercase">
          // [01] AGENTIC SYNERGY_026
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-neon-lime/5 -skew-x-12 transform origin-top-right pointer-events-none" />
        </section>
    );
}
