'use client';

import { motion } from 'framer-motion';
import { Eye, Zap, ShieldCheck, Microscope, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        title: "La Guardiana",
        desc: "Gestiona tu calendario con mano de hierro. Negocia horas, reagenda citas y se asegura de que solo hables con quien merece tu tiempo.",
        icon: <ShieldCheck className="w-10 h-10" />,
        color: "bg-neon-lime"
    },
    {
        title: "El Francotirador",
        desc: "Un agente entrenado para persuadir. Detecta objeciones, usa tus mejores argumentos y no acepta un 'no' por respuesta.",
        icon: <Zap className="w-10 h-10" />,
        color: "bg-neon-pink"
    },
    {
        title: "El Extintor",
        desc: "Localiza pedidos y calma al cliente furioso antes de que escale el drama. Convierte quejas en 'gracias' sin que te enteres.",
        icon: <Eye className="w-10 h-10" />,
        color: "bg-white"
    },
    {
        title: "Cirugía Operativa",
        desc: "Si tu negocio tiene un nudo que te cuesta miles de euros al mes, construimos la navaja suiza exacta para cortarlo a medida.",
        icon: <Microscope className="w-10 h-10" />,
        color: "bg-gray-800"
    }
];

export default function Services() {
    return (
        <section className="py-24 px-6 bg-white/[0.02] relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter">
                    NUESTRO <span className="text-neon-lime">ARSENAL</span> AGÉNTICO
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { slug: 'la-guardiana', ...services[0] },
                        { slug: 'el-francotirador', ...services[1] },
                        { slug: 'el-extintor', ...services[2] },
                        { slug: 'cirugia-operativa', ...services[3] },
                    ].map((s, i) => (
                        <Link key={i} href={`/servicios/${s.slug}`}>
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative p-8 border-4 border-white aspect-square flex flex-col justify-between hover:bg-neon-lime hover:text-black transition-all duration-300 cursor-pointer"
                            >
                                <div className="z-10">
                                    <div className="mb-6 group-hover:scale-110 transition-transform">
                                        {s.icon}
                                    </div>
                                    <h3 className="text-3xl font-black leading-tight mb-4 uppercase italic">
                                        {s.title}
                                    </h3>
                                    <p className="text-sm font-bold opacity-80 uppercase tracking-tighter leading-tight">
                                        {s.desc}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 font-black uppercase text-xs mt-4 group-hover:translate-x-2 transition-transform">
                                    Ver Detalle <ArrowRight className="w-4 h-4" />
                                </div>
                                <div className="absolute top-4 right-4 text-xs font-mono opacity-20">
                    // AUTH_SEC_{i + 1}
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
