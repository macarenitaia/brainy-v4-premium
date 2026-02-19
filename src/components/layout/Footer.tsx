'use client';

import Link from 'next/link';
import { Bot, Mail, Shield, Zap } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t-8 border-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <Bot className="w-10 h-10 text-neon-lime" />
                            <span className="text-3xl font-black uppercase italic tracking-tighter">
                                brAIny<span className="text-neon-lime">_OS</span>
                            </span>
                        </div>
                        <p className="text-lg font-bold italic text-white/50 leading-tight mb-8">
                            Infraestructura de dominación operativa mediante IA. Determinismo, rentabilidad y escalado sin fricciones.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-neon-lime hover:text-black hover:border-neon-lime transition-all cursor-pointer">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-neon-pink hover:text-black hover:border-neon-pink transition-all cursor-pointer">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                                <Shield className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-1">
                        <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-8">Sistema</h4>
                        <ul className="space-y-4 font-black uppercase italic text-xl">
                            <li><Link href="/servicios" className="hover:text-neon-lime transition-colors">Servicios</Link></li>
                            <li><Link href="/sectores" className="hover:text-neon-lime transition-colors">Sectores</Link></li>
                            <li><Link href="/manifiesto" className="hover:text-neon-lime transition-colors">Manifiesto</Link></li>
                            <li><Link href="/servicios" className="hover:text-neon-lime transition-colors">Operativa</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="md:col-span-1">
                        <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-8">Legal_Core</h4>
                        <ul className="space-y-4 font-black uppercase italic text-xl">
                            <li><Link href="/privacidad" className="hover:text-neon-pink transition-colors">Privacidad</Link></li>
                            <li><Link href="/cookies" className="hover:text-neon-pink transition-colors">Cookies</Link></li>
                            <li><Link href="/terminos" className="hover:text-neon-pink transition-colors">Términos</Link></li>
                        </ul>
                    </div>

                    {/* Status */}
                    <div className="md:col-span-1">
                        <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-8">Status_Monitor</h4>
                        <div className="space-y-4">
                            <div className="p-4 border-2 border-white/10 bg-white/5 font-mono text-sm">
                                <div className="flex justify-between mb-2">
                                    <span className="opacity-40 uppercase">Agents_Online:</span>
                                    <span className="text-neon-lime">1,248</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="opacity-40 uppercase">System_State:</span>
                                    <span className="text-neon-lime">OPTIMAL</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="opacity-40 uppercase">ROI_AVG:</span>
                                    <span className="text-neon-pink">+340%</span>
                                </div>
                            </div>
                            <Link href="/contacto?ref=roi" className="block w-full">
                                <button className="w-full bg-white text-black p-4 font-black uppercase italic hover:bg-neon-lime transition-all shadow-[-5px_5px_0px_#C4FF00] hover:shadow-[-10px_10px_0px_#C4FF00]">
                                    Iniciar Auditoría IA
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-xs opacity-30 uppercase tracking-widest">
                    <div>© 2026 brAIny_OS. Todos los derechos reservados bajo protocolo de seguridad.</div>
                    <div className="flex gap-8">
                        <div>Built_by: Antigravity_Specialists</div>
                        <div>Vers: v4.2.0-STABLE</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
