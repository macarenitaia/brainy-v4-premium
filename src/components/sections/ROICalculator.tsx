'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Clock, Users } from 'lucide-react';

export default function ROICalculator() {
    const [employees, setEmployees] = useState(5);
    const [hoursPerWeek, setHoursPerWeek] = useState(10);
    const [hourlyRate, setHourlyRate] = useState(25);
    const efficiency = 0.8; // 80% optimization

    const monthlyWaste = employees * hoursPerWeek * 4 * hourlyRate;
    const monthlySavings = monthlyWaste * efficiency;
    const annualSavings = monthlySavings * 12;

    return (
        <section className="py-20 px-6 bg-black border-y-8 border-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-neon-lime text-neon-lime text-xs font-mono uppercase mb-6 tracking-widest">
                            <Calculator className="w-4 h-4" /> Financial_Auditor_Beta
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.8] mb-8 tracking-tighter">
                            AUDITORÍA <br />
                            <span className="text-neon-lime drop-shadow-[4px_4px_0px_#FF0055]"> DE FUGAS</span>
                        </h2>
                        <p className="text-2xl font-black uppercase mb-12 opacity-80 italic max-w-xl">
                            Calcula exactamente cuánto capital estás quemando en tareas que brAIny_OS mecaniza por ti.
                        </p>

                        <div className="space-y-12 max-w-md">
                            {/* Sliders */}
                            <div>
                                <label className="flex justify-between text-xs font-mono uppercase tracking-[0.3em] mb-4">
                                    <span className="flex items-center gap-2"><Users className="w-4 h-4" /> Nº de Empleados</span>
                                    <span className="text-neon-lime font-black">{employees} PAX</span>
                                </label>
                                <input
                                    type="range" min="1" max="100" value={employees}
                                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                                    title="Número de empleados"
                                    aria-label="Ajustar número de empleados"
                                    className="w-full h-2 bg-white/10 appearance-none cursor-pointer accent-neon-lime border border-white/20 rounded-none"
                                />
                            </div>

                            <div>
                                <label className="flex justify-between text-xs font-mono uppercase tracking-[0.3em] mb-4">
                                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Horas perdidas/semana/pax</span>
                                    <span className="text-neon-lime font-black">{hoursPerWeek} HORAS</span>
                                </label>
                                <input
                                    type="range" min="1" max="40" value={hoursPerWeek}
                                    onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                                    title="Horas perdidas por semana"
                                    aria-label="Ajustar horas perdidas por semana"
                                    className="w-full h-2 bg-white/10 appearance-none cursor-pointer accent-neon-lime border border-white/20 rounded-none"
                                />
                            </div>

                            <div>
                                <label className="flex justify-between text-xs font-mono uppercase tracking-[0.3em] mb-4">
                                    <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Coste laboral medio/hora</span>
                                    <span className="text-neon-lime font-black">{hourlyRate} €/H</span>
                                </label>
                                <input
                                    type="range" min="10" max="100" value={hourlyRate}
                                    onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                                    title="Coste laboral medio por hora"
                                    aria-label="Ajustar coste laboral medio por hora"
                                    className="w-full h-2 bg-white/10 appearance-none cursor-pointer accent-neon-lime border border-white/20 rounded-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-neon-lime blur-[150px] opacity-10 animate-pulse" />
                        <div className="relative bg-white text-black p-12 border-8 border-neon-lime shadow-[20px_20px_0px_white]">
                            <div className="mb-12">
                                <h3 className="text-xs font-mono font-black uppercase tracking-widest opacity-40 mb-2">Ahorro_Proyectado_Anual</h3>
                                <motion.div
                                    key={annualSavings}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-7xl md:text-8xl font-black italic uppercase leading-none tracking-tighter"
                                >
                                    {Math.round(annualSavings).toLocaleString()}€
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-2 gap-8 mb-12 border-t-4 border-black pt-8">
                                <div>
                                    <span className="block text-[10px] font-mono font-black opacity-40 uppercase">Ahorro_Mensual</span>
                                    <span className="text-3xl font-black">{Math.round(monthlySavings).toLocaleString()}€</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] font-mono font-black opacity-40 uppercase">Efectividad_OS</span>
                                    <span className="text-3xl font-black">92%</span>
                                </div>
                            </div>

                            <div className="p-4 bg-black text-white font-mono text-xs uppercase tracking-tighter leading-tight italic">
                                // Estos datos son una auditoría conservadora. El despliegue de agentes especializados suele superar el 300% de ROI en el primer trimestre.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
