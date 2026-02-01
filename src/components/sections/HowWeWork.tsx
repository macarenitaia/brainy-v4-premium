'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, ArrowRight } from 'lucide-react';

const steps = [
    {
        title: 'Auditoría Quirúrgica',
        desc: 'No entramos a ciegas. Analizamos tus cuellos de botella, tus procesos más lentos y donde estás perdiendo dinero hoy mismo. Si no podemos aportarte un ROI claro, no te vendemos nada.',
        icon: <Search className="w-12 h-12 text-neon-lime" />,
        number: '01'
    },
    {
        title: 'Operación y Desarrollo',
        desc: 'Construimos tu Agente o Software a medida. Usamos el brAIny Manifesto como base para que el copy venda y la ingeniería sea determinista. Sin parches nimios.',
        icon: <PenTool className="w-12 h-12 text-neon-pink" />,
        number: '02'
    },
    {
        title: 'Despliegue y Control',
        desc: 'Integramos la solución en tu ecosistema. Tu equipo digital empieza a trabajar 24/7. Monitorizamos los resultados y ajustamos la puntería para que la facturación no deje de subir.',
        icon: <Rocket className="w-12 h-12 text-white" />,
        number: '03'
    }
];

export default function HowWeWork() {
    return (
        <section className="py-32 px-6 bg-white text-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-8xl font-black italic uppercase leading-[0.9] md:leading-[0.85] tracking-tighter">
                            Cómo <span className="text-neon-pink outline-text">Trabajamos</span>
                        </h2>
                    </div>
                    <p className="text-xl font-bold max-w-sm uppercase tracking-tight leading-tight">
                        Menos reuniones, más resultados. Un proceso vertical diseñado para negocios que no tienen tiempo que perder.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative p-8 border-4 border-black hover:bg-black hover:text-white transition-all duration-500"
                        >
                            <div className="absolute -top-6 -right-6 text-6xl font-black italic transition-colors group-hover:text-neon-lime">
                                {step.number}
                            </div>
                            <div className="mb-8">{step.icon}</div>
                            <h3 className="text-3xl font-black uppercase mb-4 italic leading-none">{step.title}</h3>
                            <p className="text-lg font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
