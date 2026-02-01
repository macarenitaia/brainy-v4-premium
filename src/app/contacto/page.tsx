'use client';
import { useSearchParams } from 'next/navigation';
import { Send, ShieldCheck, Zap, Microscope } from 'lucide-react';
import ROICalculator from '@/components/sections/ROICalculator';
import { Suspense } from 'react';

function ContactContent() {
    const searchParams = useSearchParams();
    const showROI = searchParams.get('ref') === 'roi';

    return (
        <main className="min-h-screen bg-black text-white selection:bg-neon-lime selection:text-black">
            {showROI && <ROICalculator />}

            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                    {/* Left: Branding */}
                    <div>
                        <h1 className="text-6xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter mb-12">
                            ORDENAR <br />
                            <span className="text-neon-lime drop-shadow-[4px_4px_0px_#FF0055]"> OPERACIÓN</span>
                        </h1>
                        <p className="text-2xl md:text-3xl font-black uppercase mb-12 max-w-xl">
                            No estamos aquí para charlar sobre marketing. Estamos aquí para <span className="text-neon-pink italic">mecanizar tu crecimiento</span>.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <ShieldCheck className="w-10 h-10 text-neon-lime shrink-0" />
                                <div>
                                    <h3 className="text-xl font-black uppercase italic mb-2">Lead_Filter_v4</h3>
                                    <p className="opacity-50 font-bold leading-snug">Cada lead será desguazado y calificado antes de llegar a ti.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <Zap className="w-10 h-10 text-neon-pink shrink-0" />
                                <div>
                                    <h3 className="text-xl font-black uppercase italic mb-2">Persuasion_Engine</h3>
                                    <p className="opacity-50 font-bold leading-snug">Sistemas que fuerzan cierres psicológicos 24/7.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <Microscope className="w-10 h-10 text-white shrink-0" />
                                <div>
                                    <h3 className="text-xl font-black uppercase italic mb-2">ROI_Audit</h3>
                                    <p className="opacity-50 font-bold leading-snug">Si no hay un retorno determinista, no operamos.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-neon-lime blur-[120px] opacity-10" />

                        <form className="relative bg-black border-4 border-white p-8 md:p-12 shadow-[15px_15px_0px_#C4FF00]">
                            <div className="space-y-8">
                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-widest opacity-40 mb-3">Identidad_Nombre</label>
                                    <input
                                        type="text"
                                        placeholder="ISRA BRAVO (EJEMPLO)"
                                        className="w-full bg-white/5 border-2 border-white/20 p-4 focus:border-neon-lime outline-none font-black uppercase text-xl placeholder:text-white/10"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-widest opacity-40 mb-3">Canal_Email</label>
                                    <input
                                        type="email"
                                        placeholder="ESTRATEGIA@DOMINIO.COM"
                                        className="w-full bg-white/5 border-2 border-white/20 p-4 focus:border-neon-lime outline-none font-black uppercase text-xl placeholder:text-white/10"
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-xs font-mono uppercase tracking-widest opacity-40 mb-3">Sector_Nicho</label>
                                        <select
                                            title="Seleccionar Sector"
                                            className="w-full bg-white/5 border-2 border-white/20 p-4 focus:border-neon-lime outline-none font-black uppercase text-lg text-white appearance-none cursor-pointer"
                                        >
                                            <option className="bg-black">Clínica / Salud</option>
                                            <option className="bg-black">Inmobiliaria</option>
                                            <option className="bg-black">E-commerce / SaaS</option>
                                            <option className="bg-black">Hostelería</option>
                                            <option className="bg-black">Otro (A medida)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono uppercase tracking-widest opacity-40 mb-3">Arma_Requerida</label>
                                        <select
                                            title="Seleccionar Tipo de Agente"
                                            className="w-full bg-white/5 border-2 border-white/20 p-4 focus:border-neon-lime outline-none font-black uppercase text-lg text-white appearance-none cursor-pointer"
                                        >
                                            <option className="bg-black">La Guardiana</option>
                                            <option className="bg-black">El Francotirador</option>
                                            <option className="bg-black">El Extintor</option>
                                            <option className="bg-black">OS Completo</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-widest opacity-40 mb-3">Brief_Operativo</label>
                                    <textarea
                                        rows={4}
                                        placeholder="¿QUÉ DOLOR ESPECÍFICO ESTÁ QUEMANDO TU FACTURACIÓN?"
                                        className="w-full bg-white/5 border-2 border-white/20 p-4 focus:border-neon-lime outline-none font-black uppercase text-xl placeholder:text-white/10"
                                    ></textarea>
                                </div>

                                <button type="button" className="w-full bg-neon-lime text-black py-6 text-2xl font-black uppercase italic hover:bg-neon-pink hover:text-white transition-all shadow-[10px_10px_0px_white] active:shadow-none active:translate-x-1 active:translate-y-1 flex items-center justify-center gap-4">
                                    INICIAR DESPLIEGUE <Send className="w-8 h-8" />
                                </button>

                                <p className="text-[10px] font-mono text-center opacity-30 uppercase tracking-[0.2em]">
                                    // Al pulsar aceptas que tu negocio sea optimizado sin piedad.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default function ContactoPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <ContactContent />
        </Suspense>
    );
}
