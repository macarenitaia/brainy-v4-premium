'use client';

import { motion } from 'framer-motion';
import { Building2, Stethoscope, ShoppingBag, ArrowRight, Utensils } from 'lucide-react';
import Link from 'next/link';

const sectors = [
    {
        id: 'clinicas',
        title: 'Clínicas y Salud',
        icon: <Stethoscope className="w-12 h-12 text-neon-lime" />,
        problem: 'No-shows, gestión manual de citas y pérdida de presupuestos por falta de seguimiento.',
        solution: 'La Guardiana automatiza el agendado y el Francotirador cierra tratamientos High-Ticket mediante persuasión PNL.',
        cases: ['Agendado IA 24/7', 'Recuperación de pacientes', 'Soporte post-operatorio']
    },
    {
        id: 'inmobiliarias',
        title: 'Real Estate',
        icon: <Building2 className="w-12 h-12 text-neon-pink" />,
        problem: 'Leads fríos que desaparecen, portales saturados y dificultad para calificar compradores reales.',
        solution: 'Calificación instantánea de leads y tours virtuales asistidos por IA que filtran a los mirones.',
        cases: ['Calificación de leads', 'Gestión de visitas', 'Seguimiento de inversores']
    },
    {
        id: 'ecommerce',
        title: 'E-commerce & SaaS',
        icon: <ShoppingBag className="w-12 h-12 text-white" />,
        problem: 'Abandono de carrito, soporte repetitivo y falta de personalización en la venta masiva.',
        solution: 'El Francotirador recupera carritos con ofertas personalizadas y el Extintor resuelve dudas técnicas al instante.',
        cases: ['Recuperación de carritos', 'Onboarding asistido', 'Soporte global 24/7']
    },
    {
        id: 'hosteleria',
        title: 'Hostelería & Gastro',
        icon: <Utensils className="w-12 h-12 text-neon-lime" />,
        problem: 'Gestión ineficiente de reservas, rotación de personal y falta de fidelización tras la visita.',
        solution: 'Automatización de reservas por voz/WhatsApp y sistemas de fidelización que incentivan la repetición mediante IA.',
        cases: ['Agendado de mesas IA', 'Fidelización automática', 'Soporte de comandas']
    }
];

export default function Sectors() {
    return (
        <section className="py-32 px-6 bg-black border-t-4 border-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-none tracking-tighter mb-8">
                        Sectores de <span className="text-neon-lime">Operación</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-white/50 max-w-3xl italic font-medium leading-tight">
                        No somos una agencia de marketing. Somos una unidad de intervención que entra en el nudo de tu operativa sectorial para desatar el crecimiento.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {sectors.map((sector, i) => (
                        <motion.div
                            key={sector.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group"
                        >
                            <Link
                                href={`/sectores/${sector.id}`}
                                className="border-4 border-white p-8 hover:bg-white hover:text-black transition-all duration-500 flex flex-col justify-between h-full bg-black"
                            >
                                <div>
                                    <div className="mb-8 group-hover:scale-110 transition-transform duration-500">{sector.icon}</div>
                                    <h3 className="text-3xl font-black uppercase italic mb-6 leading-none">{sector.title}</h3>

                                    <div className="space-y-6 mb-8">
                                        <div>
                                            <div className="text-xs font-mono uppercase tracking-[0.3em] opacity-40 mb-2">Problema</div>
                                            <p className="font-bold leading-snug">{sector.problem}</p>
                                        </div>
                                        <div>
                                            <div className="text-xs font-mono uppercase tracking-[0.3em] opacity-40 mb-2">Solución brAIny</div>
                                            <p className="opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed">{sector.solution}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t-2 border-current/10 mt-auto">
                                    <ul className="space-y-3">
                                        {sector.cases.map((c, j) => (
                                            <li key={j} className="flex items-center gap-3 text-sm font-black uppercase italic">
                                                <ArrowRight className="w-4 h-4 text-neon-pink" />
                                                {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center md:text-left">
                    <Link href="/contacto" className="inline-block text-2xl font-black italic uppercase border-b-4 border-neon-lime hover:text-neon-lime transition-colors">
                        ¿No ves tu sector? Pregúntanos por tu caso específico →
                    </Link>
                </div>
            </div>
        </section>
    );
}
