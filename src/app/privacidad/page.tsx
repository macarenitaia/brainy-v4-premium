import Link from 'next/link';

export const metadata = {
    title: 'Política de Privacidad | brAIny_OS',
    description: 'Política de privacidad de brAIny_OS. Cómo recopilamos, usamos y protegemos tus datos.',
};

const sections = [
    {
        id: '01',
        title: 'Responsable del Tratamiento',
        content: 'brAIny_OS es el responsable del tratamiento de los datos personales recopilados a través de este sitio web. Puedes contactarnos a través del formulario de contacto disponible en /contacto.',
    },
    {
        id: '02',
        title: 'Datos que Recopilamos',
        content: 'Recopilamos únicamente los datos que tú nos proporcionas voluntariamente: nombre, dirección de correo electrónico, sector de actividad, servicio de interés y un brief descriptivo de tu proyecto. No recopilamos datos sin tu consentimiento explícito.',
    },
    {
        id: '03',
        title: 'Finalidad del Tratamiento',
        content: 'Los datos recopilados se utilizan exclusivamente para: (1) gestionar la relación comercial contigo como cliente potencial, (2) enviarte información relevante sobre nuestros servicios si lo has solicitado, y (3) mejorar la calidad de nuestros sistemas y procesos internos.',
    },
    {
        id: '04',
        title: 'Base Legal',
        content: 'El tratamiento de tus datos se basa en tu consentimiento explícito al cumplimentar y enviar nuestro formulario de contacto, así como en el interés legítimo de mantener una relación comercial contigo.',
    },
    {
        id: '05',
        title: 'Conservación de Datos',
        content: 'Conservamos tus datos durante el tiempo necesario para la finalidad para la que fueron recogidos. Si no se establece una relación comercial, los datos se eliminan a los 24 meses desde la última interacción.',
    },
    {
        id: '06',
        title: 'Tus Derechos',
        content: 'Tienes derecho a acceder, rectificar, suprimir, limitar el tratamiento, oponerte y solicitar la portabilidad de tus datos. Para ejercer cualquiera de estos derechos, contacta con nosotros a través del formulario de la web.',
    },
    {
        id: '07',
        title: 'Seguridad',
        content: 'Implementamos medidas técnicas y organizativas adecuadas para proteger tus datos contra accesos no autorizados, pérdida o destrucción accidental. Nuestros sistemas operan bajo infraestructura cifrada de nivel enterprise.',
    },
];

export default function PrivacidadPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-neon-lime selection:text-black">
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16">
                        <p className="text-xs font-mono uppercase tracking-[0.4em] text-neon-lime mb-4">Legal_Core / Privacidad</p>
                        <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter mb-8">
                            Política de<br />
                            <span className="text-neon-lime">Privacidad</span>
                        </h1>
                        <p className="text-white/40 font-bold text-lg italic">
                            Última actualización: Febrero 2026. Sin letra pequeña, sin trucos.
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
                        <Link href="/cookies" className="text-neon-lime font-black uppercase italic hover:underline tracking-widest text-sm">
                            → Política de Cookies
                        </Link>
                        <Link href="/terminos" className="text-white/40 font-black uppercase italic hover:text-white tracking-widest text-sm">
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
