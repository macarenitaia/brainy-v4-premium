'use client';

import { motion } from 'framer-motion';
import { MessageSquareCode, ArrowRight } from 'lucide-react';
import { chatStore } from '@/lib/chat-store';

export default function LiveDemoHook() {
    const handleOpenChat = () => {
        chatStore.setIsOpen(true);
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden bg-white text-black">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <div className="mb-8 p-6 bg-black text-neon-lime rotate-3 shadow-[10px_10px_0px_rgba(196,255,0,0.4)]">
                    <MessageSquareCode className="w-16 h-16" />
                </div>

                <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.9] mb-8 tracking-tighter">
                    ¿QUIERES VER <br />
                    <span className="text-neon-pink drop-shadow-[4px_4px_0px_#000]">CÓMO OPERA?</span>
                </h2>

                <p className="text-2xl md:text-3xl font-bold max-w-3xl mb-12 uppercase leading-tight">
                    Nuestro agente vive abajo a la derecha. Pídele que te haga una demostración de este servicio ahora mismo. No es teoría, es ingeniería en vivo.
                </p>

                <button
                    onClick={handleOpenChat}
                    className="bg-black text-white px-12 py-6 text-3xl font-black uppercase italic hover:bg-neon-lime hover:text-black transition-all shadow-[15px_15px_0px_rgba(0,0,0,0.2)] flex items-center gap-4"
                >
                    HABLAR CON EL AGENTE <ArrowRight className="w-8 h-8" />
                </button>
            </div>

            {/* Background Decals */}
            <div className="absolute top-10 right-10 text-9xl font-black opacity-5 select-none rotate-12">LIVE_DEMO</div>
            <div className="absolute bottom-10 left-10 text-9xl font-black opacity-5 select-none -rotate-12">brAIny_OS</div>
        </section>
    );
}
