import Link from 'next/link';

export const metadata = {
    title: 'Política de Cookies | brAIny_OS',
    description: 'Política de cookies de brAIny_OS.',
};

const sections = [
    {
        id: '01',
        title: 'Qué son las Cookies',
        content: 'Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo. Permiten que el sitio recuerde tus preferencias y mejora tu experiencia de navegación.',
    },
    {
        id: '02',
        title: 'Cookies que Utilizamos',
        content: 'Utilizamos cookies estrictamente necesarias para el funcionamiento del sitio (sesión, preferencias de idioma), cookies analíticas anónimas para medir el rendimiento de las páginas, y cookies de funcionalidad para recordar tus elecciones.',
    },
    {
        id: '03',
        title: 'Cookies de Terceros',
        content: 'Podemos integrar herramientas de terceros (como Google Analytics) que establecen sus propias cookies. Estas se rigen por las políticas de privacidad de cada proveedor. Puedes optar por no participar en cualquier momento.',
    },
    {
        id: '04',
        title: 'Gestión de Cookies',
        content: 'Puedes controlar y/o eliminar las cookies desde la configuración de tu navegador. Ten en cuenta que deshabilitar ciertas cookies puede afectar al funcionamiento del sitio web.',
    },
    {
        id: '05',
        title: 'Actualizaciones',
        content: 'Esta política puede actualizarse periódicamente. Te recomendamos revisarla con regularidad para estar informado de cualquier cambio.',
    },
];

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-neon-lime selection:text-black">
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16">
                        <p className="text-xs font-mono uppercase tracking-[0.4em] text-neon-lime mb-4">Legal_Core / Cookies</p>
                        <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter mb-8">
                            Política de<br />
                            <span className="text-neon-lime">Cookies</span>
                        </h1>
                        <p className="text-white/40 font-bold text-lg italic">
                            Última actualización: Febrero 2026. Sin rastreo invasivo.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {sections.map((s) => (
                            <div key={s.id} className="border-l-4 border-neon-lime pl-8 py-2">
                                <div className="text-xs font-mono text-neon-lime/60 tracking-widest mb-2">// [{s.id}]</div>
                                <h2 className="text-2xl font-black uppercase italic mb-4">{s.title}</h2>
                                <p className="text-white/60 font-bold leading-relaxed">{s.content}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row gap-6">
                        <Link href="/privacidad" className="text-white/40 font-black uppercase italic hover:text-white tracking-widest text-sm">
                            → Política de Privacidad
                        </Link>
                        <Link href="/terminos" className="text-neon-lime font-black uppercase italic hover:underline tracking-widest text-sm">
                            → Términos y Condiciones
                        </Link>
                        <Link href="/" className="text-white/40 font-black uppercase italic hover:text-white tracking-widest text-sm ml-auto">
                            ← Volver al Inicio
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
