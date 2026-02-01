'use client';

import Image from 'next/image';

const techs = [
    { name: 'Google Antigravity', use: 'Orquestación de Agentes de Élite', color: 'border-neon-lime' },
    { name: 'Gemini 1.5 Pro', use: 'Razonamiento Multimodal Avanzado', color: 'border-white' },
    { name: 'Next.js 15', use: 'Frontend de Ultra-Alto Rendimiento', color: 'border-white' },
    { name: 'OpenAI GPT-4o', use: 'Cerebro de Procesamiento Lógico', color: 'border-neon-pink' },
    { name: 'Supabase', use: 'Memoria y RAG Vectorial', color: 'border-white' },
    { name: 'Google Cloud', use: 'Escalabilidad Global Determinista', color: 'border-white' }
];

export default function TechStack() {
    return (
        <section className="py-32 px-6 border-t-8 border-white bg-black overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-lime/5 blur-[150px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-pink/5 blur-[150px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-24 text-center lg:text-left">
                    <h2 className="text-6xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter mb-8">
                        Nuestra <span className="text-neon-lime">Armería</span> <br />
                        <span className="text-white">Técnica</span>
                    </h2>
                    <p className="text-2xl md:text-3xl text-white/40 font-bold max-w-2xl italic leading-tight">
                        No jugamos con código. Operamos con el ecosistema más avanzado de <span className="text-white">Google Antigravity</span> para que tu negocio sea imparable.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Logo Feature */}
                    <div className="lg:w-1/2 w-full order-2 lg:order-1">
                        <div className="relative border-8 border-white p-4 group overflow-hidden bg-white/5 shadow-[20px_20px_0px_rgba(196,255,0,0.2)]">
                            <img
                                src="/assets/google-ecosystem.png"
                                alt="Google Antigravity Ecosystem"
                                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-xl font-black italic uppercase tracking-widest text-neon-lime">Ecosistema Certificado Antigravity</p>
                            </div>
                        </div>
                    </div>

                    {/* Master Grid */}
                    <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-4 order-1 lg:order-2">
                        {techs.map((tech, i) => (
                            <div
                                key={i}
                                className={`p-6 border-2 border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 group cursor-default ${tech.color.replace('border-', 'hover:border-')}`}
                            >
                                <div className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 mb-3 group-hover:text-black/60 transition-colors">Tecnología</div>
                                <div className="text-2xl font-black uppercase italic mb-2 leading-none group-hover:translate-x-1 transition-transform">{tech.name}</div>
                                <div className="text-sm font-bold opacity-50 group-hover:opacity-100 leading-tight transition-opacity">{tech.use}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
