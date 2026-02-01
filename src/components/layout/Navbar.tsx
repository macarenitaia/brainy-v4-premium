'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Servicios', href: '/servicios' },
        { name: 'Sectores', href: '/sectores' },
        { name: 'Manifiesto', href: '/manifiesto' },
        { name: 'Contacto', href: '/contacto' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 glass py-4">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl md:text-3xl font-black italic tracking-tighter text-white group">
                    br<span className="text-neon-lime group-hover:text-white transition-colors">AI</span>ny
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-10 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="nav-link-brutal"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button className="bg-neon-lime text-black px-6 py-2 font-black uppercase text-xs tracking-widest hover:bg-white transition-all border-2 border-transparent hover:border-black active:scale-95 shadow-[4px_4px_0px_#FF0055] hover:shadow-none translate-y-0 hover:translate-y-[2px] hover:translate-x-[2px]">
                        Auditoría
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2 hover:bg-white/10 transition-colors"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-black border-b-4 border-white p-6 flex flex-col gap-6 md:hidden"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-black uppercase tracking-widest text-white hover:text-neon-lime"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <button className="brutalist-button text-lg py-4">
                            Auditoría
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
