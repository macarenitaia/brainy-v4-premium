'use client';

import { motion } from 'framer-motion';
import { Network, Database, Zap, Share2, Target, ShoppingCart, Link as LinkIcon } from 'lucide-react';

const ecosystemPoints = [
    {
        title: 'Conexión Inteligente',
        description: 'Unificamos tus herramientas aisladas para que compartan inteligencia en tiempo real. Un "cerebro" central que orquesta la ejecución.',
        icon: <LinkIcon className="w-8 h-8 text-neon-lime" />
    },
    {
        title: 'Datos Centralizados',
        description: 'Eliminamos silos de información. Una única fuente de verdad para toda tu organización, accesible y procesable por IA.',
        icon: <Database className="w-8 h-8 text-neon-pink" />
    },
    {
        title: 'Flujos Automatizados',
        description: 'Los datos fluyen sin fricción. Menos errores humanos, más velocidad operativa. Tu empresa trabajando a la velocidad de la luz.',
        icon: <Zap className="w-8 h-8 text-white" />
    }
];

const nodes = [
    { id: 'ventas', label: 'Ventas', icon: <Target className="w-6 h-6" />, x: 0, y: -120 },
    { id: 'marketing', label: 'Marketing', icon: <Share2 className="w-6 h-6" />, x: -120, y: 0 },
    { id: 'crm', label: 'CRM', icon: <Database className="w-6 h-6" />, x: 120, y: 0 },
    { id: 'erp', label: 'ERP', icon: <ShoppingCart className="w-6 h-6" />, x: 0, y: 120 },
];

export default function TheHub() {
    return (
        <section className="py-32 px-6 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
                    {/* Visual Hub Side */}
                    <div className="w-full lg:w-1/2 relative h-[350px] md:h-[500px] flex items-center justify-center overflow-hidden lg:overflow-visible scale-75 md:scale-100">
                        {/* Central HUB */}
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="z-20 w-24 h-24 md:w-32 md:h-32 bg-neon-lime text-black flex items-center justify-center border-4 border-black shadow-[10px_10px_0px_white]"
                        >
                            <span className="text-2xl md:text-3xl font-black italic">HUB</span>
                        </motion.div>

                        {/* Nodes */}
                        {nodes.map((node) => (
                            <motion.div
                                key={node.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                style={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '50%',
                                    marginLeft: node.x,
                                    marginTop: node.y
                                }}
                                className="group -translate-x-1/2 -translate-y-1/2"
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/5 border-2 border-white/20 flex flex-col items-center justify-center p-3 md:p-4 hover:border-neon-lime transition-all backdrop-blur-sm">
                                    <div className="mb-1 md:mb-2 text-white/40 group-hover:text-neon-lime transition-colors">
                                        {node.icon}
                                    </div>
                                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">{node.label}</span>
                                </div>

                                {/* Connection Line */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    className="absolute top-1/2 left-1/2 -z-10 h-1 bg-gradient-to-r from-neon-lime to-transparent origin-left"
                                    style={{
                                        width: Math.sqrt(node.x * node.x + node.y * node.y),
                                        rotate: Math.atan2(node.y, node.x) * (180 / Math.PI)
                                    }}
                                />
                            </motion.div>
                        ))}

                        {/* Background Pulsing Circles */}
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="absolute border border-white/5 rounded-full animate-ping pointer-events-none"
                                style={{
                                    width: i * 150,
                                    height: i * 150,
                                    animationDuration: `${i * 3}s`
                                }}
                            />
                        ))}
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-7xl font-black italic uppercase leading-none tracking-tighter mb-8">
                            Sincronía <br />
                            <span className="text-neon-pink">Absoluta</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-white/50 italic mb-8 md:mb-12 max-w-xl">
                            Tu empresa no necesita más herramientas. Necesita que las que ya tiene dejen de trabajar en solitario.
                        </p>

                        <div className="space-y-6 md:space-y-8">
                            {ecosystemPoints.map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="p-6 md:p-8 border-4 border-white/10 hover:border-white transition-all bg-white/5 group"
                                >
                                    <div className="flex items-center gap-4 md:gap-6 mb-4">
                                        <div className="p-2 md:p-3 bg-black border-2 border-white/20 group-hover:border-neon-lime transition-colors">
                                            {point.icon}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-black uppercase italic">{point.title}</h3>
                                    </div>
                                    <p className="text-base md:text-lg text-white/60 leading-relaxed font-medium">
                                        {point.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
