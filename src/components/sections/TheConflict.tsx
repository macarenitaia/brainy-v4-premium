'use client';

import { motion } from 'framer-motion';

export default function TheConflict() {
    const points = [
        "Incapacidad para escalar sin aumentar costes de nómina.",
        "Competidores cerrando tratos 24/7 mientras tú duermes.",
        "Error humano quemando leads que han costado dinero.",
        "Obsolescencia operativa por miedo a la tecnología real."
    ];

    return (
        <section className="py-32 px-6 bg-black border-y-8 border-white relative overflow-hidden">
            {/* Background Texture/Noise */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/noise.png')] bg-repeat" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter mb-8">
                        EL VIAJE <br />
                        <span className="text-neon-pink">DEL VILLANO</span>
                    </h2>
                    <p className="text-2xl font-bold text-white/60 italic mb-12 max-w-xl">
                        Nadie te dirá esto en una consultoría tradicional: Tu empresa está muriendo lentamente por ineficiencia.
                    </p>

                    <div className="space-y-6">
                        {points.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4 border-l-4 border-neon-pink pl-6 py-2 bg-white/5"
                            >
                                <span className="text-neon-pink font-mono text-xl font-bold">0{i + 1}</span>
                                <p className="text-xl font-black uppercase tracking-tight">{point}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2 relative">
                    <div className="border-8 border-white p-4 bg-white/5 relative z-10">
                        <div className="aspect-video bg-black flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-neon-pink/10 animate-pulse" />
                            <div className="text-4xl md:text-6xl font-black text-white italic text-center px-4 leading-[1.1] z-10">
                                ¿VAS A SEGUIR <br />
                                <span className="text-neon-pink">PERDIENDO?</span>
                            </div>

                            {/* Scanning Line */}
                            <motion.div
                                className="absolute left-0 right-0 h-1 bg-neon-pink/50 z-20"
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </div>

                    {/* Shadow Decor */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full border-8 border-neon-pink -z-0 opacity-30" />
                </div>
            </div>

            <div className="mt-20 text-center">
                <p className="text-3xl md:text-5xl font-black italic uppercase text-white/20 select-none">
                    LA INERCIA ES TU PEOR ENEMIGO // LA INERCIA ES TU PEOR ENEMIGO
                </p>
            </div>
        </section>
    );
}
