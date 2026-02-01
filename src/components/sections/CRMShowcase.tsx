'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, MessageSquare, Calendar, Users, Receipt, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const screenshots = [
    {
        id: 'dashboard',
        title: 'Panel de Control Único',
        desc: 'Visualización en tiempo real de toda tu operativa. Ocupación, ventas, cancelaciones y reprogramaciones bajo un mismo mando determinista.',
        src: '/assets/crm/dashboard.png',
        icon: <LayoutDashboard className="w-6 h-6" />
    },
    {
        id: 'whatsapp',
        title: 'Secretaría IA WhatsApp',
        desc: 'Nuestra IA gestiona conversaciones reales, agenda citas y envía recordatorios automáticos sin intervención humana. El fin de las llamadas perdidas.',
        src: '/assets/crm/chat-whatsapp.png',
        icon: <MessageSquare className="w-6 h-6" />
    },
    {
        id: 'calendar',
        title: 'Agenda Inteligente',
        desc: 'Sincronización total. La IA rellena los huecos vacíos y reorganiza el calendario optimizando el tiempo de los profesionales.',
        src: '/assets/crm/calendar.png',
        icon: <Calendar className="w-6 h-6" />
    },
    {
        id: 'patients',
        title: 'Base de Datos Activa',
        desc: 'Fichas automáticas con historial completo. brAIny recuerda cada detalle de tus clientes para una atención hiper-personalizada.',
        src: '/assets/crm/patients.png',
        icon: <Users className="w-6 h-6" />
    },
    {
        id: 'billing',
        title: 'Control Financiero',
        desc: 'Gestión de facturación, pagos pendientes y previsiones de ingresos. La rentabilidad de tu negocio medida al céntimo.',
        src: '/assets/crm/billing.png',
        icon: <Receipt className="w-6 h-6" />
    }
];

export default function CRMShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-32 px-6 bg-white text-black overflow-hidden border-y-8 border-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left: Content */}
                    <div className="lg:w-1/3">
                        <div className="mb-12">
                            <span className="bg-neon-lime text-black px-4 py-2 font-black uppercase text-xs tracking-widest mb-6 inline-block">
                                Evidencia Operativa
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none tracking-tighter mb-8">
                                brAIny <br />
                                <span className="text-neon-pink">Interface</span>
                            </h2>
                            <p className="text-xl font-bold italic opacity-70">
                                No es humo. Es software real funcionando ahora mismo en negocios de élite. Así es como se ve el control total.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {screenshots.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-full p-6 text-left border-4 transition-all flex items-center gap-4 ${activeIndex === index
                                        ? 'border-black bg-black text-white translate-x-4 shadow-[-10px_10px_0px_#C4FF00]'
                                        : 'border-black/10 hover:border-black'
                                        }`}
                                >
                                    <div className={activeIndex === index ? 'text-neon-lime' : 'text-black/30'}>
                                        {item.icon}
                                    </div>
                                    <span className="font-black uppercase tracking-tight text-lg">{item.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Preview */}
                    <div className="lg:w-2/3 relative group">
                        <div className="absolute inset-0 bg-neon-lime blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity" />

                        <div className="relative border-8 border-black bg-black shadow-[20px_20px_0px_rgba(0,0,0,0.1)] overflow-hidden aspect-video">
                            <div className="absolute top-0 left-0 w-full bg-black p-3 border-b-4 border-white/20 flex items-center gap-2 z-20">
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                </div>
                                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-4">
                                    brAIny_OS_Dashboard / {screenshots[activeIndex].id}.exe
                                </div>
                            </div>

                            <div className="relative w-full h-full pt-10">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={screenshots[activeIndex].src}
                                        alt={screenshots[activeIndex].title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                            </div>

                            {/* Floating Info Box */}
                            <motion.div
                                key={`info-${activeIndex}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute bottom-8 left-8 right-8 bg-white border-4 border-black p-6 z-30 shadow-[10px_10px_0px_#FF0055]"
                            >
                                <p className="font-black uppercase italic leading-tight text-xl">
                                    {screenshots[activeIndex].desc}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 p-8 border-4 border-dashed border-black/20 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-xl font-bold italic opacity-60 max-w-2xl">
                        Este sistema se adapta a Hostelería, Inmobiliaria o Clínicas. Es tu secretaria inteligente 24/7, agendando, cobrando y fidelizando mientras tú descansas.
                    </p>
                    <button className="brutalist-button px-10 py-5 text-xl flex items-center gap-4 group">
                        SOLICITAR DEMO EN VIVO
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
