import Link from 'next/link';

export const metadata = {
    title: 'Términos y Condiciones | brAIny_OS',
    description: 'Términos y condiciones de contratación de servicios brAIny_OS.',
};

const sections = [
    {
        id: '01',
        title: 'Aceptación de los Términos',
        content: 'Al acceder y utilizar este sitio web, o al contratar cualquiera de nuestros servicios, aceptas quedar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte, no debes utilizar nuestros servicios.',
    },
    {
        id: '02',
        title: 'Descripción de los Servicios',
        content: 'brAIny_OS ofrece servicios de implementación de sistemas de inteligencia artificial para automatización comercial, captación de leads y optimización de procesos empresariales. La descripción detallada de cada servicio se establece en la propuesta comercial específica.',
    },
    {
        id: '03',
        title: 'Proceso de Contratación',
        content: 'La contratación se formaliza mediante la aceptación de una propuesta comercial firmada por ambas partes. El envío del formulario de contacto no constituye ningún compromiso contractual, sino únicamente el inicio de una conversación comercial.',
    },
    {
        id: '04',
        title: 'Propiedad Intelectual',
        content: 'Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos, código y diseño, es propiedad de brAIny_OS y está protegido por las leyes de propiedad intelectual vigentes. Queda prohibida su reproducción sin autorización expresa.',
    },
    {
        id: '05',
        title: 'Limitación de Responsabilidad',
        content: 'brAIny_OS no será responsable de daños derivados del uso o imposibilidad de uso del sitio web o de los servicios, incluyendo pérdidas de beneficios, datos o interrupción del negocio, salvo en casos de dolo o negligencia grave.',
    },
    {
        id: '06',
        title: 'Garantías de Rendimiento',
        content: 'Los resultados mostrados en este sitio son ejemplos reales de clientes anteriores. Sin embargo, los resultados pueden variar en función de múltiples factores externos. No garantizamos resultados específicos en términos de ingresos o conversiones.',
    },
    {
        id: '07',
        title: 'Legislación Aplicable',
        content: 'Estos términos se rigen por la legislación española. Para cualquier controversia derivada del uso del sitio o de la relación contractual, ambas partes se someten a los juzgados y tribunales del domicilio social de brAIny_OS.',
    },
];

export default function TerminosPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-neon-lime selection:text-black">
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16">
                        <p className="text-xs font-mono uppercase tracking-[0.4em] text-neon-lime mb-4">Legal_Core / Términos</p>
                        <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter mb-8">
                            Términos y<br />
                            <span className="text-neon-lime">Condiciones</span>
                        </h1>
                        <p className="text-white/40 font-bold text-lg italic">
                            Última actualización: Febrero 2026. Sin letra pequeña.
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
                        <Link href="/cookies" className="text-white/40 font-black uppercase italic hover:text-white tracking-widest text-sm">
                            → Política de Cookies
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
