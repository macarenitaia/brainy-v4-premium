import { notFound } from 'next/navigation';
import ServiceHero from '@/components/sections/ServiceHero';
import ServiceConflict from '@/components/sections/ServiceConflict';
import LiveDemoHook from '@/components/sections/LiveDemoHook';
import ClosingCTA from '@/components/sections/ClosingCTA';
import CRMShowcase from '@/components/sections/CRMShowcase';
import { sectors } from '@/lib/sectors';
import { ArrowRight } from 'lucide-react';

export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const sector = sectors[slug as keyof typeof sectors];

    if (!sector) notFound();

    return (
        <main className="min-h-screen bg-black text-white selection:bg-neon-lime selection:text-black">
            {/* HERO SECTION - Sector Identity */}
            <ServiceHero
                title={sector.title}
                hook={sector.hook}
                icon={sector.icon}
                accentColor={sector.accentColor}
            />

            {/* CONFLICT SECTION - Sector Pain Points */}
            <ServiceConflict
                title={sector.conflict.title}
                problem={sector.conflict.problem}
                points={sector.conflict.points}
            />

            {/* SOLUTION SECTION - Sector brAIny Implementation */}
            <section className="py-24 px-6 bg-white text-black overflow-hidden relative">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.9] mb-8 tracking-tighter">
                            IMPLEMENTACIÓN <br />
                            <span className="text-neon-pink drop-shadow-[4px_4px_0px_#000]">TÁCTICA</span>
                        </h2>
                        <h3 className="text-3xl font-black uppercase mb-6">{sector.solution.title}</h3>
                        <p className="text-2xl font-bold mb-12 italic opacity-80">
                            {sector.solution.description}
                        </p>

                        <div className="space-y-4">
                            {sector.solution.benefits.map((benefit: string, i: number) => (
                                <div key={i} className="flex items-start gap-4 p-4 border-l-8 border-black bg-black/5">
                                    <ArrowRight className="w-8 h-8 shrink-0" />
                                    <p className="text-xl font-black uppercase text-black">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className={`absolute inset-0 ${sector.accentColor.replace('text-', 'bg-')} blur-[100px] opacity-20`} />
                        <div className="relative border-8 border-black p-12 bg-white rotate-2 hover:rotate-0 transition-transform cursor-default">
                            <div className="flex justify-center mb-10">
                                {sector.icon}
                            </div>
                            <div className="space-y-4 font-mono font-bold text-sm uppercase">
                                <div className="p-2 bg-black text-white w-fit tracking-tighter">SECTOR_STATUS: OPTIMIZING</div>
                                <div className="p-2 border-2 border-black w-fit tracking-tighter">MODULE: brAIny_CORE_v4</div>
                                <div className="p-2 border-2 border-black w-fit tracking-tighter">EFFICIENCY_GAIN: +45%</div>
                                <div className="p-2 border-2 border-black w-fit tracking-tighter">ROI: DETERMINISTIC</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EVIDENCE SECTION - Real CRM Showcase */}
            <CRMShowcase />

            {/* LIVE DEMO SECTION - Proof for the Sector */}
            <LiveDemoHook />

            {/* CLOSING SECTION - The Final Step */}
            <div id="contacto">
                <ClosingCTA />
            </div>
        </main>
    );
}
