'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, Eye, Microscope, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: 'la-guardiana',
        title: 'La Guardiana',
        subtitle: 'Filtrado y Agendado Quirúrgico',
        color: 'bg-neon-lime',
        desc: 'Tu competidor pierde leads por no responder en 5 minutos. La Guardiana los captura, los desguaza y los agenda en tu calendario mientras tú operas otros frentes. Esclaviza la IA para facturar mientas duermes.',
        icon: <ShieldCheck className="w-8 h-8" />,
        cta: 'Instalar Mi Guardiana'
    },
    {
        id: 'el-francotirador',
        title: 'El Francotirador',
        subtitle: 'Persuasión High-Ticket',
        color: 'bg-neon-pink',
        desc: '¿Cansado de "me lo tengo que pensar"? El Francotirador rebate objeciones con PNL avanzada y guía al cliente hasta el cierre. No es un chatbot, es tu mejor vendedor clonado en código.',
        icon: <Zap className="w-8 h-8" />,
        cta: 'Activar Francotirador'
    },
    {
        id: 'el-extintor',
        title: 'El Extintor',
        subtitle: 'Operativa sin Ruido',
        color: 'bg-white',
        desc: 'El soporte tradicional quema a tu equipo. El Extintor resuelve el 80% de dudas post-venta sin que tú te enteres. Recupera el 40% de tu jornada laboral hoy mismo.',
        icon: <Eye className="w-8 h-8" />,
        cta: 'Eliminar el Ruido'
    },
    {
        id: 'cirugia-digital',
        title: 'Cirugía Digital',
        subtitle: 'Infraestructura de Poder',
        color: 'bg-gray-400',
        desc: 'Basta de software genérico. Construimos sistemas deterministas que fuerzan tu negocio a escalar. Si no hay un ROI claro, no operamos. Pura ingeniería de dominación de mercado.',
        icon: <Microscope className="w-8 h-8" />,
        cta: 'Iniciar Cirugía'
    }
];

export default function ServiceTabs() {
    const [activeTab, setActiveTab] = useState(services[0].id);

    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-black italic mb-16 uppercase tracking-tighter">
                    Elige tu <span className="text-neon-lime">Arma de Venta</span>
                </h2>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Sidebar Tabs */}
                    <div className="lg:w-1/3 flex flex-row lg:flex-col gap-3 lg:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                        {services.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setActiveTab(s.id)}
                                className={`p-4 lg:p-6 border-2 lg:border-4 text-left transition-all flex items-center gap-3 lg:gap-4 whitespace-nowrap lg:whitespace-normal shrink-0 ${activeTab === s.id
                                    ? `border-white ${s.color} text-black lg:translate-x-4 shadow-[-5px_5px_0px_white] lg:shadow-[-10px_10px_0px_white]`
                                    : 'border-white/20 text-white/50 hover:border-white transition-all'
                                    }`}
                            >
                                <div className="font-black italic text-sm lg:text-xl uppercase leading-none">
                                    {s.title}
                                    <span className="hidden lg:block text-xs font-mono mt-1 opacity-60 tracking-widest">{s.subtitle}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-2/3 min-h-[350px] lg:min-h-[400px] border-4 border-white p-6 lg:p-12 relative overflow-hidden flex flex-col justify-between">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="relative z-10"
                            >
                                {services.find(s => s.id === activeTab)?.icon}
                                <p className="mt-8 text-3xl font-bold leading-tight max-w-xl">
                                    {services.find(s => s.id === activeTab)?.desc}
                                </p>
                                <Link
                                    href={`/servicios/${activeTab}`}
                                    className="mt-12 brutalist-button text-xl px-10 py-5 flex items-center gap-4"
                                >
                                    {services.find(s => s.id === activeTab)?.cta}
                                    <ArrowRight className="w-6 h-6" />
                                </Link>
                            </motion.div>
                        </AnimatePresence>

                        {/* Background Accent */}
                        <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-20 ${services.find(s => s.id === activeTab)?.color
                            }`} />
                    </div>
                </div>
            </div>
        </section>
    );
}
