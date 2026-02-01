'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ClosingCTA() {
    return (
        <section className="py-32 px-6 bg-neon-lime text-black border-y-8 border-black relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <h2 className="text-7xl md:text-[10rem] font-black italic leading-[0.8] uppercase tracking-tighter mb-12">
                    SOLO PARA <br />
                    <span className="text-white drop-shadow-[5px_5px_0px_#000]">GANADORES</span>
                </h2>

                <p className="text-2xl md:text-4xl font-bold max-w-3xl mx-auto mb-12 uppercase leading-tight">
                    No sé si brAIny es para ti. No trabajamos con cualquiera. Si prefieres seguir perdiendo dinero, no cliques aquí.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <Link href="/contacto">
                        <button className="bg-black text-white px-12 py-6 text-3xl font-black uppercase italic hover:bg-white hover:text-black transition-all shadow-[10px_10px_0px_rgba(0,0,0,0.3)] active:scale-95 w-full md:w-auto">
                            OPERAR AHORA
                        </button>
                    </Link>
                    <Link href="/contacto?ref=roi">
                        <button className="border-4 border-black px-12 py-6 text-2xl font-black uppercase hover:bg-black hover:text-white transition-all w-full md:w-auto">
                            AUDITORÍA ROI
                        </button>
                    </Link>
                </div>

                <p className="mt-12 text-sm font-black uppercase tracking-[0.5em] opacity-40">
                    ADVERTENCIA: AGENDA QUIRÚRGICA LIMITADA // SOLO 2 PLAZAS LIBRES ESTE MES
                </p>
            </div>

            {/* Decorative Stripes */}
            <div className="absolute top-0 right-0 w-64 h-full bg-black/5 -skew-x-12 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-full bg-black/5 skew-x-12 pointer-events-none" />
        </section>
    );
}
