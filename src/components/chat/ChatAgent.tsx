'use client';

import { useChat } from '@ai-sdk/react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { useState, useEffect } from 'react';
import { chatStore } from '@/lib/chat-store';

export default function ChatAgent() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = chatStore.subscribe((state) => setIsOpen(state));
        return () => { unsubscribe(); };
    }, []);

    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: '/api/chat',
    });

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 z-[60] w-full md:w-[450px] h-full md:h-[600px] bg-black border-0 md:border-4 border-white flex flex-col shadow-none md:shadow-[10px_10px_0px_#C4FF00] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 md:p-4 border-b-4 border-white flex justify-between items-center bg-black text-white shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-neon-lime animate-pulse rounded-full" />
                                <span className="font-mono text-sm uppercase tracking-[0.2em] font-black">brAIny_CORE</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="hidden md:inline text-[10px] font-mono text-neon-lime opacity-80 animate-pulse">SYSTEM_ONLINE</span>
                                <button
                                    onClick={() => chatStore.setIsOpen(false)}
                                    aria-label="Cerrar chat"
                                    className="p-2 -mr-2 hover:text-neon-pink transition-colors group"
                                >
                                    <X className="w-8 h-8 md:w-6 md:h-6 group-hover:rotate-90 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 font-mono text-sm">
                            {messages.length === 0 && (
                                <div className="text-white/40 italic text-base leading-relaxed p-4 border-2 border-dashed border-white/10">
                                    "Hola. Soy el agente senior. No estoy aquí para charlar, estoy aquí para que tu negocio deje de perder dinero. ¿Empezamos?"
                                </div>
                            )}
                            {messages.map((m: any) => (
                                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={`max-w-[90%] md:max-w-[85%] p-4 border-2 font-mono ${m.role === 'user'
                                            ? 'bg-white text-black border-white'
                                            : 'bg-black text-neon-lime border-neon-lime shadow-[4px_4px_0px_rgba(196,255,0,0.2)]'
                                            }`}
                                    >
                                        <div className="text-[10px] uppercase opacity-50 mb-2 tracking-[0.2em] font-black">
                                            {m.role === 'user' ? 'AUTH_USER_001' : 'brAIny_CORE_v4.2'}
                                        </div>
                                        <div className="text-sm md:text-base leading-relaxed break-words">
                                            {m.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-center gap-2 text-neon-lime animate-pulse font-black italic uppercase text-xs">
                                    <div className="w-2 h-2 bg-neon-lime rounded-full" />
                                    Procesando estrategia...
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 md:p-6 border-t-4 border-neon-lime flex gap-2 bg-black shrink-0 pb-10 md:pb-6">
                            <input
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Escribe o ríndete..."
                                className="flex-1 bg-white/5 border-2 border-white/20 p-4 focus:border-neon-pink outline-none text-white font-bold placeholder:opacity-30"
                            />
                            <button
                                type="submit"
                                aria-label="Enviar mensaje"
                                className="bg-neon-lime px-6 text-black hover:bg-neon-pink hover:text-white transition-all active:scale-95"
                            >
                                <Send className="w-6 h-6" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="fixed bottom-6 right-6 z-50">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            onClick={() => chatStore.toggle()}
                            aria-label="Abrir asistente de ventas"
                            className="w-16 h-16 md:w-20 md:h-20 bg-neon-lime rounded-none flex items-center justify-center border-4 border-black hover:bg-neon-pink transition-all shadow-[5px_5px_0px_white] active:shadow-none active:translate-x-1 active:translate-y-1 group"
                        >
                            <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-black group-hover:scale-110 transition-transform" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
