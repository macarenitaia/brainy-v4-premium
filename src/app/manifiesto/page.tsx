'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Microscope, Target } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

const principles = [
    {
        title: 'IA Determinista',
        desc: 'Odiamos las alucinaciones. Nuestros sistemas no "inventan". Cumplen órdenes basadas en tus protocolos de negocio con precisión quirúrgica.',
        icon: <Target className="w-8 h-8 text-neon-lime" />
    },
    {
        title: 'La Verdad te hará rico',
        desc: 'No vendemos humo. Si tus procesos son un desastre, la IA solo los hará más rápidos. Primero operamos el nudo, luego automatizamos.',
        icon: <Zap className="w-8 h-8 text-neon-pink" />
    },
    {
        title: 'Anti-Soporte Humano',
        desc: 'Creemos que el 80% del soporte humano es una señal de fallo en el sistema. El Extintor lo resuelve antes de que el cliente se dé cuenta.',
        icon: <Shield className="w-8 h-8 text-white" />
    }
];

export default function Manifiesto() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-neon-lime selection:text-black">
            <Navbar />

            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border-l-8 border-neon-lime pl-8 mb-20"
                    >
                        <h1 className="text-6xl md:text-9xl font-black italic uppercase leading-[0.85] tracking-tighter mb-8">
                            El <span className="text-neon-lime">Manifiesto</span> brAIny
                        </h1>
                        <p className="text-2xl md:text-4xl font-bold italic opacity-80 leading-tight">
                            "Si usas la IA como un juguete, obtendrás resultados de juguete. <br /> Nosotros la usamos como un bisturí."
                        </p>
                    </motion.div>

                    <div className="space-y-24">
                        <div className="prose prose-invert prose-2xl max-w-none font-light leading-relaxed">
                            <p>
                                El mundo está lleno de agencias que "hacen IA" pegando un chat de GPT en una web. Eso no es ingeniería, es decoración.
                            </p>
                            <p className="font-bold text-white uppercase italic">
                                brAIny nació para los que odian la ineficiencia.
                            </p>
                            <p>
                                Creemos en la <span className="text-neon-pink font-black">Cirugía Operativa</span>. Un proceso vertical donde entramos en las tripas de tu empresa, identificamos el nudo de fricción que te está desangrando (leads que mueren, soporte que quema, agendas vacías) y lo cortamos.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 py-12 border-y-4 border-white/10">
                            {principles.map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="space-y-6"
                                >
                                    <div className="p-4 bg-white/5 inline-block border-2 border-white/20">{p.icon}</div>
                                    <h3 className="text-2xl font-black uppercase italic">{p.title}</h3>
                                    <p className="text-lg opacity-60 leading-relaxed">{p.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-neon-lime p-12 text-black">
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none mb-8">
                                Nuestra Promesa Determinista
                            </h2>
                            <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl leading-tight">
                                No te cobraremos por "intentar" cosas. Te cobraremos por implementar sistemas que agendan, venden y resuelven 24/7 sin pedir vacaciones ni aumento de sueldo.
                            </p>
                            <Link href="/contacto">
                                <button className="bg-black text-white text-2xl font-black px-12 py-6 uppercase italic hover:bg-white hover:text-black transition-colors flex items-center gap-4">
                                    QUIERO ESTO EN MI EQUIPO <ArrowRight />
                                </button>
                            </Link>
                        </div>

                        <div className="py-20 text-center">
                            <p className="text-xl font-mono opacity-30 uppercase tracking-[0.5em]">
                                brAIny Unit © 2026 - No mediocrity allowed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
