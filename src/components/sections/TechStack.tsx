'use client';

const techs = [
    {
        name: 'Google Antigravity',
        use: 'Orquestación de Agentes de Élite',
        color: 'hover:border-neon-lime hover:bg-neon-lime',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
        ),
    },
    {
        name: 'Gemini 1.5 Pro',
        use: 'Razonamiento Multimodal Avanzado',
        color: 'hover:border-white hover:bg-white',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        name: 'Next.js 15',
        use: 'Frontend de Ultra-Alto Rendimiento',
        color: 'hover:border-white hover:bg-white',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.533 5.444 20.319 1.657 15.97.257c-.765-.246-1.566-.415-2.485-.52-.182-.02-1.533-.034-1.913-.037z" />
            </svg>
        ),
    },
    {
        name: 'OpenAI GPT-4o',
        use: 'Cerebro de Procesamiento Lógico',
        color: 'hover:border-neon-pink hover:bg-neon-pink',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.856 19.9a4.494 4.494 0 0 1-6.256-1.597zM2.87 7.68a4.476 4.476 0 0 1 2.34-1.97V11.3a.762.762 0 0 0 .388.677l5.815 3.354-2.02 1.168a.076.076 0 0 1-.071 0L4.88 13.726A4.494 4.494 0 0 1 2.87 7.68zm16.618 3.853l-5.843-3.37 2.02-1.164a.076.076 0 0 1 .071 0l4.445 2.567a4.494 4.494 0 0 1-.676 8.105V11.33a.796.796 0 0 0-.017-.8zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.97 9.012V6.68a.07.07 0 0 1 .028-.061L14.44 4.06a4.494 4.494 0 0 1 6.657 4.655zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.84a4.494 4.494 0 0 1 7.375-3.448l-.142.08-4.778 2.758a.795.795 0 0 0-.392.682zm1.097-2.365l2.602-1.5 2.607 1.5v2.996l-2.607 1.5-2.602-1.5z" />
            </svg>
        ),
    },
    {
        name: 'Supabase',
        use: 'Memoria y RAG Vectorial',
        color: 'hover:border-neon-lime hover:bg-neon-lime',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.101 12.888.701 14.1 1.748 14.1h9.91l.008.864c.015.986 1.26 1.41 1.874.637l9.262-11.652c.663-.838.063-2.05-.984-2.05h-9.91l-.008-.863z" />
            </svg>
        ),
    },
    {
        name: 'Google Cloud',
        use: 'Escalabilidad Global Determinista',
        color: 'hover:border-white hover:bg-white',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.813 6.813 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.32 9.32 0 0 0-8.825-6.893zm0 2.033a7.3 7.3 0 0 1 6.691 4.45l.179.448.179-.09a6.836 6.836 0 0 1 2.977-.697c3.565.042 6.154 3.686 5 7.09-.466 1.382-1.417 2.502-2.668 3.146l-.021.013H6.81a4.797 4.797 0 0 1-2.852-.938l-.024-.013.015-.056a4.747 4.747 0 0 1-.262-5.829 5.085 5.085 0 0 1 2.417-1.821l.34-.131-.012-.36-.011-.195a7.3 7.3 0 0 1 7.773-5.017z" />
            </svg>
        ),
    },
];

export default function TechStack() {
    return (
        <section className="py-32 px-6 border-t-8 border-white bg-black overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-lime/5 blur-[150px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-pink/5 blur-[150px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-24 text-center lg:text-left">
                    <h2 className="text-6xl md:text-9xl font-black italic uppercase leading-[0.8] tracking-tighter mb-8">
                        Nuestra <span className="text-neon-lime">Armería</span> <br />
                        <span className="text-white">Técnica</span>
                    </h2>
                    <p className="text-2xl md:text-3xl text-white/40 font-bold max-w-2xl italic leading-tight">
                        No jugamos con código. Operamos con el ecosistema más avanzado de{' '}
                        <span className="text-white">Google Antigravity</span> para que tu negocio sea imparable.
                    </p>
                </div>

                {/* Icon-by-icon grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {techs.map((tech, i) => (
                        <div
                            key={i}
                            className={`group p-6 md:p-8 border-2 border-white/10 bg-white/5 transition-all duration-300 cursor-default ${tech.color} hover:text-black`}
                        >
                            {/* Icon */}
                            <div className="mb-5 text-neon-lime group-hover:text-black transition-colors duration-300">
                                {tech.icon}
                            </div>
                            {/* Name */}
                            <div className="text-lg md:text-2xl font-black uppercase italic mb-2 leading-none group-hover:translate-x-1 transition-transform">
                                {tech.name}
                            </div>
                            {/* Description */}
                            <div className="text-xs md:text-sm font-bold opacity-50 group-hover:opacity-80 leading-tight transition-opacity">
                                {tech.use}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
